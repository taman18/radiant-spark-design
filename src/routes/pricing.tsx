import { createFileRoute } from "@tanstack/react-router";
import { PricingSection } from "@/components/site/PricingSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — LumenStudio" },
      { name: "description", content: "Approachable plans, premium results. Transparent pricing for every stage." },
      { property: "og:title", content: "Pricing — LumenStudio" },
      { property: "og:description", content: "Pick a plan and we handle the rest." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  ),
});
