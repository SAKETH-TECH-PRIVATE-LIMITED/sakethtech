export const WHO_WE_ARE_SLUGS = [
  "about-us",
  "case-studies",
  "global-presence",
  "newsroom",
  "sustainability",
  "careers",
] as const;

export type WhoWeAreSlug = (typeof WHO_WE_ARE_SLUGS)[number];

export function isWhoWeAreSlug(s: string): s is WhoWeAreSlug {
  return (WHO_WE_ARE_SLUGS as readonly string[]).includes(s);
}

export const whoWeAreMeta: Record<
  WhoWeAreSlug,
  { title: string; description: string }
> = {
  "about-us": {
    title: "About us | Saketh Tech Private Limited",
    description:
      "Meet our leadership — Sarked, CEO; Sai Manikanta Bajawada, CTO; Ramakrishna K, CMO — and how we deliver software, cloud, and AI with integrator-grade rigor.",
  },
  "case-studies": {
    title: "Case studies | Saketh Tech Private Limited",
    description:
      "Illustrative client programs across platforms, modernization, and intelligent automation — outcomes you can trace from architecture to production.",
  },
  "global-presence": {
    title: "Global presence | Saketh Tech Private Limited",
    description:
      "We serve and partner with organizations in Canada, Australia, the UAE, the United States, Germany, Switzerland, Singapore, and many other markets.",
  },
  newsroom: {
    title: "Newsroom | Saketh Tech Private Limited",
    description:
      "Technical perspectives on cloud platforms, secure delivery, AI engineering, and enterprise modernization.",
  },
  sustainability: {
    title: "Sustainability | Saketh Tech Private Limited",
    description:
      "How we think about environmental responsibility, efficient infrastructure, ethical AI, and long-term value for clients and communities.",
  },
  careers: {
    title: "Careers | Saketh Tech Private Limited",
    description:
      "Apply to build mission-grade software with our product squads and solution architects — submit your profile in one step.",
  },
};
