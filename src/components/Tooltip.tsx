"use client";

import type { ReactNode } from "react";

export function Tooltip({
  label,
  children,
  align = "center",
  wrapperClassName = "",
}: {
  label: string;
  children: ReactNode;
  align?: "start" | "center" | "end";
  wrapperClassName?: string;
}) {
  const alignClass =
    align === "start"
      ? "start-0"
      : align === "end"
        ? "end-0"
        : "left-1/2 -translate-x-1/2";

  return (
    <span className={`group/tt relative inline-flex ${wrapperClassName}`}>
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute ${alignClass} top-full z-[120] mt-2 whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-3 py-1.5 text-[12px] font-medium text-slate-700 opacity-0 shadow-lg shadow-slate-900/10 backdrop-blur-md transition duration-150 group-hover/tt:opacity-100 group-focus-within/tt:opacity-100 dark:border-white/10 dark:bg-slate-950/90 dark:text-white/85`}
      >
        {label}
      </span>
    </span>
  );
}

