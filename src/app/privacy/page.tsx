import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalDoc, H2, H3, L, UL } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy policy | Saketh Tech Private Limited",
  description:
    "How Saketh Tech Private Limited collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalDoc title="Privacy policy" updated="24 March 2025">
        <L>
          This Privacy policy describes how <strong>Saketh Tech Private Limited</strong> (&quot;Saketh
          Tech,&quot; &quot;we,&quot; &quot;us&quot;) collects, uses, discloses, and protects personal information
          when you visit our website, contact us, attend events, or engage with our services. If you
          are a customer or vendor under contract with us, additional terms in your agreement may
          apply.
        </L>

        <H2>1. Information we collect</H2>
        <H3>Information you provide</H3>
        <UL>
          <li>
            Contact details (name, work email, phone number, company, role) when you submit forms,
            subscribe to updates, or correspond with us.
          </li>
          <li>
            Content of your messages, attachments you choose to send, and meeting or demo notes where
            relevant.
          </li>
          <li>
            Recruitment information if you apply for roles (resume/CV, references, portfolio
            links).
          </li>
        </UL>
        <H3>Information collected automatically</H3>
        <UL>
          <li>
            Device and usage data such as IP address, browser type, approximate location (derived
            from IP), pages viewed, referring URLs, and timestamps.
          </li>
          <li>
            Cookies and similar technologies as described in our{" "}
            <a href="/cookies" className="font-medium text-[#0066cc] underline dark:text-sky-400">
              Cookies policy
            </a>
            .
          </li>
        </UL>

        <H2>2. How we use information</H2>
        <L>We use personal information to:</L>
        <UL>
          <li>Operate, secure, and improve our Site and services.</li>
          <li>Respond to inquiries, provide demos, and manage prospective customer relationships.</li>
          <li>
            Send administrative messages, product updates, or marketing where permitted and with
            appropriate controls (you may opt out of marketing as described below).
          </li>
          <li>Comply with law, enforce our terms, and protect rights and safety.</li>
          <li>Analyze aggregated or de-identified data for business intelligence.</li>
        </UL>

        <H2>3. Legal bases (EEA/UK and similar frameworks)</H2>
        <L>Where GDPR or similar laws apply, we rely on one or more of:</L>
        <UL>
          <li>
            <strong>Contract</strong> — when processing is necessary to perform a contract or
            pre-contract steps.
          </li>
          <li>
            <strong>Legitimate interests</strong> — for example network security, product
            improvement, and reasonable B2B outreach, balanced against your rights.
          </li>
          <li>
            <strong>Consent</strong> — where required for cookies, certain marketing, or sensitive
            categories.
          </li>
          <li>
            <strong>Legal obligation</strong> — where we must retain records or respond to lawful
            requests.
          </li>
        </UL>

        <H2>4. Sharing and subprocessors</H2>
        <L>We may share information with:</L>
        <UL>
          <li>
            <strong>Service providers</strong> who assist with hosting, analytics, email, CRM,
            recruitment tools, or customer support, under contractual confidentiality and security
            obligations.
          </li>
          <li>
            <strong>Professional advisers</strong> (lawyers, auditors) where necessary.
          </li>
          <li>
            <strong>Authorities</strong> when required by law or to protect Saketh Tech and others.
          </li>
          <li>
            <strong>Business transfers</strong> in connection with a merger, acquisition, or asset
            sale, subject to appropriate safeguards.
          </li>
        </UL>
        <L>We do not sell your personal information in the traditional sense.</L>

        <H2>5. International transfers</H2>
        <L>
          We may process data in India and other countries where we or our providers operate. Where
          required, we use appropriate safeguards (such as standard contractual clauses or
          equivalent mechanisms).
        </L>

        <H2>6. Retention</H2>
        <L>
          We retain personal information only as long as needed for the purposes above, including
          legal, accounting, or reporting requirements. Marketing lists are refreshed regularly;
          inactive prospect data may be deleted or anonymized according to internal policies.
        </L>

        <H2>7. Security</H2>
        <L>
          We implement administrative, technical, and organizational measures designed to protect
          personal information. No online service can guarantee absolute security; see also our{" "}
          <a
            href="/data-privacy"
            className="font-medium text-[#0066cc] underline dark:text-sky-400"
          >
            Data privacy &amp; security
          </a>{" "}
          page for program-level practices.
        </L>

        <H2>8. Your rights</H2>
        <L>
          Depending on your location, you may have rights to access, correct, delete, restrict, or
          object to certain processing, or to data portability. You may also have the right to
          withdraw consent where processing is consent-based. To exercise rights, email
          contact@sakethech.com. You may lodge a complaint with your local supervisory authority.
        </L>

        <H2>9. Children</H2>
        <L>
          Our Site and services are not directed to children under 16 (or the age required in your
          jurisdiction). We do not knowingly collect data from children.
        </L>

        <H2>10. Third-party sites</H2>
        <L>
          Our Site may link to third parties. This policy does not cover their practices; please
          read their policies before providing information.
        </L>

        <H2>11. Changes</H2>
        <L>
          We may update this Privacy policy periodically. We will post updates on this page and
          revise the &quot;Last updated&quot; date. Where changes are material, we may provide additional
          notice where appropriate.
        </L>

        <H2>12. Contact</H2>
        <L>
          Data protection questions: contact@sakethech.com. If we appoint a data protection officer
          or EU/UK representative, we will list those contacts here.
        </L>
      </LegalDoc>
    </PageShell>
  );
}
