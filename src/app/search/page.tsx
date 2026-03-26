import { Suspense } from "react";
import { PageShell } from "@/components/PageShell";
import { SearchAssistantClient } from "@/components/ai/SearchAssistantClient";

export default function SearchPage() {
  return (
    <PageShell>
      <Suspense>
        <SearchAssistantClient />
      </Suspense>
    </PageShell>
  );
}

