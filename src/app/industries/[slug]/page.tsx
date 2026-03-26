import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { IndustryLandingPage } from "@/components/IndustryLandingPage";
import {
  getIndustryPageContent,
  isIndustrySlug,
  INDUSTRY_SLUGS,
} from "@/lib/industry-landing-content";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

function trimMetaDescription(text: string, max = 158) {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isIndustrySlug(slug)) return { title: "Industries" };
  const c = getIndustryPageContent(slug)!;
  const title = `${c.heroTitle} | Industries`;
  const description = trimMetaDescription(c.heroLead);
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  if (!isIndustrySlug(slug)) notFound();
  const content = getIndustryPageContent(slug)!;
  return (
    <PageShell>
      <IndustryLandingPage content={content} />
    </PageShell>
  );
}
