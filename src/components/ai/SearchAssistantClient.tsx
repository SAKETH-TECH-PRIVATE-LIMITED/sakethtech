"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Mic, Search, X, Volume2, VolumeX } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { SearchOrb } from "./SearchOrb";
import { Tooltip } from "@/components/Tooltip";

type Phase = "idle" | "layering" | "retrieving" | "done" | "error";

function phaseLabel(phase: Phase): string {
  switch (phase) {
    case "layering":
      return "Layering the prompt…";
    case "retrieving":
      return "Retrieving the relevance…";
    default:
      return "";
  }
}

export function SearchAssistantClient() {
  const { t, locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const router = useRouter();
  const sp = useSearchParams();

  const initial = (sp.get("query") ?? "").trim();
  const [query, setQuery] = useState(initial);
  const [phase, setPhase] = useState<Phase>(initial ? "layering" : "idle");
  const [answer, setAnswer] = useState<string>("");
  const [isDemo, setIsDemo] = useState<boolean>(false);
  const [ttsMuted, setTtsMuted] = useState<boolean>(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [listening, setListening] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const recRef = useRef<any>(null);

  const topCrumbs = useMemo(() => ["Home", "Search"], []);

  useEffect(() => {
    const q = (sp.get("query") ?? "").trim();
    setQuery(q);
    if (!q) {
      setPhase("idle");
      setAnswer("");
      return;
    }
    let cancelled = false;
    setAnswer("");
    setPhase("layering");

    const t1 = window.setTimeout(() => {
      if (!cancelled) setPhase("retrieving");
    }, 800);

    (async () => {
      try {
        const res = await fetch("/api/ai-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: q, history: [] }),
        });
        const data = (await res.json()) as { reply?: string; demo?: boolean; error?: string };
        if (cancelled) return;
        setIsDemo(data.demo === true);
        const txt = typeof data.reply === "string" ? data.reply : data.error ?? t.aiAssistant.error;
        setAnswer(txt);
        setPhase("done");
      } catch {
        if (cancelled) return;
        setPhase("error");
        setAnswer(t.aiAssistant.error);
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(t1);
    };
  }, [sp, t.aiAssistant.error]);

  useEffect(() => {
    const tmr = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(tmr);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    const synth = window.speechSynthesis;
    const load = () => {
      try {
        const v = synth.getVoices?.() ?? [];
        if (v.length) setVoices(v);
      } catch {
        // ignore
      }
    };

    load();
    synth.addEventListener?.("voiceschanged", load);
    return () => synth.removeEventListener?.("voiceschanged", load);
  }, []);

  function pickBestIndianEnglishFemaleVoice(vs: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
    const all = vs.filter(Boolean);
    const enAll = all.filter((v) => (v.lang ?? "").toLowerCase().startsWith("en"));
    const enIN = all.filter((v) => (v.lang ?? "").toLowerCase().startsWith("en-in"));
    const text = (v: SpeechSynthesisVoice) =>
      `${v.name ?? ""} ${v.voiceURI ?? ""} ${v.lang ?? ""}`.toLowerCase();

    // Strong matches first (common “high quality” system voices)
    const preferredNameHints = [
      // Common Indian English voices on Windows/Edge
      "heera",
      "swara",
      "ravi",
      "priya",
      // Any engine that explicitly says India/Indian
      "india",
      "indian",
      "siri",
      "samantha",
      "ava",
      "victoria",
      "serena",
      "karen",
      "tessa",
      "moira",
      "zoe",
      "allison",
      "google us english",
      "microsoft aria",
      "microsoft jenny",
      "microsoft natasha",
      "microsoft sara",
    ];

    const prefer = (list: SpeechSynthesisVoice[]) => {
      for (const hint of preferredNameHints) {
        const found = list.find((v) => text(v).includes(hint));
        if (found) return found;
      }
      return undefined;
    };

    // Many engines don’t expose gender; use name heuristics as best-effort.
    const femaleHints = ["female", "woman", "girl", "samantha", "ava", "victoria", "serena", "karen", "tessa", "moira", "zoe", "allison", "aria", "jenny", "natasha", "sara"];
    const likelyFemaleIN = enIN.filter((v) => femaleHints.some((h) => text(v).includes(h)) || text(v).includes("heera") || text(v).includes("swara") || text(v).includes("priya"));
    const likelyFemaleEN = enAll.filter((v) => femaleHints.some((h) => text(v).includes(h)));

    return (
      prefer(likelyFemaleIN) ??
      prefer(enIN) ??
      prefer(likelyFemaleEN) ??
      prefer(enAll) ??
      enIN.find((v) => v.default) ??
      enIN[0] ??
      enAll.find((v) => v.default) ??
      enAll[0] ??
      all.find((v) => v.default) ??
      all[0]
    );
  }

  // Load persisted mute preference (session-scoped).
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const v = window.sessionStorage.getItem("saketh-ai-tts-muted");
      if (v === "1") setTtsMuted(true);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem("saketh-ai-tts-muted", ttsMuted ? "1" : "0");
    } catch {
      // ignore
    }
  }, [ttsMuted]);

  function speakIntro(opts?: { onStart?: () => void; onError?: () => void }) {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;
    if (ttsMuted) return;
    try {
      const synth = window.speechSynthesis;
      synth.cancel();
      // Some browsers pause the synth until resumed after navigation.
      try {
        synth.resume();
      } catch {
        // ignore
      }
      const msg =
        "Welcome to Saketh Tech. I am the AI Assistant for Saketh Tech. You can type your questions in the search bar below.";
      const u = new SpeechSynthesisUtterance(msg);
      u.onstart = () => opts?.onStart?.();
      u.onerror = () => opts?.onError?.();
      const fallbackVoices = (() => {
        try {
          return synth.getVoices?.() ?? [];
        } catch {
          return [];
        }
      })();
      const pick = pickBestIndianEnglishFemaleVoice(voices.length ? voices : fallbackVoices);
      if (pick) u.voice = pick;
      u.lang = "en-IN";
      // tuned for “clear diction”
      u.rate = 0.95;
      u.pitch = 1.06;
      u.volume = 1;
      synth.speak(u);
    } catch {
      // Ignore TTS failures (browser restrictions / no voices).
      opts?.onError?.();
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (phase !== "idle") return;
    if (query) return;

    const autoplay = sp.get("autoplay") === "1";
    if (!autoplay) return;

    const key = "saketh-ai-intro-played";
    const already = window.sessionStorage.getItem(key) === "1";
    if (already) return;

    let finished = false;
    const markPlayed = () => {
      if (finished) return;
      finished = true;
      try {
        window.sessionStorage.setItem(key, "1");
      } catch {
        // ignore
      }
    };

    const tryPlay = () => {
      if (finished) return;
      if (ttsMuted) return;
      speakIntro({
        onStart: () => {
          markPlayed();
          cleanup();
        },
        onError: () => {
          // If it fails, allow the next user interaction to trigger again.
        },
      });
    };

    const onInteract = () => {
      // First real user gesture after navigation almost always allows TTS.
      tryPlay();
    };

    // Attempt shortly after navigation (works in many browsers).
    const tmr = window.setTimeout(tryPlay, 250);

    // And also keep listening until it actually starts.
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);

    const cleanup = () => {
      window.clearTimeout(tmr);
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };

    return cleanup;
  }, [phase, query, sp, locale, ttsMuted]);

  function submit() {
    const q = query.trim();
    if (!q) return;
    router.push(`/search?query=${encodeURIComponent(q)}`);
  }

  function toggleSpeechToText() {
    if (typeof window === "undefined") return;
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    try {
      if (listening && recRef.current) {
        try {
          recRef.current.stop?.();
        } catch {}
        recRef.current = null;
        setListening(false);
        return;
      }

      const rec = new SR();
      rec.lang = "en-IN";
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      setListening(true);
      recRef.current = rec;

      rec.onresult = (e: any) => {
        const result = e.results?.[e.resultIndex];
        const transcript = result?.[0]?.transcript;
        if (typeof transcript === "string") setQuery(transcript.trimStart());
        if (result?.isFinal) {
          setListening(false);
          try {
            rec.stop();
          } catch {}
        }
      };
      rec.onerror = () => {
        recRef.current = null;
        setListening(false);
      };
      rec.onend = () => {
        recRef.current = null;
        setListening(false);
      };
      rec.start();
    } catch {
      recRef.current = null;
      setListening(false);
    }
  }

  return (
    <section className="min-h-[calc(100dvh-9rem)] bg-[#eef0f5] dark:bg-slate-950">
      <div className="mx-auto max-w-[1320px] px-4 pb-24 pt-8 sm:px-6 lg:px-8" dir={dir}>
        <div className="flex items-start justify-between gap-4">
          <div className="text-[12px] text-slate-500 dark:text-slate-400">
            {topCrumbs.join(" > ")}
          </div>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-full bg-white/70 p-2 text-slate-500 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-md transition hover:text-slate-800 dark:bg-slate-900/40 dark:text-slate-300 dark:ring-slate-700 dark:hover:text-white"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10">
          {/* Query line */}
          {query ? (
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <SearchOrb size={22} />
              <p className="text-[16px] font-medium">{query}</p>
            </div>
          ) : null}

          {/* Idle state (before first query): centered orb only */}
          {phase === "idle" ? (
            <div className="relative flex min-h-[calc(100dvh-22rem)] items-center justify-center">
              <SearchOrb size={140} />
              <div className="absolute top-0 end-0">
                <Tooltip label={ttsMuted ? "Unmute voice" : "Mute voice"} align="end">
                  <button
                    type="button"
                    onClick={() => {
                      setTtsMuted((m) => !m);
                      try {
                        window.speechSynthesis?.cancel?.();
                      } catch {}
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-white/70 p-2 text-slate-600 shadow-sm ring-1 ring-slate-200/70 backdrop-blur-md transition hover:text-slate-900 dark:bg-slate-900/40 dark:text-slate-200 dark:ring-slate-700 dark:hover:text-white"
                    aria-label={ttsMuted ? "Unmute voice" : "Mute voice"}
                  >
                    {ttsMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </Tooltip>
              </div>
            </div>
          ) : null}

          {/* Center loader (HCL-style) */}
          {phase === "layering" || phase === "retrieving" ? (
            <div className="mt-24 flex flex-col items-center justify-center">
              <SearchOrb size={54} />
              <p className="mt-4 text-[12px] text-slate-500 dark:text-slate-400">
                {phaseLabel(phase)}
              </p>
            </div>
          ) : null}

          {/* Answer */}
          {phase === "done" || phase === "error" ? (
            <div className="mt-6 max-w-3xl text-[13px] leading-relaxed text-slate-700 dark:text-slate-200">
              <p className="whitespace-pre-wrap">{answer}</p>
              <p className="mt-3 text-[12px] text-slate-500 dark:text-slate-400">
                {isDemo ? "Demo mode response — connect n8n for live answers." : null}
              </p>
              <p className="mt-4 text-[12px] text-slate-500 dark:text-slate-400">
                Need human help?{" "}
                <Link href="/#contact" className="font-semibold text-[#0066cc] dark:text-sky-400">
                  Contact Us
                </Link>
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* Bottom sticky bar (HCL-style) */}
      <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-slate-200/70 bg-[#eef0f5]/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8" dir={dir}>
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-700/70">
            <SearchOrb size={26} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Please ask a question or initiate a search"
              className="min-w-0 flex-1 bg-transparent text-[13px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            <Tooltip label={listening ? "Stop listening" : "Use voice input"} align="end">
              <button
                type="button"
                onClick={toggleSpeechToText}
                className={`flex h-9 items-center justify-center rounded-lg px-2.5 transition ${
                  listening
                    ? "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                aria-label={listening ? "Stop listening" : "Use voice input"}
              >
                {listening ? (
                  <span className="flex items-center gap-2">
                    <span className="flex items-end gap-0.5" aria-hidden>
                      <span className="h-2 w-0.5 animate-pulse rounded-full bg-emerald-500" />
                      <span className="h-3 w-0.5 animate-pulse rounded-full bg-emerald-500" />
                      <span className="h-4 w-0.5 animate-pulse rounded-full bg-emerald-500" />
                      <span className="h-3 w-0.5 animate-pulse rounded-full bg-emerald-500" />
                      <span className="h-2 w-0.5 animate-pulse rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[12px] font-semibold">Listening</span>
                  </span>
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </button>
            </Tooltip>
            <button
              type="button"
              onClick={submit}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

