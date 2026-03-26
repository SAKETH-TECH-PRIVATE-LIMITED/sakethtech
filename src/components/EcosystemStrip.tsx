"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { techImageAlts, techImages } from "@/lib/tech-images";

const chips = ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Snowflake"];

export function EcosystemStrip() {
  const { locale } = useLocale();
  const title =
    locale === "ar"
      ? "نظامنا البيئي للشركاء والمنصات"
      : locale === "de"
        ? "Partner- und Plattform-Ökosystem"
        : "Partner & platform ecosystem";

  return (
    <section
      id="ecosystem"
      className="relative scroll-mt-24 overflow-hidden border-y border-slate-200/80 py-10 dark:border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={techImages.abstract}
          alt={techImageAlts.abstract}
          fill
          className="object-cover object-top opacity-[0.12] dark:opacity-[0.2]"
          sizes="100vw"
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-white/90 to-slate-50/95 dark:from-slate-950/92 dark:via-slate-900/88 dark:to-slate-950/92" />
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <p
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300"
        >
          {title}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 [direction:ltr]">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200/90 bg-white/90 px-4 py-2 text-[13px] font-medium text-slate-700 shadow-sm backdrop-blur-sm dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-100"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
