import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalDoc, H2, H3, L, UL } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Cookies policy | Saketh Tech Private Limited",
  description:
    "How Saketh Tech Private Limited uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <PageShell>
      <LegalDoc title="Cookies policy" updated="24 March 2025">
        <L>
          This policy explains how <strong>Saketh Tech Private Limited</strong> (&quot;Saketh Tech,&quot;
          &quot;we,&quot; &quot;us&quot;) uses cookies and similar technologies when you visit our websites and
          related online properties (the &quot;Site&quot;). It should be read together with our{" "}
          <a href="/privacy" className="font-medium text-[#0066cc] underline dark:text-sky-400">
            Privacy policy
          </a>
          .
        </L>

        <H2>1. What are cookies?</H2>
        <L>
          Cookies are small text files stored on your device when you visit a website. They help the
          site remember preferences, keep you signed in (where applicable), understand how pages are
          used, and improve performance. Similar technologies include local storage, pixels, and
          session identifiers.
        </L>

        <H2>2. How we use cookies</H2>
        <L>We use cookies and similar technologies for purposes such as:</L>
        <UL>
          <li>
            <strong>Strictly necessary:</strong> enabling core navigation, security, load balancing,
            and consent preferences.
          </li>
          <li>
            <strong>Functional:</strong> remembering choices such as language or theme where we offer
            those controls.
          </li>
          <li>
            <strong>Analytics:</strong> understanding aggregate traffic, navigation paths, and feature
            usage so we can improve content and UX. We aim to use analytics in a privacy-conscious
            way and may use first-party or privacy-oriented tools where feasible.
          </li>
          <li>
            <strong>Performance:</strong> measuring errors, latency, and reliability improvements.
          </li>
        </UL>

        <H2>3. First-party vs third-party</H2>
        <L>
          <strong>First-party cookies</strong> are set by our Site. <strong>Third-party cookies</strong>{" "}
          are set by partners we use (for example analytics or embedded content). Third parties
          process data under their own policies; we encourage you to review their documentation when
          we link to external services.
        </L>

        <H2>4. Cookie duration</H2>
        <UL>
          <li>
            <strong>Session cookies</strong> expire when you close your browser.
          </li>
          <li>
            <strong>Persistent cookies</strong> remain for a defined period (for example days or
            months) or until you delete them, depending on their purpose.
          </li>
        </UL>

        <H2>5. Your choices</H2>
        <H3>Cookie banner and preferences</H3>
        <L>
          Where required, we show a cookie notice when you first visit. You can accept or reject
          non-essential cookies through that interface where we offer granular controls.
        </L>
        <H3>Browser settings</H3>
        <L>
          Most browsers let you block or delete cookies. Doing so may affect Site functionality
          (for example saved preferences or certain embedded features).
        </L>
        <H3>Do Not Track</H3>
        <L>
          There is no consistent industry standard for DNT signals. We may not respond to DNT
          headers in all cases but will respect applicable legal requirements.
        </L>

        <H2>6. Lawful bases (where applicable)</H2>
        <L>
          Depending on your region, we rely on consent for non-essential cookies, and on legitimate
          interests or legal obligation for strictly necessary cookies and security logging, where
          allowed by law.
        </L>

        <H2>7. Updates</H2>
        <L>
          We may update this Cookies policy from time to time. The &quot;Last updated&quot; date at the top
          reflects the latest revision.
        </L>

        <H2>8. Contact</H2>
        <L>Questions about cookies: contact@sakethech.com.</L>
      </LegalDoc>
    </PageShell>
  );
}
