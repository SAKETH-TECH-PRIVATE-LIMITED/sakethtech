export type Locale = "en" | "de" | "ar";

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "ar", label: "Arabic (UAE)", native: "العربية" },
];

export const messages: Record<
  Locale,
  {
    announcement: string;
    nav: {
      whatWeDo: string;
      industries: string;
      ecosystem: string;
      whoWeAre: string;
      insights: string;
      resources: string;
      careers: string;
      getStarted: string;
      talkArchitect: string;
    };
    mega: {
      columns: {
        groups: {
          heading: string;
          items: { label: string; href: string }[];
        }[];
      }[];
    };
    /** Who we are mega menu (labels + short blurbs, hrefs locale-agnostic) */
    whoWeAreMega: { label: string; href: string; description: string }[];
    /** Insights mega menu (labels + short blurbs, hrefs locale-agnostic) */
    insightsMega: { label: string; href: string; description: string }[];
    whoWeAreCareersForm: {
      heroEyebrow: string;
      heroTitle: string;
      heroSub: string;
      cardTitle: string;
      cardSub: string;
      fullName: string;
      email: string;
      phone: string;
      linkedin: string;
      roleInterest: string;
      coverLetter: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorGeneric: string;
      privacyNote: string;
    };
    industries: { slug: string; label: string }[];
    hero: {
      kicker: string;
      h1: string;
      sub: string;
      cta1: string;
      cta2: string;
      note: string;
      visual: string;
    };
    metrics: {
      title: string;
      cta: string;
      m: [string, string][];
    };
    services: {
      label: string;
      title: string;
      sub: string;
      learn: string;
      items: { title: string; desc: string }[];
    };
    industriesSec: {
      label: string;
      title: string;
      sub: string;
      sectors: string[];
    };
    stories: {
      label: string;
      title: string;
      link: string;
      cards: { name: string; role: string; headline: string; quote: string; more: string }[];
    };
    company: {
      label: string;
      title: string;
      p: string;
      bullets: [string, string, string];
      ambition: string;
      ambitionP: string;
      g1: string;
      g1s: string;
      g2: string;
      g2s: string;
    };
    careers: {
      label: string;
      title: string;
      sub: string;
      cta: string;
    };
    cta: {
      title: string;
      sub: string;
      primary: string;
      secondary: string;
      fine: string;
    };
    contact: {
      label: string;
      title: string;
      sub: string;
      infoTitle: string;
      infoSub: string;
      cards: {
        phoneLabel: string;
        phoneValue: string;
        emailLabel: string;
        emailValue: string;
        whatsappLabel: string;
        whatsappValue: string;
        locationLabel: string;
        locationValue: string;
      };
      guaranteeTitle: string;
      guaranteeBody: string;
      formTitle: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      companyName: string;
      websiteOptional: string;
      phoneNumber: string;
      companySize: string;
      annualRevenueOptional: string;
      projectBudget: string;
      howCanWeHelp: string;
      termsLabel: string;
      submit: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        companyName: string;
        website: string;
        phone: string;
        help: string;
      };
      options: {
        countryCodes: { label: string; value: string }[];
        companySizes: { label: string; value: string }[];
        annualRevenue: { label: string; value: string }[];
        projectBudgets: { label: string; value: string }[];
      };
    };
    footer: {
      tagline: string;
      col1: string;
      col2: string;
      col3: string;
      col4: string;
      legalPrivacy: string;
      legalCookies: string;
      legalTerms: string;
      legalData: string;
      legalDisclaimer: string;
      disclaimer: string;
      copyright: string;
      /** Unsplash license notice + link label */
      photoCredit: string;
    };
    cookie: {
      text: string;
      privacy: string;
      cookiesPolicy: string;
      reject: string;
      accept: string;
    };
    aiAssistant: {
      title: string;
      subtitle: string;
      reset: string;
      placeholder: string;
      sendAria: string;
      welcome: string;
      thinking: string;
      error: string;
      demoHint: string;
    };
    globalPresence: {
      label: string;
      title: string;
      sub: string;
      legendHq: string;
      legendClients: string;
      legendSoon: string;
      legendRoutes: string;
      clientListProse: string;
      markers: {
        in: { country: string; city: string; role: string };
        ae: { country: string; city: string; role: string };
      };
      clientMarkets: {
        ch: { code: string; name: string };
        au: { code: string; name: string };
        us: { code: string; name: string };
        de: { code: string; name: string };
        ca: { code: string; name: string };
        om: { code: string; name: string };
      };
    };
    deliveryJourney: {
      label: string;
      title: string;
      sub: string;
      hint: string;
      artifactsLabel: string;
      steps: { title: string; desc: string; artifacts: string }[];
    };
    engagementModels: {
      label: string;
      title: string;
      sub: string;
      footnote: string;
      bestWhenLabel: string;
      watchoutLabel: string;
      models: {
        name: string;
        tagline: string;
        bestFor: string;
        includes: string[];
        watchouts: string;
      }[];
    };
    capabilityNav: {
      label: string;
      title: string;
      sub: string;
      industryPrompt: string;
      constraintPrompt: string;
      resultLabel: string;
      engagementLine: string;
      riskLabel: string;
      cta: string;
      industries: { id: string; label: string }[];
      constraints: { id: string; label: string }[];
      bases: { industryId: string; headline: string; engagementPick: string; bullets: string[] }[];
      overlays: { constraintId: string; bullets: string[]; risk?: string }[];
    };
  }
