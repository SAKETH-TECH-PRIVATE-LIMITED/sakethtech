/**
 * Placeholder imagery for /what-we-do/* internal pages.
 * Unsplash License: https://unsplash.com/license (free commercial use).
 * Replace URLs later with final brand photography.
 */
const q = "85";
const w = 1600;

function unsplash(photoPath: string) {
  return `https://images.unsplash.com/${photoPath}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Section id (URL hash) → image + alt */
export const whatWeDoSectionMedia: Record<string, { src: string; alt: string }> = {
  "ai-agents": {
    src: unsplash("photo-1677442136019-21780ecad995"),
    alt: "Engineering workspace with abstract AI and data visualization",
  },
  "ai-ml": {
    src: unsplash("photo-1555949963-aa79dcee981c"),
    alt: "Developer screen showing code and analytics",
  },
  "dl-nlp": {
    src: unsplash("photo-1527474305487-b87b222841cc"),
    alt: "Neural network and language technology concept",
  },
  "intelligent-workflows": {
    src: unsplash("photo-1454165804606-c3d57bc86b40"),
    alt: "Team planning workflow on whiteboard and laptop",
  },
  "voice-agents": {
    src: unsplash("photo-1589903308904-1010c2294adc"),
    alt: "Professional using headset and voice UI context",
  },
  "industry-ai-solutions": {
    src: unsplash("photo-1485827404703-89b55fcc595e"),
    alt: "Industrial and technology operations environment",
  },
  "it-consulting-and-advisory": {
    src: unsplash("photo-1542744173-8e7e5348bb0c"),
    alt: "Business consulting and strategy session",
  },
  "saas-applications": {
    src: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "Analytics dashboard on laptop",
  },
  "enterprise-application": {
    src: unsplash("photo-1504384308090-c894fdcc538d"),
    alt: "Enterprise team collaborating on applications",
  },
  "cloud-native-application": {
    src: unsplash("photo-1451187580459-43490279c0fa"),
    alt: "Global connectivity and cloud technology",
  },
  "aws-azure-gcp": {
    src: unsplash("photo-1544197150-b99a580bb7a8"),
    alt: "Server room and cloud infrastructure",
  },
  "oracle-support": {
    src: unsplash("photo-1558494949-ef010cbdcc31"),
    alt: "Enterprise data center and systems",
  },
  "on-prem-support": {
    src: unsplash("photo-1517430816045-df4b7de11d1d"),
    alt: "On-premises server and network hardware",
  },
  erp: {
    src: unsplash("photo-1552664730-d307ca884978"),
    alt: "Operations and enterprise planning discussion",
  },
  hcm: {
    src: unsplash("photo-1522071820081-009f0129c71c"),
    alt: "HR and people operations collaboration",
  },
  scm: {
    src: unsplash("photo-1586528116311-ad8dd3c8310d"),
    alt: "Supply chain logistics and warehouse",
  },
  crm: {
    src: unsplash("photo-1553877522-43269d4ea984"),
    alt: "Customer relationship and sales teamwork",
  },
  "cms-bi": {
    src: unsplash("photo-1432888498266-38ffec3eaf0a"),
    alt: "Content publishing and business intelligence screens",
  },
  lms: {
    src: unsplash("photo-1523240795612-9a054b0db644"),
    alt: "Online learning and education technology",
  },
  "cyber-security-shielding": {
    src: unsplash("photo-1563986768609-322da13575f3"),
    alt: "Cybersecurity and digital protection concept",
  },
  "digital-engineering": {
    src: unsplash("photo-1555066931-4365d14bab8a"),
    alt: "Software engineers building digital products",
  },
  "platform-engineering": {
    src: unsplash("photo-1558494949-ef010cbdcc31"),
    alt: "Platform and DevOps engineering environment",
  },
  "gdpr-compliance": {
    src: unsplash("photo-1450101499163-c8848c66ca85"),
    alt: "Privacy documentation and compliance planning",
  },
  "hipaa-compliance": {
    src: unsplash("photo-1576091160399-112ba8d25d1d"),
    alt: "Healthcare technology and secure patient data",
  },
  "iso-27001": {
    src: unsplash("photo-1563013544-824ae1b704d3"),
    alt: "Security standards and certification readiness",
  },
  "soc-2-type-ii": {
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Audit controls and compliance reporting",
  },
  "other-compliance-frameworks": {
    src: unsplash("photo-1454165804606-c3d57bc86b40"),
    alt: "Governance frameworks and risk management",
  },
};

export function mediaForSection(id: string): { src: string; alt: string } {
  const m = whatWeDoSectionMedia[id];
  if (m) return m;
  return {
    src: unsplash("photo-1451187580459-43490279c0fa"),
    alt: "Technology and digital delivery",
  };
}
