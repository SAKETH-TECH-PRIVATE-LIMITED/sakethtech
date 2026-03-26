import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { InsightsSlugPage } from "@/components/insights/InsightsSlugPage";
import { INSIGHTS_SLUGS, insightsMeta, isInsightsSlug } from "@/lib/insights-slugs";

export function generateStaticParams() {
  return INSIGHTS_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isInsightsSlug(slug)) return { title: "Insights" };
  const m = insightsMeta[slug];
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default async function InsightsSlugRoute({ params }: Props) {
  const { slug } = await params;
  if (!isInsightsSlug(slug)) notFound();
  return (
    <PageShell>
      <InsightsSlugPage slug={slug} />
    </PageShell>
  );
}

