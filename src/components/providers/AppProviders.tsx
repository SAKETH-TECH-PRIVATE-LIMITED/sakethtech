"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "@/context/LocaleContext";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
