"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Cloud, Code2, Send, Shield, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

type Role = "user" | "assistant";

type ChatMsg = {
  id: string;
  role: Role;
  content: string;
};

const BTN_PRIMARY =
  "bg-white text-[#0066cc] shadow-md shadow-indigo-950/20 hover:bg-slate-100 dark:bg-white dark:text-[#0066cc] dark:hover:bg-slate-100";

const USER_BUBBLE =
  "bg-gradient-to-br from-[#0066cc] to-[#4f46e5] text-white shadow-md shadow-[#312e81]/25";

function newId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function SideIllustration({ align }: { align: "start" | "end" }) {
  const isStart = align === "start";
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2] ${isStart ? "-scale-x-100 rtl:scale-x-100" : ""}`}
      aria-hidden
    >
      <svg className="h-full w-full" viewBox="0 0 200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`glow-${align}`} x1="0" y1="0" x2="200" y2="320">
            <stop stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M20 40C60 20 100 80 140 60C180 40 200 100 180 160C160 220 120 240 80 260C40 280 10 220 20 160C30 100 0 60 20 40Z"
          fill={`url(#glow-${align})`}
        />
        <circle cx="160" cy="48" r="4" fill="#0066cc" fillOpacity="0.6" />
        <circle cx="44" cy="200" r="3" fill="#7c3aed" fillOpacity="0.5" />
        <circle cx="120" cy="260" r="2.5" fill="#0ea5e9" fillOpacity="0.45" />
      </svg>
    </div>
  );
}

