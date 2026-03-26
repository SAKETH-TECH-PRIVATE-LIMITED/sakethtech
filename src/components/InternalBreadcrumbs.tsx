"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

function toTitleCase(segment: string): string {
  return segment
    .split("-")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

export function InternalBreadcrumbs() {
  const pathname = usePathname();
  const { t } = useLocale();

  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const parent = segments[index - 1];

    const whatWeDoLabels: Record<string, string> = {
      "ai-genai": "AI and Gen AI",
      applications: "Applications",
      cloud: "Cloud",
      "custom-software": "Custom software",
      "security-digital-platforms": "Security and digital platforms",
    };

    const topLevelLabels: Record<string, string> = {
      "what-we-do": t.nav.whatWeDo,
      industries: t.nav.industries,
      "who-we-are": t.nav.whoWeAre,
      insights: t.nav.insights,
      privacy: t.footer.legalPrivacy,
      cookies: t.footer.legalCookies,
      terms: t.footer.legalTerms,
      "data-privacy": t.footer.legalData,
      disclaimer: t.footer.legalDisclaimer,
    };

    let label: string | undefined = topLevelLabels[segment];

    if (!label && parent === "industries") {
      label = t.industries.find((x) => x.slug === segment)?.label;
    }
    if (!label && parent === "who-we-are") {
      label = t.whoWeAreMega.find((x) => x.href.endsWith(`/${segment}`))?.label;
    }
    if (!label && parent === "insights") {
      label = t.insightsMega.find((x) => x.href.endsWith(`/${segment}`))?.label;
    }
    if (!label && parent === "what-we-do") {
      label = whatWeDoLabels[segment];
    }

    return {
      href,
      label: label ?? toTitleCase(segment),
      isLast: index === segments.length - 1,
    };
  });

  return (
    <div className="border-b border-slate-200/80 bg-white/60 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto max-w-[1320px] px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-y-1 text-[12px] text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="transition hover:text-[#0066cc] dark:hover:text-sky-400">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="inline-flex items-center">
                <ChevronRight className="mx-1 h-3.5 w-3.5 opacity-70" />
                {crumb.isLast ? (
                  <span className="font-medium text-slate-700 dark:text-slate-200">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="transition hover:text-[#0066cc] dark:hover:text-sky-400">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

