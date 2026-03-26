import { PageShell } from "@/components/PageShell";
import { WhatWeDoCategoryPage } from "@/components/WhatWeDoCategoryPage";

export default function CloudPage() {
  return (
    <PageShell>
      <WhatWeDoCategoryPage routePrefix="/what-we-do/cloud" />
    </PageShell>
  );
}

