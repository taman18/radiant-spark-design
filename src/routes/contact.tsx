import { createFileRoute } from "@tanstack/react-router";
import { LeadFormSection } from "@/components/site/LeadFormSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LumenStudio" },
      { name: "description", content: "Book a free strategy call. We'll respond within 2 business hours." },
      { property: "og:title", content: "Contact — LumenStudio" },
      { property: "og:description", content: "Let's build something that converts." },
    ],
  }),
  component: () => (
    <div className="pt-28">
      <LeadFormSection />
    </div>
  ),
});
