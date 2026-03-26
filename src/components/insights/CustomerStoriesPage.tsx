"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { WhoWeAreSubpageShell } from "@/components/who-we-are/WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`;
}

const stories = [
  {
    title: "“We finally ship without fear.”",
    sector: "Financial services · modernization",
    quote:
      "The biggest change wasn’t just code — it was confidence. Our release process became predictable, our rollback path was rehearsed, and leadership stopped treating delivery as a monthly gamble.",
    highlights: ["SLOs and incident evidence packs", "Contract-first APIs", "Canary releases + feature flags"],
    image: img("photo-1559526324-593bc073d938"),
  },
  {
    title: "“One data truth across teams.”",
    sector: "Manufacturing · analytics platform",
    quote:
      "We moved from spreadsheet debates to governed datasets. The new platform gave ownership, lineage, and quality checks so we could act on numbers instead of arguing about them.",
    highlights: ["Lineage + RBAC", "Quality gates per pipeline", "Audit-ready reporting"],
    image: img("photo-1551288049-bebda4e38f71"),
  },
  {
    title: "“Customer experience stopped depending on heroics.”",
    sector: "Retail · reliability engineering",
    quote:
      "Peak traffic used to be a dread event. With better caching lanes and backpressure, we handle spikes calmly — and our on-call rotation got sustainable again.",
    highlights: ["Cache strategy + hot-key controls", "Load shedding patterns", "Tracing and alert hygiene"],
    image: img("photo-1483985988355-763728e1935b"),
  },
  {
    title: "“We launched AI safely.”",
    sector: "Enterprise · AI governance",
    quote:
      "We wanted the productivity gains of GenAI without risking data leakage. The delivered approach made compliance comfortable — and measurable improvements were visible release by release.",
    highlights: ["RAG with citations", "Policy gates + redaction", "Evaluation harnesses"],
    image: img("photo-1677442136019-21780ecad995"),
  },
];

export function CustomerStoriesPage({ eyebrow }: { eyebrow: string }) {
  const { locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <WhoWeAreSubpageShell
      eyebrow={eyebrow}
      title="Customer stories — proof you can feel"
      lead="Placeholder stories for now. When you share approved clients, metrics, and logos, we will replace these with your real narratives and evidence packs."
      heroImageSrc={img("photo-1522071820081-009f0129c71c")}
      heroImageAlt="Team collaboration and delivery"
    >
      <section className="border-b border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20" dir={dir}>
          <div className="grid gap-10 md:grid-cols-2">
            {stories.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/40"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" aria-hidden />
                  <div className="absolute bottom-4 start-4 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold text-white/95 backdrop-blur-md">
                    {s.sector}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start gap-2">
                    <MessageSquareQuote className="mt-0.5 h-5 w-5 text-[#0066cc] dark:text-sky-400" />
                    <h2 className="font-sans text-lg font-semibold leading-snug tracking-tight">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{s.quote}</p>
                  <ul className="mt-6 space-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[14px] font-medium text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/40">
            <h3 className="text-base font-semibold">Want your story featured?</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
              Share the basics (industry, problem, timeline, and the outcome you can publicly claim). We’ll draft a publish-ready story for approval.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0066cc] dark:text-sky-400"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}

