"use client";

import * as React from "react";

import { SHORT_DAY_INDEX } from "@/lib/office-hours";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function OfficeHoursTable() {
  const [today, setToday] = React.useState<number | null>(null);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const weekday = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        weekday: "short",
      }).format(new Date());
      setToday(SHORT_DAY_INDEX[weekday] ?? null);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-ink/10 bg-cream/50">
      <div className="flex items-center justify-between border-b border-ink/10 bg-bone/60 px-4 py-3">
        <p className="eyebrow text-[0.56rem] text-ink/65">Office hours</p>
        <p className="font-mono text-[0.52rem] tracking-[0.14em] text-ink/65 uppercase">
          Central time
        </p>
      </div>
      <dl className="divide-y divide-ink/8 px-4">
        {siteData.hours.map((hour) => {
          const isToday = today === hour.dayOfWeek;

          return (
            <div
              key={hour.day}
              className={cn(
                "flex items-center justify-between gap-4 py-3 transition-colors",
                isToday && "-mx-4 bg-brand/[0.045] px-4",
              )}
            >
              <dt className="flex items-center gap-2 text-[0.8rem] text-ink/65">
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    isToday ? "bg-brand" : "bg-ink/15",
                  )}
                />
                {hour.day}
                {isToday ? (
                  <span className="font-mono text-[0.5rem] tracking-[0.14em] text-brand uppercase">
                    Today
                  </span>
                ) : null}
              </dt>
              <dd
                className={cn(
                  "text-[0.8rem] font-medium",
                  hour.closed ? "text-ink/65" : "text-ink/72",
                )}
              >
                {hour.closed ? "Closed" : `${hour.open} – ${hour.close}`}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