> = {
  en: {
    announcement:
      "New: Agentic AI & secure cloud — engineered for regulated industries",
    nav: {
      whatWeDo: "What we do",
      industries: "Industries",
      ecosystem: "Ecosystem",
      whoWeAre: "Who we are",
      insights: "Insights",
      resources: "Resources",
      careers: "Careers",
      getStarted: "Get started",
      talkArchitect: "Talk to an architect →",
    },
    mega: {
      columns: [
        {
          groups: [
            {
              heading: "AI and Gen AI",
              items: [
                { label: "AI agents & AGI", href: "/what-we-do/ai-genai#ai-agents" },
                { label: "AI & ML (Artificial Intelligence & Machine Learning)", href: "/what-we-do/ai-genai#ai-ml" },
                { label: "DL & NLP (Deep Learning & Natural Language Processing)", href: "/what-we-do/ai-genai#dl-nlp" },
                { label: "N8N workflows", href: "/what-we-do/ai-genai#intelligent-workflows" },
                { label: "Voice agents", href: "/what-we-do/ai-genai#voice-agents" },
                { label: "Industry AI solutions", href: "/what-we-do/ai-genai#industry-ai-solutions" },
              ],
            },
            {
              heading: "Applications",
              items: [
                { label: "IT consulting and advisory", href: "/what-we-do/applications#it-consulting-and-advisory" },
                { label: "SaaS applications", href: "/what-we-do/applications#saas-applications" },
                { label: "Enterprise application", href: "/what-we-do/applications#enterprise-application" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Cloud",
              items: [
                {
                  label: "Cloud native application",
                  href: "/what-we-do/cloud#cloud-native-application",
                },
                { label: "AWS and Azure, GCP", href: "/what-we-do/cloud#aws-azure-gcp" },
                { label: "Oracle support", href: "/what-we-do/cloud#oracle-support" },
                { label: "On-prem support", href: "/what-we-do/cloud#on-prem-support" },
              ],
            },
            {
              heading: "Custom software solutions",
              items: [
                {
                  label: "Enterprise resource planning",
                  href: "/what-we-do/custom-software#erp",
                },
                {
                  label: "Human capital management",
                  href: "/what-we-do/custom-software#hcm",
                },
                {
                  label: "Supply chain management",
                  href: "/what-we-do/custom-software#scm",
                },
                {
                  label: "Customer relationship management",
                  href: "/what-we-do/custom-software#crm",
                },
                {
                  label: "Content management systems & business intelligence",
                  href: "/what-we-do/custom-software#cms-bi",
                },
                {
                  label: "Learning management systems",
                  href: "/what-we-do/custom-software#lms",
                },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Security and Digital platforms",
              items: [
                { label: "Cyber Security Shielding", href: "/what-we-do/security-digital-platforms#cyber-security-shielding" },
                { label: "Digital engineering", href: "/what-we-do/security-digital-platforms#digital-engineering" },
                { label: "Platform engineering", href: "/what-we-do/security-digital-platforms#platform-engineering" },
              ],
            },
            {
              heading: "Data privacy and compliances",
              items: [
                { label: "GDPR compliance", href: "/what-we-do/security-digital-platforms#gdpr-compliance" },
                { label: "HIPAA compliance", href: "/what-we-do/security-digital-platforms#hipaa-compliance" },
                { label: "ISO 27001 and security standards", href: "/what-we-do/security-digital-platforms#iso-27001" },
                { label: "SOC 2 Type II", href: "/what-we-do/security-digital-platforms#soc-2-type-ii" },
                {
                  label: "Other frameworks (PCI DSS, regional privacy, sector rules)",
                  href: "/what-we-do/security-digital-platforms#other-compliance-frameworks",
                },
              ],
            },
          ],
        },
      ],
    },
    whoWeAreMega: [
      {
        label: "About us",
        href: "/who-we-are/about-us",
        description: "Leadership, mission, and how we engineer outcomes.",
      },
      {
        label: "Global presence",
        href: "/who-we-are/global-presence",
        description: "Client footprints across key markets worldwide.",
      },
      {
        label: "Newsroom",
        href: "/who-we-are/newsroom",
        description: "Engineering perspective — cloud, AI, security, and platforms.",
      },
      {
        label: "Careers",
        href: "/who-we-are/careers",
        description: "Join product-minded engineers and solution architects.",
      },
    ],
    insightsMega: [
      {
        label: "Case studies",
        href: "/insights/case-studies",
        description: "Deep dives into delivery: architecture, execution, and measurable outcomes.",
      },
      {
        label: "Customer stories",
        href: "/insights/customer-stories",
        description: "Short stories and highlights — replace with approved client narratives.",
      },
      {
        label: "Sustainability",
        href: "/insights/sustainability",
        description: "Responsible technology, carbon-aware engineering, and ethical AI practices.",
      },
    ],
    whoWeAreCareersForm: {
      heroEyebrow: "Careers",
      heroTitle: "Build mission-grade software with us",
      heroSub:
        "We hire for craft, curiosity, and integrity. Tell us how you work — we will respond to every serious application.",
      cardTitle: "Apply in one step",
      cardSub: "No account required. Your details go only to our talent team.",
      fullName: "Full name",
      email: "Work email",
      phone: "Phone (optional)",
      linkedin: "LinkedIn or portfolio URL (optional)",
      roleInterest: "Role or practice area",
      coverLetter: "What do you want to build next?",
      submit: "Submit application",
      submitting: "Sending…",
      successTitle: "Application received",
      successBody:
        "Thank you. If your profile fits an active search, our team will reach out within a few business days.",
      errorGeneric: "Something went wrong. Please try again or email us directly.",
      privacyNote:
        "By submitting, you agree we may store and use this information for recruiting purposes. See our privacy policy.",
    },
    industries: [
      { slug: "automotive", label: "Automotive" },
      { slug: "energy-and-utilities", label: "Energy and utilities" },
      { slug: "fintech", label: "FinTech" },
      { slug: "banking", label: "Banking" },
      { slug: "insurance", label: "Insurance" },
      { slug: "high-tech", label: "High Tech" },
      { slug: "manufacturing", label: "Manufacturing" },
      { slug: "healthcare-and-life-sciences", label: "Healthcare and Life Sciences" },
      { slug: "fmcg", label: "FMCG" },
      { slug: "retail", label: "Retail" },
      { slug: "travel-and-transport", label: "Travel and transport" },
      { slug: "logistics", label: "Logistics" },
      { slug: "hospitality", label: "Hospitality" },
      { slug: "real-estate", label: "Real Estate" },
    ],
    hero: {
      kicker: "Saketh Tech Private Limited",
      h1: "Our ambition is to be the partner enterprises trust for software, cloud, and AI — at global scale.",
      sub: "We design and ship web applications, multi-tenant SaaS, and native-quality mobile experiences — alongside ERP, HRM, cloud-native platforms, cybersecurity, and agentic AI — with integrator-grade rigor and product-team speed.",
      cta1: "Watch the story",
      cta2: "What we do",
      note: "Leadership perspective — structured programs, security-first delivery, measurable outcomes.",
      visual: "From browser to App Store: one engineering partner for your full product surface area.",
    },
    metrics: {
      title: "Technology that delivers ROI",
      cta: "Find out more",
      m: [
        [
          "45%",
          "reduction in delivery cycle time when teams adopt our cloud-native blueprint.",
        ],
        [
          "20%",
          "improvement in incident response posture with security-by-design patterns.",
        ],
        [
          "~40%",
          "lower total cost of change when consolidating ERP and workflows on one stack.",
        ],
        [
          "3×",
          "faster experimentation loops when Gen AI is governed and measurable.",
        ],
      ],
    },
    services: {
      label: "Capabilities",
      title: "Everything you need to build and run modern digital business.",
      sub: "Web, SaaS, and mobile — plus platforms, cloud, security, and AI — under one delivery model so your teams ship faster with fewer hand-offs.",
      learn: "Learn more",
      items: [
        {
          title: "Custom software, web & mobile",
          desc: "Web apps, PWAs, iOS and Android — plus APIs, portals, and integrations mapped to your workflows.",
        },
        {
          title: "Enterprise Applications (ERP & HCM)",
          desc: "Configurable ERP and HCM platforms for operations, people, and finance on modern delivery stacks.",
        },
        {
          title: "SaaS & product engineering",
          desc: "Multi-tenant SaaS, subscriptions and billing, observability, and roadmap execution for software products.",
        },
        {
          title: "Cloud Platforms & DevOps Engineering",
          desc: "Kubernetes, CI/CD, observability, and resilient cloud foundations for enterprise delivery.",
        },
        {
          title: "Cybersecurity",
          desc: "Zero-trust patterns, assessments, and continuous hardening.",
        },
        {
          title: "AI Engineering & Intelligent Automation",
          desc: "Agentic automation, RAG, prompt systems, and responsible Gen AI rollout with measurable controls.",
        },
      ],
    },
    industriesSec: {
      label: "Industries",
      title: "Solutions shaped for your sector — and ready to scale.",
      sub: "Whether you operate in regulated markets or fast-moving digital commerce, we bring reusable patterns without cookie-cutter delivery.",
      sectors: [
        "Financial services & fintech",
        "Healthcare & life sciences",
        "Manufacturing & industrials",
        "Retail, CPG & logistics",
        "Technology & SaaS",
        "Energy & utilities",
        "Public sector & education",
        "Media, gaming & entertainment",
      ],
    },
    stories: {
      label: "Proof",
      title: "Built like a product. Delivered like a partner.",
      link: "See how we work",
      cards: [
        {
          name: "Platform modernization",
          role: "Mid-market SaaS",
          headline: "Cut release risk with cloud-native pipelines and observability.",
          quote: "“Faster ships, fewer incidents — without growing the ops team.”",
          more: "View approach",
        },
        {
          name: "ERP & workforce",
          role: "Manufacturing",
          headline: "Unified operations and HR on a single source of truth.",
          quote: "“Finally one workflow from floor to finance.”",
          more: "View approach",
        },
        {
          name: "AI copilots",
          role: "Financial services",
          headline: "Secure Gen AI with guardrails and traceable prompts.",
          quote: "“Compliance stayed intact while productivity jumped.”",
          more: "View approach",
        },
      ],
    },
    company: {
      label: "Company",
      title: "Saketh Tech Private Limited",
      p: "We are a startup with enterprise ambition: a multi-disciplinary team building software, platforms, and AI systems for organizations that cannot afford to compromise on quality, security, or speed.",
      bullets: [
        "End-to-end ownership from architecture to production operations",
        "Transparent delivery with measurable milestones",
        "Security and compliance considered from day zero",
      ],
      ambition: "Our ambition",
      ambitionP:
        "To be the partner teams call when the problem is complex, the timeline is aggressive, and the outcome has to last. We combine product thinking with engineering discipline — and we use AI where it genuinely multiplies value.",
      g1: "Global",
      g1s: "delivery model",
      g2: "Full stack",
      g2s: "apps to AI",
    },
    careers: {
      label: "Careers",
      title: "We are hiring builders, designers, and AI engineers.",
      sub: "Remote-friendly roles with high ownership. Tell us what you ship best.",
      cta: "Introduce yourself",
    },
    cta: {
      title: "Ready to build what's next?",
      sub: "Tell us about your roadmap — we'll bring architects, engineers, and AI specialists who ship.",
      primary: "Schedule a conversation",
      secondary: "Download overview",
      fine: "Typical response within one business day. NDA-friendly.",
    },
    contact: {
      label: "Contact",
      title: "Contact",
      sub: "Share a few details and we’ll respond quickly with next steps.",
      infoTitle: "Contact Information",
      infoSub: "Reach out through any of these channels.\nWe typically respond within 24 hours.",
      cards: {
        phoneLabel: "Phone",
        phoneValue: "+91 8187889752",
        emailLabel: "Email",
        emailValue: "contact@sakethaiautomation.com",
        whatsappLabel: "WhatsApp",
        whatsappValue: "Chat with us instantly",
        locationLabel: "Location",
        locationValue: "Serving clients worldwide",
      },
      guaranteeTitle: "Quick Response Guarantee",
      guaranteeBody:
        "We respond to all inquiries within 24 hours on business days. For urgent matters, call or WhatsApp us directly.",
      formTitle: "Let's get to know you",
      firstName: "First Name *",
      lastName: "Last Name *",
      email: "Email *",
      role: "Your Role within Organization *",
      companyName: "Company Name *",
      websiteOptional: "Website (Optional)",
      phoneNumber: "Phone Number *",
      companySize: "Company Size *",
      annualRevenueOptional: "Annual Revenue (Optional)",
      projectBudget: "Project Budget *",
      howCanWeHelp: "How Can We Help? *",
      termsLabel: "I agree to the terms and conditions of the company",
      submit: "Submit",
      placeholders: {
        firstName: "Name",
        lastName: "Doe",
        email: "example@gmail.com",
        role: "e.g., CTO, Project Manager, etc.",
        companyName: "Your company name",
        website: "https://yourcompany.com",
        phone: "1234567890",
        help: "Please describe your project needs and how we can assist you",
      },
      options: {
        countryCodes: [
          { label: "+91", value: "+91" },
          { label: "+971", value: "+971" },
          { label: "+1", value: "+1" },
          { label: "+61", value: "+61" },
          { label: "+49", value: "+49" },
          { label: "+41", value: "+41" },
        ],
        companySizes: [
          { label: "Select company size", value: "" },
          { label: "1–10 employees", value: "1-10" },
          { label: "11–50 employees", value: "11-50" },
          { label: "51–200 employees", value: "51-200" },
          { label: "201–500 employees", value: "201-500" },
          { label: "501+ employees", value: "501+" },
        ],
        annualRevenue: [
          { label: "Select annual revenue", value: "" },
          { label: "Less than $1M", value: "<1M" },
          { label: "$1M – $10M", value: "1-10M" },
          { label: "$10M – $50M", value: "10-50M" },
          { label: "$50M – $100M", value: "50-100M" },
          { label: "$100M+", value: "100M+" },
        ],
        projectBudgets: [
          { label: "Select project budget", value: "" },
          { label: "Less than $20K", value: "<20K" },
          { label: "$20K – $50K", value: "20-50K" },
          { label: "$50K – $100K", value: "50-100K" },
          { label: "$100K – $200K", value: "100-200K" },
          { label: "$200K – $500K", value: "200-500K" },
          { label: "$500K+", value: "500K+" },
        ],
      },
    },
    footer: {
      tagline:
        "Private Limited — software, cloud, security, and AI for ambitious teams.",
      col1: "What we do",
      col2: "Industries",
      col3: "Company",
      col4: "Legal",
      legalPrivacy: "Privacy policy",
      legalCookies: "Cookies policy",
      legalTerms: "Terms & conditions",
      legalData: "Data privacy & security",
      legalDisclaimer: "Disclaimer",
      disclaimer:
        "Independent site — reference brands are shown for inspiration only.",
      copyright: "Saketh Tech Private Limited. All rights reserved.",
      photoCredit:
        "Site photography is sourced from Unsplash under a free commercial-use license.",
    },
    cookie: {
      text: "We use cookies to improve your experience and analyze traffic.",
      privacy: "Privacy policy",
      cookiesPolicy: "Cookies policy",
      reject: "Reject",
      accept: "Accept",
    },
    aiAssistant: {
      title: "Saketh Tech AI assistant",
      subtitle: "Ask me anything about our services, capabilities, or how we can help.",
      reset: "Reset chat",
      placeholder: "Type your message…",
      sendAria: "Send message",
      welcome:
        "Hi — I'm the Saketh Tech assistant. Ask about software, cloud, cybersecurity, ERP, or AI. (Demo: connect your n8n webhook via N8N_AI_WEBHOOK_URL for live answers.)",
      thinking: "Thinking…",
      error: "Something went wrong. Please try again.",
      demoHint: "Demo mode — set N8N_AI_WEBHOOK_URL to connect your n8n workflow.",
    },
    globalPresence: {
      label: "Global footprint",
      title: "India hub · clients across continents",
      sub: "Our only physical office today is in India — that is where we run engineering and delivery. We work with clients in Australia, the United States, Canada, Germany, Switzerland, the UAE, Oman, and other markets worldwide. A Dubai office opens in about two months with a UAE-based partner; the dotted paths show how we collaborate from India with each region.",
      legendHq: "India · corporate office (today)",
      legendClients: "Client locations",
      legendSoon: "UAE office · opening soon",
      legendRoutes: "Animated dotted paths · India to each client region",
      clientListProse:
        "Australia · United States · Canada · Germany · Switzerland · UAE · Oman — and more globally, all supported from our India hub.",
      markers: {
        in: {
          country: "India",
          city: "Mumbai",
          role: "Sole office today · HQ & delivery",
        },
        ae: {
          country: "UAE",
          city: "Dubai",
          role: "Office ≈2 mo · UAE partner · Clients today",
        },
      },
      clientMarkets: {
        ch: { code: "CH", name: "Switzerland" },
        au: { code: "AU", name: "Australia" },
        us: { code: "US", name: "United States" },
        de: { code: "DE", name: "Germany" },
        ca: { code: "CA", name: "Canada" },
        om: { code: "OM", name: "Oman" },
      },
    },
    deliveryJourney: {
      label: "How we deliver",
      title: "From first workshop to reliable production",
      sub: "A disciplined path that scales with your risk profile — not a one-size slide deck, but how we align, build, harden, and improve with you.",
      hint: "Select a phase to see what we typically produce together.",
      artifactsLabel: "Typical artifacts",
      steps: [
        {
          title: "Discover & align",
          desc: "We frame the problem, align sponsors, and make success criteria measurable before we commit significant build capacity.",
          artifacts: "Problem brief · stakeholder map · risks & assumptions · 90-day outcomes",
        },
        {
          title: "Design & build",
          desc: "Architecture and delivery run in short loops — secure SDLC, observable increments, and clear rollback paths.",
          artifacts: "Reference slices · threat model hooks · CI/CD & env strategy · demo cadence",
        },
        {
          title: "Harden & launch",
          desc: "We stress the path to production: data migration, cutover rehearsal, support readiness, and operational handover.",
          artifacts: "Test evidence · runbooks · observability dashboards · hypercare window",
        },
        {
          title: "Operate & improve",
          desc: "Reliability, cost, and security are treated as ongoing product work — not a ticket queue without context.",
          artifacts: "SLOs & error budgets · backlog for risk & debt · continuous compliance hooks",
        },
      ],
    },
    engagementModels: {
      label: "Ways to work together",
      title: "Compare engagement models — honestly",
      sub: "Enterprises rarely need a single model forever. We start with the shape that matches your ownership, pace, and risk.",
      footnote:
        "Blends are common — for example, a product squad for a new platform plus augmentation for legacy upkeep. We'll recommend a mix after a short discovery.",
      bestWhenLabel: "Best when:",
      watchoutLabel: "Watch out:",
      models: [
        {
          name: "Expert augmentation",
          tagline: "Specialists embedded in your team",
          bestFor:
            "You have strong product and architecture leadership but need senior execution capacity in cloud, platform, data, security, or full-stack delivery.",
          includes: [
            "Named engineers aligned to your tools and governance",
            "Participation in your ceremonies with transparent throughput",
            "Knowledge transfer as a built-in outcome, not an afterthought",
          ],
          watchouts:
            "Scope and prioritization stay on your side — without clear backlog health, velocity can stall.",
        },
        {
          name: "Outcome-owned pod",
          tagline: "Cross-functional team with shared KPIs",
          bestFor:
            "You want a pod accountable for a bounded outcome — migration, modernization track, or a platform milestone — with shared delivery risk.",
          includes: [
            "Small cross-functional squad (build + QA + SRE-minded support)",
            "Milestone plan tied to measurable outcomes, not just effort",
            "Joint steering with explicit escalation and dependency management",
          ],
          watchouts:
            "Needs empowered client-side product/security counterparts — bottlenecks outside the pod slow everyone.",
        },
        {
          name: "Product & platform squad",
          tagline: "End-to-end ownership for a product initiative",
          bestFor:
            "You're launching or replatforming a product — web, SaaS, or mobile — and want architectural and delivery ownership from us.",
          includes: [
            "Roadmap shaping, UX/engineering collaboration, and release ownership",
            "Production operations posture agreed up front (SRE, on-call, SLAs)",
            "Security, privacy, and AI guardrails treated as product requirements",
          ],
          watchouts:
            "Strongest when scope is product-shaped — pure staff augmentation across unrelated tickets is a mismatch.",
        },
      ],
    },
    capabilityNav: {
      label: "Capability navigator",
      title: "A fast lens on fit — industry × constraint",
      sub: "This is indicative, not a proposal. It shows how we typically weight engineering, security, and program rigor for your context.",
      industryPrompt: "Industry context",
      constraintPrompt: "Top constraint",
      resultLabel: "Suggested emphasis",
      engagementLine: "Often pairs well with",
      riskLabel: "Reality check",
      cta: "Discuss this context with us",
      industries: [
        { id: "fin", label: "Financial services & fintech" },
        { id: "health", label: "Healthcare & life sciences" },
        { id: "mfg", label: "Manufacturing & supply chain" },
        { id: "retail", label: "Retail & e-commerce" },
        { id: "techSaas", label: "Technology & SaaS" },
        { id: "public", label: "Public sector & education" },
      ],
      constraints: [
        { id: "regulated", label: "Heavy regulation & audit" },
        { id: "legacy", label: "Legacy estate to modernize" },
        { id: "velocity", label: "Aggressive time-to-market" },
        { id: "cloudNative", label: "Cloud-native scale & cost" },
        { id: "genAi", label: "Gen AI with guardrails" },
      ],
      bases: [
        {
          industryId: "fin",
          headline: "Trust, evidence, and non-negotiable controls",
          engagementPick: "Outcome-owned pod or product squad with compliance steering.",
          bullets: [
            "Segregation of duties in pipelines; immutable audit trails where required",
            "API and identity patterns that survive third-party review",
            "Operational resiliency for payment and core banking adjacency",
          ],
        },
        {
          industryId: "health",
          headline: "Safety, interoperability, and careful workflow change",
          engagementPick: "Outcome pod with clinical and ops counterparts in the loop each sprint.",
          bullets: [
            "Data minimization and clear boundaries for PHI / clinical data",
            "Integration discipline across EHR, labs, devices, and portals",
            "Human-in-the-loop validation where clinical or patient impact is material",
          ],
        },
        {
          industryId: "mfg",
          headline: "ERP truth, OT/IT hygiene, and uptime awareness",
          engagementPick: "Outcome pod spanning ERP, plant, and finance alignment.",
          bullets: [
            "Plan around production windows — downtime is a business risk, not just IT",
            "Strong alignment between shop floor, logistics, and finance workflows",
            "Observability that connects incidents to revenue and SLA impact",
          ],
        },
        {
          industryId: "retail",
          headline: "Peaks, payments, and omnichannel consistency",
          engagementPick: "Product squad for peak-sensitive releases; outcome pod for large replatforming tracks.",
          bullets: [
            "Traffic and inventory patterns drive architecture — not the other way around",
            "Payment security and fraud awareness baked into release gates",
            "Experimentation with guardrails (feature flags, canaries, rollback)",
          ],
        },
        {
          industryId: "techSaas",
          headline: "Tenant isolation, reliability, and product velocity",
          engagementPick: "Product & platform squad for tenant-aware roadmaps and SLOs.",
          bullets: [
            "Multi-tenant boundaries: data, config, billing hooks, and upgrades",
            "SLOs customers can feel — error budgets drive prioritization",
            "Developer experience that keeps shipping speed sustainable",
          ],
        },
        {
          industryId: "public",
          headline: "Accessibility, procurement clarity, and transparent progress",
          engagementPick: "Outcome pod with procurement-friendly evidence every increment.",
          bullets: [
            "Evidence packs that map to oversight questions — not vanity dashboards",
            "Vendor-neutral architecture where policy demands optionality",
            "Inclusive design and accessibility treated as acceptance criteria",
          ],
        },
      ],
      overlays: [
        {
          constraintId: "regulated",
          bullets: [
            "Release documentation packs and traceability from requirement → test → deploy",
            "Change advisory alignment and emergency change discipline rehearsed early",
          ],
          risk: "Regulatory gating can extend timelines — front-load the minimum viable compliance slice.",
        },
        {
          constraintId: "legacy",
          bullets: [
            "Strangler patterns and clear bounded contexts to avoid big-bang cutovers",
            "Dual-run periods and reconciliation as first-class work items",
          ],
          risk: "Hidden integration debt is the silent killer — spend real time on discovery reads and shadow traffic.",
        },
        {
          constraintId: "velocity",
          bullets: [
            "Thin vertical slices with weekly business-visible demos",
            "Explicit trade-off log so speed doesn't silently erode security or quality",
          ],
          risk: "Speed without guardrails creates rework — we keep non-functional requirements visible in the backlog.",
        },
        {
          constraintId: "cloudNative",
          bullets: [
            "Infrastructure as code, policy-as-code, and FinOps baselines from week one",
            "Kubernetes and observability patterns sized to your real scale — not resume-driven complexity",
          ],
          risk: "Platform sprawl without ownership — we align on who runs what before production.",
        },
        {
          constraintId: "genAi",
          bullets: [
            "Evaluation harness, PII redaction, and human review for high-impact outputs",
            "Prompt/version governance and incident playbooks for model behavior drift",
          ],
          risk: "Undocumented prompts and silent model changes are operational risk — we instrument and review.",
        },
      ],
    },
  },
  de: {
    announcement:
      "Neu: Agentische KI & sichere Cloud — für regulierte Branchen entwickelt",
    nav: {
      whatWeDo: "Was wir tun",
      industries: "Branchen",
      ecosystem: "Ökosystem",
      whoWeAre: "Wer wir sind",
      insights: "Insights",
      resources: "Ressourcen",
      careers: "Karriere",
      getStarted: "Loslegen",
      talkArchitect: "Mit einem Architekten sprechen →",
    },
    mega: {
      columns: [
        {
          groups: [
            {
              heading: "AI and Gen AI",
              items: [
                { label: "AI agents & AGI", href: "/what-we-do/ai-genai#ai-agents" },
                { label: "AI & ML (Artificial Intelligence & Machine Learning)", href: "/what-we-do/ai-genai#ai-ml" },
                { label: "DL & NLP (Deep Learning & Natural Language Processing)", href: "/what-we-do/ai-genai#dl-nlp" },
                { label: "N8N workflows", href: "/what-we-do/ai-genai#intelligent-workflows" },
                { label: "Voice agents", href: "/what-we-do/ai-genai#voice-agents" },
                { label: "Industry AI solutions", href: "/what-we-do/ai-genai#industry-ai-solutions" },
              ],
            },
            {
              heading: "Applications",
              items: [
                { label: "IT consulting and advisory", href: "/what-we-do/applications#it-consulting-and-advisory" },
                { label: "SaaS applications", href: "/what-we-do/applications#saas-applications" },
                { label: "Enterprise application", href: "/what-we-do/applications#enterprise-application" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Cloud",
              items: [
                {
                  label: "Cloud native application",
                  href: "/what-we-do/cloud#cloud-native-application",
                },
                { label: "AWS and Azure, GCP", href: "/what-we-do/cloud#aws-azure-gcp" },
                { label: "Oracle support", href: "/what-we-do/cloud#oracle-support" },
                { label: "On-prem support", href: "/what-we-do/cloud#on-prem-support" },
              ],
            },
            {
              heading: "Custom software solutions",
              items: [
                {
                  label: "Enterprise resource planning",
                  href: "/what-we-do/custom-software#erp",
                },
                {
                  label: "Human capital management",
                  href: "/what-we-do/custom-software#hcm",
                },
                {
                  label: "Supply chain management",
                  href: "/what-we-do/custom-software#scm",
                },
                {
                  label: "Customer relationship management",
                  href: "/what-we-do/custom-software#crm",
                },
                {
                  label: "Content management systems & business intelligence",
                  href: "/what-we-do/custom-software#cms-bi",
                },
                {
                  label: "Learning management systems",
                  href: "/what-we-do/custom-software#lms",
                },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Security and Digital platforms",
              items: [
                { label: "Cyber Security Shielding", href: "/what-we-do/security-digital-platforms#cyber-security-shielding" },
                { label: "Digital engineering", href: "/what-we-do/security-digital-platforms#digital-engineering" },
                { label: "Platform engineering", href: "/what-we-do/security-digital-platforms#platform-engineering" },
              ],
            },
            {
              heading: "Data privacy and compliances",
              items: [
                { label: "GDPR compliance", href: "/what-we-do/security-digital-platforms#gdpr-compliance" },
                { label: "HIPAA compliance", href: "/what-we-do/security-digital-platforms#hipaa-compliance" },
                { label: "ISO 27001 and security standards", href: "/what-we-do/security-digital-platforms#iso-27001" },
                { label: "SOC 2 Type II", href: "/what-we-do/security-digital-platforms#soc-2-type-ii" },
                {
                  label: "Other frameworks (PCI DSS, regional privacy, sector rules)",
                  href: "/what-we-do/security-digital-platforms#other-compliance-frameworks",
                },
              ],
            },
          ],
        },
      ],
    },
    whoWeAreMega: [
      {
        label: "Über uns",
        href: "/who-we-are/about-us",
        description: "Führung, Mission und wie wir Ergebnisse liefern.",
      },
      {
        label: "Globale Präsenz",
        href: "/who-we-are/global-presence",
        description: "Kunden und Märkte in Schlüsselregionen weltweit.",
      },
      {
        label: "Newsroom",
        href: "/who-we-are/newsroom",
        description: "Perspektiven zu Cloud, KI, Sicherheit und Plattformen.",
      },
      {
        label: "Karriere",
        href: "/who-we-are/careers",
        description: "Mit Produkt-Engineering und Solution Architects wachsen.",
      },
    ],
    insightsMega: [
      {
        label: "Fallstudien",
        href: "/insights/case-studies",
        description: "Deep Dives zu Architektur, Delivery und messbarer Wirkung.",
      },
      {
        label: "Customer Stories",
        href: "/insights/customer-stories",
        description: "Kurzformate und Highlights — später durch freigegebene Stories ersetzen.",
      },
      {
        label: "Nachhaltigkeit",
        href: "/insights/sustainability",
        description: "Responsible Tech, carbon-aware Engineering und ethische KI.",
      },
    ],
    whoWeAreCareersForm: {
      heroEyebrow: "Karriere",
      heroTitle: "Bauen Sie mit uns Software mit Anspruch",
      heroSub:
        "Wir suchen Handwerk, Neugier und Integrität. Erzählen Sie, wie Sie arbeiten — wir melden uns bei passenden Profilen.",
      cardTitle: "In einem Schritt bewerben",
      cardSub: "Ohne Konto. Ihre Daten gehen nur an unser Talent-Team.",
      fullName: "Vollständiger Name",
      email: "Geschäftliche E-Mail",
      phone: "Telefon (optional)",
      linkedin: "LinkedIn oder Portfolio-URL (optional)",
      roleInterest: "Rolle oder Fachbereich",
      coverLetter: "Was möchten Sie als Nächstes bauen?",
      submit: "Bewerbung senden",
      submitting: "Wird gesendet…",
      successTitle: "Bewerbung eingegangen",
      successBody:
        "Vielen Dank. Bei passenden Suchaufträgen melden wir uns innerhalb weniger Werktage.",
      errorGeneric: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder uns mailen.",
      privacyNote:
        "Mit dem Absenden stimmen Sie zu, dass wir diese Angaben für Recruiting speichern und nutzen. Siehe Datenschutz.",
    },
    industries: [
      { slug: "automotive", label: "Automotive" },
      { slug: "energy-and-utilities", label: "Energie & Versorgungsbetriebe" },
      { slug: "fintech", label: "FinTech" },
      { slug: "banking", label: "Bankwesen" },
      { slug: "insurance", label: "Versicherung" },
      { slug: "high-tech", label: "High Tech" },
      { slug: "manufacturing", label: "Fertigung" },
      { slug: "healthcare-and-life-sciences", label: "Healthcare & Life Sciences" },
      { slug: "fmcg", label: "FMCG" },
      { slug: "retail", label: "Einzelhandel" },
      { slug: "travel-and-transport", label: "Reisen & Transport" },
      { slug: "logistics", label: "Logistik" },
      { slug: "hospitality", label: "Gastgewerbe" },
      { slug: "real-estate", label: "Immobilien" },
    ],
    hero: {
      kicker: "Saketh Tech Private Limited",
      h1: "Unser Anspruch: der Partner, dem Konzerne bei Software, Cloud und KI weltweit vertrauen.",
      sub: "Wir entwickeln Webanwendungen, Multi-Tenant-SaaS und mobile Produkte in hoher Qualität — ergänzt durch ERP, HRM, cloud-native Plattformen, Cybersicherheit und agentische KI — mit Integrator-Gründlichkeit und Produktteam-Tempo.",
      cta1: "Zur Geschichte",
      cta2: "Was wir tun",
      note: "Führungsperspektive — strukturierte Programme, security-first, messbare Ergebnisse.",
      visual:
        "Vom Browser bis zum App Store: ein Engineering-Partner für alle Produkt-Oberflächen.",
    },
    metrics: {
      title: "Technologie mit ROI",
      cta: "Mehr erfahren",
      m: [
        [
          "45%",
          "kürzere Delivery-Zyklen mit unserem Cloud-native-Blueprint.",
        ],
        [
          "20%",
          "besseres Incident-Response durch Security-by-Design.",
        ],
        [
          "~40%",
          "geringere Gesamtkosten bei konsolidiertem ERP und Prozessen.",
        ],
        [
          "3×",
          "schnellere Experimente, wenn Gen-KI messbar und kontrolliert ist.",
        ],
      ],
    },
    services: {
      label: "Leistungen",
      title: "Alles für modernes digitales Geschäft — aus einer Hand.",
      sub: "Web, SaaS und Mobile — plus Plattformen, Cloud, Sicherheit und KI — in einem Liefermodell, damit Ihre Teams schneller shipen und weniger Schnittstellen pflegen.",
      learn: "Mehr",
      items: [
        {
          title: "Individuelle Software, Web & Mobile",
          desc: "Web-Apps, PWAs, iOS und Android — plus APIs, Portale und Integrationen für Ihre Prozesse.",
        },
        {
          title: "Enterprise Applications (ERP & HCM)",
          desc: "Konfigurierbare ERP- und HCM-Plattformen für Betrieb, People und Finance auf modernen Delivery-Stacks.",
        },
        {
          title: "SaaS & Produktentwicklung",
          desc: "Multi-Tenant-SaaS, Abos und Billing, Observability und Roadmap-Umsetzung.",
        },
        {
          title: "Cloud Platforms & DevOps Engineering",
          desc: "Kubernetes, CI/CD, Observability und resiliente Cloud-Plattformen für Enterprise-Delivery.",
        },
        {
          title: "Cybersicherheit",
          desc: "Zero-Trust, Assessments und kontinuierliches Hardening.",
        },
        {
          title: "AI Engineering & Intelligent Automation",
          desc: "Agentische Automatisierung, RAG, Prompt-Systeme und verantwortungsvolle Gen-KI mit messbaren Leitplanken.",
        },
      ],
    },
    industriesSec: {
      label: "Branchen",
      title: "Lösungen für Ihre Branche — skalierbar gebaut.",
      sub: "Ob reguliert oder schnelllebiger Handel — wiederverwendbare Muster, keine Einheitslösung.",
      sectors: [
        "Finanzdienstleistungen & Fintech",
        "Gesundheitswesen & Life Sciences",
        "Fertigung & Industrie",
        "Handel, CPG & Logistik",
        "Technologie & SaaS",
        "Energie & Versorgung",
        "Öffentlicher Sektor & Bildung",
        "Medien, Gaming & Entertainment",
      ],
    },
    stories: {
      label: "Referenzen",
      title: "Wie ein Produkt gebaut. Wie ein Partner geliefert.",
      link: "So arbeiten wir",
      cards: [
        {
          name: "Plattform-Modernisierung",
          role: "Mittelstand-SaaS",
          headline: "Weniger Release-Risiko mit Cloud-Pipelines und Observability.",
          quote: "„Schnellere Releases, weniger Vorfälle — ohne größeres Ops-Team.“",
          more: "Vorgehen",
        },
        {
          name: "ERP & Workforce",
          role: "Fertigung",
          headline: "Einheitliche Operations und HR auf einer Datenbasis.",
          quote: "„Endlich ein Workflow vom Shopfloor bis zur Finance.“",
          more: "Vorgehen",
        },
        {
          name: "KI-Copiloten",
          role: "Finanzdienstleistungen",
          headline: "Sichere Gen-KI mit Leitplanken und nachvollziehbaren Prompts.",
          quote: "„Compliance blieb intakt, Produktivität stieg.“",
          more: "Vorgehen",
        },
      ],
    },
    company: {
      label: "Unternehmen",
      title: "Saketh Tech Private Limited",
      p: "Wir sind ein Startup mit Konzernanspruch: multidisziplinäre Teams für Software, Plattformen und KI — ohne Kompisse bei Qualität, Sicherheit oder Tempo.",
      bullets: [
        "End-to-End von Architektur bis Betrieb",
        "Transparente Lieferung mit messbaren Meilensteinen",
        "Security und Compliance von Tag eins",
      ],
      ambition: "Unser Anspruch",
      ambitionP:
        "Der Partner für komplexe Probleme, enge Timelines und nachhaltige Ergebnisse — Produktthinking plus Engineering-Disziplin, KI wo sie echten Mehrwert schafft.",
      g1: "Global",
      g1s: "Delivery-Modell",
      g2: "Full Stack",
      g2s: "Apps bis KI",
    },
    careers: {
      label: "Karriere",
      title: "Wir suchen Builder, Designer und KI-Ingenieure.",
      sub: "Remote-freundlich, hohe Eigenverantwortung. Zeigen Sie uns, was Sie liefern.",
      cta: "Vorstellen",
    },
    cta: {
      title: "Bereit für das Nächste?",
      sub: "Erzählen Sie uns von Roadmap und Zielen — wir bringen Architektur, Engineering und KI.",
      primary: "Gespräch vereinbaren",
      secondary: "Overview herunterladen",
      fine: "Antwort typischerweise innerhalb eines Werktags. NDA möglich.",
    },
    contact: {
      label: "Kontakt",
      title: "Kontakt",
      sub: "Teilen Sie ein paar Details — wir melden uns schnell mit den nächsten Schritten.",
      infoTitle: "Kontaktinformationen",
      infoSub: "Kontaktieren Sie uns über einen der Kanäle.\nWir antworten in der Regel innerhalb von 24 Stunden.",
      cards: {
        phoneLabel: "Telefon",
        phoneValue: "+91 8187889752",
        emailLabel: "E-Mail",
        emailValue: "contact@sakethaiautomation.com",
        whatsappLabel: "WhatsApp",
        whatsappValue: "Chatten Sie sofort mit uns",
        locationLabel: "Standort",
        locationValue: "Wir betreuen Kunden weltweit",
      },
      guaranteeTitle: "Schnelle Antwort",
      guaranteeBody:
        "Wir beantworten alle Anfragen innerhalb von 24 Stunden an Werktagen. Für dringende Anliegen rufen Sie an oder schreiben Sie uns per WhatsApp.",
      formTitle: "Lernen wir uns kennen",
      firstName: "Vorname *",
      lastName: "Nachname *",
      email: "E-Mail *",
      role: "Ihre Rolle im Unternehmen *",
      companyName: "Unternehmensname *",
      websiteOptional: "Website (optional)",
      phoneNumber: "Telefonnummer *",
      companySize: "Unternehmensgröße *",
      annualRevenueOptional: "Jahresumsatz (optional)",
      projectBudget: "Projektbudget *",
      howCanWeHelp: "Wie können wir helfen? *",
      termsLabel: "Ich stimme den Geschäftsbedingungen des Unternehmens zu",
      submit: "Senden",
      placeholders: {
        firstName: "Name",
        lastName: "Mustermann",
        email: "beispiel@gmail.com",
        role: "z. B. CTO, Projektmanager, etc.",
        companyName: "Ihr Unternehmensname",
        website: "https://ihrunternehmen.de",
        phone: "1234567890",
        help: "Beschreiben Sie bitte Ihr Vorhaben und wie wir helfen können",
      },
      options: {
        countryCodes: [
          { label: "+91", value: "+91" },
          { label: "+971", value: "+971" },
          { label: "+1", value: "+1" },
          { label: "+61", value: "+61" },
          { label: "+49", value: "+49" },
          { label: "+41", value: "+41" },
        ],
        companySizes: [
          { label: "Unternehmensgröße wählen", value: "" },
          { label: "1–10 Mitarbeitende", value: "1-10" },
          { label: "11–50 Mitarbeitende", value: "11-50" },
          { label: "51–200 Mitarbeitende", value: "51-200" },
          { label: "201–500 Mitarbeitende", value: "201-500" },
          { label: "501+ Mitarbeitende", value: "501+" },
        ],
        annualRevenue: [
          { label: "Jahresumsatz wählen", value: "" },
          { label: "Unter $1 Mio.", value: "<1M" },
          { label: "$1 Mio. – $10 Mio.", value: "1-10M" },
          { label: "$10 Mio. – $50 Mio.", value: "10-50M" },
          { label: "$50 Mio. – $100 Mio.", value: "50-100M" },
          { label: "$100 Mio.+", value: "100M+" },
        ],
        projectBudgets: [
          { label: "Projektbudget wählen", value: "" },
          { label: "Unter $20K", value: "<20K" },
          { label: "$20K – $50K", value: "20-50K" },
          { label: "$50K – $100K", value: "50-100K" },
          { label: "$100K – $200K", value: "100-200K" },
          { label: "$200K – $500K", value: "200-500K" },
          { label: "$500K+", value: "500K+" },
        ],
      },
    },
    footer: {
      tagline:
        "Private Limited — Software, Cloud, Sicherheit und KI für ambitionierte Teams.",
      col1: "Was wir tun",
      col2: "Branchen",
      col3: "Unternehmen",
      col4: "Rechtliches",
      legalPrivacy: "Datenschutzerklärung",
      legalCookies: "Cookie-Richtlinie",
      legalTerms: "Allgemeine Geschäftsbedingungen",
      legalData: "Datenschutz & Sicherheit",
      legalDisclaimer: "Haftungsausschluss",
      disclaimer:
        "Unabhängige Seite — Referenzmarken nur zur Inspiration.",
      copyright: "Saketh Tech Private Limited. Alle Rechte vorbehalten.",
      photoCredit:
        "Fotos von Unsplash — freie kommerzielle Nutzung gemäß Unsplash-Lizenz.",
    },
    cookie: {
      text: "Wir verwenden Cookies für Nutzung und Analyse.",
      privacy: "Datenschutzerklärung",
      cookiesPolicy: "Cookie-Richtlinie",
      reject: "Ablehnen",
      accept: "Akzeptieren",
    },
    aiAssistant: {
      title: "Saketh Tech KI-Assistent",
      subtitle: "Fragen Sie uns zu Leistungen, Fähigkeiten oder Ihrem Projekt.",
      reset: "Chat zurücksetzen",
      placeholder: "Nachricht eingeben…",
      sendAria: "Senden",
      welcome:
        "Hallo — ich bin der Saketh-Tech-Assistent. Fragen Sie zu Software, Cloud, Security, ERP oder KI. (Demo: Verbinden Sie Ihren n8n-Webhook über N8N_AI_WEBHOOK_URL.)",
      thinking: "Denke nach…",
      error: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
      demoHint: "Demo-Modus — N8N_AI_WEBHOOK_URL setzen für Ihren n8n-Workflow.",
    },
    globalPresence: {
      label: "Globale Präsenz",
      title: "Indien als Hub · Kunden weltweit",
      sub: "Derzeit gibt es nur ein physisches Büro — in Indien, für Engineering und Delivery. Wir arbeiten für Kunden in Australien, USA, Kanada, Deutschland, der Schweiz, den VAE, Oman und weiteren Märkten. Ein Dubai-Büro öffnet in etwa zwei Monaten mit lokalem UAE-Partner; die gestrichelten Linien zeigen die Zusammenarbeit vom indischen Hub aus.",
      legendHq: "Indien · Büro heute",
      legendClients: "Kundenstandorte",
      legendSoon: "VAE-Büro · Eröffnung bald",
      legendRoutes: "Animierte Striche · Indien zu jeder Region",
      clientListProse:
        "Australien · USA · Kanada · Deutschland · Schweiz · VAE · Oman — und weltweit weitere, betreut vom indischen Hub.",
      markers: {
        in: {
          country: "Indien",
          city: "Mumbai",
          role: "Einziges Büro heute · HQ & Delivery",
        },
        ae: {
          country: "VAE",
          city: "Dubai",
          role: "Büro ≈2 Mo. · UAE-Partner · Mandanten jetzt",
        },
      },
      clientMarkets: {
        ch: { code: "CH", name: "Schweiz" },
        au: { code: "AU", name: "Australien" },
        us: { code: "US", name: "USA" },
        de: { code: "DE", name: "Deutschland" },
        ca: { code: "CA", name: "Kanada" },
        om: { code: "OM", name: "Oman" },
      },
    },
    deliveryJourney: {
      label: "Wie wir liefern",
      title: "Vom ersten Workshop bis zu belastbarer Produktion",
      sub: "Ein disziplinierter Pfad, der zu Ihrem Risikoprofil passt — kein Einheits-Deck, sondern gemeinsames Alignen, Bauen, Härten und Verbessern.",
      hint: "Phase wählen — typische Artefakte, die wir gemeinsam erzeugen.",
      artifactsLabel: "Typische Artefakte",
      steps: [
        {
          title: "Discover & Align",
          desc: "Wir rahmen das Problem, holen Sponsoren ins Boot und machen Erfolgskriterien messbar, bevor wir große Build-Kapazität binden.",
          artifacts: "Problem-Brief · Stakeholder-Karte · Risiken & Annahmen · 90-Tage-Ergebnisse",
        },
        {
          title: "Design & Build",
          desc: "Architektur und Delivery in kurzen Zyklen — sichere SDLC, beobachtbare Inkremente, klare Rollback-Pfade.",
          artifacts: "Referenz-Slices · Threat-Model-Hooks · CI/CD & Umgebungsstrategie · Demo-Kadenz",
        },
        {
          title: "Harden & Launch",
          desc: "Wir strapazieren den Weg in die Produktion: Migration, Cutover-Probe, Support-Readiness, operativer Übergang.",
          artifacts: "Testnachweise · Runbooks · Observability-Dashboards · Hypercare-Fenster",
        },
        {
          title: "Operate & Improve",
          desc: "Zuverlässigkeit, Kosten und Sicherheit sind laufende Produktarbeit — keine Ticket-Schlange ohne Kontext.",
          artifacts: "SLOs & Error Budgets · Backlog für Risiko & Debt · Continuous-Compliance-Hooks",
        },
      ],
    },
    engagementModels: {
      label: "Zusammenarbeitsmodelle",
      title: "Engagement-Modelle — ehrlich verglichen",
      sub: "Selten ein Modell fürs ganze Leben. Wir starten mit der Passung zu Ownership, Tempo und Risiko.",
      footnote:
        "Mischformen sind üblich — z. B. Produkt-Squad für eine neue Plattform plus Augmentation für Legacy. Nach kurzer Discovery empfehlen wir die Mischung.",
      bestWhenLabel: "Ideal wenn:",
      watchoutLabel: "Achtung:",
      models: [
        {
          name: "Expert Augmentation",
          tagline: "Spezialisten in Ihrem Team",
          bestFor:
            "Sie haben starke Product- und Architektur-Führung, brauchen aber Senior-Kapazität in Cloud, Plattform, Daten, Security oder Full-Stack.",
          includes: [
            "Benannte Engineer:innen an Ihre Tools und Governance angepasst",
            "Teilnahme an Ihren Zeremonien mit transparenter Durchsatzplanung",
            "Wissenstransfer als Ziel, nicht als Zusatz",
          ],
          watchouts:
            "Scope und Priorisierung bleiben bei Ihnen — ohne gesundes Backlog-Staging stockt Tempo.",
        },
        {
          name: "Outcome-Pod",
          tagline: "Cross-funktionales Team mit gemeinsamen KPIs",
          bestFor:
            "Sie wollen ein Team für ein begrenztes Ergebnis — Migration, Modernisierungsspur oder Plattform-Meilenstein — mit geteiltem Lieferrisiko.",
          includes: [
            "Kleines Cross-Functional-Squad (Build + QA + SRE-nah)",
            "Meilenplan an messbaren Outcomes gekoppelt, nicht nur Aufwand",
            "Joint Steering mit Eskalations- und Abhängigkeitsmanagement",
          ],
          watchouts:
            "Braucht befähigte Gegenparts für Produkt/Security — Engpässe außerhalb des Pods bremsen alle.",
        },
        {
          name: "Produkt- & Plattform-Squad",
          tagline: "End-to-End-Ownership für ein Produktinitiative",
          bestFor:
            "Sie bringen ein Produkt an den Start oder auf eine neue Plattform — Web, SaaS oder Mobile — und wollen Architektur- plus Delivery-Ownership von uns.",
          includes: [
            "Roadmap-Gestaltung, UX/Engineering-Zusammenarbeit, Release-Ownership",
            "Betriebsmodell (SRE, On-Call, SLAs) von Anfang an geklärt",
            "Security, Privacy und KI-Guardrails als Product Requirements",
          ],
          watchouts:
            "Am stärksten bei produktgeformtem Scope — reine Staff-Aug über lose Tickets passt schlecht.",
        },
      ],
    },
    capabilityNav: {
      label: "Capability Navigator",
      title: "Schneller Fit-Check — Branche × Constraint",
      sub: "Indikativ, kein Angebot. Zeigt, wie wir Engineering, Security und Programm-Rigor für Ihren Kontext gewichten.",
      industryPrompt: "Branche",
      constraintPrompt: "Top-Constraint",
      resultLabel: "Empfohlene Schwerpunkte",
      engagementLine: "Passt oft zu",
      riskLabel: "Realitätscheck",
      cta: "Diesen Kontext besprechen",
      industries: [
        { id: "fin", label: "Finanzdienstleistungen & Fintech" },
        { id: "health", label: "Gesundheitswesen & Life Sciences" },
        { id: "mfg", label: "Fertigung & Lieferkette" },
        { id: "retail", label: "Handel & E-Commerce" },
        { id: "techSaas", label: "Technologie & SaaS" },
        { id: "public", label: "Öffentlicher Sektor & Bildung" },
      ],
      constraints: [
        { id: "regulated", label: "Hohe Regulatorik & Audit" },
        { id: "legacy", label: "Legacy-Landschaft modernisieren" },
        { id: "velocity", label: "Aggressives Time-to-Market" },
        { id: "cloudNative", label: "Cloud-native Skalierung & Kosten" },
        { id: "genAi", label: "Gen-KI mit Guardrails" },
      ],
      bases: [
        {
          industryId: "fin",
          headline: "Vertrauen, Evidenz, nicht verhandelbare Kontrollen",
          engagementPick: "Outcome-Pod oder Produkt-Squad mit gemeinsamem Compliance-Steering.",
          bullets: [
            "Segregation of Duties in Pipelines; unveränderliche Audit-Trails wo nötig",
            "API- und Identitätsmuster, die Prüfungen standhalten",
            "Betriebsresilienz nahe Zahlungsverkehr und Kerngeschäft",
          ],
        },
        {
          industryId: "health",
          headline: "Sicherheit, Interoperabilität, vorsichtiger Workflow-Wandel",
          engagementPick: "Outcome-Pod mit klinischen und Ops-Gegenparts in jedem Sprint.",
          bullets: [
            "Datenminimierung und klare Grenzen für PHI/klinische Daten",
            "Integrationsdisziplin: EHR, Labore, Geräte, Portale",
            "Human-in-the-Loop, wenn klinische oder Patienten-Relevanz hoch ist",
          ],
        },
        {
          industryId: "mfg",
          headline: "ERP-Wahrheit, OT/IT-Hygiene, Stillstands-Bewusstsein",
          engagementPick: "Outcome-Pod über ERP, Shopfloor und Finance-Ausrichtung.",
          bullets: [
            "Planung um Produktionsfenster — Downtime ist Geschäftsrisiko",
            "Ausrichtung Shopfloor, Logistik, Finance",
            "Observability, die Vorfälle mit Umsatz- und SLA-Wirkung verbindet",
          ],
        },
        {
          industryId: "retail",
          headline: "Peaks, Payments, Omnichannel-Konsistenz",
          engagementPick: "Produkt-Squad für peak-sensitive Releases; Outcome-Pod für große Replatforming-Spuren.",
          bullets: [
            "Traffic- und Bestandsmuster treiben Architektur",
            "Zahlungssicherheit und Fraud-Bewusstsein in Release-Gates",
            "Experimentieren mit Leitplanken (Flags, Canaries, Rollback)",
          ],
        },
        {
          industryId: "techSaas",
          headline: "Mandanten-Isolation, Zuverlässigkeit, Produkt-Tempo",
          engagementPick: "Produkt- & Plattform-Squad für mandantenbewusste Roadmaps und SLOs.",
          bullets: [
            "Multi-Tenant: Daten, Config, Billing, Upgrades",
            "SLOs, die Kund:innen spüren — Error Budgets steuern Priorität",
            "Developer Experience, die Liefergeschwindigkeit nachhaltig hält",
          ],
        },
        {
          industryId: "public",
          headline: "Barrierefreiheit, Ausschreibungsklarheit, transparente Fortschritte",
          engagementPick: "Outcome-Pod mit beschaffungsfreundlicher Evidenz pro Inkrement.",
          bullets: [
            "Evidenzpakete für Aufsichtsfragen — keine Vanity-Dashboards",
            "Vendor-neutrale Architektur, wo Politik Optionen verlangt",
            "Inklusives Design und A11y als Abnahmekriterien",
          ],
        },
      ],
      overlays: [
        {
          constraintId: "regulated",
          bullets: [
            "Release-Dokumentation und Trace Requirement → Test → Deploy",
            "Change-Advisory und Notfall-Änderungen früh einüben",
          ],
          risk: "Regulatorische Gates verlängern Zeitpläne — minimales Compliance-Slice früh definieren.",
        },
        {
          constraintId: "legacy",
          bullets: [
            "Strangler-Patterns und Bounded Contexts statt Big Bang",
            "Dual-Run und Abgleich als explizite Arbeitspakete",
          ],
          risk: "Verborgene Integrations-Schulden — echte Zeit für Discovery-Reads und Schatten-Traffic.",
        },
        {
          constraintId: "velocity",
          bullets: [
            "Dünne vertikale Scheiben mit wöchentlichen Business-Demos",
            "Trade-off-Log, damit Tempo Security/Qualität nicht heimlich frisst",
          ],
          risk: "Ohne Leitplanken entsteht Nacharbeit — NFRs bleiben sichtbar im Backlog.",
        },
        {
          constraintId: "cloudNative",
          bullets: [
            "IaC, Policy-as-Code, FinOps-Baseline ab Woche eins",
            "K8s/Observability passend zur realen Skala — kein CV-Drive",
          ],
          risk: "Plattform-Sprawl ohne Owner — vor Prod klären, wer was betreibt.",
        },
        {
          constraintId: "genAi",
          bullets: [
            "Eval-Harness, PII-Redaktion, Human Review bei High-Impact-Outputs",
            "Prompt/Versions-Governance und Playbooks für Modell-Drift",
          ],
          risk: "Undokumentierte Prompts und stille Modellwechsel sind Ops-Risiko — wir instrumentieren und reviewen.",
        },
      ],
    },
  },
  ar: {
    announcement:
      "جديد: الذكاء الاصطناعي الوكيل والسحابة الآمنة — مصممة للقطاعات الخاضعة للتنظيم",
    nav: {
      whatWeDo: "ما نقوم به",
      industries: "القطاعات",
      ecosystem: "النظام البيئي",
      whoWeAre: "من نحن",
      insights: "رؤى",
      resources: "المصادر",
      careers: "الوظائف",
      getStarted: "ابدأ الآن",
      talkArchitect: "تحدث إلى مهندس معماري ←",
    },
    mega: {
      columns: [
        {
          groups: [
            {
              heading: "AI and Gen AI",
              items: [
                { label: "AI agents & AGI", href: "/what-we-do/ai-genai#ai-agents" },
                { label: "AI & ML (Artificial Intelligence & Machine Learning)", href: "/what-we-do/ai-genai#ai-ml" },
                { label: "DL & NLP (Deep Learning & Natural Language Processing)", href: "/what-we-do/ai-genai#dl-nlp" },
                { label: "N8N workflows", href: "/what-we-do/ai-genai#intelligent-workflows" },
                { label: "Voice agents", href: "/what-we-do/ai-genai#voice-agents" },
                { label: "Industry AI solutions", href: "/what-we-do/ai-genai#industry-ai-solutions" },
              ],
            },
            {
              heading: "Applications",
              items: [
                { label: "IT consulting and advisory", href: "/what-we-do/applications#it-consulting-and-advisory" },
                { label: "SaaS applications", href: "/what-we-do/applications#saas-applications" },
                { label: "Enterprise application", href: "/what-we-do/applications#enterprise-application" },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "السحابة",
              items: [
                {
                  label: "Cloud native application",
                  href: "/what-we-do/cloud#cloud-native-application",
                },
                { label: "AWS and Azure, GCP", href: "/what-we-do/cloud#aws-azure-gcp" },
                { label: "Oracle support", href: "/what-we-do/cloud#oracle-support" },
                { label: "On-prem support", href: "/what-we-do/cloud#on-prem-support" },
              ],
            },
            {
              heading: "Custom software solutions",
              items: [
                {
                  label: "Enterprise resource planning",
                  href: "/what-we-do/custom-software#erp",
                },
                {
                  label: "Human capital management",
                  href: "/what-we-do/custom-software#hcm",
                },
                {
                  label: "Supply chain management",
                  href: "/what-we-do/custom-software#scm",
                },
                {
                  label: "Customer relationship management",
                  href: "/what-we-do/custom-software#crm",
                },
                {
                  label: "Content management systems & business intelligence",
                  href: "/what-we-do/custom-software#cms-bi",
                },
                {
                  label: "Learning management systems",
                  href: "/what-we-do/custom-software#lms",
                },
              ],
            },
          ],
        },
        {
          groups: [
            {
              heading: "Security and Digital platforms",
              items: [
                { label: "Cyber Security Shielding", href: "/what-we-do/security-digital-platforms#cyber-security-shielding" },
                { label: "Digital engineering", href: "/what-we-do/security-digital-platforms#digital-engineering" },
                { label: "Platform engineering", href: "/what-we-do/security-digital-platforms#platform-engineering" },
              ],
            },
            {
              heading: "Data privacy and compliances",
              items: [
                { label: "GDPR compliance", href: "/what-we-do/security-digital-platforms#gdpr-compliance" },
                { label: "HIPAA compliance", href: "/what-we-do/security-digital-platforms#hipaa-compliance" },
                { label: "ISO 27001 and security standards", href: "/what-we-do/security-digital-platforms#iso-27001" },
                { label: "SOC 2 Type II", href: "/what-we-do/security-digital-platforms#soc-2-type-ii" },
                {
                  label: "Other frameworks (PCI DSS, regional privacy, sector rules)",
                  href: "/what-we-do/security-digital-platforms#other-compliance-frameworks",
                },
              ],
            },
          ],
        },
      ],
    },
    whoWeAreMega: [
      {
        label: "من نحن",
        href: "/who-we-are/about-us",
        description: "القيادة والرسالة وكيف نُقدّم النتائج الهندسية.",
      },
      {
        label: "الحضور العالمي",
        href: "/who-we-are/global-presence",
        description: "عملاء في الأسواق الرئيسية حول العالم.",
      },
      {
        label: "الأخبار",
        href: "/who-we-are/newsroom",
        description: "رؤى في الهندسة السحابية والذكاء الاصطناعي والأمن والمنصات.",
      },
      {
        label: "الوظائف",
        href: "/who-we-are/careers",
        description: "انضم إلى مهندسي المنتج وهندسة الحلول.",
      },
    ],
    insightsMega: [
      {
        label: "دراسات الحالة",
        href: "/insights/case-studies",
        description: "تحليلات معمّقة للتسليم: البنية والتنفيذ والأثر القابل للقياس.",
      },
      {
        label: "قصص العملاء",
        href: "/insights/customer-stories",
        description: "قصص قصيرة ونبذات — تُستبدل لاحقاً بمحتوى مُعتمد.",
      },
      {
        label: "الاستدامة",
        href: "/insights/sustainability",
        description: "تقنية مسؤولة، هندسة واعية للكربون، وذكاء اصطناعي أخلاقي.",
      },
    ],
    whoWeAreCareersForm: {
      heroEyebrow: "الوظائف",
      heroTitle: "ابنِ معنا برمجيات باختصاص عالٍ",
      heroSub:
        "نستقطب الحرفية والفضول والنزاهة. صفّ كيف تعمل — وسنرد على كل طلب جاد.",
      cardTitle: "قدّم بطلبك في خطوة",
      cardSub: "لا حاجة لحساب. تُرسل بياناتك فقط لفريق المواهب.",
      fullName: "الاسم الكامل",
      email: "البريد المهني",
      phone: "الهاتف (اختياري)",
      linkedin: "رابط LinkedIn أو معرض أعمال (اختياري)",
      roleInterest: "الدور أو المجال",
      coverLetter: "ما الذي تريد بناءه بعد ذلك؟",
      submit: "إرسال الطلب",
      submitting: "جاري الإرسال…",
      successTitle: "تم استلام الطلب",
      successBody:
        "شكراً لك. إذا ناسب ملفك بحثاً نشطاً، سنتواصل خلال أيام عمل قليلة.",
      errorGeneric: "حدث خطأ. حاول مرة أخرى أو راسلنا بالبريد.",
      privacyNote:
        "بالإرسال توافق على تخزين هذه البيانات لأغراض التوظيف. راجع سياسة الخصوصية.",
    },
    industries: [
      { slug: "automotive", label: "السيارات" },
      { slug: "energy-and-utilities", label: "الطاقة والمرافق" },
      { slug: "fintech", label: "التكنولوجيا المالية" },
      { slug: "banking", label: "المصرفية" },
      { slug: "insurance", label: "التأمين" },
      { slug: "high-tech", label: "التقنية العالية" },
      { slug: "manufacturing", label: "التصنيع" },
      { slug: "healthcare-and-life-sciences", label: "الرعاية الصحية وعلوم الحياة" },
      { slug: "fmcg", label: "سلع استهلاكية سريعة الحركة" },
      { slug: "retail", label: "التجزئة" },
      { slug: "travel-and-transport", label: "السفر والنقل" },
      { slug: "logistics", label: "الخدمات اللوجستية" },
      { slug: "hospitality", label: "الضيافة" },
      { slug: "real-estate", label: "العقارات" },
    ],
    hero: {
      kicker: "ساكيث تك المحدودة",
      h1: "طموحنا أن نكون الشريك الذي تثق به المؤسسات للبرمجيات والسحابة والذكاء الاصطناعي — على نطاق عالمي.",
      sub: "نصمم ونُسلّم تطبيقات ويب، وSaaS متعدد المستأجرين، وتجارب جوّال بجودة عالية — مع أنظمة تخطيط الموارد والموارد البشرية، والمنصات السحابية الأصلية، والأمن السيبراني، والذكاء الاصطناعي الوكيل — بجدية المكامل العالمي وسرعة فريق المنتج.",
      cta1: "شاهد القصة",
      cta2: "ما نقوم به",
      note: "رؤية قيادية — برامج منظمة، أمن أولاً، نتائج قابلة للقياس.",
      visual:
        "من المتصفح إلى متجر التطبيقات: شريك هندسة واحد لكل قنوات منتجك.",
    },
    metrics: {
      title: "تقنية تحقق عائد الاستثمار",
      cta: "اعرف المزيد",
      m: [
        [
          "٤٥٪",
          "تقليل في دورة التسليم عند تبني مخططنا السحابي الأصلي.",
        ],
        [
          "٢٠٪",
          "تحسن في الاستجابة للحوادث مع أنماط الأمن من التصميم.",
        ],
        [
          "~٤٠٪",
          "انخفاض في تكلفة التغيير عند توحيد أنظمة تخطيط موارد المؤسسات.",
        ],
        [
          "٣×",
          "تجارب أسرع عندما يكون الذكاء التوليدي مُداراً وقابلاً للقياس.",
        ],
      ],
    },
    services: {
      label: "القدرات",
      title: "كل ما تحتاجه لبناء وتشغيل الأعمال الرقمية الحديثة.",
      sub: "الويب وSaaS والجوال — إضافة إلى المنصات والسحابة والأمن والذكاء — في نموذج تسليم واحد لتُسرّع فرقك وتقلل التنازلات بين الفرق.",
      learn: "المزيد",
      items: [
        {
          title: "برمجيات مخصصة: ويب وجوال",
          desc: "تطبيقات ويب وPWA وiOS وAndroid — مع واجهات برمجة وبوابات وتكاملات لسير عملك.",
        },
        {
          title: "تطبيقات المؤسسات (ERP وHCM)",
          desc: "منصات قابلة للتهيئة للعمليات والأفراد والمالية.",
        },
        {
          title: "هندسة منتجات SaaS",
          desc: "SaaS متعدد المستأجرين والاشتراكات والفوترة والمراقبة وتنفيذ خارطة الطريق.",
        },
        {
          title: "منصات السحابة وDevOps",
          desc: "كوبرنيتيس وCI/CD والمراقبة وأسس سحابية مرنة.",
        },
        {
          title: "الأمن السيبراني",
          desc: "نمط الثقة الصفرية والتقييمات والتعزيز المستمر.",
        },
        {
          title: "هندسة الذكاء الاصطناعي والأتمتة الذكية",
          desc: "أتمتة وكيلة وRAG وأنظمة prompts وتشغيل آمن للذكاء التوليدي.",
        },
      ],
    },
    industriesSec: {
      label: "القطاعات",
      title: "حلول مصممة لقطاعك — وجاهزة للتوسع.",
      sub: "سواء كنت في أسواق خاضعة للتنظيم أو تجارة سريعة — أنماط قابلة لإعادة الاستخدام دون حلول جاهزة فقط.",
      sectors: [
        "الخدمات المالية والتكنولوجيا المالية",
        "الرعاية الصحية وعلوم الحياة",
        "التصنيع والصناعة",
        "التجزئة والسلع واللوجستيات",
        "التكنولوجيا وSaaS",
        "الطاقة والمرافق",
        "القطاع العام والتعليم",
        "الإعلام والألعاب والترفيه",
      ],
    },
    stories: {
      label: "إثبات",
      title: "يُبنى كمنتج. يُسلَّم كشريك.",
      link: "كيف نعمل",
      cards: [
        {
          name: "تحديث المنصة",
          role: "SaaS متوسط",
          headline: "تقليل مخاطر الإصدار مع خطوط السحابة والمراقبة.",
          quote: "«إصدارات أسرع وحوادث أقل — دون توسيع فريق التشغيل.»",
          more: "النهج",
        },
        {
          name: "تخطيط موارد المؤسسات والقوى العاملة",
          role: "التصنيع",
          headline: "عمليات وموارد بشرية على مصدر حقيقة واحد.",
          quote: "«أخيراً سير عمل من المصنع إلى المالية.»",
          more: "النهج",
        },
        {
          name: "مساعدو الذكاء الاصطناعي",
          role: "الخدمات المالية",
          headline: "ذكاء توليدي آمن بضوابط ومسارات prompts واضحة.",
          quote: "«بقي الامتثال وارتفعت الإنتاجية.»",
          more: "النهج",
        },
      ],
    },
    company: {
      label: "الشركة",
      title: "ساكيث تك المحدودة",
      p: "نحن شركة ناشئة بطموح مؤسسي: فريق متعدد التخصصات يبني البرمجيات والمنصات وأنظمة الذكاء الاصطناعي لمؤسسات لا تستطيع المساومة على الجودة أو الأمن أو السرعة.",
      bullets: [
        "ملكية كاملة من الهندسة إلى التشغيل",
        "تسليم شفاف مع معالم قابلة للقياس",
        "الأمن والامتثال من اليوم الأول",
      ],
      ambition: "طموحنا",
      ambitionP:
        "أن نكون الشريك الذي تتصل به الفرق عندما يكون التعقيد عالياً والجدول زاحفاً والنتيجة يجب أن تدوم — نجمع تفكير المنتج مع انضباط الهندسة، ونستخدم الذكاء الاصطناعي حيث يضاعف القيمة حقاً.",
      g1: "عالمي",
      g1s: "نموذج التسليم",
      g2: "كامل المكدس",
      g2s: "من التطبيقات إلى الذكاء الاصطناعي",
    },
    careers: {
      label: "الوظائف",
      title: "نوظف المُنشئين والمصممين ومهندسي الذكاء الاصطناعي.",
      sub: "أدوار مناسبة للعمل عن بُعد مع ملكية عالية. أخبرنا بما تُنجزه على أفضل وجه.",
      cta: "قدّم نفسك",
    },
    cta: {
      title: "مستعد لبناء ما هو قادم؟",
      sub: "أخبرنا عن خارطة طريقك — سنحضر المعماريين والمهندسين وخبراء الذكاء الاصطناعي.",
      primary: "جدولة محادثة",
      secondary: "تحميل نظرة عامة",
      fine: "رد عادة خلال يوم عمل واحد. يمكن اتفاقية سرية.",
    },
    contact: {
      label: "اتصل",
      title: "اتصل",
      sub: "شارك بعض التفاصيل — وسنرد بسرعة بالخطوات التالية.",
      infoTitle: "معلومات التواصل",
      infoSub: "تواصل معنا عبر أي قناة.\nنرد عادة خلال ٢٤ ساعة.",
      cards: {
        phoneLabel: "الهاتف",
        phoneValue: "+91 8187889752",
        emailLabel: "البريد",
        emailValue: "contact@sakethaiautomation.com",
        whatsappLabel: "واتساب",
        whatsappValue: "تحدث معنا فوراً",
        locationLabel: "الموقع",
        locationValue: "نخدم عملاء حول العالم",
      },
      guaranteeTitle: "ضمان استجابة سريعة",
      guaranteeBody:
        "نرد على جميع الاستفسارات خلال ٢٤ ساعة في أيام العمل. للحالات العاجلة اتصل أو تواصل عبر واتساب مباشرة.",
      formTitle: "دعنا نتعرف عليك",
      firstName: "الاسم الأول *",
      lastName: "اسم العائلة *",
      email: "البريد الإلكتروني *",
      role: "دورك داخل المؤسسة *",
      companyName: "اسم الشركة *",
      websiteOptional: "الموقع (اختياري)",
      phoneNumber: "رقم الهاتف *",
      companySize: "حجم الشركة *",
      annualRevenueOptional: "الإيراد السنوي (اختياري)",
      projectBudget: "ميزانية المشروع *",
      howCanWeHelp: "كيف يمكننا المساعدة؟ *",
      termsLabel: "أوافق على الشروط والأحكام الخاصة بالشركة",
      submit: "إرسال",
      placeholders: {
        firstName: "Name",
        lastName: "Doe",
        email: "example@gmail.com",
        role: "مثل: CTO، مدير مشروع، إلخ",
        companyName: "اسم شركتك",
        website: "https://yourcompany.com",
        phone: "1234567890",
        help: "يرجى وصف احتياجات مشروعك وكيف يمكننا مساعدتك",
      },
      options: {
        countryCodes: [
          { label: "+971", value: "+971" },
          { label: "+91", value: "+91" },
          { label: "+1", value: "+1" },
          { label: "+61", value: "+61" },
          { label: "+49", value: "+49" },
          { label: "+41", value: "+41" },
        ],
        companySizes: [
          { label: "اختر حجم الشركة", value: "" },
          { label: "1–10 موظفين", value: "1-10" },
          { label: "11–50 موظفاً", value: "11-50" },
          { label: "51–200 موظف", value: "51-200" },
          { label: "201–500 موظف", value: "201-500" },
          { label: "501+ موظف", value: "501+" },
        ],
        annualRevenue: [
          { label: "اختر الإيراد السنوي", value: "" },
          { label: "أقل من $1M", value: "<1M" },
          { label: "$1M – $10M", value: "1-10M" },
          { label: "$10M – $50M", value: "10-50M" },
          { label: "$50M – $100M", value: "50-100M" },
          { label: "$100M+", value: "100M+" },
        ],
        projectBudgets: [
          { label: "اختر ميزانية المشروع", value: "" },
          { label: "أقل من $20K", value: "<20K" },
          { label: "$20K – $50K", value: "20-50K" },
          { label: "$50K – $100K", value: "50-100K" },
          { label: "$100K – $200K", value: "100-200K" },
          { label: "$200K – $500K", value: "200-500K" },
          { label: "$500K+", value: "500K+" },
        ],
      },
    },
    footer: {
      tagline:
        "ذات مسؤولية محدودة — البرمجيات والسحابة والأمن والذكاء الاصطناعي للفرق الطموحة.",
      col1: "ما نقوم به",
      col2: "القطاعات",
      col3: "الشركة",
      col4: "القانونية",
      legalPrivacy: "سياسة الخصوصية",
      legalCookies: "سياسة ملفات الارتباط",
      legalTerms: "الشروط والأحكام",
      legalData: "خصوصية البيانات والأمان",
      legalDisclaimer: "إخلاء المسؤولية",
      disclaimer: "موقع مستقل — العلامات المرجعية للإلهام فقط.",
      copyright: "ساكيث تك الخاصة المحدودة. جميع الحقوق محفوظة.",
      photoCredit:
        "صور الموقع من Unsplash بترخيص يسمح بالاستخدام التجاري المجاني.",
    },
    cookie: {
      text: "نستخدم ملفات تعريف الارتباط لتحسين التجربة والتحليل.",
      privacy: "سياسة الخصوصية",
      cookiesPolicy: "سياسة ملفات الارتباط",
      reject: "رفض",
      accept: "قبول",
    },
    aiAssistant: {
      title: "مساعد ساكيث تك الذكي",
      subtitle: "اسأل عن خدماتنا وقدراتنا أو كيف يمكننا المساعدة.",
      reset: "مسح المحادثة",
      placeholder: "اكتب رسالتك…",
      sendAria: "إرسال",
      welcome:
        "مرحباً — أنا مساعد ساكيث تك. اسأل عن البرمجيات، السحابة، الأمن، أنظمة تخطيط الموارد، أو الذكاء الاصطناعي. (تجريبي: اربط خطاف n8n عبر N8N_AI_WEBHOOK_URL.)",
      thinking: "جاري التفكير…",
      error: "حدث خطأ. حاول مرة أخرى.",
      demoHint: "وضع تجريبي — عيّن N8N_AI_WEBHOOK_URL لربط سير عمل n8n.",
    },
    globalPresence: {
      label: "الحضور العالمي",
      title: "الهند كمحور · عملاء في عدة قارات",
      sub: "مكتبنا الفعلي الوحيد اليوم هو في الهند — هندسة وتسليم. نعمل مع عملاء في أستراليا والولايات المتحدة وكندا وألمانيا وسويسرا والإمارات وعُمان وأسواق أخرى. مكتب دبي يفتتح خلال حوالي شهرين مع شريك في الإمارات؛ الخطوط المنقطة توضح التعاون من الهند مع كل منطقة.",
      legendHq: "الهند · المكتب الحالي",
      legendClients: "مواقع العملاء",
      legendSoon: "مكتب الإمارات · قريباً",
      legendRoutes: "خطوط منقطة · من الهند لكل منطقة عملاء",
      clientListProse:
        "أستراليا · الولايات المتحدة · كندا · ألمانيا · سويسرا · الإمارات · عُمان — وأسواق عالمية أخرى عبر محور الهند.",
      markers: {
        in: {
          country: "الهند",
          city: "مومباي",
          role: "المكتب الوحيد اليوم · المقر والتسليم",
        },
        ae: {
          country: "الإمارات",
          city: "دبي",
          role: "مكتب ≈شهرين · شريك إماراتي · عملاء حالياً",
        },
      },
      clientMarkets: {
        ch: { code: "CH", name: "سويسرا" },
        au: { code: "AU", name: "أستراليا" },
        us: { code: "US", name: "الولايات المتحدة" },
        de: { code: "DE", name: "ألمانيا" },
        ca: { code: "CA", name: "كندا" },
        om: { code: "OM", name: "عُمان" },
      },
    },
    deliveryJourney: {
      label: "كيف نسلّم",
      title: "من أول ورشة عمل إلى إنتاج موثوق",
      sub: "مسار منضبط يتناسب مع ملف المخاطر لديك — ليس عرضاً عاماً، بل تعاون حقيقي في المحاذاة والبناء والتصليب والتحسين المستمر.",
      hint: "اختر مرحلة لعرض مخرجاتنا النموذجية معاً.",
      artifactsLabel: "مخرجات نموذجية",
      steps: [
        {
          title: "اكتشاف ومحاذاة",
          desc: "نؤطر المشكلة ونوحّد أصحاب المصلحة ونجعل معايير النجاح قابلة للقياس قبل ربط سعة بناء كبيرة.",
          artifacts: "موجز المشكلة · خريطة أصحاب المصلحة · مخاطر وافتراضات · نتائج ٩٠ يوماً",
        },
        {
          title: "تصميم وبناء",
          desc: "الهندسة والتسليم في حلقات قصيرة — دورة حياة تطوير آمنة، زيادات قابلة للمراقبة، ومسارات تراجع واضحة.",
          artifacts: "شرائح مرجعية · خطافات نموذج التهديد · CI/CD واستراتيجية البيئات · إيقاع عروض",
        },
        {
          title: "تصليب وإطلاق",
          desc: "نضغط على مسار الإنتاج: ترحيل البيانات، بروفة القطع، جاهزية الدعم، وتسليم التشغيل.",
          artifacts: "أدلة اختبار · كتب تشغيل · لوحات مراقبة · نافذة دعم مكثف",
        },
        {
          title: "تشغيل وتحسين",
          desc: "الاعتمادية والتكلفة والأمان عمل منتج مستمر — وليس قائمة تذاكر بلا سياق.",
          artifacts: "اتفاقيات مستوى الخدمة وميزانيات الخطأ · تراكم للمخاطر والديون · خطافات امتثال مستمر",
        },
      ],
    },
    engagementModels: {
      label: "طرق التعاون",
      title: "مقارنة نماذج الإدماج — بصراحة",
      sub: "نادراً ما تحتاج مؤسسة نموذجاً واحداً للأبد. نبدأ بالشكل المناسب لملكية قرارك وسرعتك ومخاطرك.",
      footnote:
        "الخلط شائع — مثلاً فريق منتج لمنصة جديدة مع إدماج خبراء للتراث. بعد اكتشاف قصير نوصي بالمزيج المناسب.",
      bestWhenLabel: "الأنسب عندما:",
      watchoutLabel: "انتبه:",
      models: [
        {
          name: "إدماج خبراء",
          tagline: "اختصاصيون داخل فريقك",
          bestFor:
            "لديك قيادة منتج وهندسة قوية لكنك تحتاج سعة تنفيذية أولية في السحابة أو المنصة أو البيانات أو الأمن أو التطوير الشامل.",
          includes: [
            "مهندسون بأسماء متلاءمون مع أدواتك وحوكمتك",
            "مشاركة في طقوسك مع شفافية في الإنتاجية",
            "نقل المعرفة كهدف مدمج لا لاحق",
          ],
          watchouts:
            "النطاق والأولوية لديك — بدون صحة تراكم العمل قد يتباطأ الإيقاع.",
        },
        {
          name: "فريق ناشئ ذو نتيجة مشتركة",
          tagline: "فريق متعدد التخصصات ومؤشرات أداء مشتركة",
          bestFor:
            "تريد فريقاً مسؤولاً عن ناتج محدد — ترحيل، مسار تحديث، أو منصة — مع مشاركة في مخاطر التسليم.",
          includes: [
            "فرقة صغيرة متعددة (بناء واختبار ودعم قريب من SRE)",
            "خطة مراحل مرتبطة بنتائج قابلة للقياس لا بالجهد فقط",
            "قيادة مشتركة وتصعيد واضح للاعتماديات",
          ],
          watchouts:
            "تحتاج نظائر تمكين من المنتج والأمن — الاختناقات خارج الفريق تبطئ الجميع.",
        },
        {
          name: "فريق منتج ومنصة",
          tagline: "ملكية كاملة لمسار منتج",
          bestFor:
            "تطلق أو تعيد منصبة منتجاً — ويب أو SaaS أو جوال — وتريد ملكية الهندسة والتسليم منا.",
          includes: [
            "صياغة الخارطة، تعاون تجربة الاستخدام/الهندسة، وملكية الإصدار",
            "اتفاق مسبق على التشغيل (SRE، استجابة، اتفاقيات مستوى الخدمة)",
            "الأمن والخصوصية وضوابط الذكاء الاصطناعي كمتطلبات منتج",
          ],
          watchouts:
            "الأقوى حين يكون النطاق منتجاً — الإدماج البحت لقائمة تذاكر مفرقة أقل ملاءمة.",
        },
      ],
    },
    capabilityNav: {
      label: "مستكشف القدرات",
      title: "عدسة سريعة على الملاءمة — قطاع × قيد",
      sub: "إرشادي وليس عرضاً. يوضح كيف نرجّح الهندسة والأمن وانضباط البرنامج في سياقك.",
      industryPrompt: "القطاع",
      constraintPrompt: "القيد الأبرز",
      resultLabel: "التركيز المقترح",
      engagementLine: "غالباً يتناسب مع",
      riskLabel: "واقع التنفيذ",
      cta: "ناقش هذا السياق معنا",
      industries: [
        { id: "fin", label: "الخدمات المالية والتكنولوجيا المالية" },
        { id: "health", label: "الرعاية الصحية وعلوم الحياة" },
        { id: "mfg", label: "التصنيع وسلسلة التوريد" },
        { id: "retail", label: "التجزئة والتجارة الإلكترونية" },
        { id: "techSaas", label: "التكنولوجيا وSaaS" },
        { id: "public", label: "القطاع العام والتعليم" },
      ],
      constraints: [
        { id: "regulated", label: "تنظيم قوي ومراجعة" },
        { id: "legacy", label: "إرث تقني يحتاج تحديثاً" },
        { id: "velocity", label: "سرعة وصول عدوانية للسوق" },
        { id: "cloudNative", label: "توسع سحابي أصلي وتكلفة" },
        { id: "genAi", label: "ذكاء توليدي بضوابط" },
      ],
      bases: [
        {
          industryId: "fin",
          headline: "الثقة والأدلة وضوابط لا تُساوم",
          engagementPick: "فريق بنتيجة مشتركة أو فريق منتج مع قيادة امتثال مشتركة.",
          bullets: [
            "فصل واجبات في خطوط النشر؛ سجلات تدقيق غير قابلة للتلاعب حيث يلزم",
            "أنماط هويات وواجهات تتحمّل المراجعة الخارجية",
            "مرونة تشغيلية مجاورة للمدفوعات والأنظمة الأساسية",
          ],
        },
        {
          industryId: "health",
          headline: "السلامة والتشغيل البيني وتغير سير العمل بحكمة",
          engagementPick: "فريق نتيجة مع نظائر سريرية وتشغيلية في الحلقة كل sprint.",
          bullets: [
            "تقليل البيانات وحدود واضحة للبيانات الصحية/السريرية",
            "انضباط تكامل بين السجلات والمختبرات والأجهزة والبوابات",
            "مراجعة بشرية عندما يكون التأثير السريري أو على المريض جوهرياً",
          ],
        },
        {
          industryId: "mfg",
          headline: "حقيقة تخطيط الموارد، حدود OT/IT، ووعي بتوقف الإنتاج",
          engagementPick: "فريق نتيجة يشمل تخطيط الموارد والمصنع والمالية معاً.",
          bullets: [
            "التخطيط حول نوافذ الإنتاج — التوقف مخاطر أعمال لا تقنية فقط",
            "محاذاة قوية بين خط الإنتاج واللوجستيات والمالية",
            "مراقبة تربط الحوادث بالإيرادات والاتفاقيات",
          ],
        },
        {
          industryId: "retail",
          headline: "الذروة والمدفوعات وتناسق القنوات",
          engagementPick: "فريق منتج للإصدارات الحساسة للذروة؛ فريق نتيجة لمسارات إعادة منصة كبيرة.",
          bullets: [
            "أنماط المرور والمخزون تقود الهندسة لا العكس",
            "أمن المدفوعات والاحتيال مدمج في بوابات الإصدار",
            "تجارب بضمانات (ميزات تدريجية، إصدارات جزئية، تراجع)",
          ],
        },
        {
          industryId: "techSaas",
          headline: "عزل المستأجرين والاعتمادية وسرعة المنتج",
          engagementPick: "فريق منتج ومنصة لخرائط طريق واعية بالمستأجرين واتفاقيات الخدمة.",
          bullets: [
            "حدود متعددة المستأجرين: بيانات وإعدادات وفوترة وترقيات",
            "اتفاقيات يشعرها العملاء — ميزانيات الخطأ توجه الأولوية",
            "تجربة مطورين تبقي السرعة مستدامة",
          ],
        },
        {
          industryId: "public",
          headline: "إتاحة الوصول، وضوح المشتريات، وتقدم شفاف",
          engagementPick: "فريق نتيجة مع أدلة مناسبة للمشتريات في كل زيادة.",
          bullets: [
            "حزم أدلة لأسئلة الرقابة — لا لوحات زينة",
            "هندسة حيادية للموردين حيث تفرض السياسات الخيارات",
            "تصميم شامل وإتاحة كمعايير قبول",
          ],
        },
      ],
      overlays: [
        {
          constraintId: "regulated",
          bullets: [
            "حزم إصدار وإسناد من المتطلبات إلى الاختبار والنشر",
            "محاذاة تغيير واستعداد لتغيير طارئ مبكراً",
          ],
          risk: "بوابات تنظيمية تمد الجداول — عرّف أقل شريحة امتثال ممكنة مبكراً.",
        },
        {
          constraintId: "legacy",
          bullets: [
            "أنماط خنق وحدود سياق واضحة بدلاً من انقطاع كبير دفعة واحدة",
            "فترات تشغيل مزدوج ومطابقة كبنود عمل صريحة",
          ],
          risk: "ديون التكامل الخفية — خصص وقتاً حقيقياً لقراءة الاكتشاف وحزم الظل.",
        },
        {
          constraintId: "velocity",
          bullets: [
            "شرائح رأسية رفيعة مع عروض أسبوعية للأعمال",
            "سجل مقايضات حتى لا «تأكل» السرعة الجودة أو الأمن صامتاً",
          ],
          risk: "بلا ضوابط يأتي إعادة العمل — المتطلبات غير الوظيفية تبقى ظاهرة في التراكم.",
        },
        {
          constraintId: "cloudNative",
          bullets: [
            "بنية تحتية كرمز وسياسات كرمز وخط أساس لـ FinOps من الأسبوع الأول",
            "كوبرنيتيس ومراقبة بحجم حقيقي — لا تعقيد لسيرة ذاتية",
          ],
          risk: "انتشار منصة بلا مالك — اتفق من يشغّل ماذا قبل الإنتاج.",
        },
        {
          constraintId: "genAi",
          bullets: [
            "أداة تقييم وإخفاء معلومات تعريف شخصية ومراجعة بشرية للمخرجات الحرجة",
            "حوكمة إصدارات التوجيه وخطط حوادث انحراف النموذج",
          ],
          risk: "توجيهات غير موثقة وتغيير نماذج صامت = مخاطر تشغيل — نراقب ونراجع.",
        },
      ],
    },
  },
};
