import { Sparkle } from "lucide-react";

import { siteData } from "@/lib/site-data";

const items = [
  siteData.tagline,
  "Preventive Family Dentistry",
  "Dental Implants & Tooth Replacement",
  "Cosmetic Dentistry",
  "Invisalign",
  "Park River, North Dakota",
];

export function TrustMarquee() {
  const track = [...items, ...items];

  return (
    <section
      aria-label="Park River Dental services and location"
      className="overflow-hidden border-b border-ink/10 bg-bone"
    >
      <div className="mask-fade-x flex py-5">
        <div className="flex min-w-max animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-12 sm:pr-12">
          {track.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-8 sm:gap-12"
            >
              <span className="font-display text-[1.15rem] font-light tracking-[-0.02em] text-ink/62 sm:text-[1.35rem]">
                {item}
              </span>
              <Sparkle
                className="size-3.5 shrink-0 text-copper/70"
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
