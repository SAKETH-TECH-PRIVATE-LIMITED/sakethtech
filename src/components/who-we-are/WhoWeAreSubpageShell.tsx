"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { motionTokens } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  heroImageSrc: string;
  heroImageAlt: string;
  children: ReactNode;
  /** When false, skips bottom CTA band (e.g. careers has its own flow). */
  showClosingCta?: boolean;
};

export function WhoWeAreSubpageShell({
  eyebrow,
  title,
  lead,
  heroImageSrc,
  heroImageAlt,
  children,
  showClosingCta = true,
}: Props) {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const reduce = useReducedMotion();

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 55% at 15% 25%, rgba(99,102,241,0.2), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 20%, rgba(0,102,204,0.18), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 pb-14 pt-10 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-20 lg:pt-14">
          <div dir={textDir}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0066cc] dark:text-sky-400">
              {eyebrow}
            </p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.dur.slow, ease: motionTokens.easeOutQuint }}
              className="headline-section mt-4 font-sans text-[1.85rem] leading-[1.15] sm:text-[2.1rem] lg:text-[2.45rem]"
            >
              {title}
            </motion.h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[16px]">
              {lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0066cc] px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: motionTokens.dur.base, ease: motionTokens.easeOutSoft, delay: 0.06 }}
            className="relative mt-12 aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/10 dark:mt-0 dark:border-slate-700 lg:aspect-[5/4]"
          >
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent dark:from-slate-950/55" aria-hidden />
          </motion.div>
        </div>
      </section>

      {children}

      {showClosingCta ? (
        <section className="relative overflow-hidden bg-[#071226] py-16 text-white sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,102,204,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 70%, rgba(99,102,241,0.3), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-sans text-2xl font-semibold sm:text-3xl" dir={textDir}>
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80" dir={textDir}>
              {t.cta.sub}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0066cc] shadow-xl transition hover:bg-slate-100"
            >
              {t.cta.primary}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <p className="mt-4 text-[13px] text-white/60" dir={textDir}>
              {t.cta.fine}
            </p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
