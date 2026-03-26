"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Locale, messages } from "@/i18n/messages";

const STORAGE_KEY = "saketh-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof messages)["en"];
};

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const s = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (s && (s === "en" || s === "de" || s === "ar")) {
          setLocaleState(s);
        }
      } catch {
        /* ignore */
      }
      setReady(true);
    });
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    const lang =
      locale === "ar" ? "ar-AE" : locale === "de" ? "de" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale, ready]);

  const t = messages[locale];

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
