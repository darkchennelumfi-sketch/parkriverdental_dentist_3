import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span
          className={cn(
            "h-px w-7",
            isDark ? "bg-mint/50" : "bg-brand/40",
          )}
        />
        <p
          className={cn(
            "eyebrow",
            isDark ? "text-mint/80" : "text-brand/75",
          )}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={cn(
          "max-w-3xl font-display text-[clamp(2rem,4.2vw,3.7rem)] leading-[1.02] font-light tracking-[-0.03em]",
          isDark ? "text-bone" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-[0.98rem] leading-[1.75]",
            isDark ? "text-bone/62" : "text-ink/62",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