export function AIAssistantSection() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDemo, setIsDemo] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  const seedWelcome = useCallback(() => {
    setMessages([{ id: newId(), role: "assistant", content: t.aiAssistant.welcome }]);
  }, [t.aiAssistant.welcome]);

  useEffect(() => {
    seedWelcome();
  }, [locale, seedWelcome]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const sideIcons = [Code2, Cloud, Shield] as const;
  const serviceHighlights = t.services.items.slice(0, 3);
  const metricHighlights = t.metrics.m.slice(0, 2);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: ChatMsg = { id: newId(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const history = [...messages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });
      const data = (await res.json()) as { reply?: string; demo?: boolean; error?: string };
      if (data.demo === true) setIsDemo(true);
      else setIsDemo(false);
      const reply =
        typeof data.reply === "string"
          ? data.reply
          : data.error ?? t.aiAssistant.error;
      setMessages((prev) => [...prev, { id: newId(), role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: newId(), role: "assistant", content: t.aiAssistant.error },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="ai-assistant"
      className="relative scroll-mt-24 overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-[#eef0ff]/90 via-[#f6f7fb] to-white py-16 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 sm:py-20"
      aria-labelledby="ai-assistant-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_15%_20%,rgba(99,102,241,0.14),transparent),radial-gradient(ellipse_50%_45%_at_90%_75%,rgba(37,99,235,0.12),transparent)] dark:opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -start-32 top-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-400/25 to-blue-400/20 blur-3xl dark:from-violet-600/20 dark:to-blue-600/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -end-24 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/25 blur-3xl dark:from-blue-600/15 dark:to-indigo-600/20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 [direction:ltr]">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left column — capabilities */}
          <aside className="relative hidden order-2 flex-col justify-center gap-4 lg:order-1 lg:col-span-3 lg:flex">
            <SideIllustration align="start" />
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-lg shadow-indigo-950/5 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/50">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#5b21b6] dark:text-violet-400">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {t.services.label}
              </p>
              <ul className="mt-4 space-y-3">
                {serviceHighlights.map((item, i) => {
                  const Icon = sideIcons[i] ?? Bot;
                  return (
                    <li
                      key={item.title}
                      dir={textDir}
                      className="flex gap-3 rounded-xl border border-slate-100/90 bg-white/90 px-3 py-3 dark:border-slate-700/60 dark:bg-slate-800/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0066cc] to-[#4f46e5] text-white shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-semibold text-foreground">{item.title}</span>
                        <span className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-slate-600 dark:text-slate-400">
                          {item.desc}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Center — chat */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-12px_rgba(79,70,229,0.2)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#5b21b6] via-[#4f46e5] to-[#2563eb] px-5 py-4 dark:from-[#312e81] dark:via-[#3730a3] dark:to-[#1e40af]">
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,transparent_50%)]"
                  aria-hidden
                />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
                      <Bot className="h-6 w-6 text-white" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0" dir={textDir}>
                      <h2
                        id="ai-assistant-heading"
                        className="font-sans text-[1.05rem] font-bold tracking-tight text-white sm:text-[1.125rem]"
                      >
                        {t.aiAssistant.title}
                      </h2>
                      <p className="mt-1 text-[13px] font-normal leading-snug text-white/85">
                        {t.aiAssistant.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setInput("");
                      seedWelcome();
                    }}
                    className={`shrink-0 rounded-lg px-3.5 py-2 text-[13px] font-semibold transition ${BTN_PRIMARY}`}
                  >
                    {t.aiAssistant.reset}
                  </button>
                </div>
              </div>

              <div
                ref={listRef}
                className="max-h-[min(420px,55vh)] min-h-[280px] overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white px-4 py-5 dark:from-slate-900 dark:to-slate-900"
              >
                <ul className="flex flex-col gap-3">
                  {messages.map((m) => (
                    <li
                      key={m.id}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        dir={textDir}
                        className={`max-w-[88%] rounded-xl px-4 py-2.5 text-[14px] leading-relaxed sm:max-w-[82%] ${
                          m.role === "user"
                            ? USER_BUBBLE
                            : "border border-slate-200/90 bg-white text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-100"
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{m.content}</p>
                      </div>
                    </li>
                  ))}
                  {loading ? (
                    <li className="flex justify-start">
                      <div
                        className="rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-[14px] text-slate-500 shadow-sm dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-400"
                        dir={textDir}
                      >
                        {t.aiAssistant.thinking}
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>

              <div className="border-t border-slate-200/90 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                {isDemo ? (
                  <p
                    className="mb-3 text-center text-[11px] text-slate-500 dark:text-slate-400"
                    dir={textDir}
                  >
                    {t.aiAssistant.demoHint}
                  </p>
                ) : null}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        void send();
                      }
                    }}
                    placeholder={t.aiAssistant.placeholder}
                    dir={textDir}
                    disabled={loading}
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 ring-[#0066cc]/20 focus:border-[#0066cc]/70 focus:ring-2 focus:ring-[#0066cc]/30 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-500 dark:focus:ring-sky-500/30"
                  />
                  <button
                    type="button"
                    onClick={() => void send()}
                    disabled={loading || !input.trim()}
                    aria-label={t.aiAssistant.sendAria}
                    className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0066cc] to-[#4f46e5] text-white shadow-md shadow-indigo-900/25 transition hover:brightness-110 disabled:opacity-45 dark:from-sky-500 dark:to-indigo-600"
                  >
                    <Send className="h-5 w-5 rtl:rotate-180" strokeWidth={2.25} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — metrics / insight */}
          <aside className="relative order-3 hidden flex-col justify-center gap-4 lg:col-span-3 lg:flex">
            <SideIllustration align="end" />
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-lg shadow-indigo-950/5 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/50">
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0066cc] dark:text-sky-400">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {t.metrics.title}
              </p>
              <ul className="mt-4 space-y-3">
                {metricHighlights.map(([stat, rest], i) => (
                  <li
                    key={i}
                    dir={textDir}
                    className="rounded-xl border border-slate-100/90 bg-gradient-to-br from-white to-[#f0f4ff]/80 px-4 py-3 dark:border-slate-700/60 dark:from-slate-800/50 dark:to-slate-900/50"
                  >
                    <p className="font-sans text-2xl font-bold tabular-nums text-[#4f46e5] dark:text-sky-400">
                      {stat}
                    </p>
                    <p className="mt-1 text-[12px] font-normal leading-snug text-slate-600 dark:text-slate-400">
                      {rest}
                    </p>
                  </li>
                ))}
              </ul>
              <div
                className="mt-4 flex flex-wrap gap-2 border-t border-slate-200/80 pt-4 dark:border-slate-700/80"
                dir={textDir}
              >
                <span className="rounded-full bg-[#0066cc]/10 px-3 py-1 text-[11px] font-semibold text-[#0066cc] dark:bg-sky-500/15 dark:text-sky-300">
                  ERP
                </span>
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-[11px] font-semibold text-violet-700 dark:bg-violet-400/15 dark:text-violet-300">
                  Gen AI
                </span>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:bg-sky-400/20 dark:text-sky-300">
                  Cloud
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile: compact highlights below chat */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden">
          {serviceHighlights.slice(0, 2).map((item, i) => {
            const Icon = sideIcons[i] ?? Bot;
            return (
              <div
                key={item.title}
                dir={textDir}
                className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-3 dark:border-slate-700 dark:bg-slate-900/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0066cc] to-[#4f46e5] text-white">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="min-w-0 text-[13px] font-semibold text-foreground">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
