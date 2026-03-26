"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { techImages, techImageAlts } from "@/lib/tech-images";

type Slide = {
  kicker: string;
  title: string;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
};

export function HomeBanners() {
  const { locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const reduce = useReducedMotion();
  const slides: Slide[] = useMemo(
    () => [
      {
        kicker: "Delivery",
        title: "Ship faster — without trading away safety.",
        sub: "A modern engineering system: golden paths, security-by-default, and observability that execs can audit.",
        ctaLabel: "Explore our delivery approach",
        ctaHref: "/#capabilities",
        imageSrc: techImages.abstract,
        imageAlt: techImageAlts.abstract,
        badge: "Featured",
      },
      {
        kicker: "AI & Platforms",
        title: "AI assistants that behave — governed and measurable.",
        sub: "RAG with citations, policy gates, eval harnesses, and human-in-the-loop paths designed for real enterprises.",
        ctaLabel: "Open AI assistant",
        ctaHref: "/search?autoplay=1",
        imageSrc: techImages.collaboration,
        imageAlt: techImageAlts.collaboration,
      },
      {
        kicker: "Modernization",
        title: "From legacy stacks to clean, scalable architecture.",
        sub: "Modernize incrementally: APIs, data contracts, caching lanes, and reliability patterns that survive peak traffic.",
        ctaLabel: "Talk to an architect",
        ctaHref: "/#contact",
        imageSrc: techImages.datacenter,
        imageAlt: techImageAlts.datacenter,
      },
    ],
    [],
  );

  const [idx, setIdx] = useState(0);
  const slide = slides[idx]!;

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setIdx((p) => (p + 1) % slides.length), 7000);
    return () => window.clearInterval(t);
  }, [reduce, slides.length]);

  function prev() {
    setIdx((p) => (p - 1 + slides.length) % slides.length);
  }
  function next() {
    setIdx((p) => (p + 1) % slides.length);
  }

  return (
    <section className="relative px-4 py-10 sm:px-6 lg:px-8" aria-label="Highlights">
      <div className="mx-auto max-w-[1320px]" dir={dir}>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-[0_28px_80px_-40px_rgba(2,6,23,0.28)] backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-950/35">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(900px 360px at 15% 30%, rgba(59,130,246,0.16), transparent 60%), radial-gradient(820px 360px at 85% 65%, rgba(168,85,247,0.14), transparent 58%)",
            }}
          />

          <div className="relative grid items-stretch gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#0066cc] shadow-[0_0_0_6px_rgba(0,102,204,0.12)] dark:bg-sky-400 dark:shadow-[0_0_0_6px_rgba(56,189,248,0.15)]" />
                {slide.kicker}
                {slide.badge ? (
                  <span className="ms-2 rounded-full border border-slate-200 bg-white/70 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
                    {slide.badge}
                  </span>
                ) : null}
              </div>

              <h2 className="mt-4 font-sans text-[1.6rem] font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[1.9rem] lg:text-[2.15rem]">
                {slide.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[16px]">
                {slide.sub}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0066cc] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  {slide.ctaLabel}
                  <ArrowUpRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5 rtl:rotate-180" />
                  </button>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition ${
                      i === idx
                        ? "w-9 bg-[#0066cc] shadow-[0_0_0_6px_rgba(0,102,204,0.12)] dark:bg-sky-400 dark:shadow-[0_0_0_6px_rgba(56,189,248,0.15)]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/20 sm:min-h-[260px] lg:min-h-[320px]">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-slate-950/15 to-transparent dark:from-slate-950/70" />

                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between gap-3">
                  <div className="rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-md">
                    Saketh Tech AI Assistant
                  </div>
                  <Link
                    href={slide.ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[13px] font-semibold text-slate-900 shadow-sm transition hover:bg-white dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-900"
                  >
                    Open
                    <ArrowUpRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

