"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";
import { techImageAlts, techImages } from "@/lib/tech-images";

export function IndustriesSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f0f4ff]/60 to-white px-4 py-24 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute -end-24 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-violet-200/40 to-cyan-200/30 blur-3xl dark:from-violet-900/30 dark:to-cyan-900/20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1320px]">
        <Reveal>
          <div dir={textDir}>
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5b21b6] dark:text-violet-400">
              {t.industriesSec.label}
            </p>
            <h2 className="headline-section mt-4 text-center font-sans text-[1.75rem] text-foreground sm:text-[2rem]">
              {t.industriesSec.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {t.industriesSec.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 [direction:ltr] sm:grid-cols-2 lg:grid-cols-4">
          {t.industriesSec.sectors.map((label, i) => (
            <Reveal key={label} delay={i * 0.03}>
              <div
                dir={textDir}
                className="group flex h-full items-center rounded-2xl border border-slate-200/90 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm transition duration-300 hover:border-[#0066cc]/35 hover:shadow-md dark:border-slate-700/90 dark:bg-slate-900/50 dark:hover:border-sky-500/40"
              >
                <span
                  className="me-3 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#0066cc] to-violet-500 opacity-80 transition group-hover:scale-125"
                  aria-hidden
                />
                <span className="text-[15px] font-semibold text-foreground">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="relative mt-16 h-44 overflow-hidden rounded-2xl border border-slate-200/80 sm:h-52 dark:border-slate-700">
            <Image
              src={techImages.security}
              alt={techImageAlts.security}
              fill
              className="object-cover"
              sizes="(max-width: 1320px) 100vw, 1320px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 to-slate-900/25 dark:from-slate-950/80 dark:to-slate-950/35" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
