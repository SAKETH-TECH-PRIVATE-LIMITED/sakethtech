export const INSIGHTS_SLUGS = [
  "case-studies",
  "customer-stories",
  "sustainability",
] as const;

export type InsightsSlug = (typeof INSIGHTS_SLUGS)[number];

export function isInsightsSlug(s: string): s is InsightsSlug {
  return (INSIGHTS_SLUGS as readonly string[]).includes(s);
}

export const insightsMeta: Record<
  InsightsSlug,
  { title: string; description: string }
> = {
  "case-studies": {
    title: "Case studies | Saketh Tech Private Limited",
    description:
      "Composite case studies that mirror how we deliver: architecture decisions, delivery systems, and measurable outcomes.",
  },
  "customer-stories": {
    title: "Customer stories | Saketh Tech Private Limited",
    description:
      "Short customer stories and highlights — placeholder content for now, ready to be replaced with approved narratives.",
  },
  sustainability: {
    title: "Sustainability | Saketh Tech Private Limited",
    description:
      "How we translate ESG into engineering decisions: efficient systems, responsible AI, and long-term trust.",
  },
};

