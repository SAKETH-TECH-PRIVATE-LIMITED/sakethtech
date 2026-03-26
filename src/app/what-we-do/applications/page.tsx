import { PageShell } from "@/components/PageShell";
import { WhatWeDoCategoryPage } from "@/components/WhatWeDoCategoryPage";

export default function ApplicationsPage() {
  return (
    <PageShell>
      <WhatWeDoCategoryPage routePrefix="/what-we-do/applications" />
    </PageShell>
  );
}

