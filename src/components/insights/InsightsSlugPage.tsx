"use client";

import type { InsightsSlug } from "@/lib/insights-slugs";
import { useLocale } from "@/context/LocaleContext";
import { CaseStudiesPage } from "@/components/who-we-are/CaseStudiesPage";
import { SustainabilityPage } from "@/components/who-we-are/SustainabilityPage";
import { CustomerStoriesPage } from "./CustomerStoriesPage";

export function InsightsSlugPage({ slug }: { slug: InsightsSlug }) {
  const { t } = useLocale();
  const eyebrow = t.nav.insights;

  switch (slug) {
    case "case-studies":
      return <CaseStudiesPage eyebrow={eyebrow} />;
    case "customer-stories":
      return <CustomerStoriesPage eyebrow={eyebrow} />;
    case "sustainability":
      return <SustainabilityPage eyebrow={eyebrow} />;
    default:
      return null;
  }
}

