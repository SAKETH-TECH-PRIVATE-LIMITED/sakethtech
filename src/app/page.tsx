import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { HomeBanners } from "@/components/HomeBanners";
import { AIAssistantWidget } from "@/components/AIAssistantWidget";
import { EcosystemStrip } from "@/components/EcosystemStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { DeliveryJourneySection } from "@/components/DeliveryJourneySection";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { StoriesSection } from "@/components/StoriesSection";
import { GlobalPresenceClient } from "@/components/GlobalPresenceClient";
import { CareersStrip } from "@/components/CareersStrip";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="grain relative flex min-h-full flex-1 flex-col transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg opacity-80 dark:opacity-40" aria-hidden />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <MetricsStrip />
        <HomeBanners />
        <AIAssistantWidget />
        <EcosystemStrip />
        <ServicesSection />
        <DeliveryJourneySection />
        <EngagementModelsSection />
        <IndustriesSection />
        <StoriesSection />
        <GlobalPresenceClient />
        <CareersStrip />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
