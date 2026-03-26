import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { WhoWeAreSlugPage } from "@/components/who-we-are/WhoWeAreSlugPage";
import { WHO_WE_ARE_SLUGS, isWhoWeAreSlug, whoWeAreMeta } from "@/lib/who-we-are-slugs";

export function generateStaticParams() {
  return WHO_WE_ARE_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isWhoWeAreSlug(slug)) return { title: "Who we are" };
  const m = whoWeAreMeta[slug];
  return {
    title: m.title,
    description: m.description,
    openGraph: { title: m.title, description: m.description },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}

export default async function WhoWeAreSlugRoute({ params }: Props) {
  const { slug } = await params;
  if (!isWhoWeAreSlug(slug)) notFound();
  return (
    <PageShell>
      <WhoWeAreSlugPage slug={slug} />
    </PageShell>
  );
}
