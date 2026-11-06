import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { RiverLines } from "@/components/decor";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { OfficeStatusBadge } from "@/components/office-status";
import { Button } from "@/components/ui/button";
import { siteData, fullAddress } from "@/lib/site-data";

const heroStats = [
  { value: 3, label: "Doctors" },
  { value: 4, label: "Service areas" },
  { value: 1, label: "Park River location" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-ink pt-[8.25rem] pb-20 text-bone lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_80%_at_12%_0%,rgba(74,67,184,0.34),transparent_58%),radial-gradient(85%_70%_at_88%_18%,rgba(189,114,82,0.16),transparent_56%),linear-gradient(180deg,#111225_0%,#111225_74%,#0d0e1d_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 size-[34rem] animate-drift rounded-full bg-brand/28 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-32 size-[30rem] animate-float rounded-full bg-copper/12 blur-[120px]"
      />
      <RiverLines className="absolute -right-40 top-8 h-[46rem] w-[70rem] text-mint/[0.14]" />
      <RiverLines className="absolute -bottom-60 -left-64 h-[34rem] w-[54rem] rotate-180 text-periwinkle/[0.1]" />
      <div className="grain-layer" />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 xl:gap-24">
        <div className="max-w-[42rem]">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-mint shadow-[0_0_12px_rgba(207,232,221,0.9)]" />
                <span className="eyebrow text-[0.6rem] text-mint/85">
                  Park River, North Dakota
                </span>
              </span>
              <span className="hidden items-center gap-2 text-[0.7rem] tracking-[0.04em] text-bone/55 sm:flex">
                <Sparkles className="size-3.5 text-copper-ink" strokeWidth={1.6} />
                {siteData.tagline}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-[15ch] font-display text-[clamp(3.1rem,7.1vw,6.4rem)] leading-[0.93] font-light tracking-[-0.045em]">
              A calmer kind of{" "}
              <span className="relative inline-block italic text-gradient">
                dentistry.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 18"
                  className="absolute -bottom-2 left-0 w-full text-mint/55"
                  fill="none"
                >
                  <path
                    d="M3 12C55 5 110 5 162 9C214 13 267 8 317 5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[35rem] text-[1.02rem] leading-[1.8] text-bone/64">
              Gentle family and cosmetic dentistry in the heart of Park River.
              Three doctors, one convenient location, and a team ready to answer
              your questions and discuss your concerns.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" variant="light" className="group">
                <Link href="#appointment">
                  Request an appointment
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light" className="group">
                <a href={siteData.phone.href}>
                  <Phone className="size-4 text-mint" strokeWidth={1.8} />
                  {siteData.phone.display}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[2.25rem] leading-none font-light text-bone">
                    <CountUp to={stat.value} />
                  </p>
                  <p className="mt-2 text-[0.66rem] leading-snug tracking-[0.12em] text-bone/55 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} y={34} className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-br from-mint/18 via-brand/10 to-copper/18 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-mint/12 blur-3xl"
            />

            <div className="relative flex items-start justify-between gap-4">
              <span className="inline-flex rounded-2xl bg-cream p-3 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.9)]">
                <Image
                  src="/logo.png"
                  alt="Park River Dental"
                  width={589}
                  height={166}
                  className="h-9 w-auto sm:h-10"
                />
              </span>
              <span className="rounded-full border border-white/14 bg-white/[0.06] px-3 py-1.5 font-mono text-[0.58rem] tracking-[0.18em] text-bone/62 uppercase">
                Family &amp; Cosmetic
              </span>
            </div>

            <div className="relative mt-8">
              <p className="eyebrow text-[0.6rem] text-mint/70">Your visit</p>
              <h2 className="mt-3 font-display text-[2rem] leading-[1.05] font-light tracking-[-0.03em] text-bone">
                Right where you
                <br />
                need us.
              </h2>
              <div className="mt-5">
                <OfficeStatusBadge />
              </div>
            </div>

            <div className="relative mt-7 space-y-5 border-t border-white/10 pt-6">
              <div className="flex gap-3.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-mint/70"
                  strokeWidth={1.7}
                />
                <div>
                  <p className="text-[0.8rem] leading-relaxed text-bone/82">
                    {siteData.address.line1}
                    <span className="text-bone/55"> ({siteData.address.line2})</span>
                    <br />
                    {siteData.address.city}, {siteData.address.state}{" "}
                    {siteData.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-mint/70"
                  strokeWidth={1.7}
                />
                <a
                  href={siteData.phone.href}
                  className="text-[0.88rem] font-medium text-bone/90 transition-colors hover:text-mint"
                >
                  {siteData.phone.display}
                </a>
              </div>

              <div className="flex gap-3.5">
                <Clock3
                  className="mt-0.5 size-4 shrink-0 text-mint/70"
                  strokeWidth={1.7}
                />
                <p className="text-[0.78rem] leading-relaxed text-bone/62">
                  Monday–Thursday · 8:00 AM – 5:00 PM
                  <br />
                  <span className="text-bone/55">Friday · Closed</span>
                </p>
              </div>
            </div>

            <a
              href={siteData.map.url}
              target="_blank"
              rel="noreferrer"
              className="group relative mt-7 flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.055] px-4 py-3 text-[0.78rem] font-semibold text-bone/85 transition-colors hover:border-mint/30 hover:bg-white/[0.09] hover:text-bone"
            >
              Get directions
              <ArrowUpRight className="size-4 text-mint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="absolute -bottom-5 left-6 hidden animate-float items-center gap-2 rounded-full border border-white/12 bg-ink/80 px-4 py-2 text-[0.68rem] text-bone/60 shadow-xl backdrop-blur-xl sm:flex">
            <span className="size-1.5 rounded-full bg-copper" />
            Along Hwy. 17
          </div>
        </Reveal>
      </div>

      <div className="container-page relative z-10 mt-16 flex items-center justify-between border-t border-white/8 pt-5">
        <p className="font-mono text-[0.58rem] tracking-[0.2em] text-bone/55 uppercase">
          Scroll to explore
        </p>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-bone/25" />
          <span className="size-1.5 rounded-full border border-bone/30" />
          <span className="text-[0.6rem] tracking-[0.14em] text-bone/55 uppercase">
            {fullAddress}
          </span>
        </div>
      </div>
    </section>
  );
}
