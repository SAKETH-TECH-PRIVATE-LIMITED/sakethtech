"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip } from "@/components/Tooltip";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/50 dark:border-white/15 dark:bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";
  const tip = isDark ? "Light mode" : "Dark mode";

  return (
    <Tooltip label={tip}>
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:hover:bg-white/12 dark:hover:text-white"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <Sun className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
        ) : (
          <Moon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
        )}
      </button>
    </Tooltip>
  );
}
