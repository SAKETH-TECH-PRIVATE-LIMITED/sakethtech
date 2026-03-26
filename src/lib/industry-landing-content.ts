/**
 * Industry landing page copy and imagery (English narrative).
 * Images: Unsplash — https://unsplash.com/license
 */

export const INDUSTRY_SLUGS = [
  "automotive",
  "energy-and-utilities",
  "fintech",
  "banking",
  "insurance",
  "high-tech",
  "manufacturing",
  "healthcare-and-life-sciences",
  "fmcg",
  "retail",
  "travel-and-transport",
  "logistics",
  "hospitality",
  "real-estate",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export type IndustryContentSection = {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export type IndustryPageContent = {
  slug: IndustrySlug;
  heroTitle: string;
  heroLead: string;
  heroImageSrc: string;
  heroImageAlt: string;
  /** Short value statements shown under hero */
  highlights: [string, string, string];
  sections: IndustryContentSection[];
};

function img(photoId: string, w = 2000) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=88`;
}

const INDUSTRY_PAGES: Record<IndustrySlug, IndustryPageContent> = {
  automotive: {
    slug: "automotive",
    heroTitle: "Automotive software engineered for product velocity and supplier reality",
    heroLead:
      "We partner with OEMs, tier suppliers, and mobility platforms to ship connected services, manufacturing systems, and dealer-grade digital experiences — without fragile integrations or opaque roadmaps. Our squads align architecture, cybersecurity, and data so you can scale releases across markets while protecting brand trust and functional safety adjacent processes.",
    heroImageSrc: img("photo-1487754180451-c456f7a45a0c"),
    heroImageAlt: "Automotive manufacturing and modern vehicle technology",
    highlights: [
      "End-to-end programs from customer-facing journeys to plant-floor systems",
      "Security-by-design aligned to automotive supply-chain and partner ecosystems",
      "Measurable release cadence with governance for quality, cost, and compliance risk",
    ],
    sections: [
      {
        title: "Connected products, sales, and aftersales platforms",
        paragraphs: [
          "Modern automotive competitiveness lives at the intersection of software-defined features, retail transparency, and lifecycle services. We build cloud-native customer platforms, configuration and pricing intelligence, and subscription-ready commerce paths that stay coherent across markets, channels, and regulatory labeling requirements.",
          "Instead of one-off app launches, we engineer platforms with clear domain boundaries — identity, entitlement, telemetry, and service history — so you can iterate features without rewriting integrations every model year. Delivery includes observability, failure drills, and operational playbooks that match how your service network actually resolves incidents.",
        ],
        imageSrc: img("photo-1449965408869-eaa3f722e40d"),
        imageAlt: "Vehicle interior and digital dashboard experience",
      },
      {
        title: "Manufacturing execution, quality, and supply-network visibility",
        paragraphs: [
          "Plants do not fail on slides; they fail on edge cases — traceability gaps, rework loops, and supplier variability. We implement MES-adjacent workflows, quality analytics, and supplier collaboration portals that expose exceptions early, with reconciliation your finance and operations teams can defend under audit.",
          "Data pipelines are designed for imperfect inputs: multi-site unit of measure, partial ASN data, and legacy equipment interfaces. We prioritize resilient ingestion, bounded contexts for inventory truth, and executive views that reconcile operational reality to financial ledgers without shadow spreadsheets.",
        ],
        imageSrc: img("photo-1581091226825-a6a2a5aee158"),
        imageAlt: "Industrial manufacturing and robotics on production line",
      },
      {
        title: "Mobility services, fleet, and partner ecosystems",
        paragraphs: [
          "As mobility monetization shifts to services, your platforms must orchestrate partners, payments, and policy enforcement at speed. We build API-first marketplaces, fleet operations tooling, and partner onboarding flows with automated compliance checks and contractual guardrails baked into the integration fabric.",
          "We treat ecosystem growth as a product problem: onboarding time-to-live, SLA dashboards, and dispute workflows must be as polished as consumer UX — because partner churn quietly erodes revenue more than any frontend animation ever fixes.",
        ],
        imageSrc: img("photo-1549317661-bd32c8ce0db2"),
        imageAlt: "Urban mobility and traffic scene",
      },
      {
        title: "AI, simulation-adjacent analytics, and trustworthy automation",
        paragraphs: [
          "AI in automotive must be operational, not theatrical — predictive maintenance, demand sensing, and document-heavy workflows benefit from models that are measurable, governed, and replaceable. We implement evaluation harnesses, human review for high-impact outputs, and lineage so engineering and legal can stand behind decisions.",
          "Where Gen AI is introduced, we pair prompts and tools with access policies aligned to partner confidentiality, vehicle data privacy expectations, and regional obligations — so productivity gains do not become an unmanaged liability.",
        ],
        imageSrc: img("photo-1677432650279-e17c2efa72f2"),
        imageAlt: "Abstract technology and data visualization",
      },
    ],
  },
  "energy-and-utilities": {
    slug: "energy-and-utilities",
    heroTitle: "Digital systems for resilient grids, regulated operations, and capital-intensive programs",
    heroLead:
      "Energy and utility organizations need software that survives storms — literal and regulatory — while modernizing customer experiences and field operations. We deliver integrations, analytics, and secure platforms that connect control centers, work management, and market-facing channels with evidence your auditors and boards can trace.",
    heroImageSrc: img("photo-1473341304170-971dccb5ac1e"),
    heroImageAlt: "Power lines and energy infrastructure at sunset",
    highlights: [
      "OT/IT-aware delivery with disciplined change management for critical workloads",
      "Enterprise integration patterns for aging cores without big-bang replacements",
      "Operational analytics for reliability, safety, and capital planning decisions",
    ],
    sections: [
      {
        title: "Grid operations, asset health, and workforce orchestration",
        paragraphs: [
          "Reliability is a software problem as much as a hardware problem — work queues, crew dispatch, and asset records must be consistent when events compress decision windows. We build field mobility, asset registry modernization, and integration layers that synchronize enterprise work management with operational truth.",
          "Our teams plan for partial outages, degraded modes, and reconciliation after emergencies — because resilience is proven in exercises and post-incident reviews, not in architecture diagrams alone.",
        ],
        imageSrc: img("photo-1621905252507-b35492cc74b4"),
        imageAlt: "Electrical technician and power systems",
      },
      {
        title: "Customer operations, billing complexity, and digital self-service",
        paragraphs: [
          "Rate structures, subsidies, and jurisdiction-specific rules create billing engines that are easy to break and expensive to fix. We implement customer information systems interfaces, usage analytics, and self-service experiences that reduce call-center load while exposing transparent dispute pathways.",
          "Experiments roll out behind feature governance so marketing velocity does not corrupt revenue integrity — a balance we maintain with clear ownership between product, finance, and risk.",
        ],
        imageSrc: img("photo-1558618666-fcd25c85cd64"),
        imageAlt: "Residential utilities and smart home context",
      },
      {
        title: "Market, trading, and commercial analytics (where regulated)",
        paragraphs: [
          "Where markets exist, latency and correctness trade sharply. We engineer data pipelines, controls, and monitoring suitable for commercial teams operating under strict rules — with audit trails, reproducible reporting, and segregation of duties that stand up to scrutiny.",
          "We avoid over-engineering — systems are sized to actual decision frequency and counterparty obligations, not resume-driven complexity.",
        ],
        imageSrc: img("photo-1611974785985-943c2b977448"),
        imageAlt: "Financial data charts and analytics workspace",
      },
      {
        title: "Cybersecurity, identity, and third-party risk at scale",
        paragraphs: [
          "Attack surface grows with every vendor remote access path and cloud migration. We help harden identity, segmentation evidence, and continuous control validation aligned to enterprise standards and insurer expectations.",
          "Programs connect technical controls to operational rituals — access reviews, break-glass drills, and supplier attestations — so compliance is lived, not laminated.",
        ],
        imageSrc: img("photo-1563986768609-322da13575f3"),
        imageAlt: "Cybersecurity and digital protection",
      },
    ],
  },
  fintech: {
    slug: "fintech",
    heroTitle: "Fintech platforms built for trust, velocity, and regulatory sharpness",
    heroLead:
      "We help fintechs and embedded finance teams ship card, lending, treasury, and wealth-adjacent experiences with architecture that survives audits, spikes, and partner scrutiny. Security, data integrity, and operational observability are treated as product requirements — not post-launch afterthoughts.",
    heroImageSrc: img("photo-1633158829584-23ba53f42249"),
    heroImageAlt: "Financial technology and mobile banking",
    highlights: [
      "Payments and ledger-adjacent patterns with reconciliation-first engineering",
      "Fraud, abuse, and AML tooling integration without compromising customer UX",
      "SOC2- and PCI-aware delivery habits embedded into engineering workflows",
    ],
    sections: [
      {
        title: "Core product engineering for money movement and accounts",
        paragraphs: [
          "We engineer multi-tenant backends, idempotent money flows, and statement-grade ledgers with explicit boundaries between authorization, settlement, and reporting. Every integration is designed with failure domains — what breaks, what retries, and what humans must see — before you hit production scale.",
          "Our squads collaborate closely with your risk and compliance partners so control narratives match the system behavior your auditors test — not a slide deck from six months ago.",
        ],
        imageSrc: img("photo-1563986768596-d39be7aa53dd"),
        imageAlt: "Credit cards and payment concept",
      },
      {
        title: "Embedded finance and B2B monetization",
        paragraphs: [
          "Embedding finance means embedding liability — disclosures, disputes, and partner SLAs must be encoded into workflows. We build onboarding, underwriting handoffs, and lifecycle servicing experiences that reduce drop-off without hiding obligations from customers.",
          "API productization is approached as a maturity curve: sandbox reliability, versioning discipline, and partner support runbooks matter as much as endpoint breadth.",
        ],
        imageSrc: img("photo-1460925895917-afdab827c52f"),
        imageAlt: "Business analytics dashboards",
      },
      {
        title: "Data platforms for risk, growth, and unit economics",
        paragraphs: [
          "Fintech wins on cohort behavior and loss curves — analytics must be trustworthy at 2am during an incident. We implement event pipelines, metric stores, and governance that protect PII while enabling growth teams to ship experiments with guardrails.",
          "We explicitly design for lineage and backfills because financial restatements kill trust faster than any competitor feature.",
        ],
        imageSrc: img("photo-1551288049-bebda4e38f71"),
        imageAlt: "Data analysis on monitors",
      },
      {
        title: "Responsible AI for support, underwriting assistance, and operations",
        paragraphs: [
          "Models that touch customers or credit decisions need evaluation, bias awareness, and human escalation paths. We deliver assistant workflows with traceability, redaction, and policy-aware prompts — not chatbots that create silent compliance debt.",
          "Roadmaps connect model performance to business KPIs with kill-switch criteria, because operational discipline is how you scale intelligence safely.",
        ],
        imageSrc: img("photo-1677442136019-21780ecad995"),
        imageAlt: "AI and machine learning concept",
      },
    ],
  },
  banking: {
    slug: "banking",
    heroTitle: "Banking modernization that respects cores, channels, and supervisory expectations",
    heroLead:
      "Retail and corporate banking transformation fails when integrations are poetic and controls are vague. We engineer channel journeys, API layers, and modernization paths that acknowledge legacy constraints, while giving teams measurable milestones and resilient runbooks for change windows.",
    heroImageSrc: img("photo-1563986768609-322da13575f3"),
    heroImageAlt: "Secure banking technology concept",
    highlights: [
      "Strangler and coexistence patterns to reduce big-bang risk on critical paths",
      "Customer channels engineered for accessibility, fraud resistance, and consistent servicing",
      "Operational resilience testing tied to recovery objectives and executive reporting",
    ],
    sections: [
      {
        title: "Digital origination, servicing, and employee tooling",
        paragraphs: [
          "Customers expect retail-grade UX; regulators expect evidence. We build origination flows with staged verification, exception queues for analysts, and telemetry that proves who did what — without turning every task into a ticket avalanche.",
          "Employee tooling is treated as a product: throughput, quality of decision support, and training burden define success as much as NPS on consumer journeys.",
        ],
        imageSrc: img("photo-1556740758-90c374dedd0d"),
        imageAlt: "Banking customer service and consultation",
      },
      {
        title: "Integration fabric for cores, payments rails, and fintech partners",
        paragraphs: [
          "Banks live in webs of adapters — we standardize error semantics, correlation IDs, and replay strategies so incidents are diagnosable under pressure. Contract testing and consumer-driven schemas reduce surprise breakages when vendors ship silent changes.",
          "We document operational ownership so on-call does not become archeology across vendor PDFs and abandoned repos.",
        ],
        imageSrc: img("photo-1579621970563-ebec7560ff3e"),
        imageAlt: "Corporate finance documents and strategy",
      },
      {
        title: "Risk, fraud, and financial crime engineering enablement",
        paragraphs: [
          "Rules engines and models proliferate; what matters is coordinated decisions and explainable outcomes. We implement feature platforms, case management integration, and audit-friendly narratives for alerts and escalations.",
          "False positives are treated as a cost center with measurable targets — not an accepted tax on customer friction.",
        ],
        imageSrc: img("photo-1454165804606-c3d57bc86b40"),
        imageAlt: "Team reviewing risk and planning documents",
      },
      {
        title: "Cloud migration, data platforms, and regulatory reporting readiness",
        paragraphs: [
          "Migration programs are sequenced by materiality — we separate customer pain from reporting risk, and we build reconciliation checkpoints that leadership can inspect weekly, not quarterly surprises.",
          "Reporting pipelines emphasize lineage, restatement protocols, and controlled access — the boring parts that keep CFOs sleeping.",
        ],
        imageSrc: img("photo-1544197150-b99a580bb7a8"),
        imageAlt: "Data center servers and technology infrastructure",
      },
    ],
  },
  insurance: {
    slug: "insurance",
    heroTitle: "Insurance software for underwriting precision, claims humanity, and distributor agility",
    heroLead:
      "Insurers differentiate on risk selection, claims experience, and distributor enablement — all three depend on integrated policy, billing, and servicing systems that do not fight each other. We deliver modernization and greenfield products with disciplined data models and automation that amplifies experts instead of replacing judgment blindly.",
    heroImageSrc: img("photo-1450101499163-c8848c66ca85"),
    heroImageAlt: "Insurance planning documents and workspace",
    highlights: [
      "Policy administration interfaces with clear lifecycle states and audit trails",
      "Claims workflows designed for exception handling — where margin is won or lost",
      "Agent and broker portals with performance, training paths, and compliance guardrails",
    ],
    sections: [
      {
        title: "Policy, billing, and product configuration at enterprise complexity",
        paragraphs: [
          "Product trees, rating artifacts, and endorsement rules become unmaintained without explicit ownership and test harnesses. We build configuration UX, automated regression suites, and promotion pipelines so rating changes do not become weekend roulette.",
          "We align business taxonomy to bounded contexts so engineers can evolve services without rewriting entire monoliths for every product tweak.",
        ],
        imageSrc: img("photo-1454165804606-c3d57bc86b40"),
        imageAlt: "Business team collaboration",
      },
      {
        title: "Claims intake, fraud signals, and field orchestration",
        paragraphs: [
          "Claims systems must absorb chaos — photos, third-party reports, legal holds, and incomplete FNOL data. We implement intake channels, triage logic, and workbench UX that keeps adjusters in flow while capturing evidence insurers can defend.",
          "Integration to SIU and external data sources is designed with consent, retention, and explainability constraints baked in from day one.",
        ],
        imageSrc: img("photo-1582719478250-c89cae4dc85b"),
        imageAlt: "Insurance and healthcare administrative setting",
      },
      {
        title: "Distribution platforms, quote-to-bind, and embedded journeys",
        paragraphs: [
          "Speed-to-bind wins when pricing, eligibility, and documents are consistent across channels. We build quote experiences, distributor APIs, and entitlement so partners scale without breaking versioning or brand compliance.",
          "Experiments are managed with statistical discipline — not everyone gets a new workflow on Friday afternoon.",
        ],
        imageSrc: img("photo-1556761175-5973dc0f32e7"),
        imageAlt: "Professional presentation and business meeting",
      },
      {
        title: "Analytics for loss ratios, retention, and operational efficiency",
        paragraphs: [
          "Dashboards should drive decisions, not meetings about dashboards. We connect warehouse models to operational metrics — cycle times, leakage, subrogation outcomes — with drill paths underwriters and actuaries trust.",
          "Governance ensures definitions do not silently drift when finance, claims, and IT each maintain parallel truths.",
        ],
        imageSrc: img("photo-1551288049-bebda4e38f71"),
        imageAlt: "Charts and analytics on screen",
      },
    ],
  },
  "high-tech": {
    slug: "high-tech",
    heroTitle: "Product engineering for ISVs, platform teams, and category-defining SaaS",
    heroLead:
      "High-tech moves on roadmap credibility — roadmap credibility moves on architecture clarity, CI/CD maturity, and observability your enterprise buyers actually test. We embed with product and platform teams to accelerate shipping without accruing security or scalability debt that kills enterprise deals in diligence.",
    heroImageSrc: img("photo-1522071820081-009f0129c71c"),
    heroImageAlt: "Software team collaborating on product development",
    highlights: [
      "Multi-tenant patterns, billing readiness, and enterprise SSO you can demo with confidence",
      "SLO-driven delivery with incident retros that tighten the product — not blame individuals",
      "Platform engineering patterns that reduce toil for feature squads at real headcount scale",
    ],
    sections: [
      {
        title: "SaaS foundations: tenancy, entitlements, and upgrade safety",
        paragraphs: [
          "Tenant isolation is more than separate databases — it is blast-radius design, keys, quotas, and fair scheduling under noisy neighbor load. We implement authentication federation, entitlement services, and admin consoles your CS team will not hate using at 3am.",
          "Blue/green and canary deploys are paired with synthetic checks that represent customer journeys — not only health pings that lie cheerfully during partial outages.",
        ],
        imageSrc: img("photo-1555066931-4365d14bab8a"),
        imageAlt: "Developers coding on laptops",
      },
      {
        title: "Developer experience, APIs, and ecosystem growth",
        paragraphs: [
          "Your API is your second product surface. We shape versioning, SDK ergonomics, developer portals, and support workflows so partners onboard in days — not quarters of backchannel Slack escalations.",
          "We measure ecosystem health with the same rigor as revenue: time-to-first-successful-call, error budgets on sandbox stability, and churn of active integrations.",
        ],
        imageSrc: img("photo-1460925895917-afdab827c52f"),
        imageAlt: "SaaS dashboard on laptop",
      },
      {
        title: "Security reviews, compliance packs, and buyer-ready evidence",
        paragraphs: [
          "Enterprise procurement expects questionnaires answered with proof, not optimism. We operationalize security artifacts — access reviews, pen test remediation, dependency policies — into engineering workflows so sales stops becoming a scavenger hunt.",
          "Shared responsibility boundaries with cloud providers are documented with deployment diagrams that match reality — refreshing during redesigns, not once a year before renewals.",
        ],
        imageSrc: img("photo-1563013544-824ae1b704d3"),
        imageAlt: "Security and technology systems",
      },
      {
        title: "AI features that belong in production — evaluation, cost, and governance",
        paragraphs: [
          "Shipping AI in B2B requires cost envelopes, evaluation suites, and user trust patterns — especially when outputs influence workflows or customer-facing copy. We connect model lifecycle to support and success metrics so you know when to roll forward or roll back.",
          "Guardrails are designed for your domain data — not generic templates that ignore customer confidentiality clauses.",
        ],
        imageSrc: img("photo-1677442136019-21780ecad995"),
        imageAlt: "AI technology abstract",
      },
    ],
  },
  manufacturing: {
    slug: "manufacturing",
    heroTitle: "Manufacturing systems that connect plants, partners, and planning in real truth",
    heroLead:
      "Industry 4.0 fails when historians, ERP, and shop systems narrate different realities. We implement integration, MES/MOM-adjacent workflows, and analytics that give operations leadership one reconciled story — with projects sequenced for measurable downtime reduction and inventory accuracy, not slide fantasies.",
    heroImageSrc: img("photo-1581091226825-a6a2a5aee158"),
    heroImageAlt: "Modern factory manufacturing robotics",
    highlights: [
      "Plant and enterprise integration with disciplined data contracts and reconciliation",
      "Quality, traceability, and recall readiness engineered into workflows — not binders",
      "Digital twin–ready telemetry patterns sized to actual scale and maintainership",
    ],
    sections: [
      {
        title: "Production visibility, OEE-adjacent analytics, and disruption response",
        paragraphs: [
          "Supervisors need answers before spreadsheets circulate. We connect machine signals, shift plans, and downtime reason codes into views that drive daily standups — with drill paths into supplier delays and maintenance backlogs when lines stall.",
          "We avoid dashboard sprawl by tying each metric to an owner and action playbooks; otherwise analytics becomes performance theater.",
        ],
        imageSrc: img("photo-1581092160562-40aa08f48854"),
        imageAlt: "Engineer in industrial facility",
      },
      {
        title: "Supply network collaboration and inbound reliability",
        paragraphs: [
          "Vendors participate when portals reduce email chains and clarify accountability. We design ASN flows, deviation handling, and financial reconciliation hooks so procurement, logistics, and accounts payable stop triangulating truth manually.",
          "Integrations are tested against partial failure — because supply chains rarely arrive as perfectly normalized master data.",
        ],
        imageSrc: img("photo-1586528116311-ad8dd3c8310d"),
        imageAlt: "Logistics warehouse operations",
      },
      {
        title: "Product lifecycle, engineering change, and compliance documentation",
        paragraphs: [
          "Engineering changes ripple across BOM, routing, and quality artifacts. We build change workflows with approvals, impact analysis hooks, and audit trails suitable for regulated or safety-adjacent contexts.",
          "Documentation packs become generated evidence — not scavenger hunts before customer audits.",
        ],
        imageSrc: img("photo-1581092160607-ee22621dd2ce"),
        imageAlt: "Industrial welding and manufacturing detail",
      },
      {
        title: "Sustainability telemetry, energy cost visibility, and reporting",
        paragraphs: [
          "Sustainability reporting without meter truth is reputational risk. We connect energy usage, waste signals, and production correlation analytics with transparent methodology notes finance and legal can defend.",
          "Programs prioritize high-materiality sources first — perfection is not a prerequisite to stop flying blind.",
        ],
        imageSrc: img("photo-1473341304170-971dccb5ac1e"),
        imageAlt: "Energy and sustainability landscape",
      },
    ],
  },
  "healthcare-and-life-sciences": {
    slug: "healthcare-and-life-sciences",
    heroTitle: "Healthcare and life sciences software with HIPAA-aware engineering and human outcomes",
    heroLead:
      "Clinical and commercial teams expect consumer-grade speed; regulators expect provable controls. We deliver patient and provider experiences, R&D-adjacent platforms, and integrations that treat PHI boundaries, audit logs, and device-class risk as engineering constraints — not ticket backlogs discovered in diligence.",
    heroImageSrc: img("photo-1576091160399-112ba8d25d1d"),
    heroImageAlt: "Healthcare technology and medical professional",
    highlights: [
      "Interoperability and interface design that reduces clinician burden — measured in time and errors",
      "Validated-adjacent delivery habits for systems touching regulated workflows",
      "Security programs aligned to threat models seen in healthcare environments",
    ],
    sections: [
      {
        title: "Care delivery, patient access, and clinician workflows",
        paragraphs: [
          "Scheduling, intake, and care navigation must compress friction without hiding clinical obligations. We implement workflows with triage logic, language access, and escalation paths that reflect how care teams actually operate — including after-hours constraints.",
          "Usability testing includes clinician panels — not only product managers — because adoption failure is a patient safety and revenue problem.",
        ],
        imageSrc: img("photo-1579684385127-1ef15d508bd0"),
        imageAlt: "Medical care and hospital environment",
      },
      {
        title: "Payer integration, authorization, and revenue integrity adjacent systems",
        paragraphs: [
          "Denials and authorization delays are software problems when evidence chains break. We build integration to clearinghouses and payer portals with tracking, resubmission discipline, and analytics that tie outcomes to root causes — not tribal knowledge in billing teams.",
          "Each integration includes operational dashboards for failure taxonomy; otherwise you only learn at month-end close.",
        ],
        imageSrc: img("photo-1516549655169-40930ed95c14"),
        imageAlt: "Medical records and healthcare administration",
      },
      {
        title: "Life sciences data platforms, lab-adjacent workflows, and collaboration",
        paragraphs: [
          "Scientific progress depends on reproducible data and controlled access. We engineer lab data capture patterns, collaboration portals, and analytics with lineage suitable for cross-functional review — while respecting IP boundaries between partners.",
          "We avoid over-abstracting domain models early — science iterates faster than enterprise canonical models can politic.",
        ],
        imageSrc: img("photo-1532187863486-abf9dbad316b"),
        imageAlt: "Laboratory science research",
      },
      {
        title: "AI assistance with privacy discipline and clinical caution",
        paragraphs: [
          "Assistants summarizing charts or trial documents require redaction, provenance, and clinician oversight patterns. We implement workflows where model outputs are labeled, auditable, and bounded — reducing automation arrogance in sensitive settings.",
          "Evaluation includes failure catalogs — what the model should refuse — not only benchmark scores.",
        ],
        imageSrc: img("photo-1579684345120-f53a11f374e2"),
        imageAlt: "Medical technology digital interface",
      },
    ],
  },
  fmcg: {
    slug: "fmcg",
    heroTitle: "FMCG and CPG platforms for demand sensing, retail execution, and profitable complexity",
    heroLead:
      "FMCG competition is won on shelf, online, and in the supply chain simultaneously. We build trade promotion analytics, retail execution tooling, and demand-supply alignment systems that connect brand, sales, and operations to the same forecast truth — with architecture that survives promo spikes and category shifts.",
    heroImageSrc: img("photo-1604719314766-9042a827bfeb"),
    heroImageAlt: "Retail consumer products and shopping",
    highlights: [
      "Omnichannel inventory and allocation intelligence without phantom availability",
      "Route-to-market tooling that improves field productivity — not only management reporting",
      "Promotion and pricing analytics wired to finance-grade margin visibility",
    ],
    sections: [
      {
        title: "Demand planning, S&OP workflows, and scenario discipline",
        paragraphs: [
          "Forecasts fail socially before they fail statistically — when sales, supply, and finance distrust the numbers. We implement planning platforms with transparent assumptions, bias visibility, and scenario locks so leadership debates strategy — not spreadsheet versions.",
          "Integrations include sell-in and sell-through signals with known latency — pretending real-time data exists is how stockouts begin.",
        ],
        imageSrc: img("photo-1553413077-190dd305871c"),
        imageAlt: "Supermarket retail shelves and products",
      },
      {
        title: "Retail execution, distributor portals, and perfect-store programs",
        paragraphs: [
          "Field teams need offline resilience and fast capture — not 40-step apps. We design mobile experiences, incentive alignment, and image-assisted auditing that reduce return visits and disputes.",
          "Distributor visibility includes payment and returns loops — because trust with partners is operational, not slogans.",
        ],
        imageSrc: img("photo-1600880292203-757bb62b4baf"),
        imageAlt: "Retail business team meeting",
      },
      {
        title: "E-commerce, D2C, and marketplace operations",
        paragraphs: [
          "D2C success depends on fulfillment truth and return economics — we engineer order orchestration, parcel integrations, and customer service consoles that prevent social-media crises from warehouse silence.",
          "Marketplace channel complexity is modeled explicitly — fees, chargebacks, and listing governance — so finance recognizes revenue without quarterly panic.",
        ],
        imageSrc: img("photo-1556742049-0cfed4f6a45d"),
        imageAlt: "E-commerce and online shopping delivery",
      },
      {
        title: "Sustainability claims, traceability, and supplier transparency",
        paragraphs: [
          "Green claims require evidentiary chains — lot lineage, certificates, and supplier attestations. We build traceability portals and internal control views that help marketing stay within defensible language.",
          "Programs prioritize supplier onboarding friction reduction — otherwise traceability remains aspirational slide art.",
        ],
        imageSrc: img("photo-1542601906990-b4d3fb778b09"),
        imageAlt: "Sustainable packaging and products concept",
      },
    ],
  },
  retail: {
    slug: "retail",
    heroTitle: "Retail systems for unified commerce, resilient supply, and loyalty that compounds",
    heroLead:
      "Shoppers do not care about your channel silos — they care about availability, fair price, and service continuity. We engineer POS-adjacent services, order management, and customer data platforms that reconcile stores, online, and marketplaces without heroics at every peak season.",
    heroImageSrc: img("photo-1441986300917-64674bd600d8"),
    heroImageAlt: "Modern retail clothing store interior",
    highlights: [
      "OMS and inventory promising with explicit tolerance for uncertainty — not fake precision",
      "Clienteling and loyalty mechanics grounded in consented, governed customer profiles",
      "Peak readiness: capacity tests, graceful degradation, and war-room telemetry leadership understands",
    ],
    sections: [
      {
        title: "Store, online, and marketplace order orchestration",
        paragraphs: [
          "Split shipments, BOPIS, and return-anywhere flows break naive OMS models. We implement orchestration rules, SLA-aware sourcing, and customer communication triggers that reduce WISMO contacts during disruptions.",
          "Fulfillment partners are integrated with failure semantics — partial picks, ghost inventory, and cut-off times — surfaced to agents with recovery scripts.",
        ],
        imageSrc: img("photo-1556740758-90c374dedd0d"),
        imageAlt: "Retail point of sale and shopping",
      },
      {
        title: "Pricing, promotions, and markdown science — operationally real",
        paragraphs: [
          "Promo engines are glamorous; remediation after a pricing bug is not. We implement approval workflows, shadow pricing in lower environments, and circuit breakers when anomalies spike — protecting margin and brand sentiment.",
          "Experimentation includes holdouts with ethical guardrails — not naive universal lifts.",
        ],
        imageSrc: img("photo-1607082348824-0a96f2a48bfa"),
        imageAlt: "Shopping bags and retail purchase",
      },
      {
        title: "Customer data, personalization, and privacy alignment",
        paragraphs: [
          "Personalization without governance creates consent debt. We build CDP patterns with retention schedules, preference centers, and lineage so marketing, legal, and security share one definition of “customer”.",
          "Models for recommendations are evaluated for segment fairness and business guardrails — surprises in production erode trust fast.",
        ],
        imageSrc: img("photo-1556742049-0cfed4f6a45d"),
        imageAlt: "Online shopping on phone",
      },
      {
        title: "Workforce, task management, and operational productivity",
        paragraphs: [
          "Store labor is your experience budget — tasking systems must prioritize work that moves conversion and shrink outcomes. We connect workforce tools with operational cues — inventory counts, planograms, service queues — with realistic time estimates.",
          "Success is measured in completion rates and exception aging — not only tasks assigned.",
        ],
        imageSrc: img("photo-1524758631624-e2822e304c36"),
        imageAlt: "Retail store staff and workspace",
      },
    ],
  },
  "travel-and-transport": {
    slug: "travel-and-transport",
    heroTitle: "Travel and transport platforms for reliability, partner scale, and resilient operations",
    heroLead:
      "Passengers and shippers punish fragility — cancelled trips, opaque delays, and billing disputes destroy loyalty faster than feature gaps. We build reservation, operations, and partner platforms with idempotent transactions, disruption workflows, and analytics that align network control with customer truth.",
    heroImageSrc: img("photo-1436491865332-7a61a109cc05"),
    heroImageAlt: "Airplane wing and travel sky view",
    highlights: [
      "High-volume booking and change flows engineered for contention and partial failures",
      "Partner ecosystems with contract-aware SLAs and dispute workflows",
      "Operations centers fed with correlated signals — weather, crew rules, asset status — without dashboard theater",
    ],
    sections: [
      {
        title: "Offer, pricing, and booking integrity under peak contention",
        paragraphs: [
          "Inventory and pricing mistakes become headline news — we implement concurrency controls, cart holds with TTL discipline, and reconciliation that matches revenue recognition to operational reality.",
          "Chaos testing simulates double-booking attempts and payment timeouts — because travel peaks are adversarial by nature.",
        ],
        imageSrc: img("photo-1488085060889-ce9bda4dd7df"),
        imageAlt: "Airport terminal travelers",
      },
      {
        title: "Disruption management and customer communications",
        paragraphs: [
          "When networks wobble, communication discipline matters as much as rerouting algorithms. We implement event-driven notification, eligibility engines for refunds and credits, and agent consoles with authoritative passenger state — reducing contradictory answers.",
          "Audit trails satisfy regulators and social sentiment — partial lies propagate faster than recovery.",
        ],
        imageSrc: img("photo-1529074963764-98f45c47239b"),
        imageAlt: "Travel and luggage concept",
      },
      {
        title: "Mobility services, fleets, and multi-modal orchestration",
        paragraphs: [
          "Urban mobility requires partner choreography — we build marketplace mechanics, driver onboarding, and safety workflows that scale without becoming compliance liabilities.",
          "Pricing and subsidy policies are encoded with abuse detection — promotions attract both riders and fraud rings.",
        ],
        imageSrc: img("photo-1449965408869-eaa3f722e40d"),
        imageAlt: "Urban vehicle and mobility",
      },
      {
        title: "Loyalty, ancillaries, and revenue management enablement",
        paragraphs: [
          "Ancillaries monetize only when merchandising respects journey context — we connect loyalty state, eligibility, and customer preference signals without creepy overreach.",
          "Experimentation ties uplift to operational constraints — cabin capacity, crew rules, maintenance windows — not spreadsheet fantasies.",
        ],
        imageSrc: img("photo-1483729558449-99ef09a8c325"),
        imageAlt: "Passenger train travel scenery",
      },
    ],
  },
  logistics: {
    slug: "logistics",
    heroTitle: "Logistics technology for network visibility, yard reality, and profitable throughput",
    heroLead:
      "3PLs and shippers win on exceptions handled cleanly — not only happy-path tracking pages. We implement TMS/WMS-adjacent workflows, control towers, and carrier integrations with exception taxonomies, SLA clocks, and financial reconciliation that keeps operations and accounting aligned.",
    heroImageSrc: img("photo-1586528116311-ad8dd3c8310d"),
    heroImageAlt: "Warehouse logistics and storage",
    highlights: [
      "Carrier and customs integration with realistic error surfaces — not brittle happy-path adapters",
      "Control tower analytics that tie claims, dwell, and cost drivers to root causes",
      "Automation that augments planners — with human override paths that respect liability",
    ],
    sections: [
      {
        title: "Shipment lifecycle, milestones, and customer-facing transparency",
        paragraphs: [
          "Customers forgive delays they understand — opacity breeds chargebacks. We build milestone engines with probabilistic ETAs, proactive alerts, and self-service resolution paths grounded in carrier truth — not marketing copy.",
          "Each integration declares staleness — when cached scans are unsafe to trust for commitments.",
        ],
        imageSrc: img("photo-1566576721346-d4a3b4e79a9b"),
        imageAlt: "Shipping containers port logistics",
      },
      {
        title: "Warehouse operations, labor, and inventory truth",
        paragraphs: [
          "Pick accuracy and slotting discipline are software problems — we connect WMS events to replenishment signals and labor standards with realistic variance tracking.",
          "Cycle count programs include root-cause workflows — otherwise inventory accuracy decays predictably after go-live hype fades.",
        ],
        imageSrc: img("photo-1553413077-190dd305871c"),
        imageAlt: "Warehouse aisle and inventory",
      },
      {
        title: "Freight audit, accruals, and payable alignment",
        paragraphs: [
          "Finance loses trust when freight bills cannot be explained. We implement audit rules, contract interpretation hooks, and accrual models that tolerate messy inbound data while converging to defensible month-end numbers.",
          "Disputes are operationalized — assignments, evidence packets, and carrier response tracking — not email archaeology.",
        ],
        imageSrc: img("photo-1494412519320-aa613dfb7738"),
        imageAlt: "Freight trucks logistics road",
      },
      {
        title: "Network optimization signals — practical, not academic",
        paragraphs: [
          "Optimization wins when inputs reflect yard constraints, driver hours, and customer appointment reality. We build decision support that clarifies trade-offs — cost vs service vs emissions — rather than pretending a single magical score exists.",
          "Models ship with monitoring for drift in lane quality and seasonal demand — silent degradation is worse than no model.",
        ],
        imageSrc: img("photo-1519003722824-cad1febdea1a"),
        imageAlt: "Aerial highway traffic logistics",
      },
    ],
  },
  hospitality: {
    slug: "hospitality",
    heroTitle: "Hospitality platforms for guest memory, staff efficiency, and revenue per stay",
    heroLead:
      "Guests remember friction at check-in and surprise fees more than lobby aesthetics. We integrate PMS-adjacent services, guest apps, and staff tooling so preferences, room readiness, and service recovery are coherent — turning operations into the brand experience your marketing promises.",
    heroImageSrc: img("photo-1566073771259-6a8506099945"),
    heroImageAlt: "Luxury hotel pool and resort hospitality",
    highlights: [
      "Unified guest profiles with consent-aware personalization across channels",
      "Housekeeping and maintenance workflows that reduce turnaround risk and comp spend",
      "F&B, spa, and ancillary merchandising integrated to loyalty and revenue strategy",
    ],
    sections: [
      {
        title: "Pre-arrival, check-in, and identity-aware service",
        paragraphs: [
          "Digital check-in must handle document variance, payment holds, and upsell without turning the lobby into IT support. We build progressive verification, payment orchestration, and staff override paths with audit trails for disputes.",
          "Failures route to human experts with full context — not generic error codes guests tweet about.",
        ],
        imageSrc: img("photo-1542314831-068cd1dbfeeb"),
        imageAlt: "Hotel building exterior hospitality",
      },
      {
        title: "Housekeeping, engineering, and asset management alignment",
        paragraphs: [
          "Room-not-ready is a systems coordination failure — we connect task queues, IoT signals where relevant, and staffing constraints into realistic schedules with escalation when SLAs slip.",
          "Capital planning benefits from maintenance history analytics tied to asset registry truth — not anecdotal supermemory from veteran chiefs.",
        ],
        imageSrc: img("photo-1590490360182-c33d57733427"),
        imageAlt: "Hotel room interior hospitality",
      },
      {
        title: "Distribution, CRS interfaces, and channel parity",
        paragraphs: [
          "Rate parity disputes erode partner trust — we build channel management integrations with conflict detection, override governance, and finance-visible adjustments.",
          "Promotions are tested against inventory holds and cancellation policies — surprises at checkout destroy review scores.",
        ],
        imageSrc: img("photo-1520250497591-112f2f40a3f4"),
        imageAlt: "Resort beach hospitality vacation",
      },
      {
        title: "Guest intelligence with privacy expectations honored",
        paragraphs: [
          "Loyalty works when guests feel understood — not surveilled. We implement preference models with retention discipline, staff visibility rules, and audit logs for access — especially for VIP and corporate travelers.",
          "Marketing automation respects quiet hours and cultural norms across regions — global brands trip on small insensitivities at scale.",
        ],
        imageSrc: img("photo-1551882547-ff40c63fe635"),
        imageAlt: "Hotel lobby concierge hospitality",
      },
    ],
  },
  "real-estate": {
    slug: "real-estate",
    heroTitle: "Real estate and PropTech software for transactions, operations, and portfolio clarity",
    heroLead:
      "Property businesses run on documents, calendars, and capital discipline — software must reduce friction without creating legal gray areas. We build tenant and owner experiences, asset operations platforms, and investor reporting that aligns CRM, lease administration, and work orders to one building truth.",
    heroImageSrc: img("photo-1560518883-ce09059eeffa"),
    heroImageAlt: "Modern residential real estate property",
    highlights: [
      "Lease abstraction adjacent workflows with human validation — not naive full automation arrogance",
      "Facilities and work orders tied to asset registries finance recognizes",
      "Investor and lender reporting packs generated from operational data — not hero spreadsheets",
    ],
    sections: [
      {
        title: "Leasing, applications, and move-in journeys that convert",
        paragraphs: [
          "Applicants abandon when verification feels like a black hole — we engineer staged KYC, document collection, and status transparency with SLA clocks your leasing teams can operationalize.",
          "Integration to screening and payment providers declares failure semantics — partial approvals and counteroffers need first-class modeling.",
        ],
        imageSrc: img("photo-1560448204-e02f11c3d0e4"),
        imageAlt: "Apartment interior real estate living space",
      },
      {
        title: "Property operations, maintenance, and vendor governance",
        paragraphs: [
          "Work orders touch tenant satisfaction and capex planning simultaneously — we connect maintenance, procurement, and warranty tracking with cost allocation your asset managers defend.",
          "Vendor onboarding includes insurance, COI tracking, and performance scorecards — operational risk is not only cybersecurity.",
        ],
        imageSrc: img("photo-1581578731548-c64695cc6952"),
        imageAlt: "Property maintenance and building repair",
      },
      {
        title: "Asset and portfolio analytics — NOI visibility without tribal spreadsheets",
        paragraphs: [
          "Owners need scenarios — refinance stress, occupancy shocks, capex timing — grounded in lease roll and expense actuals. We build analytics layers with lineage from lease abstract to reporting metric so finance debates assumptions — not arithmetic errors.",
          "Benchmarking includes honest data quality scores — bad benchmarks drive worse decisions than no benchmarks.",
        ],
        imageSrc: img("photo-1484154218962-a197022b5858"),
        imageAlt: "City buildings urban real estate skyline",
      },
      {
        title: "Smart building signals, sustainability, and occupant experience",
        paragraphs: [
          "IoT creates noise without taxonomy — we implement signal ingestion with thresholding, maintenance correlation, and privacy boundaries for spaces where people live and work.",
          "ESG reporting ties energy and water telemetry to landlord and tenant obligations — clarity reduces greenwashing risk and legal exposure.",
        ],
        imageSrc: img("photo-1497366754035-f200968a6e72"),
        imageAlt: "Modern office building architecture",
      },
    ],
  },
};

export function getIndustryPageContent(slug: string): IndustryPageContent | null {
  if (!(slug in INDUSTRY_PAGES)) return null;
  return INDUSTRY_PAGES[slug as IndustrySlug];
}

export function isIndustrySlug(slug: string): slug is IndustrySlug {
  return INDUSTRY_SLUGS.includes(slug as IndustrySlug);
}
