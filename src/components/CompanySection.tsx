"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";
import { techImageAlts, techImages } from "@/lib/tech-images";

export function CompanySection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section
      id="company"
      className="border-t border-slate-200/80 bg-[#fafbfc] px-4 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1320px] gap-12 [direction:ltr] lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div dir={textDir}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
            {t.company.label}
          </p>
          <h2 className="headline-section mt-4 font-sans text-[1.75rem] text-foreground sm:text-[2rem]">
            {t.company.title}
          </h2>
          <p className="mt-6 text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
            {t.company.p}
          </p>
          <ul className="mt-8 space-y-3 text-[15px] font-medium text-slate-700 dark:text-slate-200">
            {t.company.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="text-[#0066cc] dark:text-sky-400" aria-hidden>
                  —
                </span>
                {b}
              </li>
            ))}
          </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-6" dir={textDir}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg dark:border-slate-700">
              <Image
                src={techImages.collaboration}
                alt={techImageAlts.collaboration}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 45vw, 640px"
                quality={90}
              />
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/70">
              <p className="font-sans text-lg font-semibold text-foreground">
                {t.company.ambition}
              </p>
              <p className="mt-4 text-[15px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                {t.company.ambitionP}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 [direction:ltr] dark:border-slate-700">
                <div>
                  <p className="font-sans text-2xl font-semibold text-foreground">
                    {t.company.g1}
                  </p>
                  <p className="mt-1 text-[13px] font-normal text-slate-500 dark:text-slate-400">
                    {t.company.g1s}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-2xl font-semibold text-foreground">
                    {t.company.g2}
                  </p>
                  <p className="mt-1 text-[13px] font-normal text-slate-500 dark:text-slate-400">
                    {t.company.g2s}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
