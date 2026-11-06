import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  CircleUserRound,
  Phone,
  UserRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import { RiverLines } from "@/components/decor";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteData, type PatientLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const icons: Record<PatientLink["icon"], LucideIcon> = {
  calendar: CalendarCheck2,
  user: UserRound,
  wallet: WalletCards,
  account: CircleUserRound,
};

const steps = [
  {
    title: "Reach out",
    description:
      "Call our office or send a message using the appointment form.",
  },
  {
    title: "We respond",
    description:
      "A member of our team will respond momentarily to confirm the details.",
  },
  {
    title: "Get the care you need",
    description:
      "We will help you find the right next step and answer any questions.",
  },
];

export function PatientCenter() {
  return (
    <section
      id="patient-center"
      className="grain relative isolate overflow-hidden bg-ink py-24 text-bone sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_85%_10%,rgba(74,67,184,0.28),transparent_56%),radial-gradient(70%_60%_at_5%_90%,rgba(189,114,82,0.12),transparent_55%)]"
      />
      <RiverLines className="absolute -right-60 -bottom-56 h-[42rem] w-[64rem] text-mint/[0.09]" />
      <div className="grain-layer" />

      <div className="container-page relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 xl:gap-28">
          <div>
            <Reveal>
              <SectionHeading
                tone="dark"
                eyebrow="Patient center"
                title={
                  <>
                    A simpler visit,
                    <br />
                    from the <span className="italic text-mint">first call.</span>
                  </>
                }
                description="Whether you are booking a routine visit or looking for help with a dental emergency, the first step is the same: reach out. We will take it from there."
              />
            </Reveal>

            <Reveal delay={0.12}>
              <ol className="mt-12 space-y-0 border-t border-white/10">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="group grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/10 py-6"
                  >
                    <span className="font-mono text-[0.62rem] tracking-[0.18em] text-mint/55">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.35rem] leading-tight font-light text-bone">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-sm text-[0.85rem] leading-[1.7] text-bone/55">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="light" className="group">
                  <Link href="#appointment">
                    Request an appointment
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-light">
                  <a href={siteData.phone.href}>
                    <Phone className="size-4 text-mint" strokeWidth={1.8} />
                    {siteData.phone.display}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {siteData.patientLinks.map((link) => {
              const Icon = icons[link.icon];
              const isExternal = Boolean(link.external);
              const Comp = isExternal ? "a" : Link;

              return (
                <RevealItem key={link.title} className="h-full">
                  <Comp
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className={cn(
                      "group flex h-full min-h-[14.5rem] flex-col rounded-[1.5rem] border border-white/12 bg-white/[0.045] p-6 backdrop-blur-xl transition-[background-color,border-color,transform] duration-500 hover:-translate-y-1 hover:border-mint/30 hover:bg-white/[0.075]",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-mint transition-colors duration-500 group-hover:border-mint/30 group-hover:bg-mint/10">
                        <Icon className="size-4" strokeWidth={1.6} />
                      </span>
                      {isExternal ? (
                        <ArrowUpRight className="size-4 text-bone/55 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />
                      ) : (
                        <ArrowRight className="size-4 text-bone/55 transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-mint" />
                      )}
                    </div>

                    <div className="mt-auto pt-8">
                      <h3 className="font-display text-[1.35rem] leading-tight font-light text-bone">
                        {link.title}
                      </h3>
                      <p className="mt-2 text-[0.78rem] leading-[1.65] text-bone/55">
                        {link.description}
                      </p>
                    </div>
                  </Comp>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.72rem] text-bone/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Monday–Thursday · 8:00 AM – 5:00 PM
              <span className="mx-2 text-bone/55">/</span>
              Friday · Closed
            </p>
            <p className="font-mono text-[0.56rem] tracking-[0.18em] uppercase">
              Park River, ND · (701) 284-6131
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
