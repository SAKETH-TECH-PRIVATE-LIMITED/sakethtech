"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLocale } from "@/context/LocaleContext";
import { mediaForSection } from "@/lib/what-we-do-media";

const copyByRoute: Record<string, string> = {
  "/what-we-do/ai-genai": "Engineering intelligent systems with agents, governed workflows, and industry-grade AI.",
  "/what-we-do/applications": "End-to-end delivery for modern web, SaaS, and enterprise applications—built for teams and outcomes.",
  "/what-we-do/cloud": "Cloud platforms engineered for performance, reliability, and secure operations across AWS, Azure, and GCP.",
  "/what-we-do/custom-software":
    "Enterprise platforms spanning ERP, HCM, SCM, CRM, content and analytics, and learning—integrated for measurable outcomes.",
  "/what-we-do/security-digital-platforms":
    "Security-first delivery, digital platform engineering, and compliance programs aligned to GDPR, HIPAA, ISO, SOC 2, and your sector.",
};

/** Short lead + longer body for each scroll section */
const contentByRoute: Record<string, Record<string, { lead: string; body: string }>> = {
  "/what-we-do/ai-genai": {
    "ai-agents": {
      lead: "Autonomous agents that execute tasks across your systems with guardrails.",
      body: "We design agent architectures with clear ownership, tool access policies, and observability so automation scales safely. Delivery includes evaluation harnesses, human-in-the-loop paths for high-impact actions, and runbooks for incidents and drift.",
    },
    "ai-ml": {
      lead: "Production-ready ML pipelines for prediction, optimization, and decision support.",
      body: "From feature stores and training jobs to deployment and monitoring, we embed MLOps practices that fit your stack. We focus on reproducibility, latency budgets, and explainability where stakeholders need to trust the model.",
    },
    "dl-nlp": {
      lead: "Deep learning and NLP for document intelligence, search, and structured extraction.",
      body: "We build retrieval-augmented and fine-tuned experiences for contracts, support, and knowledge bases—with PII-aware preprocessing and evaluation sets that match your domain.",
    },
    "intelligent-workflows": {
      lead: "Automation and intelligent workflows with observability and governance.",
      body: "Orchestration across tools (including n8n-style flows) with idempotency, retries, and audit trails. We connect business events to the right systems while keeping operational visibility for ops and compliance teams.",
    },
    "voice-agents": {
      lead: "Voice agents that combine speech interfaces with real-time context and compliance.",
      body: "Speech-to-intent, streaming responses, and graceful fallback paths—designed for latency-sensitive use cases and regional language needs. Security and logging align with how you treat sensitive conversations and recordings.",
    },
    "industry-ai-solutions": {
      lead: "Industry AI solutions tailored for regulated environments and real operational constraints.",
      body: "We package patterns for your sector—controls, data retention, and evidence—so teams move fast without trading off auditability. Roadmaps tie pilots to measurable KPIs and production cutover criteria.",
    },
  },
  "/what-we-do/applications": {
    "it-consulting-and-advisory": {
      lead: "Architecture, modernization, and delivery planning aligned to your business constraints.",
      body: "Discovery through technical strategy: bounded contexts, integration maps, and phased roadmaps. We align stakeholders on trade-offs, cost of change, and what “done” means for each release train.",
    },
    "saas-applications": {
      lead: "Multi-tenant SaaS built with clean upgrade paths, billing readiness, and strong observability.",
      body: "Tenant isolation, subscription lifecycle, and usage metering are treated as first-class concerns. We help you ship features safely with feature flags, canary releases, and SLOs your customers can feel.",
    },
    "enterprise-application": {
      lead: "Enterprise applications that integrate reliably with core systems and enterprise data.",
      body: "We focus on canonical data, API contracts, and change management across ERP, identity, and line-of-business apps. Delivery emphasizes regression safety, performance under real load, and operability for internal teams.",
    },
  },
  "/what-we-do/cloud": {
    "cloud-native-application": {
      lead: "Cloud-native foundations designed for scale, resilience, and secure operations.",
      body: "Twelve-factor style services, health checks, autoscaling, and graceful degradation patterns. We bake in backup, restore drills, and cost visibility early so growth doesn’t surprise finance or ops.",
    },
    "aws-azure-gcp": {
      lead: "Implementation across AWS, Azure, and GCP with consistent delivery patterns.",
      body: "Landing zones, identity, networking, and shared services—implemented with policy-as-code and repeatable modules. We reduce vendor lock-in risk by abstracting where it matters and going native where it wins.",
    },
    "oracle-support": {
      lead: "Oracle integration support for enterprise workloads and data gravity.",
      body: "Interfaces, migrations, and coexistence strategies that respect batch windows and reconciliation. We align integration design with finance and operations realities, not just technical feasibility.",
    },
    "on-prem-support": {
      lead: "Hybrid and on-premises support for seamless migrations and bounded modernization.",
      body: "Strangler patterns, connectivity, and secure bridges between legacy estates and cloud targets. We plan cutovers with rollback lanes and operational readiness checklists.",
    },
  },
  "/what-we-do/custom-software": {
    erp: {
      lead: "Enterprise resource planning with clear process ownership, integrations, and governed change.",
      body: "Blueprinting for finance, procurement, and operations with integration to satellite systems. We emphasize data migration quality, UAT discipline, and hypercare plans after go-live.",
    },
    hcm: {
      lead: "Human capital management aligned to workforce, payroll, and talent workflows.",
      body: "From core HR to time, payroll interfaces, and talent analytics—configured for policy compliance and audit trails. Self-service and manager experiences are tested against real enterprise edge cases.",
    },
    scm: {
      lead: "Supply chain management for visibility, planning, and operational automation.",
      body: "Demand, inventory, and supplier orchestration with exception handling your planners actually use. Integrations to WMS/TMS and ERP are modeled for latency, idempotency, and reconciliation.",
    },
    crm: {
      lead: "Customer relationship management for pipeline intelligence, service, and retention.",
      body: "Lead-to-cash and service workflows with clean customer 360 boundaries. We integrate marketing, sales, and support tooling without creating duplicate sources of truth.",
    },
    "cms-bi": {
      lead: "Content management systems and business intelligence—unified publishing, reporting, and decision support.",
      body: "Editorial workflows, access control, and omnichannel delivery paired with governed semantic layers for dashboards. Performance and freshness SLAs are defined for business-critical reports.",
    },
    lms: {
      lead: "Learning management systems with curricula, tracking, and scalable delivery.",
      body: "Course structures, assessments, completion reporting, and integrations to HRIS or compliance systems. Accessibility and multi-device consumption are validated against your learner base.",
    },
  },
  "/what-we-do/security-digital-platforms": {
    "cyber-security-shielding": {
      lead: "Cybersecurity engineering focused on threat modeling, hardening, and continuous control validation.",
      body: "Secure SDLC hooks, dependency and secrets hygiene, and layered defenses for internet-facing workloads. We tie controls to risk registers and testing evidence your auditors and boards expect.",
    },
    "digital-engineering": {
      lead: "Digital engineering for product experiences with measurable reliability and performance.",
      body: "Front-end architecture, API design, and SLIs/SLOs that connect user journeys to backend health. Progressive delivery and observability keep releases boring—in a good way.",
    },
    "platform-engineering": {
      lead: "Platform engineering that enables teams to ship safely with repeatable, governed infrastructure.",
      body: "Golden paths, service templates, and policy guardrails reduce cognitive load for product teams. Cost, security, and compliance baselines are baked into the platform—not bolted on per repo.",
    },
    "gdpr-compliance": {
      lead: "GDPR-aligned privacy by design: DPIAs, lawful basis, and processor accountability.",
      body: "Data inventory, retention schedules, and subject-right workflows operationalized in product and ops. We help you evidence technical and organizational measures proportionate to processing risk.",
    },
    "hipaa-compliance": {
      lead: "HIPAA-oriented safeguards for PHI handling, access control, and audit readiness.",
      body: "Minimum necessary access, encryption in transit and at rest, and breach response rehearsals. BAAs, logging, and workforce training are reflected in how systems are actually built and run.",
    },
    "iso-27001": {
      lead: "ISO 27001-style ISMS patterns and security governance for enterprise and regulated contexts.",
      body: "Risk treatment plans, control mapping, and continuous improvement cycles. We connect policy to tooling: access reviews, vulnerability management, and incident response metrics leadership can review.",
    },
    "soc-2-type-ii": {
      lead: "SOC 2 Type II readiness: controls design, evidence collection, and continuous monitoring.",
      body: "Trust services criteria translated into technical controls and operating evidence. Change management, access reviews, and logging narratives are kept audit-friendly without slowing delivery unnecessarily.",
    },
    "other-compliance-frameworks": {
      lead: "PCI DSS, regional privacy laws, and sector frameworks mapped to your stack and operating model.",
      body: "We prioritize scope reduction, compensating controls where appropriate, and defensible roadmaps. Multi-framework overlap is rationalized so teams aren’t duplicating work for every assessment.",
    },
  },
};

