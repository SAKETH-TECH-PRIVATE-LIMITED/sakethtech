"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export function CTASection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-black/40"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-100/90 via-blue-50 to-indigo-100/80 dark:from-slate-800/80 dark:via-slate-900/50 dark:to-indigo-950/50"
          aria-hidden
        />
        <svg
          className="absolute bottom-0 start-0 end-0 h-32 w-full text-sky-200/60 dark:text-sky-900/40"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,80 C300,20 600,120 900,50 C1050,10 1150,40 1200,30 L1200,120 L0,120 Z"
          />
        </svg>

        <div className="relative z-10 px-8 py-16 text-center sm:px-12 sm:py-20">
          <div dir={textDir}>
            <h2 className="headline-section font-sans text-[1.75rem] text-foreground sm:text-[2rem]">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {t.cta.sub}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 [direction:ltr]">
            <Link
              href="#contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-[#0066cc] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              {t.cta.primary}
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg border-2 border-slate-300 bg-white px-8 py-3.5 text-[15px] font-semibold text-foreground transition hover:border-slate-400 dark:border-slate-500 dark:bg-slate-800/80 dark:hover:border-slate-400"
            >
              {t.cta.secondary}
            </Link>
          </div>
          <p className="mt-8 text-[12px] text-slate-500 dark:text-slate-400" dir={textDir}>
            {t.cta.fine}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
