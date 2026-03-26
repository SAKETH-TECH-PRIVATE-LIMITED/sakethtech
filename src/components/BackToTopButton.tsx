"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "@/components/Tooltip";

export function BackToTopButton() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {show ? (
        <div
          className="fixed z-[80] [direction:ltr]"
          style={{
            right: "1.25rem",
            left: "auto",
            bottom: "calc(env(safe-area-inset-bottom) + 4.75rem)",
          }}
        >
          <Tooltip label="Back to top" align="end">
            <motion.button
              type="button"
              aria-label="Back to top"
              onClick={scrollTop}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.96 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-xl shadow-slate-900/10 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-900 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#0066cc]/35 dark:border-white/10 dark:bg-slate-950/80 dark:text-white/80 dark:hover:bg-slate-950 dark:hover:text-white dark:focus:ring-sky-500/35"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden />
            </motion.button>
          </Tooltip>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