function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return href;
  return href.slice(hashIndex + 1);
}

type MegaSection = { heading: string; items: { label: string; href: string }[] };

export function WhatWeDoCategoryPage({ routePrefix }: { routePrefix: string }) {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const reduceMotion = useReducedMotion();

  const sections = useMemo(() => {
    const out: MegaSection[] = [];
    for (const col of t.mega.columns) {
      for (const g of col.groups) {
        const matched = g.items.filter((it) => it.href.startsWith(routePrefix));
        if (matched.length > 0) {
          out.push({ heading: g.heading, items: matched });
        }
      }
    }
    return out;
  }, [t.mega.columns, routePrefix]);

  const title = sections[0]?.heading ?? "What we do";
  const pageCopy = copyByRoute[routePrefix] ?? "";
  const contentMap = contentByRoute[routePrefix] ?? {};

  const allItems = useMemo(() => sections.flatMap((s) => s.items), [sections]);

  const [activeId, setActiveId] = useState(() =>
    allItems.length ? getHashId(allItems[0].href) : "",
  );

  const tablistRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const scrollToId = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      try {
        void window.history.replaceState(null, "", `#${id}`);
      } catch {
        /* ignore */
      }
      setActiveId(id);
    },
    [reduceMotion],
  );

  useEffect(() => {
    if (!allItems.length) return;
    const hash = typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    const firstId = getHashId(allItems[0].href);
    const target =
      hash && allItems.some((it) => getHashId(it.href) === hash) ? hash : firstId;
    setActiveId(target);
    queueMicrotask(() => {
      if (hash && document.getElementById(hash)) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
  }, [allItems]);

  /** Scroll-spy */
  useEffect(() => {
    const ids = allItems.map((it) => getHashId(it.href));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const sorted = [...visible].sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = sorted[0]?.target.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-14% 0px -50% 0px",
        threshold: [0, 0.08, 0.15, 0.25, 0.35, 0.5, 0.65, 0.8, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [allItems]);

  /** Keep active tab visible in horizontal bar */
  useEffect(() => {
    const btn = tabRefs.current.get(activeId);
    if (!btn || !tablistRef.current) return;
    btn.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId, reduceMotion]);

  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>, ids: string[], index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? Math.min(index + 1, ids.length - 1)
        : Math.max(index - 1, 0);
    const id = ids[next];
    scrollToId(id);
    tabRefs.current.get(id)?.focus();
  };

  const ids = allItems.map((it) => getHashId(it.href));

  return (
    <div className="relative bg-background text-foreground">
      {/* Intro (below global header) */}
      <div className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse_55%_40%_at_20%_0%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(ellipse_50%_45%_at_90%_80%, rgba(0,102,204,0.14), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-12">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0066cc] dark:text-sky-400">
              {t.nav.whatWeDo}
            </p>
            <h1 className="headline-section mt-3 font-sans text-[2rem] sm:text-2xl lg:text-[2.35rem]">
              {title}
            </h1>
            {pageCopy ? (
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {pageCopy}
              </p>
            ) : null}
          </Reveal>
        </div>
      </div>

      {/* Sticky sub-nav (scroll spy) */}
      <div
        className="sticky z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90"
        style={{ top: "var(--header-nav-overlap)" }}
      >
        <div className="mx-auto max-w-[1320px] px-2 sm:px-4">
          <div
            ref={tablistRef}
            role="tablist"
            aria-label={title}
            className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:thin] sm:gap-2"
            onKeyDown={(e) => {
              const i = ids.indexOf(activeId);
              if (i < 0) return;
              onTabKeyDown(e, ids, i);
            }}
          >
            {allItems.map((it) => {
              const id = getHashId(it.href);
              const selected = id === activeId;
              return (
                <button
                  key={it.href}
                  ref={(el) => {
                    if (el) tabRefs.current.set(id, el);
                    else tabRefs.current.delete(id);
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={selected}
                  aria-controls={id}
                  tabIndex={selected ? 0 : -1}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-left text-[13px] font-semibold transition sm:px-4 sm:text-[14px] ${
                    selected
                      ? "bg-[#0066cc] text-white shadow-md shadow-blue-900/15 dark:bg-sky-500"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                  }`}
                  onClick={() => scrollToId(id)}
                >
                  {it.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sections: image + content, repeating */}
      <div className="bg-background">
        {allItems.map((it, index) => {
          const id = getHashId(it.href);
          const copy = contentMap[id];
          const media = mediaForSection(id);
          const isEven = index % 2 === 0;

          return (
            <section
              key={it.href}
              id={id}
              role="tabpanel"
              aria-labelledby={`tab-${id}`}
              className="scroll-mt-[calc(var(--header-nav-overlap)+5.5rem)] border-b border-slate-200/80 dark:border-slate-800"
            >
              <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
                <div
                  className={`relative aspect-[16/11] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800/50 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={88}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent dark:from-slate-950/40"
                    aria-hidden
                  />
                </div>

                <div
                  className={`min-w-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  dir={textDir}
                >
                  <h2 className="font-sans text-2xl font-semibold text-foreground sm:text-[1.75rem]">
                    {it.label}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {copy?.lead ??
                      "Capability module built for enterprise delivery and measurable outcomes."}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                    {copy?.body ??
                      "We scope discovery, architecture, and incremental delivery with your teams—security, performance, and operability treated as first-class outcomes, not late add-ons."}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="border-t border-slate-200/80 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#0066cc] px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#0058b3] dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            {t.nav.talkArchitect}
          </a>
        </div>
      </div>
    </div>
  );
}
