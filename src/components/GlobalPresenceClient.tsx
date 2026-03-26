"use client";

import dynamic from "next/dynamic";

const GlobalPresenceSection = dynamic(
  () => import("@/components/GlobalPresenceSection").then((m) => m.GlobalPresenceSection),
  { ssr: false },
);

export function GlobalPresenceClient() {
  return <GlobalPresenceSection />;
}

