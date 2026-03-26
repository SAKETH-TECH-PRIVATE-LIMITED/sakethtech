/**
 * Photography is served from Unsplash under the Unsplash License
 * (https://unsplash.com/license): free to use, including commercially,
 * without permission or attribution — we list sources below for transparency.
 *
 * Each URL points to a photographer-submitted, editorial-quality frame matched
 * to our product story (web, SaaS, mobile, secure delivery).
 */
const q = "90";
const wHero = 3840;
const wWide = 3200;

function u(photoId: string, w: number) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const techImages = {
  /** Hero — desk with laptop + phone (web & mobile product context). */
  hero: u("photo-1512941937669-90a1b58e7e9c", wHero),
  /** Capabilities — developer shipping code on a laptop. */
  datacenter: u("photo-1555066931-4365d14bab8a", wWide),
  /** Industries — diverse product / engineering collaboration. */
  security: u("photo-1531482615713-2afd69097998", wWide),
  /** Company — leadership / product discussion with laptop. */
  collaboration: u("photo-1600880292203-757bb62b4baf", wWide),
  /** Ecosystem background — analytics / dashboard (reads as SaaS at low opacity). */
  abstract: u("photo-1460925895917-afdab827c52f", wWide),
} as const;

/** For accessibility and SEO — short descriptions */
export const techImageAlts = {
  hero: "Product engineering workspace with laptop and mobile device",
  datacenter: "Software professionals building applications on laptops",
  security: "Diverse technology team collaborating on delivery",
  collaboration: "Colleagues reviewing work together with a laptop",
  abstract: "Business analytics and product dashboard on a display",
} as const;
