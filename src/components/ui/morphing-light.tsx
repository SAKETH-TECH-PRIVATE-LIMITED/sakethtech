"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Palette = {
  a: [number, number, number];
  b: [number, number, number];
};

const palettes: Record<string, Palette> = {
  // Matches current Hero: violet → indigo → blue
  hero: { a: [0.36, 0.13, 0.72], b: [0.15, 0.39, 0.92] },
  // Dark mode: deep indigo → cyan
  heroDark: { a: [0.12, 0.11, 0.46], b: [0.02, 0.82, 0.98] },
  // Alternate: magenta → teal (more “neon”)
  neon: { a: [1.0, 0.16, 0.72], b: [0.0, 1.0, 1.0] },
};

export function MorphingLight({
  className = "",
  palette = "hero",
  intensity = 1,
  style,
}: {
  className?: string;
  palette?: keyof typeof palettes;
  intensity?: number;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    camera?: THREE.Camera;
    scene?: THREE.Scene;
    renderer?: THREE.WebGLRenderer;
    clock?: THREE.Clock;
    uniforms?: {
      u_resolution: { value: THREE.Vector2 };
      u_time: { value: number };
      u_a: { value: THREE.Vector3 };
      u_b: { value: THREE.Vector3 };
      u_intensity: { value: number };
    };
    animationId?: number;
  }>({});

  const chosen = useMemo(() => palettes[palette] ?? palettes.hero, [palette]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const vertexShader = `
      void main() { 
        gl_Position = vec4(position, 1.0); 
      }
    `;

    const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_a;
uniform vec3 u_b;
uniform float u_intensity;

void main() {
  vec2 uv = (gl_FragCoord.xy - u_resolution * .5) / u_resolution.yy;

  float angle = -1.5708;
  mat2 rotation = mat2(cos(angle), -sin(angle),
                       sin(angle),  cos(angle));
  uv = rotation * uv;

  float c = distance(uv, vec2(0.0));
  float a = u_time * 2.5;

  vec3 light = vec3(0.5 - acos(sin(c * 4. + a)), 0.5 - acos(sin(c * 8. + a)), 0.0);
  vec3 source = mix(light, vec3(5.), .5 - c);
  vec3 hue = mix(u_a, u_b, (uv.y - sin(u_time)) * 0.5);
  vec3 color = mix(source, hue, uv.x);

  color *= u_intensity;
  gl_FragColor = vec4(color, 1.0);
}
    `;

    const clock = new THREE.Clock();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      u_time: { value: 1.0 },
      u_resolution: { value: new THREE.Vector2() },
      u_a: { value: new THREE.Vector3(chosen.a[0], chosen.a[1], chosen.a[2]) },
      u_b: { value: new THREE.Vector3(chosen.b[0], chosen.b[1], chosen.b[2]) },
      u_intensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    sceneRef.current = { camera, scene, renderer, clock, uniforms };

    const onWindowResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    };

    const animate = () => {
      const s = sceneRef.current;
      if (!s.uniforms || !s.clock) return;
      s.uniforms.u_time.value = s.clock.getElapsedTime();
      renderer.render(scene, camera);
      s.animationId = requestAnimationFrame(animate);
    };

    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (sceneRef.current.animationId) cancelAnimationFrame(sceneRef.current.animationId);
      if (sceneRef.current.renderer) {
        const el = sceneRef.current.renderer.domElement;
        if (el.parentElement === container) container.removeChild(el);
        sceneRef.current.renderer.dispose();
      }
      geometry.dispose();
      material.dispose();
    };
  }, [chosen.a, chosen.b, intensity]);

  return <div ref={containerRef} className={className} style={style} />;
}

