import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalDoc, H2, L } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Disclaimer | Saketh Tech Private Limited",
  description:
    "General disclaimer for Saketh Tech Private Limited websites and informational content.",
};

export default function DisclaimerPage() {
  return (
    <PageShell>
      <LegalDoc title="Disclaimer" updated="24 March 2025">
        <L>
          The information on this website and in related materials from{" "}
          <strong>Saketh Tech Private Limited</strong> (&quot;Saketh Tech&quot;) is provided for general
          informational purposes only. Nothing herein constitutes legal, financial, tax, or
          professional advice. You should consult qualified advisers before making decisions.
        </L>

        <H2>No warranty</H2>
        <L>
          While we aim for accuracy and timeliness, we make no representations or warranties of any
          kind, express or implied, about the completeness, reliability, or suitability of the
          information. Use of this information is at your own risk.
        </L>

        <H2>No offer or solicitation</H2>
        <L>
          Content on this Site is not an offer to sell or a solicitation to buy any security,
          service, or partnership interest. Any future offering will be made only in compliance
          with applicable laws and with appropriate documentation.
        </L>

        <H2>Forward-looking statements</H2>
        <L>
          Some statements may describe plans, roadmaps, or industry trends. Such statements involve
          risks and uncertainties; actual results may differ materially. Saketh Tech undertakes no
          obligation to update forward-looking statements except as required by law.
        </L>

        <H2>Third parties and trademarks</H2>
        <L>
          Reference to third-party products, brands, or platforms is for identification only and
          does not imply endorsement. Trademarks belong to their respective owners. Case studies or
          examples may be illustrative composites unless explicitly labeled as client engagements.
        </L>

        <H2>Software and experiments</H2>
        <L>
          Demos, sample code, and experimental features may be unstable or incomplete. Do not use
          them in production without independent review, security testing, and licensing checks.
        </L>

        <H2>Limitation of liability</H2>
        <L>
          To the fullest extent permitted by law, Saketh Tech and its affiliates will not be liable
          for any loss or damage arising from reliance on this Site or from interruptions, errors, or
          omissions. See our Terms for further limitations.
        </L>

        <H2>Links</H2>
        <L>
          External links are provided for convenience. We do not control external sites and are not
          responsible for their content, security, or privacy practices.
        </L>

        <H2>Jurisdiction</H2>
        <L>
          Laws differ by country. If any part of this disclaimer is unenforceable in your
          jurisdiction, the remainder remains in effect to the maximum extent permitted.
        </L>

        <H2>Contact</H2>
        <L>Questions about this disclaimer: contact@sakethech.com.</L>
      </LegalDoc>
    </PageShell>
  );
}
