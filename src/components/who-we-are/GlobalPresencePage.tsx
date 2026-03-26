"use client";

import Image from "next/image";
import { Globe2, MapPin } from "lucide-react";
import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=88`;
}

const markets = [
  { code: "CA", name: "Canada", note: "Enterprise SaaS, public-sector-adjacent programs" },
  { code: "AU", name: "Australia", note: "Cloud migrations and regulated data handling" },
  { code: "AE", name: "United Arab Emirates", note: "Regional HQ interest and digital services" },
  { code: "US", name: "United States", note: "Product engineering and scale-out platforms" },
  { code: "DE", name: "Germany", note: "Manufacturing, automotive, and Industrie 4.0 adjacency" },
  { code: "CH", name: "Switzerland", note: "Precision industries and finance-adjacent delivery" },
  { code: "SG", name: "Singapore", note: "APAC hub programs and regional rollouts" },
];

export function GlobalPresencePage() {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <WhoWeAreSubpageShell
      eyebrow={t.nav.whoWeAre}
      title="Global presence — where clients entrust us with outcomes"
      lead="We operate as a distributed engineering company with deep programs across North America, Europe, the Middle East, Asia-Pacific, and Oceania. The list below reflects representative client footprints — not a literal office directory."
      heroImageSrc={img("photo-1526778548025-fa2f459cd5c1")}
      heroImageAlt="World map and global connectivity abstract"
    >
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.12]">
          <Image
            src={img("photo-1451187580459-43490279c0fa")}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#0066cc] dark:text-sky-400" dir={dir}>
            <Globe2 className="h-4 w-4" />
            Representative markets
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {markets.map((m) => (
              <div
                key={m.code}
                className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70"
                dir={dir}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400">{m.code}</p>
                    <h3 className="mt-1 font-sans text-lg font-semibold text-foreground">{m.name}</h3>
                  </div>
                  <MapPin className="h-5 w-5 shrink-0 text-[#0066cc]/70 dark:text-sky-400/80" />
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{m.note}</p>
              </div>
            ))}
            <div
              className="flex min-h-[180px] flex-col justify-center rounded-2xl border-2 border-dashed border-slate-300/90 bg-slate-50/80 p-6 dark:border-slate-600 dark:bg-slate-900/30"
              dir={dir}
            >
              <h3 className="font-sans text-lg font-semibold text-foreground">And beyond</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                Remote-first delivery and partner networks allow us to support teams across additional regions —
                ask about your geography and sector constraints.
              </p>
            </div>
          </div>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
