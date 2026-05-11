import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  { name: "Sarah Chen", role: "Founder, Nova Analytics", hue: 270, text: "LumenStudio rebuilt our site and our trial signups jumped 312% in the first month. The team simply gets conversion." },
  { name: "Marcus Webb", role: "CEO, Helix Studios", hue: 220, text: "The most polished website experience we've had. Every interaction feels intentional. Worth every dollar." },
  { name: "Aisha Patel", role: "CMO, Quartz Wellness", hue: 150, text: "From strategy to pixel-perfect execution — they delivered in 3 weeks what other agencies promised in 3 months." },
  { name: "Jonas Müller", role: "Founder, Orbit Finance", hue: 245, text: "Fast, clean, on-brand, and built to convert. Our cost per lead dropped by 60% post-launch." },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by founders & <span className="text-gradient">marketing teams</span></>}
          subtitle="Real results from real partners — here's what our clients say."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-3xl glass p-7 shadow-card transition-all hover:ring-brand"
            >
              <div className="flex items-center gap-1 text-[oklch(0.85_0.18_85)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground/90 md:text-lg">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, oklch(0.65 0.22 ${t.hue}), oklch(0.7 0.2 ${t.hue + 30}))` }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
