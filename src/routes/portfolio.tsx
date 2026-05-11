import { createFileRoute } from "@tanstack/react-router";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — LumenStudio" },
      { name: "description", content: "Selected work — premium websites we've designed and shipped." },
      { property: "og:title", content: "Portfolio — LumenStudio" },
      { property: "og:description", content: "A glimpse of our recent launches." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <PortfolioSection />
      <CTASection />
    </div>
  ),
});
