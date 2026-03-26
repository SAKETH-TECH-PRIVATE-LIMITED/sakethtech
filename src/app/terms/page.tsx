import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalDoc, H2, L, UL } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Terms & conditions | Saketh Tech Private Limited",
  description:
    "Terms and conditions for using Saketh Tech Private Limited websites and services.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalDoc title="Terms and conditions" updated="24 March 2025">
        <L>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
          websites, landing pages, and online materials operated by or on behalf of{" "}
          <strong>Saketh Tech Private Limited</strong> (&quot;Saketh Tech,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;), and any related professional, consulting, product,
          or subscription services we may agree to provide in writing (collectively, the
          &quot;Services&quot;). By accessing or using our Services, you agree to these Terms. If you
          do not agree, do not use the Services.
        </L>

        <H2>1. Who we are</H2>
        <L>
          Saketh Tech Private Limited is a private limited company incorporated in India. These
          Terms apply globally to visitors and users of our public web presence. A separate written
          agreement (such as a master services agreement, statement of work, or order form) may
          apply to commercial engagements and will prevail over these Terms where they conflict.
        </L>

        <H2>2. Eligibility and account security</H2>
        <L>
          Where we offer registration or sign-in features, you must provide accurate information and
          keep your credentials confidential. You are responsible for all activity under your
          account, except where we are at fault for a security breach we failed to mitigate using
          reasonable care.
        </L>

        <H2>3. Acceptable use</H2>
        <L>You agree not to:</L>
        <UL>
          <li>
            Use the Services in violation of law, to harm others, or to interfere with our
            infrastructure, security, or availability.
          </li>
          <li>
            Attempt to gain unauthorized access to our systems, data, or other customers&apos;
            environments.
          </li>
          <li>
            Copy, scrape, or systematically harvest content from our Services except as permitted by
            law or with our written consent.
          </li>
          <li>
            Use our Services to distribute malware, send unsolicited bulk communications, or engage
            in phishing or fraud.
          </li>
          <li>
            Reverse engineer our software except where applicable law expressly permits it
            notwithstanding this limitation.
          </li>
        </UL>

        <H2>4. Intellectual property</H2>
        <L>
          All text, graphics, logos, layouts, trademarks, and software on our Services (except
          content you submit or third-party materials we attribute) are owned by Saketh Tech or our
          licensors. Subject to these Terms, we grant you a limited, revocable, non-exclusive,
          non-transferable license to access and view public areas of our Services for your
          internal business or personal use. No other rights are granted by implication.
        </L>

        <H2>5. Your content</H2>
        <L>
          If you submit materials to us (for example through forms, email, or uploads), you retain
          your rights, but you grant Saketh Tech a worldwide, royalty-free license to use, host,
          reproduce, and display those materials only as reasonably necessary to evaluate, respond,
          and deliver the Services you request, unless a separate agreement states otherwise.
        </L>

        <H2>6. Confidentiality and feedback</H2>
        <L>
          Information marked confidential or shared under a nondisclosure agreement is governed by
          that agreement. If you provide suggestions or feedback, you agree we may use it without
          restriction or compensation, except where prohibited by law.
        </L>

        <H2>7. Third-party links and services</H2>
        <L>
          Our Services may reference or link to third-party sites, open-source projects, or partner
          integrations. We do not control and are not responsible for third-party content or
          practices. Use of third-party services is at your own risk and subject to their terms.
        </L>

        <H2>8. Warranties and disclaimer</H2>
        <L>
          Except where we have agreed otherwise in a signed contract, our Services are provided
          &quot;AS IS&quot; and &quot;AS AVAILABLE.&quot; To the maximum extent permitted by law, Saketh Tech
          disclaims all implied warranties, including merchantability, fitness for a particular
          purpose, and non-infringement. We do not warrant that the Services will be uninterrupted
          or error-free.
        </L>

        <H2>9. Limitation of liability</H2>
        <L>
          To the maximum extent permitted by law, Saketh Tech and its directors, officers,
          employees, and affiliates will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or loss of profits, data, or goodwill. Our aggregate
          liability arising out of these Terms or the Services (except liability that cannot be
          excluded by law) will not exceed the greater of (a) the amount you paid us for the
          Services in the twelve (12) months before the claim or (b) INR 50,000, unless a separate
          written agreement sets a different cap.
        </L>

        <H2>10. Indemnity</H2>
        <L>
          You will defend and indemnify Saketh Tech against third-party claims arising from your
          misuse of the Services, your violation of these Terms, or your infringement of others&apos;
          rights, except to the extent caused by our willful misconduct.
        </L>

        <H2>11. Termination</H2>
        <L>
          We may suspend or terminate access to any part of the Services where reasonably necessary
          to protect security, comply with law, or address abuse. You may stop using the Services at
          any time. Sections intended to survive (including intellectual property, disclaimers,
          limitation of liability, indemnity, and governing law) will continue to apply.
        </L>

        <H2>12. Changes</H2>
        <L>
          We may update these Terms by posting a revised version on this page and updating the
          &quot;Last updated&quot; date. Material changes may also be communicated by email or in-product
          notice where practical. Continued use after changes become effective constitutes
          acceptance, except where your explicit consent is required by law.
        </L>

        <H2>13. Governing law and disputes</H2>
        <L>
          These Terms are governed by the laws of India, excluding conflict-of-law rules. Subject to
          mandatory consumer protections where you reside, courts in India will have exclusive
          jurisdiction over disputes, unless we agree otherwise in a separate contract or unless
          arbitration is required there.
        </L>

        <H2>14. Contact</H2>
        <L>For questions about these Terms, contact us at contact@sakethech.com.</L>
      </LegalDoc>
    </PageShell>
  );
}
