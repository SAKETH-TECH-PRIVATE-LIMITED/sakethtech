"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

export function DeliveryJourneySection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const j = t.deliveryJourney;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section
      id="delivery-journey"
      className="scroll-mt-24 border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/40 to-white px-4 py-24 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950 sm:px-6 lg:px-8"
      aria-labelledby="delivery-journey-heading"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div dir={textDir} className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
              {j.label}
            </p>
            <h2
              id="delivery-journey-heading"
              className="headline-section mt-4 font-sans text-[1.75rem] text-foreground sm:text-[2rem] lg:text-[2.125rem]"
            >
              {j.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {j.sub}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[13px] text-slate-500 dark:text-slate-400">{j.hint}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-14 [direction:ltr]">
            <div
              role="tablist"
              aria-label={j.label}
              className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
            >
              {j.steps.map((step, i) => {
                const sel = i === active;
                return (
                  <button
                    key={step.title}
                    type="button"
                    role="tab"
                    id={`journey-tab-${i}`}
                    aria-selected={sel}
                    aria-controls={`journey-panel-${i}`}
                    onClick={() => setActive(i)}
                    className={`rounded-2xl border px-4 py-4 text-start transition ${
                      sel
                        ? "border-[#0066cc]/50 bg-[#0066cc]/5 shadow-md shadow-[#0066cc]/10 dark:border-sky-500/45 dark:bg-sky-500/10 dark:shadow-sky-500/5"
                        : "border-slate-200/90 bg-white/80 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-slate-600"
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
                          sel
                            ? "bg-[#0066cc] text-white dark:bg-sky-500"
                            : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        dir={textDir}
                        className={`text-[14px] font-semibold leading-snug ${
                          sel ? "text-foreground" : "text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        {step.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  role="tabpanel"
                  id={`journey-panel-${active}`}
                  aria-labelledby={`journey-tab-${active}`}
                  dir={textDir}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  transition={reduce ? { duration: 0 } : { duration: motionTokens.dur.base, ease: motionTokens.easeOutSoft }}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-lg shadow-slate-900/[0.04] dark:border-slate-700 dark:bg-slate-900/50"
                >
                  <div className="flex flex-wrap items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0066cc] dark:text-sky-400"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[1.05rem] font-semibold text-foreground">{j.steps[active].title}</p>
                      <p className="mt-3 text-[15px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                        {j.steps[active].desc}
                      </p>
                      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {j.artifactsLabel}
                      </p>
                      <p className="mt-2 font-mono text-[13px] leading-relaxed text-slate-700 dark:text-slate-200">
                        {j.steps[active].artifacts}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
