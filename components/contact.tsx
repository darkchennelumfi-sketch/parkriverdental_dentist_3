import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";
import { CopyButton } from "@/components/copy-button";
import { RiverLines } from "@/components/decor";
import { Reveal } from "@/components/motion/reveal";
import { OfficeHoursTable } from "@/components/office-hours-table";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-20 -right-40 size-[30rem] rounded-full bg-brand/8 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="rounded-[2rem] border border-ink/10 bg-bone/55 p-5 sm:p-8 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Contact us"
                  title={
                    <>
                      Let’s talk about
                      <br />
                      your <span className="italic text-brand">smile.</span>
                    </>
                  }
                  description="Have a question? We are here to answer your dental questions and to discuss your concerns. Call, email, or send a message — a member of our team will respond momentarily."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-ink/10 bg-paper p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                        <MapPin className="size-3.5" strokeWidth={1.8} />
                      </span>
                      <CopyButton
                        value={`${siteData.address.line1} (${siteData.address.line2}), ${siteData.address.city}, ${siteData.address.state} ${siteData.address.zip}`}
                        label="address"
                      />
                    </div>
                    <p className="mt-4 text-[0.62rem] tracking-[0.16em] text-ink/65 uppercase">
                      Visit
                    </p>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink/72">
                      {siteData.address.line1}
                      <br />
                      <span className="text-ink/65">({siteData.address.line2})</span>
                      <br />
                      {siteData.address.city}, {siteData.address.state}{" "}
                      {siteData.address.zip}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-ink/10 bg-paper p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                        <Phone className="size-3.5" strokeWidth={1.8} />
                      </span>
                      <CopyButton
                        value={siteData.phone.display}
                        label="phone number"
                      />
                    </div>
                    <p className="mt-4 text-[0.62rem] tracking-[0.16em] text-ink/65 uppercase">
                      Call
                    </p>
                    <a
                      href={siteData.phone.href}
                      className="mt-1.5 block text-[0.9rem] font-semibold text-ink transition-colors hover:text-brand"
                    >
                      {siteData.phone.display}
                    </a>
                    <p className="mt-1 text-[0.68rem] text-ink/65">
                      Mon–Thu · 8:00 AM – 5:00 PM
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-ink/10 bg-paper p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                        <Mail className="size-3.5" strokeWidth={1.8} />
                      </span>
                      <CopyButton value={siteData.email} label="email address" />
                    </div>
                    <p className="mt-4 text-[0.62rem] tracking-[0.16em] text-ink/65 uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteData.email}`}
                      className="mt-1.5 block text-[0.78rem] break-all text-ink/72 transition-colors hover:text-brand"
                    >
                      {siteData.email}
                    </a>
                  </div>

                  <div className="rounded-[1.25rem] border border-ink/10 bg-paper p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                        <Truck className="size-3.5" strokeWidth={1.8} />
                      </span>
                      <CopyButton
                        value={`${siteData.mailing.line1}, ${siteData.mailing.city}, ${siteData.mailing.state} ${siteData.mailing.zip}`}
                        label="mailing address"
                      />
                    </div>
                    <p className="mt-4 text-[0.62rem] tracking-[0.16em] text-ink/65 uppercase">
                      Mailing address
                    </p>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink/72">
                      {siteData.mailing.line1}
                      <br />
                      {siteData.mailing.city}, {siteData.mailing.state}{" "}
                      {siteData.mailing.zip}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-4">
                  <OfficeHoursTable />
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-4 rounded-[1.25rem] border border-copper/20 bg-copper/[0.07] p-5">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-copper" />
                    <p className="eyebrow text-[0.56rem] text-copper-ink">
                      Dental emergencies
                    </p>
                  </div>
                  <p className="mt-3 text-[0.82rem] leading-[1.7] text-ink/62">
                    If you have a dental emergency and need immediate attention,
                    please call our office at{" "}
                    <a
                      href={siteData.phone.href}
                      className="font-semibold text-ink underline decoration-copper/40 underline-offset-4 transition-colors hover:text-copper-ink"
                    >
                      {siteData.phone.display}
                    </a>
                    . We will help you get care as soon as possible.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="relative">
              <div id="appointment" className="scroll-mt-28">
                <AppointmentForm />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-ink text-bone lg:mt-12">
              <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="eyebrow text-[0.56rem] text-mint/65">
                      Find us
                    </p>
                    <h3 className="mt-3 font-display text-[1.8rem] leading-[1.08] font-light tracking-[-0.03em] text-bone">
                      Along Hwy. 17
                      <br />
                      in Park River.
                    </h3>
                    <p className="mt-3 max-w-xs text-[0.8rem] leading-relaxed text-bone/55">
                      202 Park St. E, Park River, ND 58270. Use the link for
                      turn-by-turn directions.
                    </p>
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="md" variant="light">
                      <a
                        href={siteData.map.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get directions
                        <ArrowUpRight className="size-4" strokeWidth={1.8} />
                      </a>
                    </Button>
                    <Button asChild size="md" variant="outline-light">
                      <a href={siteData.phone.href}>
                        <CalendarDays className="size-4" strokeWidth={1.8} />
                        Call the office
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="relative min-h-56 overflow-hidden border-t border-white/10 lg:min-h-64 lg:border-t-0 lg:border-l">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(80%_80%_at_70%_30%,rgba(74,67,184,0.3),transparent_65%)]"
                  />
                  <RiverLines className="absolute -right-20 -bottom-32 h-[24rem] w-[36rem] text-mint/[0.12]" />
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 600 300"
                    className="absolute inset-0 h-full w-full text-mint/55"
                    fill="none"
                  >
                    <g stroke="currentColor" strokeWidth="1" opacity="0.45">
                      <path d="M-20 210C80 170 160 250 260 210C360 170 410 120 620 160" />
                      <path d="M-20 250C80 210 160 290 260 250C360 210 410 160 620 200" />
                      <path d="M120 -20C160 80 80 140 140 220C200 300 280 270 320 320" />
                      <path d="M430 -20C390 70 460 130 420 210C380 290 470 280 500 320" />
                    </g>
                  </svg>
                  <div className="absolute top-[42%] left-[58%] flex flex-col items-center">
                    <span className="relative flex size-12 items-center justify-center rounded-full border border-mint/40 bg-ink/80 text-mint shadow-[0_0_40px_rgba(207,232,221,0.25)] backdrop-blur-md">
                      <MapPin className="size-5" strokeWidth={1.7} />
                      <span className="absolute inset-0 animate-ping rounded-full border border-mint/20" />
                    </span>
                    <span className="mt-3 rounded-full border border-white/12 bg-ink/75 px-3 py-1 font-mono text-[0.52rem] tracking-[0.16em] text-bone/60 uppercase backdrop-blur-md">
                      Park River Dental
                    </span>
                  </div>
                  <span className="absolute top-5 left-5 rounded-full border border-white/12 bg-ink/60 px-2.5 py-1 font-mono text-[0.5rem] tracking-[0.16em] text-bone/55 uppercase backdrop-blur-md">
                    Hwy. 17
                  </span>
                  <span className="absolute right-5 bottom-5 rounded-full border border-white/12 bg-ink/60 px-2.5 py-1 font-mono text-[0.5rem] tracking-[0.16em] text-bone/55 uppercase backdrop-blur-md">
                    Park St. E
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
