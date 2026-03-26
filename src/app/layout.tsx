import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { BackToTopButton } from "@/components/BackToTopButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saketh Tech | Enterprise Software, Cloud & AI",
  description:
    "Saketh Tech Private Limited — custom software, ERP, HRM, SaaS, cloud-native platforms, cybersecurity, and agentic AI for every sector.",
  keywords: [
    "Saketh Tech",
    "enterprise software",
    "cloud native",
    "AI agents",
    "ERP",
    "cybersecurity",
    "UAE",
    "Dubai",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-[15px] leading-normal text-foreground transition-colors duration-300">
        <AppProviders>
          {children}
          <BackToTopButton />
        </AppProviders>
      </body>
    </html>
  );
}
