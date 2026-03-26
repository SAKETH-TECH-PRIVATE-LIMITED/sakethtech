import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { LegalDoc, H2, H3, L, UL } from "@/components/legal/LegalDoc";

export const metadata: Metadata = {
  title: "Data privacy & security | Saketh Tech Private Limited",
  description:
    "How Saketh Tech Private Limited approaches data privacy, security, and resilience in delivery.",
};

export default function DataPrivacyPage() {
  return (
    <PageShell>
      <LegalDoc title="Data privacy and security" updated="24 March 2025">
        <L>
          This page summarizes how <strong>Saketh Tech Private Limited</strong> (&quot;Saketh Tech&quot;)
          approaches <strong>data privacy</strong> and <strong>security</strong> in client work and on
          our own systems. It is informational and does not replace contractual commitments, a
          security questionnaire (SIG/CAIQ), or a dedicated data processing agreement where one is in
          place.
        </L>

        <H2>1. Security by design</H2>
        <L>
          We integrate security considerations into planning, architecture reviews, and delivery
          checkpoints. For regulated and high-sensitivity workloads, we align controls with agreed
          baselines (for example identity standards, encryption expectations, logging requirements,
          and change management).
        </L>

        <H2>2. Identity and access</H2>
        <UL>
          <li>
            Role-based access with least-privilege defaults for production and customer environments.
          </li>
          <li>
            Multi-factor authentication where supported and required for privileged access.
          </li>
          <li>
            Centralized identity where feasible; periodic access reviews for long-lived credentials.
          </li>
        </UL>

        <H2>3. Data protection</H2>
        <H3>Encryption</H3>
        <L>
          We support encryption in transit (TLS) for services we operate and recommend modern
          ciphers for customer integrations. At-rest encryption depends on cloud provider and
          configuration; we help clients select patterns appropriate to their risk profile.
        </L>
        <H3>Classification and minimization</H3>
        <L>
          We encourage labeling of sensitive data and minimizing collection to what is needed for
          the engagement. PII and secrets should not be stored in code repositories; we use secure
          exchange for credentials where possible.
        </L>
        <H3>Backups and resilience</H3>
        <L>
          We design backup, restore, and disaster-recovery strategies based on agreed recovery
          objectives (RTO/RPO). Specific targets are documented per project or runbook.
        </L>

        <H2>4. Logging and monitoring</H2>
        <L>
          We recommend centralized logging, alerting on security-relevant events, and sensible log
          retention that balances investigation needs with privacy obligations. Exact tooling is
          chosen per engagement (for example cloud-native telemetry vs SIEM).
        </L>

        <H2>5. Vulnerability and patch management</H2>
        <L>
          We use dependency scanning where applicable, track known vulnerabilities, and plan
          patching according to severity and business impact. Penetration tests and red-team
          exercises may be arranged with third parties when customers require evidence.
        </L>

        <H2>6. Incident response</H2>
        <L>
          We maintain an internal process to detect, contain, eradicate, and recover from security
          incidents. For customer-managed environments, we coordinate with your security team and
          follow agreed notification timelines. Regulatory reporting remains the customer&apos;s
          responsibility unless we have contractually agreed otherwise.
        </L>

        <H2>7. Vendor and subprocessor diligence</H2>
        <L>
          We assess subprocessors for practices that align with customer requirements and document
          flows of data between systems. Customers may request lists of typical subprocessors used on
          relevant projects.
        </L>

        <H2>8. Privacy in engineering workflows</H2>
        <L>
          We support privacy impact thinking in features that handle personal data: purpose
          limitation, retention limits, auditability, and user transparency. Formal Data Protection
          Impact Assessments are produced when a client or regulator requires them.
        </L>

        <H2>9. Compliance alignment</H2>
        <L>
          Mappings to frameworks (ISO 27001-style controls, SOC 2 themes, GDPR technical measures)
          are often prepared as part of an engagement or RFP response. Saketh Tech does not
          universally certify against every standard; we work with clients to meet their specific
          attestation or audit needs.
        </L>

        <H2>10. Contact</H2>
        <L>
          For security reviews, questionnaires, or privacy inquiries: contact@sakethech.com. Please
          include your organization, scope, and preferred response timeline.
        </L>
      </LegalDoc>
    </PageShell>
  );
}
