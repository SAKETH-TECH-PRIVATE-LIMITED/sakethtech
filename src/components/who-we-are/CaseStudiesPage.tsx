"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, Cpu, LineChart, Shield } from "lucide-react";
import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=88`;
}

const cases = [
  {
    title: "Payment modernization for a FinTech — faster releases, fewer incidents",
    sector: "FinTech · multi-region",
    summary:
      "A scaling payments team hit the classic ceiling: release fear, fragile integrations, and slow feedback loops. We rebuilt the delivery system around contract-first APIs, idempotency, and gold-path CI/CD — then anchored reliability with SLOs, canaries, and measurable rollback discipline.",
    outcomes: ["Faster release cadence with guardrails", "Lower payment error rates via idempotency", "Operational dashboards aligned to SLOs"],
    image: img("photo-1559526324-593bc073d938"),
    icon: LineChart,
  },
  {
    title: "Retail inventory accuracy — from overnight batch to real-time truth",
    sector: "Retail · omni-channel",
    summary:
      "Stock-outs were not a forecasting problem — they were a data-latency problem. We designed an event-driven inventory pipeline that reconciled POS, WMS, and e-commerce signals, surfaced exceptions early, and reduced decision-making from “argue in meetings” to “act on evidence.”",
    outcomes: ["Inventory reconciliation became continuous", "Fewer stock-outs on high-velocity SKUs", "Exception workflow across stores and DCs"],
    image: img("photo-1483985988355-763728e1935b"),
    icon: Building2,
  },
  {
    title: "Enterprise AI copilot — governed, measurable, shippable",
    sector: "Enterprise · regulated environment",
    summary:
      "The requirement was clear: unlock productivity without gambling on data leakage or hallucinations. We implemented retrieval with citations, redaction boundaries, policy gates, and eval harnesses so the assistant could improve safely with every release — and prove it with metrics.",
    outcomes: ["Citations + provenance by design", "PII boundaries enforced pre- and post-generation", "Evaluation reports per capability before rollout"],
    image: img("photo-1677442136019-21780ecad995"),
    icon: Cpu,
  },
  {
    title: "Banking data platform — lineage, access control, audit-ready analytics",
    sector: "Banking · risk & reporting",
    summary:
      "A reporting landscape built on copy-pasted extracts is a liability. We created a governed analytics platform with lineage, RBAC, quality checks, and reproducible pipelines — so regulatory questions could be answered with evidence, not heroics.",
    outcomes: ["Lineage and ownership per dataset", "Repeatable reporting pipelines", "Fewer manual reconciliations in audits"],
    image: img("photo-1551288049-bebda4e38f71"),
    icon: LineChart,
  },
  {
    title: "Logistics visibility — predictable ETAs with resilient integrations",
    sector: "Logistics · partner ecosystem",
    summary:
      "ETAs were unreliable because partner signals were unreliable. We built a resilient integration layer with retries, dedupe, and observable message flows, then layered customer-facing tracking that exposed confidence — not false certainty.",
    outcomes: ["Clear integration SLAs and alerting", "Fewer duplicate/ghost shipment events", "Customer visibility with confidence bands"],
    image: img("photo-1504384308090-c894fdcc538d"),
    icon: Building2,
  },
  {
    title: "Healthcare workflow automation — secure, traceable, compliant delivery",
    sector: "Healthcare · patient operations",
    summary:
      "Automation only matters if it is safe. We delivered workflow automation with strict access, audit trails, and failure modes designed for clinical environments — reducing manual coordination while preserving governance.",
    outcomes: ["Audit trails for every state transition", "Reduced manual coordination overhead", "Security-first delivery for sensitive data"],
    image: img("photo-1580281658628-83f3b8181d9b"),
    icon: Shield,
  },
];

export function CaseStudiesPage({ eyebrow }: { eyebrow?: string }) {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <WhoWeAreSubpageShell
      eyebrow={eyebrow ?? t.nav.whoWeAre}
      title="Case studies — composite programs that mirror how we engage"
      lead="These narratives are illustrative composites (not endorsements) of the architectures, squads, and governance we bring to enterprise programs. Replace them with your sanctioned stories as assets become available."
      heroImageSrc={img("photo-1504384308090-c894fdcc538d")}
      heroImageAlt="Engineering team reviewing delivery metrics"
    >
      <section className="border-b border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-center text-[13px] text-slate-600 dark:text-slate-400" dir={dir}>
            Placeholder catalogue — swap titles, metrics, and imagery when project approvals allow.
          </p>
          <div className="mt-14 flex flex-col gap-16 lg:gap-24">
            {cases.map((c, i) => {
              const Icon = c.icon;
              const imageRight = i % 2 === 1;
              return (
                <article
                  key={c.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                  dir={dir}
                >
                  <div
                    className={`relative aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-slate-700 ${imageRight ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Image
                      src={c.image}
                      alt={`Case study imagery: ${c.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" aria-hidden />
                    <div className="absolute start-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-slate-800 shadow-sm backdrop-blur-md dark:bg-slate-900/90 dark:text-white">
                      <Icon className="h-3.5 w-3.5" />
                      {c.sector}
                    </div>
                  </div>
                  <div className={`min-w-0 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                    <h2 className="font-sans text-xl font-semibold tracking-tight sm:text-2xl">{c.title}</h2>
                    <p className="mt-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{c.summary}</p>
                    <ul className="mt-8 space-y-3 border-s-2 border-[#0066cc]/50 ps-4 dark:border-sky-400/50">
                      {c.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-[14px] font-medium text-slate-800 dark:text-slate-200">
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0066cc] dark:text-sky-400" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
