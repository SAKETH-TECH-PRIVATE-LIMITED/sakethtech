"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function MetricsStrip() {
  const reduce = useReducedMotion();
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="relative border-y border-white/10 bg-gradient-to-r from-[#0b3b7a] via-[#0f4c8a] to-[#1565c0] text-white dark:from-[#0a1628] dark:via-[#0f2847] dark:to-[#134e7a]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 Q20 10 40 40 T80 40' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 [direction:ltr] sm:flex-row sm:items-center">
          <motion.h2
            dir={textDir}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="headline-section max-w-xl font-sans text-[1.375rem] text-white sm:text-[1.5rem] lg:text-[1.625rem]"
          >
            {t.metrics.title}
          </motion.h2>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/85 bg-transparent px-4 py-2 text-[14px] font-semibold text-white transition hover:bg-white/10"
          >
            {t.metrics.cta}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid gap-8 [direction:ltr] sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
          {t.metrics.m.map(([stat, rest], i) => (
            <motion.div
              dir={textDir}
              key={i}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`border-white/20 py-1 sm:px-5 lg:px-6 ${
                i % 2 === 1 ? "border-s" : ""
              } ${i > 0 ? "lg:border-s" : ""}`}
            >
              <p className="font-sans text-[15px] leading-snug text-white/95">
                <span className="font-semibold">{stat}</span>{" "}
                <span className="font-normal">{rest}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
