import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Quote,
  Sparkles,
} from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export function PracticeIntro() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-24 -left-40 size-[26rem] rounded-full bg-mint/20 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20 xl:gap-28">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome to Park River Dental"
              title={
                <>
                  Care that starts
                  <br />
                  with <span className="italic text-brand">listening.</span>
                </>
              }
              description="We are here to answer your dental questions and to discuss your concerns — with the kind of unhurried attention that makes a visit feel easier."
            />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" className="group">
                <Link href="#doctors">
                  Meet your doctors
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteData.phone.href}>{siteData.phone.display}</a>
              </Button>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/10 pt-8">
              <div>
                <p className="font-display text-[2.2rem] leading-none font-light text-ink">
                  3
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-ink/65 uppercase">
                  Doctors
                </p>
              </div>
              <div>
                <p className="font-display text-[2.2rem] leading-none font-light text-ink">
                  4
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-ink/65 uppercase">
                  Dental services
                </p>
              </div>
              <div>
                <p className="font-display text-[2.2rem] leading-none font-light text-ink">
                  1
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-ink/65 uppercase">
                  Park River location
                </p>
              </div>
              <div>
                <p className="font-display text-[2.2rem] leading-none font-light text-ink">
                  8–5
                </p>
                <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-ink/65 uppercase">
                  Monday–Thursday
                </p>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            <RevealItem className="sm:col-span-2">
              <div className="group relative overflow-hidden rounded-[1.75rem] bg-brand p-7 text-cream sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-12 size-52 rounded-full bg-periwinkle/25 blur-3xl transition-transform duration-700 group-hover:scale-110"
                />
                <Quote
                  className="size-7 text-mint/55"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <blockquote className="mt-5 max-w-xl font-display text-[clamp(1.45rem,2.6vw,2.15rem)] leading-[1.18] font-light tracking-[-0.03em]">
                  “We are here to answer your dental questions and to discuss
                  your concerns.”
                </blockquote>
                <p className="mt-6 font-mono text-[0.58rem] tracking-[0.2em] text-cream/65 uppercase">
                  The Park River Dental team
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-cream/60 p-6 transition-colors duration-300 hover:border-brand/25">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand/8 text-brand">
                    <MapPin className="size-4" strokeWidth={1.7} />
                  </span>
                  <ArrowUpRight className="size-4 text-ink/65" />
                </div>
                <div className="mt-8">
                  <p className="eyebrow text-[0.56rem] text-ink/65">Find us</p>
                  <p className="mt-2 font-display text-[1.35rem] leading-tight font-light text-ink">
                    202 Park St. E
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-ink/65">
                    Along Hwy. 17
                    <br />
                    Park River, ND 58270
                  </p>
                </div>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-bone p-6 transition-colors duration-300 hover:border-brand/25">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand/8 text-brand">
                    <Clock3 className="size-4" strokeWidth={1.7} />
                  </span>
                  <span className="rounded-full border border-ink/10 bg-cream/60 px-2.5 py-1 font-mono text-[0.52rem] tracking-[0.14em] text-ink/65 uppercase">
                    Hours
                  </span>
                </div>
                <div className="mt-8">
                  <p className="font-display text-[1.35rem] leading-tight font-light text-ink">
                    Mon–Thu
                  </p>
                  <p className="mt-1 text-[0.8rem] text-ink/65">8:00 AM – 5:00 PM</p>
                  <p className="mt-3 text-[0.72rem] text-ink/65">Friday · Closed</p>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="sm:col-span-2">
              <div className="flex flex-col gap-5 rounded-[1.5rem] bg-ink p-6 text-bone sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2.5">
                    {siteData.doctors.map((doctor) => (
                      <span
                        key={doctor.name}
                        className="flex size-10 items-center justify-center rounded-full border border-ink/30 bg-ink-3 font-mono text-[0.6rem] font-medium text-mint"
                        aria-hidden="true"
                      >
                        {doctor.initials}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-[0.82rem] font-semibold text-bone">
                      Three doctors, one team
                    </p>
                    <p className="mt-0.5 text-[0.72rem] text-bone/55">
                      A shared standard of gentle care.
                    </p>
                  </div>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border border-white/12 text-mint/75">
                  <Sparkles className="size-4" strokeWidth={1.6} />
                </span>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
