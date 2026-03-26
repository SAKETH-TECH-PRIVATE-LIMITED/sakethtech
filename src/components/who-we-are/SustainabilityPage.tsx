"use client";

import Image from "next/image";
import { Leaf, Lightbulb, Recycle, Shield } from "lucide-react";
import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`;
}

const pillars = [
  {
    title: "Carbon-aware engineering",
    body: [
      "Sustainability in software is not only solar panels — it is efficient compute, honest autoscaling, and architectures that stop redundant batch work. We bias designs toward measured energy use: right-sized services, caching that reduces fan-out, and data retention policies that match legal need instead of hoarding.",
      "For cloud estates, we pair FinOps discipline with architectural reviews — because waste billed monthly is also emissions deferred accountability.",
    ],
    image: img("photo-1473341304170-971dccb5a1d7"),
    alt: "Wind turbines and renewable energy landscape",
    icon: Leaf,
  },
  {
    title: "Responsible AI and data minimization",
    body: [
      "Model training and inference carry costs — economic and environmental. We treat model choice, context windows, and evaluation cadence as sustainability decisions: ship smaller specialized models where they win; cache retrieval; log only what governance requires.",
      "Data minimization doubles as ethics: less data at rest means less breach surface and less idle storage heating data halls.",
    ],
    image: img("photo-1620712943543-bcc4688e7485"),
    alt: "Abstract neural network technology concept",
    icon: Lightbulb,
  },
  {
    title: "Circular thinking in delivery",
    body: [
      "Reuse beats rewrite when platforms are modular. Shared components, internal open-source patterns, and documented golden paths reduce toil and duplicate compute across programs — a practical form of circularity for engineering organizations.",
      "Decommissioning is a feature: we plan sunset, archival, and legal holds so zombie systems do not silently burn cost and carbon.",
    ],
    image: img("photo-1532996122724-e3c354a0b15f"),
    alt: "Recycling and circular economy materials",
    icon: Recycle,
  },
  {
    title: "People, partners, and long-term trust",
    body: [
      "Sustainable business includes how we work with people — fair contracting where we control it, clear expectations on travel, and safety cultures on client sites. We prefer durable partner ecosystems over disposable subcontractor chains.",
      "Transparency with communities and clients builds the license to operate across borders — especially where environmental and social scrutiny is increasing.",
    ],
    image: img("photo-1542601906990-b4d3fb778b09"),
    alt: "Hands planting greenery environmental stewardship",
    icon: Shield,
  },
];

export function SustainabilityPage({ eyebrow }: { eyebrow?: string }) {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <WhoWeAreSubpageShell
      eyebrow={eyebrow ?? t.nav.whoWeAre}
      title="Sustainability — efficient systems, ethical technology, durable trust"
      lead="Corporate sustainability spans environment, social impact, and governance (ESG). Below is how we translate those ideas into delivery choices — not generic pledges — so clients see the connection between architecture and long-term responsibility."
      heroImageSrc={img("photo-1500382017468-9049fed747ef")}
      heroImageAlt="Green fields landscape symbolizing environmental stewardship"
    >
      <section className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-20 lg:space-y-28">
            {pillars.map((block, i) => {
              const Icon = block.icon;
              const imageLeft = i % 2 === 0;
              return (
                <div
                  key={block.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                  dir={dir}
                >
                  <div
                    className={`relative aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-slate-700 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <Image src={block.image} alt={block.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/35 to-transparent" aria-hidden />
                    <div className="absolute start-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-emerald-700 shadow-md backdrop-blur-sm dark:bg-slate-900/90 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className={`min-w-0 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-[1.65rem]">{block.title}</h2>
                    <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {block.body.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-20 max-w-3xl text-center text-[14px] leading-relaxed text-slate-500 dark:text-slate-400" dir={dir}>
            Narrative synthesized from common ESG and green-IT practice; not a statutory report. We will publish quantitative targets and reporting when your communications and legal teams approve.
          </p>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
