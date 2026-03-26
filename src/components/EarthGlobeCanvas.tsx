"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function hash2(x: number, y: number) {
  // deterministic pseudo-random [0,1)
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function valueNoise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi);
  const b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1);
  const d = hash2(xi + 1, yi + 1);
  const ab = a + (b - a) * u;
  const cd = c + (d - c) * u;
  return ab + (cd - ab) * v;
}

function fbm(x: number, y: number) {
  let f = 0;
  let amp = 0.55;
  let freq = 1;
  for (let i = 0; i < 5; i++) {
    f += amp * valueNoise(x * freq, y * freq);
    freq *= 2;
    amp *= 0.55;
  }
  return f;
}

export function EarthGlobeCanvas({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pre-generate a pseudo earth “texture” (equirectangular) with blue oceans + green land blobs.
    // Must be created on the client (no `document` during prerender).
    const texW = 720;
    const texH = 360;
    const textureCanvas: HTMLCanvasElement | OffscreenCanvas =
      typeof OffscreenCanvas !== "undefined"
        ? new OffscreenCanvas(texW, texH)
        : document.createElement("canvas");
    textureCanvas.width = texW;
    textureCanvas.height = texH;
    const textureCtx = textureCanvas.getContext("2d", { willReadFrequently: true });
    if (!textureCtx) return;
    const texCtx2 = textureCtx;
    const texImg = textureCtx.createImageData(texW, texH);
    for (let y = 0; y < texH; y++) {
      const v = y / (texH - 1);
      const lat = (v - 0.5) * Math.PI; // -pi/2..pi/2
      const latBias = Math.cos(lat) ** 0.6;
      for (let x = 0; x < texW; x++) {
        const u = x / (texW - 1);
        const n =
          fbm(u * 3.2 + 12.3, v * 2.1 + 3.7) * 0.7 +
          fbm(u * 10.5 + 1.1, v * 7.4 + 9.2) * 0.3;
        const landMask = smoothstep(0.55, 0.78, n * latBias);

        const deep = 0.16 + 0.08 * Math.sin(u * Math.PI * 2);
        const oceanR = 12;
        const oceanG = 42;
        const oceanB = Math.round(90 + deep * 120);

        const landR = Math.round(40 + 30 * n);
        const landG = Math.round(120 + 80 * n);
        const landB = Math.round(55 + 30 * n);

        const snow = smoothstep(0.83, 0.96, Math.abs(v - 0.5) * 2);
        const r = oceanR + (landR - oceanR) * landMask;
        const g = oceanG + (landG - oceanG) * landMask;
        const b = oceanB + (landB - oceanB) * landMask;
        const rr = r + (245 - r) * snow * 0.85;
        const gg = g + (248 - g) * snow * 0.85;
        const bb = b + (250 - b) * snow * 0.85;

        const i = (y * texW + x) * 4;
        texImg.data[i + 0] = rr;
        texImg.data[i + 1] = gg;
        texImg.data[i + 2] = bb;
        texImg.data[i + 3] = 255;
      }
    }
    textureCtx.putImageData(texImg, 0, 0);

    const canvasEl = canvas;
    const ctx2 = ctx;
    let raf = 0;
    let t0 = performance.now();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const rect = canvasEl.getBoundingClientRect();
      canvasEl.width = Math.floor(rect.width * dpr);
      canvasEl.height = Math.floor(rect.height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvasEl);

    function draw(now: number) {
      const dt = (now - t0) / 1000;
      t0 = now;

      const w = canvasEl.width;
      const h = canvasEl.height;
      ctx2.clearRect(0, 0, w, h);

      // Background subtle stars
      ctx2.save();
      ctx2.globalAlpha = 0.25;
      for (let i = 0; i < 60; i++) {
        const sx = (hash2(i, 1) * w) | 0;
        const sy = (hash2(i, 2) * h) | 0;
        const r = 0.7 + hash2(i, 3) * 1.4;
        ctx2.fillStyle = `rgba(255,255,255,${0.35 + 0.4 * hash2(i, 4)})`;
        ctx2.beginPath();
        ctx2.arc(sx, sy, r, 0, Math.PI * 2);
        ctx2.fill();
      }
      ctx2.restore();

      // Globe params
      const cx = w * 0.5;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.28;
      const rot = reduce ? 0 : now * 0.00012; // radians offset over time

      // Atmosphere glow
      ctx2.save();
      const g = ctx2.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.7);
      g.addColorStop(0, "rgba(168,85,247,0.18)");
      g.addColorStop(0.35, "rgba(59,130,246,0.16)");
      g.addColorStop(1, "rgba(59,130,246,0)");
      ctx2.fillStyle = g;
      ctx2.beginPath();
      ctx2.arc(cx, cy, radius * 1.7, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.restore();

      // Sphere render: vertical scanlines for speed
      const tex = texCtx2.getImageData(0, 0, texW, texH).data;

      const img = ctx2.createImageData(w, h);
      const out = img.data;

      // Light direction (from top-left)
      const lx = -0.6;
      const ly = -0.35;
      const lz = 0.72;

      for (let py = 0; py < h; py++) {
        const y = (py - cy) / radius;
        if (Math.abs(y) > 1) continue;
        const y2 = y * y;
        for (let px = 0; px < w; px++) {
          const x = (px - cx) / radius;
          const r2 = x * x + y2;
          if (r2 > 1) continue;
          const z = Math.sqrt(1 - r2);

          // Spherical coordinates for texture lookup
          const lon = Math.atan2(x, z) + rot; // -pi..pi
          const lat = Math.asin(y); // -pi/2..pi/2
          let u = (lon / (Math.PI * 2) + 0.5) % 1;
          if (u < 0) u += 1;
          const v = 0.5 - lat / Math.PI;

          const tx = Math.min(texW - 1, Math.max(0, Math.floor(u * texW)));
          const ty = Math.min(texH - 1, Math.max(0, Math.floor(v * texH)));
          const ti = (ty * texW + tx) * 4;

          // Base color
          let r = tex[ti + 0];
          let g2 = tex[ti + 1];
          let b = tex[ti + 2];

          // Lighting: lambert + rim
          const ndotl = clamp01(x * lx + y * ly + z * lz);
          const rim = (1 - z) ** 2.3;
          const spec = Math.pow(clamp01(ndotl), 18) * 0.25;

          // Apply shading
          const shade = 0.22 + 0.88 * ndotl;
          r *= shade;
          g2 *= shade;
          b *= shade;

          // Atmosphere rim tint
          r += rim * 18;
          g2 += rim * 28;
          b += rim * 62;

          // Specular sparkle
          r += spec * 255;
          g2 += spec * 255;
          b += spec * 255;

          // Vignette edge softening
          const edge = smoothstep(1.0, 0.92, Math.sqrt(r2));
          const a = Math.round(255 * edge);

          const oi = (py * w + px) * 4;
          out[oi + 0] = Math.min(255, Math.max(0, r));
          out[oi + 1] = Math.min(255, Math.max(0, g2));
          out[oi + 2] = Math.min(255, Math.max(0, b));
          out[oi + 3] = a;
        }
      }

      ctx2.putImageData(img, 0, 0);

      // Outer glass ring
      ctx2.save();
      ctx2.globalCompositeOperation = "screen";
      ctx2.strokeStyle = "rgba(255,255,255,0.22)";
      ctx2.lineWidth = Math.max(1, radius * 0.04);
      ctx2.beginPath();
      ctx2.arc(cx, cy, radius * 1.02, 0, Math.PI * 2);
      ctx2.stroke();
      ctx2.restore();

      raf = window.requestAnimationFrame(draw);
    }

    raf = window.requestAnimationFrame(draw);
    return () => {
      ro.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div className={`relative h-full w-full ${className}`}>
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Soft vignette + glass */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 70% at 35% 25%, rgba(255,255,255,0.12), transparent 55%), radial-gradient(80% 80% at 50% 65%, rgba(15,23,42,0.35), transparent 62%)",
        }}
      />
    </div>
  );
}

