"use client";

import { WhoWeAreSubpageShell } from "./WhoWeAreSubpageShell";
import { CareersApplicationForm } from "./CareersApplicationForm";
import { useLocale } from "@/context/LocaleContext";
import { CheckCircle2 } from "lucide-react";

function img(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=88`;
}

export function CareersPage() {
  const { t, locale } = useLocale();
  const f = t.whoWeAreCareersForm;
  const dir = locale === "ar" ? "rtl" : "ltr";

  const perks = [
    "Outcome-oriented squads — architecture, delivery, and operations in one thread",
    "Security and ethics treated as engineering constraints — not late gates",
    "Exposure to regulated and global programs across industries",
    "Mentorship from CTO-track engineers and client-facing architects",
  ];

  return (
    <WhoWeAreSubpageShell
      eyebrow={f.heroEyebrow}
      title={f.heroTitle}
      lead={f.heroSub}
      heroImageSrc={img("photo-1521737711867-e3b97375f902")}
      heroImageAlt="Diverse professionals collaborating in a modern office"
      showClosingCta={false}
    >
      <section className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5" dir={dir}>
              <h2 className="font-sans text-2xl font-semibold tracking-tight">Why join us</h2>
              <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {perks.map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0066cc] dark:text-sky-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/90 bg-white/90 p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900/60 sm:p-10">
                <h2 className="font-sans text-xl font-semibold tracking-tight" dir={dir}>
                  {f.cardTitle}
                </h2>
                <p className="mt-2 text-[14px] text-slate-600 dark:text-slate-400" dir={dir}>
                  {f.cardSub}
                </p>
                <div className="mt-10">
                  <CareersApplicationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071226] py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,102,204,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 70%, rgba(99,102,241,0.3), transparent 55%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1320px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl font-semibold sm:text-3xl" dir={dir}>
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80" dir={dir}>
            {t.cta.sub}
          </p>
        </div>
      </section>
    </WhoWeAreSubpageShell>
  );
}
