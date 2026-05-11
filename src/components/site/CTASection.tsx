import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";

export function CTASection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-10 text-center shadow-card md:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-80" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Ready to launch a site that <span className="text-gradient">earns its keep?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Only 5 project slots open this month. Book a free strategy call and we'll map out your highest-impact next steps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact">Get My Website</CTAButton>
            <CTAButton to="/portfolio" variant="ghost" icon={false}>See our work</CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
