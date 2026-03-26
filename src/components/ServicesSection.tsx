"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  Cloud,
  Shield,
  Bot,
  Code2,
  TabletSmartphone,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";
import { techImageAlts, techImages } from "@/lib/tech-images";
import { motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

const icons: LucideIcon[] = [Code2, LayoutDashboard, TabletSmartphone, Cloud, Shield, Bot];
const accents = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-fuchsia-400",
  "from-emerald-500 to-teal-400",
  "from-sky-500 to-blue-600",
  "from-slate-600 to-slate-400",
  "from-amber-500 to-orange-400",
];

export function ServicesSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const reduce = useReducedMotion();

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(1000px 420px at 20% 20%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 420px at 80% 65%, rgba(168,85,247,0.10), transparent 62%)",
        }}
      />
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <div dir={textDir}>
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
              {t.services.label}
            </p>
            <h2 className="headline-section mt-4 text-center font-sans text-[1.75rem] text-foreground sm:text-[2rem] lg:text-[2.25rem]">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[1.0625rem] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
              {t.services.sub}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-[0_28px_80px_-40px_rgba(2,6,23,0.28)] backdrop-blur-md [direction:ltr] dark:border-slate-700/70 dark:bg-slate-950/35">
            <Image
              src={techImages.datacenter}
              alt={techImageAlts.datacenter}
              fill
              className="object-cover"
              sizes="(max-width: 1320px) 100vw, 1320px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/70 to-background/20 dark:from-slate-950/96 dark:via-slate-950/72 dark:to-slate-950/25" />
            <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
              <div className="lg:col-span-7" dir={textDir}>
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
                  Featured capability
                </p>
                <h3 className="mt-4 font-sans text-[1.5rem] font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
                  Modern platforms, secure delivery, and AI — engineered as one system
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[16px]">
                  {t.services.sub}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2" dir={textDir}>
                  {["ERP", "Cloud", "Security", "Gen AI"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0066cc]/10 px-3 py-1 text-[11px] font-semibold text-[#0066cc] dark:bg-sky-500/15 dark:text-sky-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {t.metrics.m.slice(0, 3).map(([stat, rest], i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 shadow-sm backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/30"
                      dir={textDir}
                    >
                      <p className="font-sans text-[1.4rem] font-bold tabular-nums text-[#4f46e5] dark:text-sky-400">
                        {stat}
                      </p>
                      <p className="mt-1 text-[12px] leading-snug text-slate-600 dark:text-slate-300">{rest}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 [direction:ltr] sm:grid-cols-2 lg:grid-cols-3 lg:mt-16">
          {t.services.items.map((s, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <motion.article
                  dir={textDir}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: motionTokens.dur.fast, ease: motionTokens.easeOutSoft },
                        }
                  }
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#0066cc]/35 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/80 dark:bg-slate-900/55 dark:hover:border-sky-500/40 dark:hover:shadow-sky-500/5"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(720px 280px at 25% 10%, rgba(59,130,246,0.16), transparent 58%), radial-gradient(640px 280px at 85% 75%, rgba(168,85,247,0.14), transparent 62%)",
                    }}
                  />
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accents[i]} shadow-lg ring-1 ring-white/15`}
                  >
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
                      initial={false}
                      animate={reduce ? undefined : { opacity: [0, 0.25, 0] }}
                      transition={reduce ? undefined : { duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(255,255,255,0.15), transparent 35%, rgba(255,255,255,0.10), transparent 70%)",
                      }}
                    />
                    <Icon className="relative h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-normal leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#0066cc] opacity-0 transition group-hover:opacity-100 dark:text-sky-400">
                    {t.services.learn}
                    <span aria-hidden className="rtl:rotate-180">
                      →
                    </span>
                  </span>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
