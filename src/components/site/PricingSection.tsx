import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$1,490",
    desc: "Perfect for new brands launching their first site.",
    features: ["Up to 5 pages", "Custom design", "Mobile responsive", "Basic SEO setup", "2 weeks delivery"],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$3,490",
    desc: "For businesses ready to convert at scale.",
    features: ["Up to 12 pages", "Conversion-focused design", "CMS integration", "Advanced SEO", "Lead capture flows", "4 weeks delivery"],
    cta: "Get Growth",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$6,990",
    desc: "Bespoke design + engineering for ambitious brands.",
    features: ["Unlimited pages", "Custom animations", "Full brand system", "E-commerce ready", "Performance audit", "Priority support"],
    cta: "Go Premium",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Simple pricing"
          title={<>Approachable plans, <span className="text-gradient">premium results</span></>}
          subtitle="Transparent pricing with no hidden fees. Pick a plan, and we'll handle the rest."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={cn(
                "relative flex flex-col rounded-3xl p-7 shadow-card transition-all duration-300",
                p.highlighted
                  ? "glass-strong ring-brand md:scale-[1.04] md:-mt-2"
                  : "glass hover:-translate-y-1"
              )}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground shadow-glow">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                <span className="pb-1.5 text-sm text-muted-foreground">/ project</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={cn(
                      "mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full",
                      p.highlighted ? "bg-gradient-brand" : "bg-white/10"
                    )}>
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <CTAButton
                  to="/contact"
                  variant={p.highlighted ? "primary" : "ghost"}
                  className="w-full"
                  size="md"
                  icon={false}
                >
                  {p.cta}
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
