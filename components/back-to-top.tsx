"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-6 bottom-6 z-30 hidden size-11 cursor-pointer items-center justify-center rounded-full border border-ink/12 bg-paper/90 text-ink shadow-[0_18px_40px_-20px_rgba(17,18,37,0.5)] backdrop-blur-xl transition-[opacity,transform,background-color] duration-300 hover:bg-ink hover:text-cream lg:flex",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="size-4" strokeWidth={1.8} />
    </button>
  );
}
