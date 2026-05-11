import { motion } from "framer-motion";
import { ArrowUpRight, Star, TrendingUp, Zap, Users } from "lucide-react";
import { CTAButton } from "./CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as any } }),
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[oklch(0.45_0.22_280_/_0.35)] blur-3xl" />

      {/* grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-gradient-brand">
              <Star className="h-2.5 w-2.5 text-white" />
            </span>
            <span className="text-muted-foreground">Trusted by 50+ growing businesses</span>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            We build{" "}
            <span className="text-gradient">high-converting websites</span>{" "}
            that turn visitors into clients
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Premium websites for startups and businesses that want more leads, more trust, and more sales — designed and engineered to perform.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/contact">Get My Website</CTAButton>
            <CTAButton to="/portfolio" variant="ghost" icon={false}>View Portfolio</CTAButton>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <Trust icon={<Zap className="h-3.5 w-3.5" />}>2-week launch</Trust>
            <Trust icon={<TrendingUp className="h-3.5 w-3.5" />}>3× avg. conversion lift</Trust>
            <Trust icon={<Users className="h-3.5 w-3.5" />}>98% client satisfaction</Trust>
          </motion.div>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative rounded-3xl glass-strong p-2 shadow-card">
            <div className="rounded-2xl bg-[oklch(0.18_0.03_270)] p-6">
              <div className="flex items-center gap-2 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.2_25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.8_0.18_85)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.18_150)]" />
                <span className="ml-3 text-xs text-muted-foreground">analytics.lumenstudio.co</span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <StatCard label="Visitors" value="48,219" delta="+24.6%" />
                <StatCard label="Leads" value="1,284" delta="+312%" highlight />
                <StatCard label="Revenue" value="$184k" delta="+58.2%" />
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-[1.4fr_1fr]">
                <div className="rounded-xl border border-border/60 bg-card/60 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Conversion overview</p>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">Last 30 days</span>
                  </div>
                  <SparkChart />
                </div>
                <div className="rounded-xl border border-border/60 bg-card/60 p-5">
                  <p className="text-sm font-medium">Top sources</p>
                  <div className="mt-4 space-y-3">
                    {[
                      { l: "Organic", v: 64 },
                      { l: "Direct", v: 22 },
                      { l: "Referral", v: 14 },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{s.l}</span>
                          <span>{s.v}%</span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${s.v}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-6 top-1/3 hidden md:block"
          >
            <div className="animate-float glass-strong rounded-2xl p-4 shadow-glow">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand">
                  <TrendingUp className="h-4 w-4 text-white" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Conv. rate</p>
                  <p className="text-sm font-semibold">↑ 312%</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="absolute -right-6 bottom-12 hidden md:block"
          >
            <div className="animate-float glass-strong rounded-2xl p-4 shadow-glow" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0,1,2].map(i => (
                    <span key={i} className="h-7 w-7 rounded-full border-2 border-card bg-gradient-brand" />
                  ))}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">New leads today</p>
                  <p className="text-sm font-semibold">+38</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Trust({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-foreground/80">{icon}</span>
      {children}
    </span>
  );
}

function StatCard({ label, value, delta, highlight }: { label: string; value: string; delta: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? "border-transparent ring-brand bg-gradient-to-br from-[oklch(0.3_0.15_280)]/40 to-transparent" : "border-border/60 bg-card/60"}`}>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-[oklch(0.78_0.18_150)]">{delta}</p>
    </div>
  );
}

function SparkChart() {
  const points = [12, 18, 14, 22, 26, 20, 30, 28, 36, 32, 44, 50, 46, 58, 64];
  const w = 600, h = 120, max = 70;
  const step = w / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-28 w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.7 0.2 270)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="oklch(0.7 0.2 270)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.7 0.2 265)" />
          <stop offset="100%" stopColor="oklch(0.72 0.2 295)" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g1)" />
      <path d={path} fill="none" stroke="url(#g2)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
