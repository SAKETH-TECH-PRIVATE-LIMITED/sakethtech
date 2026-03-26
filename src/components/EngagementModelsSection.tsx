"use client";

import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { Users, Target, Layers3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

const icons = [Users, Target, Layers3] as const;

export function EngagementModelsSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const e = t.engagementModels;
  const reduce = useReducedMotion();

  return (
    <section
      id="engagement-models"
      className="scroll-mt-24 bg-background px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="engagement-models-heading"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div dir={textDir} className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5b21b6] dark:text-violet-400">
              {e.label}
            </p>
            <h2
              id="engagement-models-heading"
              className="headline-section mt-4 font-sans text-[1.75rem] text-foreground sm:text-[2rem]"
            >
              {e.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {e.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 [direction:ltr] lg:grid-cols-3 lg:gap-8">
          {e.models.map((m, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <Reveal key={m.name} delay={i * 0.06}>
                <motion.article
                  dir={textDir}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          rotateX: 2,
                          rotateY: i === 1 ? 0 : i === 0 ? -2 : 2,
                          transition: { duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft },
                        }
                  }
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-sm transition duration-300 hover:border-violet-400/35 hover:shadow-xl hover:shadow-violet-500/5 dark:border-slate-700 dark:bg-slate-900/55 dark:hover:border-violet-500/40"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px 260px at 20% 15%, rgba(139,92,246,0.14), transparent 55%), radial-gradient(520px 240px at 85% 80%, rgba(79,70,229,0.12), transparent 60%)",
                    }}
                  />
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg ring-1 ring-white/15">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
                    {m.tagline}
                  </p>
                  <p className="mt-4 text-[15px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-foreground">{e.bestWhenLabel} </span>
                    {m.bestFor}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5 text-[14px] leading-snug text-slate-700 dark:text-slate-200">
                    {m.includes.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-slate-100 pt-5 text-[13px] leading-relaxed text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{e.watchoutLabel} </span>
                    {m.watchouts}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <p
            dir={textDir}
            className="mx-auto mt-12 max-w-3xl text-center text-[13px] leading-relaxed text-slate-500 dark:text-slate-400"
          >
            {e.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
