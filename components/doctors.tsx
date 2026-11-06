import { ArrowUpRight, Stethoscope } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const tones = {
  brand: {
    circle: "bg-brand text-cream",
    glow: "bg-brand/22",
    chip: "border-brand/15 bg-brand/[0.055] text-brand",
  },
  moss: {
    circle: "bg-ink text-mint",
    glow: "bg-moss/25",
    chip: "border-moss/25 bg-moss/[0.08] text-ink/62",
  },
  copper: {
    circle: "bg-copper text-cream",
    glow: "bg-copper/20",
    chip: "border-copper/20 bg-copper/[0.07] text-copper-ink",
  },
} as const;

export function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-bone py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-72 w-72 rounded-full bg-brand/8 blur-[100px]"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Your dental team"
              title={
                <>
                  Meet your
                  <br />
                  <span className="italic text-brand">doctors.</span>
                </>
              }
              description="Three doctors, one team, and a shared commitment to care that feels personal from the very first visit."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-cream/55 px-4 py-2.5">
              <Stethoscope className="size-4 text-brand" strokeWidth={1.7} />
              <span className="font-mono text-[0.58rem] tracking-[0.18em] text-ink/65 uppercase">
                Park River Dental
              </span>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {siteData.doctors.map((doctor, index) => {
            const tone = tones[doctor.tone];
            return (
              <RevealItem
                key={doctor.name}
                className={cn(
                  "h-full",
                  index === 1 && "lg:translate-y-8",
                  index === 2 && "lg:translate-y-16",
                )}
              >
                <article className="group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper p-6 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_32px_70px_-45px_rgba(17,18,37,0.55)] sm:p-7">
                  <div
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-10 -right-10 size-40 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125",
                      tone.glow,
                    )}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-[0.58rem] tracking-[0.2em] text-ink/65">
                      0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-1 font-mono text-[0.52rem] tracking-[0.16em] uppercase",
                        tone.chip,
                      )}
                    >
                      Dentist
                    </span>
                  </div>

                  <div className="relative mt-10 flex flex-1 flex-col">
                    <div
                      className={cn(
                        "relative flex size-20 items-center justify-center rounded-full font-display text-[1.75rem] font-light tracking-[-0.03em] shadow-[0_18px_35px_-22px_rgba(17,18,37,0.7)]",
                        tone.circle,
                      )}
                    >
                      {doctor.initials}
                      <span className="absolute inset-1 rounded-full border border-white/20" />
                    </div>

                    <h3 className="mt-7 max-w-[13ch] font-display text-[1.65rem] leading-[1.08] font-light tracking-[-0.03em] text-ink">
                      {doctor.name}
                    </h3>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                      <p className="text-[0.7rem] tracking-[0.12em] text-ink/65 uppercase">
                        Park River Dental
                      </p>
                      <span className="flex size-8 items-center justify-center rounded-full border border-ink/10 bg-cream/55 text-ink/65 transition-[background-color,color,transform] duration-300 group-hover:bg-brand group-hover:text-cream">
                        <ArrowUpRight className="size-3.5" strokeWidth={1.8} />
                      </span>
                    </div>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="h-10 lg:h-16" aria-hidden="true" />
      </div>
    </section>
  );
}
