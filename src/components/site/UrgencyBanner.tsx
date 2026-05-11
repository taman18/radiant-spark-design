import { Flame } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="relative z-40 w-full border-b border-border/60 bg-[oklch(0.18_0.05_280)]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
        <Flame className="h-3.5 w-3.5 text-[oklch(0.78_0.18_40)]" />
        <span>
          <span className="text-foreground">Only 5 project slots left</span> this month — booking closes soon.
        </span>
      </div>
    </div>
  );
}
