"use client";

import type { WhoWeAreSlug } from "@/lib/who-we-are-slugs";
import { AboutUsPage } from "./AboutUsPage";
import { CaseStudiesPage } from "./CaseStudiesPage";
import { CareersPage } from "./CareersPage";
import { GlobalPresencePage } from "./GlobalPresencePage";
import { NewsroomPage } from "./NewsroomPage";
import { SustainabilityPage } from "./SustainabilityPage";

export function WhoWeAreSlugPage({ slug }: { slug: WhoWeAreSlug }) {
  switch (slug) {
    case "about-us":
      return <AboutUsPage />;
    case "case-studies":
      return <CaseStudiesPage />;
    case "global-presence":
      return <GlobalPresencePage />;
    case "newsroom":
      return <NewsroomPage />;
    case "sustainability":
      return <SustainabilityPage />;
    case "careers":
      return <CareersPage />;
    default:
      return null;
  }
}
