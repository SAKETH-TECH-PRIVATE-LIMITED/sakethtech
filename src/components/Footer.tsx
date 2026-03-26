"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer() {
  const { t, locale } = useLocale();
  const textDir = locale === "ar" ? "rtl" : "ltr";

  const legalBarLinks: [string, string][] = [
    [t.footer.legalPrivacy, "/privacy"],
    [t.footer.legalCookies, "/cookies"],
    [t.footer.legalTerms, "/terms"],
    [t.footer.legalData, "/data-privacy"],
    [t.footer.legalDisclaimer, "/disclaimer"],
  ];

  const whatWeDoGroups = t.mega.columns.flatMap((c) => c.groups);

  const socials = useMemo(
    () => [
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Threads", href: "#" },
      { label: "Discord", href: "#" },
    ],
    [],
  );

  const sectionTitle =
    "text-[12px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400";

  const itemLink =
    "text-[13px] font-medium text-slate-700 transition hover:text-[#0066cc] dark:text-slate-300 dark:hover:text-sky-400";

  const groupTitle =
    "text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500";

  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function submitNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") || "").trim();
    if (!email) return;
    setNewsletterStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("bad");
      setNewsletterStatus("ok");
      form.reset();
    } catch {
      setNewsletterStatus("error");
    }
  }

  function BrandIcon({ name }: { name: (typeof socials)[number]["label"] }) {
    const base = "h-[1.05rem] w-[1.05rem]";
    switch (name) {
      case "LinkedIn":
        return (
          <svg viewBox="0 0 24 24" className={base} aria-hidden fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1c1.37 0 2.5 1.12 2.5 2.5ZM.5 8.5H4.5V24H.5V8.5ZM8.5 8.5H12.33V10.62h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.08V24h-4V15.35c0-2.06-.04-4.7-2.86-4.7-2.86 0-3.3 2.24-3.3 4.55V24h-4V8.5Z" />
          </svg>
        );
      case "YouTube":
        return (
          <svg viewBox="0 0 24 24" className={base} aria-hidden fill="currentColor">
            <path d="M23.5 6.2s-.23-1.65-.94-2.38c-.9-.96-1.9-.96-2.36-1.02C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.2.3c-.46.06-1.46.06-2.36 1.02C.73 4.55.5 6.2.5 6.2S0 8.15 0 10.1v1.8c0 1.95.5 3.9.5 3.9s.23 1.65.94 2.38c.9.96 2.08.93 2.6 1.03 1.9.18 8 .29 8 .29s4.9-.01 8.2-.31c.46-.06 1.46-.06 2.36-1.02.71-.73.94-2.38.94-2.38S24 13.85 24 11.9v-1.8c0-1.95-.5-3.9-.5-3.9ZM9.75 14.2V7.8l6.5 3.2-6.5 3.2Z" />
          </svg>
        );
      case "Instagram":
        return (
          <svg viewBox="0 0 24 24" className={base} aria-hidden fill="currentColor">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-2.3a1.05 1.05 0 1 1-1.05-1.05 1.05 1.05 0 0 1 1.05 1.05Z" />
          </svg>
        );
      case "Threads":
        return (
          <svg viewBox="0 0 24 24" className={base} aria-hidden fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.33 0 7.98-2.76 9.38-6.62.1-.28.18-.57.25-.86.25-1.07.26-2.12.03-3.13-.25-1.11-.82-2.1-1.7-2.97-1.27-1.25-3.2-2.03-5.71-2.3-2.33-.25-4.31.18-5.88 1.28C6.9 8.8 6.1 10.56 6.1 12.6c0 1.8.6 3.26 1.77 4.34 1.03.95 2.32 1.42 3.85 1.42 1.61 0 2.92-.46 3.9-1.36.73-.67 1.18-1.55 1.33-2.6.1-.74.05-1.43-.15-2.07-.2-.64-.56-1.19-1.07-1.65-.86-.77-2.09-1.19-3.65-1.24-.86-.03-1.62.07-2.28.3l.44 1.77c.5-.16 1.06-.23 1.68-.21 2.13.07 2.94 1.07 2.78 2.79-.16 1.78-1.4 2.68-3.7 2.68-2.33 0-3.73-1.42-3.73-3.8 0-1.46.55-2.69 1.63-3.64 1.16-1.03 2.66-1.44 4.47-1.22 2.1.25 3.65.93 4.6 2.03.82.95 1.18 2.17 1.06 3.64-.22 2.7-1.95 4.67-5.2 5.92A8 8 0 1 1 12 4Z" />
          </svg>
        );
      case "Discord":
        return (
          <svg viewBox="0 0 24 24" className={base} aria-hidden fill="currentColor">
            <path d="M19.54 5.19A16.2 16.2 0 0 0 15.5 4c-.18.32-.38.76-.52 1.11a15.2 15.2 0 0 0-3.96 0c-.14-.35-.35-.79-.53-1.11A16.3 16.3 0 0 0 6.46 5.2C3.9 9 3.2 12.72 3.55 16.39c1.7 1.26 3.35 2.02 4.97 2.52.4-.55.76-1.14 1.07-1.76-.59-.22-1.15-.49-1.69-.8.14-.1.27-.21.4-.32 3.26 1.53 6.8 1.53 10.02 0 .13.11.26.22.4.32-.54.31-1.1.58-1.69.8.31.62.67 1.21 1.07 1.76 1.63-.5 3.28-1.26 4.98-2.52.42-4.22-.72-7.91-2.43-11.2ZM9.4 14.7c-.98 0-1.78-.9-1.78-2.01 0-1.1.79-2.01 1.78-2.01.99 0 1.79.91 1.78 2.01 0 1.11-.79 2.01-1.78 2.01Zm5.2 0c-.98 0-1.78-.9-1.78-2.01 0-1.1.79-2.01 1.78-2.01.99 0 1.79.91 1.78 2.01 0 1.11-.79 2.01-1.78 2.01Z" />
          </svg>
        );
      default:
        return null;
    }
  }

  return (
    <footer className="border-t border-slate-200/80 bg-gradient-to-b from-[#f8f9fc] via-white to-white dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-[1320px] px-4 pb-0 pt-10 sm:px-6 lg:px-8">
        {/* Minimal brand strip (keeps sitemap clean like HCL) */}
        <div className="flex flex-col gap-6 [direction:ltr] sm:flex-row sm:items-center sm:justify-between">
          <div dir={textDir} className="min-w-0">
            <Logo />
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-600 shadow-sm transition hover:border-[#0066cc]/35 hover:text-[#0066cc] dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-300 dark:hover:border-sky-500/40 dark:hover:text-sky-400"
              >
                <BrandIcon name={label} />
              </a>
            ))}
            <div className="ms-1">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Sitemap grid (no accordions; organized & consistent) */}
        <div className="mt-10 grid gap-x-12 gap-y-10 [direction:ltr] lg:grid-cols-12">
          {/* What we do */}
          <div className="lg:col-span-5" dir={textDir}>
            <p className={sectionTitle}>{t.nav.whatWeDo}</p>
            <div className="mt-5 columns-2 gap-x-12 [column-fill:balance]">
              {whatWeDoGroups.map((g) => (
                <div key={g.heading} className="mb-7 break-inside-avoid">
                  <p className={groupTitle}>{g.heading}</p>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((item) => (
                      <li key={`${g.heading}-${item.href}`}>
                        <Link href={item.href} className={`${itemLink} block leading-snug`}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3" dir={textDir}>
            <p className={sectionTitle}>{t.nav.industries}</p>
            <ul className="mt-5 columns-2 gap-x-12 [column-fill:balance]">
              {t.industries.map((ind) => (
                <li key={ind.slug} className="break-inside-avoid py-1.5">
                  <Link href={`/industries/${ind.slug}`} className={`${itemLink} leading-snug`}>
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who we are */}
          <div className="lg:col-span-2" dir={textDir}>
            <p className={sectionTitle}>{t.nav.whoWeAre}</p>
            <ul className="mt-5 space-y-2">
              {t.whoWeAreMega.map((w) => (
                <li key={w.href}>
                  <Link href={w.href} className={`${itemLink} leading-snug`}>
                    {w.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link href="/#company" className={itemLink}>
                  {t.company.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources + Legal */}
          <div className="lg:col-span-2" dir={textDir}>
            <p className={sectionTitle}>{t.nav.resources}</p>
            <ul className="mt-5 space-y-2">
              <li>
                <Link href="/who-we-are/newsroom" className={itemLink}>
                  {t.whoWeAreMega.find((x) => x.href.endsWith("/newsroom"))?.label ?? "Newsroom"}
                </Link>
              </li>
              <li>
                <Link href="/insights/case-studies" className={itemLink}>
                  {t.insightsMega.find((x) => x.href.endsWith("/case-studies"))?.label ?? "Case studies"}
                </Link>
              </li>
              <li>
                <Link href="/insights/customer-stories" className={itemLink}>
                  {t.insightsMega.find((x) => x.href.endsWith("/customer-stories"))?.label ?? "Customer stories"}
                </Link>
              </li>
              <li>
                <Link href="/insights/sustainability" className={itemLink}>
                  {t.insightsMega.find((x) => x.href.endsWith("/sustainability"))?.label ?? "Sustainability"}
                </Link>
              </li>
              <li>
                <Link href="/#stories" className={itemLink}>
                  {t.stories.label}
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <p className={sectionTitle}>Legal</p>
              <ul className="mt-5 space-y-2">
                {legalBarLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className={itemLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-12" dir={textDir}>
            <div
              id="newsletter"
              className="mt-2 rounded-2xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/25 sm:flex sm:items-center sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <p className="text-[12px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Newsletter
                </p>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                  Product engineering insights, AI delivery notes, and platform patterns. No spam.
                </p>
              </div>
              <form onSubmit={submitNewsletter} className="mt-5 flex w-full flex-col gap-3 sm:mt-0 sm:max-w-[460px] sm:flex-row">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/20"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "sending"}
                  className="h-11 rounded-xl bg-[#0066cc] px-5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0058b3] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  {newsletterStatus === "sending" ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            </div>
            {newsletterStatus === "ok" ? (
              <p className="mt-3 text-[12px] font-medium text-emerald-600 dark:text-emerald-400">
                Subscribed. Thank you.
              </p>
            ) : null}
            {newsletterStatus === "error" ? (
              <p className="mt-3 text-[12px] font-medium text-red-600 dark:text-red-400">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t border-slate-200/90 pt-3 text-[12px] text-slate-500 [direction:ltr] dark:border-slate-700 dark:text-slate-400 sm:flex-row sm:items-start">
          <nav
            aria-label="Legal"
            dir={textDir}
            className="flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start"
          >
            {legalBarLinks.map(([label, href], i) => (
              <span key={href} className="inline-flex items-center gap-2">
                {i > 0 ? <span aria-hidden className="text-slate-400 dark:text-slate-500">·</span> : null}
                <Link href={href} className="hover:text-slate-800 dark:hover:text-white">
                  {label}
                </Link>
              </span>
            ))}
          </nav>
          <div className="max-w-xl text-center text-[11px] sm:text-left" dir={textDir}>
            <p>{t.footer.disclaimer}</p>
            <p className="mt-3 text-[10px] text-slate-400 dark:text-slate-500">
              {t.footer.photoCredit}{" "}
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#0066cc] underline-offset-2 hover:underline dark:text-sky-400"
              >
                Unsplash License
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-2 pb-3 text-center text-[12px] text-slate-500 dark:text-slate-400" dir={textDir}>
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
