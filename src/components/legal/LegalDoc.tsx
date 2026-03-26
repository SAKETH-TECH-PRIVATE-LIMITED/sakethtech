import type { ReactNode } from "react";
import Link from "next/link";

const sectionH2 = "mt-10 text-xl font-semibold text-foreground first:mt-0 sm:text-2xl";
const sectionH3 = "mt-6 text-lg font-semibold text-foreground";
const p = "mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300";
const ul = "mt-3 list-disc space-y-2 ps-6 text-[15px] text-slate-600 dark:text-slate-300";
const updatedCls = "mt-2 text-sm text-slate-500 dark:text-slate-400";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <Link
        href="/"
        className="text-[14px] font-medium text-[#0066cc] hover:underline dark:text-sky-400"
      >
        ← Back to home
      </Link>
      <h1 className="headline-section mt-8 text-3xl text-foreground sm:text-4xl">{title}</h1>
      <p className={updatedCls}>Last updated: {updated}</p>
      <div className="mt-10 border-t border-slate-200 pt-10 dark:border-slate-700">{children}</div>
      <p className={`${p} mt-12 border-t border-slate-200 pt-8 text-[13px] dark:border-slate-700`}>
        These materials are provided for general information. Saketh Tech Private Limited
        recommends independent legal review for your jurisdiction and use case. Questions:{" "}
        <a href="mailto:contact@sakethech.com" className="font-medium text-[#0066cc] dark:text-sky-400">
          contact@sakethech.com
        </a>
        .
      </p>
    </div>
  );
}

export function L({ children }: { children: ReactNode }) {
  return <p className={p}>{children}</p>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className={sectionH2}>{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className={sectionH3}>{children}</h3>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className={ul}>{children}</ul>;
}
