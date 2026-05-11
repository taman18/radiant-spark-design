import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: "×", label: "Avg. conversion growth" },
  { value: 14, suffix: " days", label: "Avg. launch time" },
];

const logos = ["Nova", "Lumen", "Orbit", "Helix", "Quartz", "Vertex"];

export function TrustSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by growing businesses
        </p>
        <div className="mt-8 grid grid-cols-3 gap-6 opacity-70 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center text-base font-semibold tracking-tight text-muted-foreground/80">
              {l}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="rounded-2xl glass p-6 shadow-card"
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter to={m.value} />
                <span className="text-gradient">{m.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
      return ctrl.stop;
    }
  }, [inView, count, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
