import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/site/HeroSection";
import { TrustSection } from "@/components/site/TrustSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { PricingSection } from "@/components/site/PricingSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { LeadFormSection } from "@/components/site/LeadFormSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LumenStudio — High-Converting Websites for Startups" },
      { name: "description", content: "Premium websites for startups and businesses that want more leads, more trust, and more sales." },
      { property: "og:title", content: "LumenStudio — High-Converting Websites" },
      { property: "og:description", content: "Premium websites that turn visitors into clients." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <LeadFormSection />
    </>
  );
}
