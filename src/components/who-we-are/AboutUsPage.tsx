"use client";

import Image from "next/image";
import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { useLocale } from "@/context/LocaleContext";

const HERO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=88";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=88`;
}

export function AboutUsPage() {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const leaders = [
    {
      name: "Sarked",
      role: "Chief Executive Officer",
      bio: "Sets company direction, client trust, and portfolio discipline — aligning long-term bets in software, cloud, and AI with the delivery reality of enterprise programs.",
      initials: "S",
    },
    {
      name: "Sai Manikanta Bajawada",
      role: "Chief Technology Officer",
      bio: "Owns technical architecture, security posture, and engineering velocity — from blueprint reviews to production operations and modernization roadmaps.",
      initials: "SB",
    },
    {
      name: "Ramakrishna K",
      role: "Chief Marketing Officer",
      bio: "Shapes how we communicate value, partnerships, and sector narratives — ensuring what we build in the factory matches what the market experiences.",
      initials: "RK",
    },
  ];

  return (
    <WhoWeAreSubpageShell
      eyebrow={t.nav.whoWeAre}
      title="A founder-led partnership model for serious software"
      lead="We combine product craftsmanship with integrator-grade governance. We do not trade ambition for safety — we engineer both: clear accountabilities, measurable releases, and architectures that survive audits, traffic, and time."
      heroImageSrc={HERO}
      heroImageAlt="Leadership and engineering collaboration in a modern office"
    >
      <section className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Executive leadership
          </p>
          <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight sm:text-[1.75rem]" dir={dir}>
            The team accountable for outcomes — not slideware
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <article
                key={l.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 p-8 shadow-sm transition hover:border-[#0066cc]/35 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-sky-500/40"
                dir={dir}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0066cc] to-indigo-600 text-[17px] font-bold text-white shadow-md dark:from-sky-500 dark:to-indigo-600">
                  {l.initials}
                </div>
                <h3 className="mt-6 font-sans text-lg font-semibold text-foreground">{l.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-[#0066cc] dark:text-sky-400">{l.role}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{l.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-slate-700">
            <Image
              src={img("photo-1552664730-d307ca884978")}
              alt="Workshop with team collaboration and whiteboard planning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={88}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/25 to-transparent dark:from-slate-950/35" aria-hidden />
          </div>
          <div dir={dir}>
            <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              How we work with your executives and teams
            </h2>
            <ul className="mt-8 space-y-6 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Defined interfaces.</span>{" "}
                Steering forums, architecture decisions, and release trains are visible — not buried in chat
                threads.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Security as a product requirement.</span>{" "}
                Threat models, data classification, and control evidence are built alongside features — not
                rushed before a review.
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white">Honest capacity.</span>{" "}
                We staff squads for throughput and resilience — not vanity headcount. Scope flexes with evidence,
                not hope.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
