"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";

export function CareersStrip() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section
      id="careers"
      className="border-t border-slate-200/80 bg-white px-4 py-16 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-50 to-white px-8 py-10 shadow-sm [direction:ltr] dark:border-slate-700 dark:from-slate-900 dark:to-slate-900/50 sm:flex-row sm:items-center">
            <div dir={textDir}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
                {t.careers.label}
              </p>
              <h2 className="headline-section mt-2 font-sans text-[1.5rem] text-foreground sm:text-[1.75rem]">
                {t.careers.title}
              </h2>
              <p className="mt-2 max-w-xl text-[15px] font-normal text-slate-600 dark:text-slate-300">
                {t.careers.sub}
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-[#0f172a] bg-white px-8 py-3.5 text-[15px] font-semibold text-[#0f172a] transition hover:bg-[#0f172a] hover:text-white dark:border-slate-200 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              {t.careers.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
