import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/site/ServicesSection";
import { CTASection } from "@/components/site/CTASection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — LumenStudio" },
      { name: "description", content: "Websites, landing pages, e-commerce, UI/UX and SEO — built to convert." },
      { property: "og:title", content: "Services — LumenStudio" },
      { property: "og:description", content: "Premium services that drive measurable growth." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  ),
});
