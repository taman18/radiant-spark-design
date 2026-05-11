import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, MessageCircle, ShieldCheck, Zap, AlertCircle } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  business: z.string().trim().min(2, "Tell us about your business").max(80),
  budget: z.string().min(1, "Pick a budget range"),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const budgets = ["< $1.5k", "$1.5k – $3k", "$3k – $7k", "$7k+"];

export function LeadFormSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", business: "", budget: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (k: keyof FormState, v: string) => {
    setForm((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Errors = {};
      for (const i of r.error.issues) errs[i.path[0] as keyof FormState] = i.message;
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.45_0.22_280_/_0.25)] blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-[2rem] glass-strong p-6 shadow-card md:grid-cols-[1fr_1.1fr] md:p-12">
          {/* Left */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.18_150)]" />
                Free 20-minute strategy call
              </span>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Let's build a website that <span className="text-gradient">actually converts</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us a bit about your project. We respond within 2 business hours with a tailored plan and quote.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                { icon: Zap, text: "Reply within 2 hours, on business days" },
                { icon: ShieldCheck, text: "No spam, ever — your details stay private" },
                { icon: CheckCircle2, text: "100% transparent pricing & timeline" },
              ].map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5">
                    <b.icon className="h-4 w-4 text-foreground/80" />
                  </span>
                  <span className="text-muted-foreground">{b.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/15550100199"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-sm transition-colors hover:bg-white/10"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[oklch(0.72_0.18_150)] text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium">Prefer WhatsApp?</p>
                <p className="text-xs text-muted-foreground">Message us — average reply in 5 min</p>
              </div>
            </a>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.3_0.15_280)]/30 to-transparent p-8 text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand shadow-glow">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">You're in. We'll be in touch.</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks {form.name.split(" ")[0]}! Expect a reply within 2 business hours with next steps.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/5">
                <Field label="Your name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Jane Cooper"
                    className={inputCn(!!errors.name)}
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    placeholder="+1 (555) 010 0199"
                    className={inputCn(!!errors.phone)}
                  />
                </Field>
                <Field label="Business type" error={errors.business}>
                  <input
                    value={form.business}
                    onChange={(e) => onChange("business", e.target.value)}
                    placeholder="SaaS, e-commerce, agency…"
                    className={inputCn(!!errors.business)}
                  />
                </Field>
                <Field label="Project budget" error={errors.budget}>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => onChange("budget", b)}
                        className={cn(
                          "rounded-xl px-3 py-3 text-sm font-medium transition-all",
                          form.budget === b
                            ? "bg-gradient-brand text-primary-foreground shadow-glow"
                            : "bg-white/5 text-foreground/85 hover:bg-white/10"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>

                <div className="pt-2">
                  <CTAButton size="lg" className="w-full" icon={false}>
                    Book My Free Consultation
                  </CTAButton>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your project. We never share your info.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {error && (
        <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-[oklch(0.75_0.2_25)]">
          <AlertCircle className="h-3 w-3" /> {error}
        </span>
      )}
    </label>
  );
}

function inputCn(err: boolean) {
  return cn(
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all",
    "focus:border-transparent focus:bg-white/10 focus:ring-2 focus:ring-[oklch(0.7_0.2_270)]/60",
    err ? "border-[oklch(0.6_0.22_25)]/60" : "border-white/10"
  );
}
