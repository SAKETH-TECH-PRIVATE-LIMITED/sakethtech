"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

/** Rectangular “wall map” canvas — Natural Earth fills width without globe clipping */
const MAP_W = 1400;
const MAP_H = 720;

/** Approximate centres for pins (lon, lat) */
const COORDS = {
  in: [72.8777, 19.076] as [number, number],
  ae: [55.2708, 25.2048] as [number, number],
  ch: [8.5417, 47.3769] as [number, number],
  au: [151.2093, -33.8688] as [number, number],
  us: [-74.006, 40.7128] as [number, number],
  de: [13.405, 52.52] as [number, number],
  ca: [-79.3832, 43.6532] as [number, number],
  om: [58.4059, 23.588] as [number, number],
};

function PulseRing({ color, reduced }: { color: string; reduced: boolean }) {
  if (reduced) return null;
  return (
    <motion.circle
      r={14}
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      initial={{ opacity: 0.55, scale: 0.85 }}
      animate={{ opacity: 0, scale: 2.2 }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function PinMarker({
  label,
  sub,
  detail,
  variant,
  reduced,
}: {
  label: string;
  sub: string;
  detail: string;
  variant: "hq" | "upcoming";
  reduced: boolean;
}) {
  const color = variant === "hq" ? "#0066cc" : "#38bdf8";
  return (
    <g className="pointer-events-none select-none">
      {variant === "hq" ? <PulseRing color={color} reduced={reduced} /> : null}
      {variant === "upcoming" && !reduced ? (
        <motion.circle
          r={12}
          fill="none"
          stroke="#38bdf8"
          strokeWidth={1.2}
          strokeDasharray="3 2"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : variant === "upcoming" ? (
        <circle r={12} fill="none" stroke="#38bdf8" strokeWidth={1} strokeDasharray="3 2" opacity={0.7} />
      ) : null}
      <circle r={variant === "hq" ? 9 : 7} fill={color} stroke="#f8fafc" strokeWidth={2} opacity={0.95} />
      <text
        textAnchor="middle"
        fill="#f1f5f9"
        fontSize={11}
        fontWeight={600}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        stroke="rgba(15,23,42,0.75)"
        strokeWidth={2.5}
        paintOrder="stroke fill"
        dy={-20}
      >
        {label}
      </text>
      <text
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize={10}
        fontWeight={500}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        dy={-6}
      >
        {sub}
      </text>
      <text
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={8}
        fontWeight={500}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        dy={8}
      >
        {detail}
      </text>
    </g>
  );
}

function ClientPin({ code }: { code: string }) {
  return (
    <g className="pointer-events-none select-none">
      <circle r={4.5} fill="#818cf8" stroke="#e2e8f0" strokeWidth={1.35} opacity={0.95} />
      <text
        textAnchor="middle"
        fill="#f1f5f9"
        fontSize={9}
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        stroke="rgba(15,23,42,0.65)"
        strokeWidth={2}
        paintOrder="stroke fill"
        dy={-10}
      >
        {code}
      </text>
    </g>
  );
}

/** One dotted great-circle style link from India hub to every client / corridor region */
const HUB_ROUTES: { key: string; to: [number, number] }[] = [
  { key: "in-ch", to: COORDS.ch },
  { key: "in-au", to: COORDS.au },
  { key: "in-us", to: COORDS.us },
  { key: "in-de", to: COORDS.de },
  { key: "in-ca", to: COORDS.ca },
  { key: "in-ae", to: COORDS.ae },
  { key: "in-om", to: COORDS.om },
];

function project([lon, lat]: [number, number]) {
  const x = ((lon + 180) / 360) * MAP_W;
  const y = ((90 - lat) / 180) * MAP_H;
  return [x, y] as const;
}

function SvgPulseRing({ color, reduced }: { color: string; reduced: boolean }) {
  if (reduced) return null;
  return (
    <motion.circle
      r={14}
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      initial={{ opacity: 0.55, scale: 0.85 }}
      animate={{ opacity: 0, scale: 2.2 }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

function SvgPin({
  at,
  label,
  sub,
  detail,
  variant,
  reduced,
}: {
  at: readonly [number, number];
  label: string;
  sub: string;
  detail: string;
  variant: "hq" | "upcoming";
  reduced: boolean;
}) {
  const color = variant === "hq" ? "#0066cc" : "#38bdf8";
  return (
    <g transform={`translate(${at[0]} ${at[1]})`} className="pointer-events-none select-none">
      {variant === "hq" ? <SvgPulseRing color={color} reduced={reduced} /> : null}
      {variant === "upcoming" && !reduced ? (
        <motion.circle
          r={12}
          fill="none"
          stroke="#38bdf8"
          strokeWidth={1.2}
          strokeDasharray="3 2"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : variant === "upcoming" ? (
        <circle r={12} fill="none" stroke="#38bdf8" strokeWidth={1} strokeDasharray="3 2" opacity={0.7} />
      ) : null}
      <circle r={variant === "hq" ? 9 : 7} fill={color} stroke="#f8fafc" strokeWidth={2} opacity={0.95} />
      <text
        textAnchor="middle"
        fill="#f1f5f9"
        fontSize={11}
        fontWeight={600}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        stroke="rgba(15,23,42,0.75)"
        strokeWidth={2.5}
        paintOrder="stroke fill"
        dy={-20}
      >
        {label}
      </text>
      <text
        textAnchor="middle"
        fill="#cbd5e1"
        fontSize={10}
        fontWeight={500}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        dy={-6}
      >
        {sub}
      </text>
      <text
        textAnchor="middle"
        fill="#94a3b8"
        fontSize={8}
        fontWeight={500}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        dy={8}
      >
        {detail}
      </text>
    </g>
  );
}

function SvgClientPin({ at, code }: { at: readonly [number, number]; code: string }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]})`} className="pointer-events-none select-none">
      <circle r={4.5} fill="#818cf8" stroke="#e2e8f0" strokeWidth={1.35} opacity={0.95} />
      <text
        textAnchor="middle"
        fill="#f1f5f9"
        fontSize={9}
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        stroke="rgba(15,23,42,0.65)"
        strokeWidth={2}
        paintOrder="stroke fill"
        dy={-10}
      >
        {code}
      </text>
    </g>
  );
}

export function GlobalPresenceSection() {
  const legendGradId = useId().replace(/:/g, "");
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const reduce = useReducedMotion();
  const m = t.globalPresence.markers;
  const cm = t.globalPresence.clientMarkets;

  const clientPins: { code: string; coords: [number, number] }[] = [
    { code: cm.ch.code, coords: COORDS.ch },
    { code: cm.au.code, coords: COORDS.au },
    { code: cm.us.code, coords: COORDS.us },
    { code: cm.de.code, coords: COORDS.de },
    { code: cm.ca.code, coords: COORDS.ca },
    { code: cm.om.code, coords: COORDS.om },
  ];

  return (
    <section
      id="global-presence"
      className="relative scroll-mt-24 overflow-hidden bg-[#050914] py-20 text-white sm:py-24"
      aria-labelledby="global-presence-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.22),transparent),radial-gradient(ellipse_60%_40%_at_100%_80%,rgba(37,99,235,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -start-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -end-32 bottom-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1420px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center [direction:ltr]"
        >
          <p
            dir={textDir}
            className="text-[12px] font-semibold uppercase tracking-[0.22em] text-violet-300/90"
          >
            {t.globalPresence.label}
          </p>
          <h2
            id="global-presence-heading"
            dir={textDir}
            className="headline-section mt-4 text-[1.75rem] text-white sm:text-[2rem] lg:text-[2.125rem]"
          >
            {t.globalPresence.title}
          </h2>
          <p
            dir={textDir}
            className="mx-auto mt-4 max-w-2xl text-[1.0625rem] font-normal leading-relaxed text-slate-400"
          >
            {t.globalPresence.sub}
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 w-full max-w-[1420px] rounded-2xl border border-slate-700/60 bg-slate-900/40 p-2 shadow-[0_0_80px_-20px_rgba(99,102,241,0.35)] backdrop-blur-sm sm:p-3 [direction:ltr]"
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-[#070d18] ring-1 ring-slate-700/50">
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="block h-auto w-full max-h-[min(78vh,820px)]"
              role="img"
              aria-label="Global presence map"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="presenceLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="45%" stopColor="#0066cc" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="mapGlow" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
                  <stop offset="55%" stopColor="rgba(37,99,235,0.10)" />
                  <stop offset="100%" stopColor="rgba(7,13,24,0)" />
                </radialGradient>
              </defs>

              <rect width={MAP_W} height={MAP_H} fill="#070d18" />
              <rect width={MAP_W} height={MAP_H} fill="url(#mapGlow)" />

              {/* stylized world silhouette */}
              <path
                d="M113 402c52-64 155-137 252-160 115-27 179 23 251 23 61 0 117-56 186-72 92-22 205 12 296 49 110 44 193 113 231 182 24 44 16 80-31 106-59 33-145 44-233 44-126 0-211-45-317-45-89 0-160 43-252 43-95 0-173-33-250-33-67 0-132 24-200 21-79-4-151-38-183-74-27-30-21-60 0-84z"
                fill="#151f33"
                stroke="#334155"
                strokeWidth={1.1}
                opacity={0.95}
              />

              {/* faint grid */}
              <g opacity={0.16} stroke="#94a3b8" strokeWidth={1}>
                {Array.from({ length: 9 }).map((_, i) => {
                  const y = ((i + 1) / 10) * MAP_H;
                  return <line key={`lat-${i}`} x1={0} y1={y} x2={MAP_W} y2={y} />;
                })}
                {Array.from({ length: 11 }).map((_, i) => {
                  const x = ((i + 1) / 12) * MAP_W;
                  return <line key={`lon-${i}`} x1={x} y1={0} x2={x} y2={MAP_H} />;
                })}
              </g>

              <g className="pointer-events-none">
                {HUB_ROUTES.map(({ key, to }) => (
                  <g key={key}>
                    <line
                      x1={project(COORDS.in)[0]}
                      y1={project(COORDS.in)[1]}
                      x2={project(to)[0]}
                      y2={project(to)[1]}
                      stroke="#020617"
                      strokeWidth={3.8}
                      strokeLinecap="round"
                      opacity={0.72}
                    />
                    <line
                      x1={project(COORDS.in)[0]}
                      y1={project(COORDS.in)[1]}
                      x2={project(to)[0]}
                      y2={project(to)[1]}
                      stroke="url(#presenceLineGrad)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeDasharray="4 6"
                      opacity={1}
                    />
                  </g>
                ))}
              </g>

              {clientPins.map(({ code, coords }) => (
                <SvgClientPin key={code} at={project(coords)} code={code} />
              ))}

              <SvgPin
                at={project(COORDS.in)}
                label={m.in.country}
                sub={m.in.city}
                detail={m.in.role}
                variant="hq"
                reduced={!!reduce}
              />
              <SvgPin
                at={project(COORDS.ae)}
                label={m.ae.country}
                sub={m.ae.city}
                detail={m.ae.role}
                variant="upcoming"
                reduced={!!reduce}
              />
            </svg>
          </div>

          <div
            className="mt-5 flex flex-col items-center gap-3 text-[12px] text-slate-400"
            dir={textDir}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0066cc]" aria-hidden />
                {t.globalPresence.legendHq}
              </span>
              <span className="inline-flex items-center gap-2">
                <svg width={36} height={4} viewBox="0 0 36 4" className="shrink-0 overflow-visible" aria-hidden>
                  <defs>
                    <linearGradient id={legendGradId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#0066cc" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  <line
                    x1={0}
                    y1={2}
                    x2={36}
                    y2={2}
                    stroke={`url(#${legendGradId})`}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                  />
                </svg>
                {t.globalPresence.legendRoutes}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#818cf8]" aria-hidden />
                {t.globalPresence.legendClients}
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-[#38bdf8] ring-2 ring-[#38bdf8]/40"
                  aria-hidden
                />
                {t.globalPresence.legendSoon}
              </span>
            </div>
            <p className="max-w-2xl text-center text-[11px] leading-relaxed text-slate-500 sm:text-[12px]">
              {t.globalPresence.clientListProse}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
