"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`;
}

const posts = [
  {
    title: "Why Node.js is a serious choice for modern backends",
    date: "Mar 2026",
    read: "8 min",
    excerpt:
      "Event loop mechanics, I/O throughput, and developer velocity — plus the engineering guardrails that make Node.js production-grade at scale.",
    image: img("photo-1559526324-593bc073d938"),
  },
  {
    title: "Why Java still wins for enterprise reliability",
    date: "Mar 2026",
    read: "9 min",
    excerpt:
      "Mature tooling, JVM ergonomics, and predictable performance. Where Java shines — and where modern alternatives may be the better fit.",
    image: img("photo-1558494949-ef010cbdcc31"),
  },
  {
    title: "Why Go is excellent for concurrency (and where it isn’t)",
    date: "Feb 2026",
    read: "7 min",
    excerpt:
      "Goroutines, channels, backpressure, and cancellation. A practical view of building concurrent services without accidental complexity.",
    image: img("photo-1487058792275-0ad4aaf24ca7"),
  },
  {
    title: "When Redis is the right tool (and when it becomes debt)",
    date: "Jan 2026",
    read: "8 min",
    excerpt:
      "Caching, rate limiting, queues, sessions — and the failure modes to design for (evictions, persistence trade-offs, and hot keys).",
    image: img("photo-1518770660439-4636190af475"),
  },
  {
    title: "Scalable architecture: the boring foundations that actually scale",
    date: "Dec 2025",
    read: "10 min",
    excerpt:
      "Capacity modeling, load shedding, queueing, and data partitioning — choosing constraints up front so growth doesn’t become chaos.",
    image: img("photo-1451187580459-43490279c0fa"),
  },
  {
    title: "Microservices: when they help, when they hurt",
    date: "Dec 2025",
    read: "12 min",
    excerpt:
      "Microservices are an org design choice disguised as architecture. A decision framework: domains, deployment, ops maturity, and transaction boundaries.",
    image: img("photo-1551288049-bebda4e38f71"),
  },
  {
    title: "Three-tier architecture: when it’s exactly what you need",
    date: "Nov 2025",
    read: "6 min",
    excerpt:
      "For many enterprise apps, a clean three-tier design is the fastest path to reliability. We cover when to stay simple — and when to evolve.",
    image: img("photo-1522071820081-009f0129c71c"),
  },
  {
    title: "JWT explained: what it is, what it isn’t, and common pitfalls",
    date: "Nov 2025",
    read: "7 min",
    excerpt:
      "Claims, signing, expiry, refresh, and revocation. How to implement JWT without turning security into a checkbox exercise.",
    image: img("photo-1550751827-4bd374c3f58b"),
  },
  {
    title: "Modern API reliability: idempotency, retries, and timeouts",
    date: "Oct 2025",
    read: "9 min",
    excerpt:
      "The difference between “works in staging” and “survives the internet” is the discipline of failure. Patterns that stop cascading retries.",
    image: img("photo-1504384308090-c894fdcc538d"),
  },
  {
    title: "Observability that executives can audit",
    date: "Oct 2025",
    read: "8 min",
    excerpt:
      "Tracing, SLOs, and incident evidence packs — translating telemetry into decisions, governance, and predictable delivery.",
    image: img("photo-1563986768609-322da13575f3"),
  },
  {
    title: "Databases: choosing Postgres, MySQL, or NoSQL without hype",
    date: "Sep 2025",
    read: "11 min",
    excerpt:
      "Consistency needs, data shape, operational complexity, and cost. A pragmatic guide that starts with constraints, not trends.",
    image: img("photo-1518779578993-ec3579fee39f"),
  },
  {
    title: "Security basics that prevent the worst incidents",
    date: "Sep 2025",
    read: "9 min",
    excerpt:
      "Secrets handling, least privilege, secure defaults, and patch cadence — the non-negotiables that keep delivery safe at scale.",
    image: img("photo-1555949963-aa79dcee981c"),
  },
  {
    title: "Cloud cost control that doesn’t break performance",
    date: "Aug 2025",
    read: "7 min",
    excerpt:
      "FinOps is not just discounts. We connect architecture to spend: caching lanes, right-sizing, autoscaling sanity, and retention policies.",
    image: img("photo-1460925895917-afdab827c52f"),
  },
];

export function NewsroomPage() {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <WhoWeAreSubpageShell
      eyebrow={t.nav.whoWeAre}
      title="Newsroom — engineering notes, not buzzwords"
      lead="Short-form technical perspectives from our practice. Placeholder pieces for now — replace with your approved editorial calendar and bylines when ready."
      heroImageSrc={img("photo-1504711434969-e33886168f5c")}
      heroImageAlt="News desk and laptop"
    >
      <section className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2" dir={dir}>
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition hover:border-[#0066cc]/30 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-sky-500/35"
              >
                <div
                  className="relative aspect-[16/9] bg-slate-200 dark:bg-slate-800"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 start-4 flex flex-wrap items-center gap-3 text-[12px] font-medium text-white/95">
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 backdrop-blur-md">{p.date}</span>
                    <span className="flex items-center gap-1 text-white/85">
                      <Clock className="h-3.5 w-3.5" />
                      {p.read}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-sans text-lg font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-[#0066cc] dark:group-hover:text-sky-400">
                    {p.title}
                  </h2>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{p.excerpt}</p>
                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0066cc] dark:text-sky-400"
                  >
                    Discuss this topic with us
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
