"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { locales, type Locale } from "@/i18n/messages";
import { Tooltip } from "@/components/Tooltip";

const FLAG_BY_LOCALE: Record<Locale, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  ar: "🇦🇪",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, []);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div className="relative" ref={ref}>
      <Tooltip label="Select your language" align="end">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-100/90 hover:text-slate-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
          aria-expanded={open}
          aria-haspopup="listbox"
        >
          <Globe className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
          <span className="hidden text-[15px] leading-none sm:inline" aria-hidden>
            {FLAG_BY_LOCALE[locale]}
          </span>
          <span className="hidden min-w-[2rem] text-start sm:inline">{current.code.toUpperCase()}</span>
          <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </Tooltip>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute end-0 top-full z-[70] mt-2 min-w-[200px] overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 py-1 shadow-xl backdrop-blur-xl dark:border-slate-600/90 dark:bg-slate-900/95"
          >
            {locales.map((l) => (
              <li key={l.code} role="option" aria-selected={locale === l.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(l.code as Locale);
                    setOpen(false);
                  }}
                  className={`flex w-full flex-col items-stretch px-4 py-2.5 text-start text-[13px] transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                    locale === l.code
                      ? "bg-slate-50 font-semibold text-[#0066cc] dark:bg-slate-800/80 dark:text-sky-400"
                      : "font-medium text-slate-700 dark:text-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[15px] leading-none" aria-hidden>
                      {FLAG_BY_LOCALE[l.code as Locale]}
                    </span>
                    <span>{l.native}</span>
                  </span>
                  <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">{l.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
