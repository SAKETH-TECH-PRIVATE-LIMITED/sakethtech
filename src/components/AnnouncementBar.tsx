"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function AnnouncementBar() {
  const { t } = useLocale();

  return (
    <div className="relative z-[60] hidden bg-[#002a6e] text-white dark:bg-[#0c1e3d] sm:block">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 text-[13px] font-normal [direction:ltr] sm:px-6 lg:px-8">
        <Link
          href="#capabilities"
          className="group flex items-center gap-1 font-medium tracking-normal transition hover:text-white"
        >
          <span className="hidden sm:inline">{t.announcement}</span>
          <span className="sm:hidden">{t.announcement.slice(0, 42)}…</span>
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:rotate-180" />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-medium text-white/85">
          <Link href="#stories" className="transition hover:text-white">
            {t.stories.label}
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            {t.contact.label}
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            {t.cta.primary}
          </Link>
        </nav>
      </div>
    </div>
  );
}
