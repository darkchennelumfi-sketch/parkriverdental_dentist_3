"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const timeout = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeout.current) window.clearTimeout(timeout.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timeout.current) window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-ink/10 bg-cream/50 px-2.5 py-1 text-[0.68rem] font-medium tracking-[0.02em] text-ink/65 transition-colors hover:border-ink/20 hover:text-ink focus-visible:outline-none",
        className,
      )}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <Check className="size-3 text-moss" strokeWidth={2.2} />
      ) : (
        <Copy className="size-3" strokeWidth={1.8} />
      )}
      {copied ? "Copied" : "Copy"}
      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </button>
  );
}
