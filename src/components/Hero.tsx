"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { HeroAppAccent } from "@/components/HeroAppAccent";
import { motionTokens } from "@/lib/motion";
import { MorphingLight } from "@/components/ui/morphing-light";

export function Hero() {
  const reduce = useReducedMotion();
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  const container = {
    hidden: reduce ? {} : { opacity: 0 },
    show: reduce
      ? {}
      : {
          opacity: 1,
          transition: { staggerChildren: motionTokens.stagger.md, delayChildren: 0.05 },
        },
  } as const;

  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 14, filter: "blur(2px)" },
    show: reduce
      ? {}
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: motionTokens.dur.slow, ease: motionTokens.easeOutQuint },
        },
  } as const;

  return (
    <section
      id="hero"
      className="relative z-0 -mt-[var(--header-nav-overlap)] min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#5b21b6] via-[#4f46e5] to-[#2563eb] pt-[var(--header-nav-overlap)] dark:from-[#1e1b4b] dark:via-[#312e81] dark:to-[#0c4a6e]"
    >
      <MorphingLight
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.55] mix-blend-screen"
        palette="hero"
        intensity={1.08}
      />
      <MorphingLight
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-0 mix-blend-screen dark:opacity-[0.55]"
        palette="heroDark"
        intensity={1.06}
      />
      <div
        className="pointer-events-none absolute -start-1/4 top-0 h-[120%] w-[65%] animate-beam rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,transparent_40%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(255,255,255,0.08),transparent)] dark:opacity-50" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[calc(100svh-var(--header-nav-overlap)-var(--mobile-bottom-nav))] max-w-[1320px] items-center justify-center px-4 py-10 [direction:ltr] sm:px-6 sm:py-16 lg:min-h-[72vh] lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[46rem] flex-col items-center justify-center text-center text-white" dir={textDir}>
          <motion.p variants={item} className="text-[15px] font-medium leading-relaxed text-white/90">
            {t.hero.kicker}
          </motion.p>

          <motion.h1 variants={item} className="headline-hero mt-5 font-sans text-[2rem] text-white sm:text-[2.375rem] lg:text-[2.75rem] xl:text-[3rem]">
            {t.hero.h1}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-[15px] font-normal leading-[1.65] text-white/88 sm:text-[1.0625rem]">
            {t.hero.sub}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[15px] font-semibold text-slate-900 shadow-lg shadow-black/10 transition hover:bg-slate-100"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {t.hero.cta2}
            </Link>
          </motion.div>

          <motion.p variants={item} className="mt-10 max-w-2xl text-[13px] font-normal leading-relaxed text-white/70">
            {t.hero.note}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
