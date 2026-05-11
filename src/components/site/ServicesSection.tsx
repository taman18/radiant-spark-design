import { motion } from "framer-motion";
import { Globe2, MousePointerClick, Briefcase, ShoppingBag, Palette, Search, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Globe2, title: "Business Websites", desc: "Polished, fast, conversion-tuned sites that build instant credibility." },
  { icon: MousePointerClick, title: "Landing Pages", desc: "High-impact pages engineered to capture leads and drive sales." },
  { icon: Briefcase, title: "Portfolio Sites", desc: "Beautifully crafted personal and studio portfolios that win clients." },
  { icon: ShoppingBag, title: "E-commerce", desc: "Modern stores with seamless checkout and AOV-boosting flows." },
  { icon: Palette, title: "UI / UX Design", desc: "Premium product design that feels effortless and on-brand." },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO and content strategy that compounds traffic." },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient">launch & grow</span></>}
          subtitle="From strategy to launch — we handle every detail so your brand looks world-class and converts on day one."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-all duration-300 hover:ring-brand"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
                  <s.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/90">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
