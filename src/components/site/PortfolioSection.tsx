import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: "SaaS" | "E-commerce" | "Portfolio" | "Landing";
  hue: number;
  hue2: number;
};

const projects: Project[] = [
  { title: "Nova Analytics", category: "SaaS", hue: 270, hue2: 295 },
  { title: "Maison Atelier", category: "E-commerce", hue: 25, hue2: 350 },
  { title: "Helix Studios", category: "Portfolio", hue: 180, hue2: 220 },
  { title: "Orbit Finance", category: "Landing", hue: 235, hue2: 280 },
  { title: "Quartz Wellness", category: "E-commerce", hue: 150, hue2: 195 },
  { title: "Vertex Cloud", category: "SaaS", hue: 250, hue2: 310 },
];

const filters = ["All", "SaaS", "E-commerce", "Portfolio", "Landing"] as const;

export function PortfolioSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Recent <span className="text-gradient">launches</span></>}
          subtitle="A glimpse of what we've shipped — built for performance, designed to convert."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                filter === f
                  ? "bg-gradient-brand text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.a
                key={p.title}
                layout
                href="#"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative block overflow-hidden rounded-3xl border border-border/70 shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProjectArtwork hue={p.hue} hue2={p.hue2} title={p.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium">
                      View live <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                    <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-12 group-hover:text-foreground" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectArtwork({ hue, hue2, title }: { hue: number; hue2: number; title: string }) {
  return (
    <div
      className="relative h-full w-full transition-transform duration-700 group-hover:scale-105"
      style={{
        background: `radial-gradient(80% 80% at 30% 20%, oklch(0.65 0.22 ${hue} / 0.7), transparent 60%), radial-gradient(60% 60% at 80% 80%, oklch(0.6 0.22 ${hue2} / 0.7), transparent 60%), oklch(0.18 0.04 ${hue})`,
      }}
    >
      <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 w-1/2 rounded-full bg-white/30" />
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/15" />
          <div className="h-10 rounded-lg bg-white/10" />
          <div className="h-10 rounded-lg bg-white/15" />
        </div>
        <div className="absolute bottom-3 left-4 text-[10px] font-medium text-white/70">{title}</div>
      </div>
    </div>
  );
}
