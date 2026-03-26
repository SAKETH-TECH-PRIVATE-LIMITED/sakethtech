"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { motionTokens } from "@/lib/motion";
import type { IndustryPageContent } from "@/lib/industry-landing-content";

type Props = { content: IndustryPageContent };

export function IndustryLandingPage({ content }: Props) {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const reduce = useReducedMotion();

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 55% at 15% 25%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 20%, rgba(0,102,204,0.2), transparent 55%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(15,23,42,0.06), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 pb-14 pt-10 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:pb-20 lg:pt-14">
          <div dir={textDir}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0066cc] dark:text-sky-400">
              {t.nav.industries}
            </p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionTokens.dur.slow, ease: motionTokens.easeOutQuint }}
              className="headline-section mt-4 font-sans text-[1.85rem] leading-[1.15] sm:text-[2.1rem] lg:text-[2.45rem]"
            >
              {content.heroTitle}
            </motion.h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[16px]">
              {content.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0066cc] px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                {t.cta.primary}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                href="/#capabilities"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/80 px-5 py-3 text-[14px] font-semibold text-slate-800 backdrop-blur-sm transition hover:border-[#0066cc]/40 hover:text-[#0066cc] dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-sky-500/50 dark:hover:text-sky-400"
              >
                {t.services.label}
              </Link>
            </div>
            <ul className="mt-10 space-y-3 text-[14px] text-slate-700 dark:text-slate-300">
              {content.highlights.map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-[#0066cc] dark:text-sky-400" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: motionTokens.dur.base, ease: motionTokens.easeOutSoft, delay: 0.06 }}
            className="relative mt-12 aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-900/10 dark:mt-0 dark:border-slate-700 lg:aspect-[5/4]"
          >
            <Image
              src={content.heroImageSrc}
              alt={content.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent dark:from-slate-950/55" aria-hidden />
          </motion.div>
        </div>
      </section>

      {/* Narrative sections — alternating media / copy */}
      {content.sections.map((sec, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <section
            key={sec.title}
            className="border-b border-slate-200/80 dark:border-slate-800"
          >
            <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
              <div
                className={`relative aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-slate-700 ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={sec.imageSrc}
                  alt={sec.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={88}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/15 to-transparent dark:from-slate-950/25" aria-hidden />
              </div>
              <div className={`min-w-0 ${imageLeft ? "lg:order-2" : "lg:order-1"}`} dir={textDir}>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {String(i + 1).padStart(2, "0")} — {t.nav.industries}
                </p>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                  {sec.title}
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-[1.65] text-slate-600 dark:text-slate-300">
                  {sec.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA band */}
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
    </div>
  );
}
