"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Compass, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";

export function CapabilityNavigatorSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const n = t.capabilityNav;
  const [industryId, setIndustryId] = useState(n.industries[0]?.id ?? "fin");
  const [constraintId, setConstraintId] = useState(n.constraints[0]?.id ?? "regulated");

  const base = useMemo(
    () => n.bases.find((b) => b.industryId === industryId),
    [industryId, n.bases],
  );
  const overlay = useMemo(
    () => n.overlays.find((o) => o.constraintId === constraintId),
    [constraintId, n.overlays],
  );

  const bullets = useMemo(() => {
    if (!base) return [];
    const extra = overlay?.bullets ?? [];
    return [...base.bullets, ...extra];
  }, [base, overlay]);

  return (
    <section
      id="capability-navigator"
      className="scroll-mt-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] px-4 py-24 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950 sm:px-6 lg:px-8"
      aria-labelledby="capability-nav-heading"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div dir={textDir} className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
              {n.label}
            </p>
            <h2
              id="capability-nav-heading"
              className="headline-section mt-4 font-sans text-[1.75rem] text-foreground sm:text-[2rem]"
            >
              {n.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {n.sub}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-14 grid gap-10 [direction:ltr] lg:grid-cols-12 lg:gap-12">
            <div dir={textDir} className="space-y-8 lg:col-span-5">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {n.industryPrompt}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {n.industries.map((opt) => {
                    const sel = opt.id === industryId;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setIndustryId(opt.id)}
                        className={`rounded-full px-4 py-2 text-left text-[13px] font-semibold transition ${
                          sel
                            ? "bg-[#0066cc] text-white shadow-md shadow-blue-900/15 dark:bg-sky-500"
                            : "border border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-slate-500"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {n.constraintPrompt}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {n.constraints.map((opt) => {
                    const sel = opt.id === constraintId;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setConstraintId(opt.id)}
                        className={`rounded-full px-4 py-2 text-left text-[13px] font-semibold transition ${
                          sel
                            ? "bg-violet-600 text-white shadow-md shadow-violet-900/15 dark:bg-violet-500"
                            : "border border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-slate-500"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                dir={textDir}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-900/[0.06] dark:border-slate-700 dark:bg-slate-900/60"
              >
                <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#0066cc]/10 to-violet-500/10 blur-2xl dark:from-sky-500/15 dark:to-violet-600/10" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0066cc] to-violet-600 text-white shadow-lg">
                    <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {n.resultLabel}
                    </p>
                    {base ? (
                      <>
                        <p className="mt-2 font-sans text-xl font-semibold leading-snug text-foreground">
                          {base.headline}
                        </p>
                        <p className="mt-4 text-[13px] font-semibold text-slate-700 dark:text-slate-200">
                          {n.engagementLine}: {base.engagementPick}
                        </p>
                        <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                          {bullets.map((line, i) => (
                            <li key={`${industryId}-${constraintId}-${i}`} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0066cc] dark:bg-sky-400" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        {overlay?.risk ? (
                          <div className="mt-6 flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 dark:border-amber-900/40 dark:bg-amber-950/30">
                            <AlertTriangle
                              className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400"
                              aria-hidden
                            />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                                {n.riskLabel}
                              </p>
                              <p className="mt-1 text-[13px] leading-relaxed text-amber-950/90 dark:text-amber-100/90">
                                {overlay.risk}
                              </p>
                            </div>
                          </div>
                        ) : null}
                        <Link
                          href="#contact"
                          className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#0066cc] px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
                        >
                          {n.cta}
                        </Link>
                      </>
                    ) : (
                      <p className="mt-2 text-slate-500">—</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
