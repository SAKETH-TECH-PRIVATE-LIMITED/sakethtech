"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const STORAGE_KEY = "saketh-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="fixed bottom-0 start-0 end-0 z-[120] border-t border-slate-200/90 bg-white/95 p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto flex max-w-[1320px] flex-col gap-4 [direction:ltr] lg:flex-row lg:items-center lg:justify-between">
            <p
              dir={textDir}
              className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {t.cookie.text}{" "}
              <Link href="/privacy" className="font-semibold text-[#0066cc] hover:underline dark:text-sky-400">
                {t.cookie.privacy}
              </Link>
              <span className="text-slate-400 dark:text-slate-500"> · </span>
              <Link href="/cookies" className="font-semibold text-[#0066cc] hover:underline dark:text-sky-400">
                {t.cookie.cookiesPolicy}
              </Link>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={reject}
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-bold text-slate-800 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                {t.cookie.reject}
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center gap-1 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-[13px] font-bold text-white transition hover:bg-slate-800 dark:border-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                {t.cookie.accept}
                <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
