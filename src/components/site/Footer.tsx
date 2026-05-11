import { Link } from "@tanstack/react-router";
import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-base font-semibold">Lumen<span className="text-gradient">Studio</span></span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We design and build premium websites that convert visitors into clients — for ambitious startups and businesses.
            </p>
            <div className="mt-6">
              <CTAButton to="/contact" size="md">Start your project</CTAButton>
            </div>
          </div>

          <FooterCol title="Company" links={[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/pricing", label: "Pricing" },
          ]} />
          <FooterCol title="Resources" links={[
            { to: "/contact", label: "Contact" },
            { to: "/services", label: "Process" },
            { to: "/pricing", label: "Plans" },
          ]} />
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@lumenstudio.co</li>
              <li>+1 (555) 010-0199</li>
              <li>Remote · Worldwide</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} LumenStudio. All rights reserved.</p>
          <p>Crafted with care · Built for conversion</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
