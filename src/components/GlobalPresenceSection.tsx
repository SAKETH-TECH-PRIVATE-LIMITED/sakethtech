"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";
import { useLocale } from "@/context/LocaleContext";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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
            <ComposableMap
              projection="geoNaturalEarth1"
              projectionConfig={{
                scale: 228,
                /** Slight rotation keeps major landmass balanced in the frame */
                rotate: [-8, 0, 0],
              }}
              width={MAP_W}
              height={MAP_H}
              className="w-full [&_.rsm-svg]:block [&_.rsm-svg]:h-auto [&_.rsm-svg]:w-full [&_.rsm-svg]:max-h-[min(78vh,820px)]"
            >
              <defs>
                <linearGradient id="presenceLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="45%" stopColor="#0066cc" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <rect width={MAP_W} height={MAP_H} fill="#070d18" aria-hidden />

              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#151f33"
                      stroke="#334155"
                      strokeWidth={0.42}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#1e293b", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              <g className="pointer-events-none">
                {HUB_ROUTES.map(({ key, to }) => (
                  <g key={key}>
                    <Line
                      from={COORDS.in}
                      to={to}
                      stroke="#020617"
                      strokeWidth={3.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity={0.72}
                      className={reduce ? "" : "presence-route-line"}
                    />
                    <Line
                      from={COORDS.in}
                      to={to}
                      stroke="url(#presenceLineGrad)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={reduce ? "" : "presence-route-line"}
                      opacity={1}
                    />
                  </g>
                ))}
              </g>

              {clientPins.map(({ code, coords }) => (
                <Marker key={code} coordinates={coords}>
                  <ClientPin code={code} />
                </Marker>
              ))}

              <Marker coordinates={COORDS.in}>
                <PinMarker
                  label={m.in.country}
                  sub={m.in.city}
                  detail={m.in.role}
                  variant="hq"
                  reduced={!!reduce}
                />
              </Marker>
              <Marker coordinates={COORDS.ae}>
                <PinMarker
                  label={m.ae.country}
                  sub={m.ae.city}
                  detail={m.ae.role}
                  variant="upcoming"
                  reduced={!!reduce}
                />
              </Marker>
            </ComposableMap>
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
