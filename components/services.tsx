import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  ShieldCheck,
  Smile,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteData, type Service } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const icons: Record<Service["icon"], LucideIcon> = {
  shield: ShieldCheck,
  layers: Layers3,
  sparkles: Sparkles,
  smile: Smile,
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-paper py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-48 size-[34rem] -translate-y-1/2 rounded-full bg-mint/16 blur-[130px]"
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Dental services"
              title={
                <>
                  Everything your smile
                  <br />
                  needs, <span className="italic text-brand">under one roof.</span>
                </>
              }
              description="From routine family care to cosmetic treatment and clear aligners, our services are built around your goals — and explained every step of the way."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Button asChild variant="outline" size="md" className="group">
              <Link href="#appointment">
                Start a conversation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-5">
          {siteData.services.map((service, index) => {
            const Icon = icons[service.icon];
            const isWide = service.span === "wide";

            return (
              <RevealItem
                key={service.slug}
                className={cn(
                  "h-full",
                  isWide ? "lg:col-span-7" : "lg:col-span-5",
                )}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream/55 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_36px_80px_-55px_rgba(17,18,37,0.55)]",
                    isWide ? "p-7 sm:p-9" : "p-7 sm:p-8",
                  )}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -bottom-16 size-48 rounded-full bg-brand/0 blur-3xl transition-colors duration-700 group-hover:bg-brand/12"
                  />

                  <div className="relative flex items-start justify-between gap-6">
                    <span className="flex size-12 items-center justify-center rounded-full border border-ink/10 bg-paper text-brand transition-[background-color,color,border-color] duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-cream">
                      <Icon className="size-5" strokeWidth={1.55} />
                    </span>
                    <span className="font-mono text-[0.58rem] tracking-[0.2em] text-ink/65">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-10 flex flex-1 flex-col">
                    <h3
                      className={cn(
                        "max-w-[16ch] font-display leading-[1.06] font-light tracking-[-0.03em] text-ink",
                        isWide ? "text-[2.15rem] sm:text-[2.6rem]" : "text-[1.85rem]",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[0.9rem] leading-[1.72] text-ink/65">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                      <Link
                        href="#appointment"
                        className="group/link inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.1em] text-ink/65 uppercase transition-colors hover:text-brand"
                      >
                        Ask about this service
                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                      <span className="font-mono text-[0.55rem] tracking-[0.14em] text-ink/65 uppercase">
                        {isWide ? "Park River Dental" : "Care"}
                      </span>
                    </div>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-5 rounded-[1.5rem] border border-ink/10 bg-ink p-6 text-bone sm:flex-row sm:items-center sm:justify-between sm:p-7 lg:mt-7">
            <div className="flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-mint">
                <Sparkles className="size-4" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[0.9rem] font-semibold">Not sure where to start?</p>
                <p className="mt-1 text-[0.8rem] text-bone/55">
                  Call us and we will help you find the right next step.
                </p>
              </div>
            </div>
            <Button asChild variant="light" size="md" className="shrink-0">
              <a href={siteData.phone.href}>{siteData.phone.display}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
