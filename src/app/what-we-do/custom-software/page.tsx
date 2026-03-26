import { PageShell } from "@/components/PageShell";
import { WhatWeDoCategoryPage } from "@/components/WhatWeDoCategoryPage";

export default function CustomSoftwarePage() {
  return (
    <PageShell>
      <WhatWeDoCategoryPage routePrefix="/what-we-do/custom-software" />
    </PageShell>
  );
}

