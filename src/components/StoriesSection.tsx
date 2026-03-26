"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function StoriesSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section id="stories" className="bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
              {t.stories.label}
            </p>
            <h2 className="headline-section mt-2 font-sans text-[1.75rem] text-foreground sm:text-[2rem]">
              {t.stories.title}
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0066cc] transition hover:gap-3 dark:text-sky-400"
          >
            {t.stories.link}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-4 [direction:ltr] [scrollbar-width:thin]">
          {t.stories.cards.map((s, i) => (
            <motion.article
              dir={textDir}
              key={s.headline}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative min-h-[320px] w-[min(100%,380px)] shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-white shadow-xl ring-1 ring-white/15 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.12),0_24px_48px_-12px_rgba(15,23,42,0.35)] ${
                i === 0
                  ? "from-[#0066cc] to-[#0047aa]"
                  : i === 1
                    ? "from-teal-500 to-emerald-600"
                    : "from-indigo-600 to-violet-700"
              }`}
            >
              <div className="absolute -end-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <p className="relative text-[13px] font-semibold text-white/90">{s.name}</p>
              <p className="relative mt-1 text-[12px] font-medium uppercase tracking-wider text-white/70">
                {s.role}
              </p>
              <p className="relative mt-8 font-sans text-lg font-semibold leading-snug text-white">
                {s.headline}
              </p>
              <p className="relative mt-6 text-[14px] font-normal leading-relaxed text-white/90">
                {s.quote}
              </p>
              <Link
                href="#contact"
                className="relative mt-8 inline-flex items-center gap-1 text-[13px] font-bold text-white underline-offset-4 hover:underline"
              >
                {s.more}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
