"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { InternalBreadcrumbs } from "@/components/InternalBreadcrumbs";

export function PageShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showBreadcrumbs = pathname !== "/" && !pathname.startsWith("/search");
  const showFooter = !pathname.startsWith("/search");
  return (
    <div className="grain relative flex min-h-full flex-1 flex-col transition-colors duration-300">
      <div
        className="pointer-events-none absolute inset-0 -z-10 mesh-bg opacity-80 dark:opacity-40"
        aria-hidden
      />
      <AnnouncementBar />
      <Header />
      <main className="flex-1 bg-background">
        {showBreadcrumbs ? <InternalBreadcrumbs /> : null}
        {children}
      </main>
      {showFooter ? <Footer /> : null}
      {showFooter ? <CookieBanner /> : null}
    </div>
  );
}
