"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

type Role = "user" | "assistant";
type ChatMsg = { id: string; role: Role; content: string };

function newId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function AIAssistantWidget() {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDemo, setIsDemo] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const welcome = useMemo<ChatMsg>(
    () => ({ id: newId(), role: "assistant", content: t.aiAssistant.welcome }),
    [t.aiAssistant.welcome],
  );

  const reset = useCallback(() => {
    setInput("");
    setMessages([welcome]);
  }, [welcome]);

  useEffect(() => {
    reset();
  }, [locale, reset]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;
    const tmr = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(tmr);
  }, [open]);

  // Legacy hook removed: search icon now routes to /search like HCLTech.

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: ChatMsg = { id: newId(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const history = [...messages, userMsg].map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = (await res.json()) as { reply?: string; demo?: boolean; error?: string };
      setIsDemo(data.demo === true);
      const reply = typeof data.reply === "string" ? data.reply : data.error ?? t.aiAssistant.error;
      setMessages((prev) => [...prev, { id: newId(), role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { id: newId(), role: "assistant", content: t.aiAssistant.error }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HCL-style strip */}
      <section className="border-y border-slate-200/80 bg-[#eef0f5] py-10 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8" dir={dir}>
          <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-md dark:bg-slate-950/40 dark:ring-slate-700/70">
            <div className="text-center">
              <p className="text-[20px] font-semibold leading-tight text-slate-900 dark:text-white sm:text-[22px]">
                Have tech questions?
              </p>
              <p className="mt-1 text-[15px] text-slate-600 dark:text-slate-300">
                Our AI answer engine can help.
              </p>
            </div>
            <div className="mx-auto mt-6 flex max-w-2xl items-center gap-3">
              <button
                type="button"
                onClick={() => router.push("/search?autoplay=1")}
                className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-md shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-950/40"
                aria-label="Open Saketh Tech AI Assistant"
              >
                <span className="ai-orb absolute inset-[10%] rounded-full" aria-hidden />
                <span className="ai-orb-ring absolute inset-[-18%] opacity-70" aria-hidden />
                <span className="ai-orb-sheen absolute inset-[-10%] opacity-60" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => router.push("/search?autoplay=1")}
                className="group flex h-11 min-w-0 flex-1 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 text-left text-[14px] text-slate-500 shadow-sm transition hover:border-[#0066cc]/40 hover:shadow-md dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-400 dark:hover:border-sky-500/40"
              >
                <span className="truncate">Please ask a question or initiate a search</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-700 transition group-hover:bg-[#0066cc]/10 group-hover:text-[#0066cc] dark:bg-slate-900 dark:text-slate-300 dark:group-hover:bg-sky-500/15 dark:group-hover:text-sky-300">
                  Ask
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ai-orb {
          background: radial-gradient(
              60% 60% at 35% 30%,
              rgba(255, 255, 255, 0.75),
              rgba(255, 255, 255, 0) 55%
            ),
            radial-gradient(
              70% 70% at 70% 75%,
              rgba(124, 58, 237, 0.72),
              rgba(124, 58, 237, 0) 60%
            ),
            radial-gradient(
              85% 85% at 35% 80%,
              rgba(14, 165, 233, 0.62),
              rgba(14, 165, 233, 0) 62%
            );
          filter: saturate(1.25) contrast(1.1);
          transform: translateZ(0);
          animation: aiOrbPulse 2.9s ease-in-out infinite;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.35),
            0 10px 22px -14px rgba(79, 70, 229, 0.55);
        }

        .ai-orb-ring {
          background: conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0) 0deg,
            rgba(124, 58, 237, 0.28) 40deg,
            rgba(255, 255, 255, 0.35) 80deg,
            rgba(255, 255, 255, 0) 140deg,
            rgba(14, 165, 233, 0.22) 210deg,
            rgba(255, 255, 255, 0) 360deg
          );
          filter: blur(0.3px);
          animation: aiOrbSpin 2.7s linear infinite;
        }

        .ai-orb-sheen {
          background: radial-gradient(
            65% 55% at 30% 20%,
            rgba(255, 255, 255, 0.55),
            rgba(255, 255, 255, 0) 58%
          );
          animation: aiOrbDrift 3.6s ease-in-out infinite;
          mix-blend-mode: overlay;
        }

        @keyframes aiOrbPulse {
          0%,
          100% {
            opacity: 0.65;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        @keyframes aiOrbSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aiOrbDrift {
          0%,
          100% {
            transform: translate(-3%, -2%);
            opacity: 0.55;
          }
          50% {
            transform: translate(2%, 2%);
            opacity: 0.9;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-orb,
          .ai-orb-ring,
          .ai-orb-sheen {
            animation: none !important;
          }
        }
      `}</style>

      {/* The assistant experience is now the HCL-style /search page. */}
    </>
  );
}

