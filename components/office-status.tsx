"use client";

import * as React from "react";

import { getOfficeStatus, type OfficeStatus } from "@/lib/office-hours";
import { cn } from "@/lib/utils";

type OfficeStatusBadgeProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function OfficeStatusBadge({
  tone = "dark",
  className,
}: OfficeStatusBadgeProps) {
  const [status, setStatus] = React.useState<OfficeStatus | null>(null);

  React.useEffect(() => {
    const update = () => setStatus(getOfficeStatus());
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const isOpen = status?.isOpen ?? false;

  return (
    <div
      className={cn("flex items-center gap-2.5", className)}
      aria-live="polite"
    >
      <span className="relative flex size-2.5 shrink-0">
        <span
          className={cn(
            "absolute inline-flex size-full rounded-full opacity-60",
            isOpen ? "animate-ping bg-mint" : "bg-copper",
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            isOpen ? "bg-mint" : "bg-copper",
          )}
        />
      </span>
      <span
        className={cn(
          "text-[0.74rem] font-semibold tracking-[0.04em]",
          tone === "dark" ? "text-bone/90" : "text-ink/80",
        )}
      >
        {status ? `${status.label} · ${status.detail}` : "Mon–Thu · 8:00 AM – 5:00 PM"}
      </span>
    </div>
  );
}
