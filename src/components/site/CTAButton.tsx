import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: boolean;
  onClick?: () => void;
};

export function CTAButton({ to, href, children, variant = "primary", size = "lg", className, icon = true, onClick }: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-[15px]",
  };
  const variants = {
    primary:
      "text-primary-foreground bg-gradient-brand shadow-glow hover:shadow-[0_25px_90px_-20px_oklch(0.6_0.25_275_/_0.7)] hover:-translate-y-0.5",
    ghost:
      "text-foreground glass hover:bg-white/5 hover:-translate-y-0.5",
  };

  const content = (
    <motion.span
      whileTap={{ scale: 0.97 }}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
      )}
    </motion.span>
  );

  if (to) return <Link to={to}>{content}</Link>;
  if (href) return <a href={href} onClick={onClick}>{content}</a>;
  return <button onClick={onClick}>{content}</button>;
}
