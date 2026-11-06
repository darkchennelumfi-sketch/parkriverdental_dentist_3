import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { RiverLines } from "@/components/decor";
import { Button } from "@/components/ui/button";
import { siteData, fullAddress } from "@/lib/site-data";

const exploreLinks = [
  { label: "Home", href: "#top" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "Patient Info", href: "#patient-center" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="grain relative isolate overflow-hidden bg-ink pb-24 text-bone lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_0%,rgba(74,67,184,0.24),transparent_58%),radial-gradient(60%_60%_at_90%_90%,rgba(189,114,82,0.12),transparent_55%)]"
      />
      <RiverLines className="absolute -right-52 -bottom-72 h-[46rem] w-[70rem] text-mint/[0.07]" />
      <div className="grain-layer" />

      <div className="container-page relative z-10">
        <div className="flex flex-col gap-10 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div>
            <span className="inline-flex rounded-2xl bg-cream px-3 py-2 ring-1 ring-black/5">
              <Image
                src="/logo.png"
                alt="Park River Dental"
                width={589}
                height={166}
                className="h-10 w-auto"
              />
            </span>
            <p className="mt-6 max-w-md font-display text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.04] font-light tracking-[-0.035em] text-bone">
              Gentle family and cosmetic dentistry,{" "}
              <span className="italic text-mint">close to home.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button asChild size="lg" variant="light" className="group">
              <Link href="#appointment">
                Request an appointment
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <a href={siteData.phone.href}>
                <Phone className="size-4 text-mint" strokeWidth={1.8} />
                {siteData.phone.display}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[0.8fr_1fr_0.9fr_0.9fr] lg:gap-8">
          <div>
            <p className="eyebrow text-[0.56rem] text-mint/60">Explore</p>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.82rem] text-bone/55 transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[0.56rem] text-mint/60">Visit</p>
            <div className="mt-5 space-y-4 text-[0.8rem] leading-relaxed text-bone/55">
              <a
                href={siteData.map.url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition-colors hover:text-bone"
              >
                <MapPin
                  className="mt-0.5 size-3.5 shrink-0 text-mint/55"
                  strokeWidth={1.7}
                />
                <span>
                  {siteData.address.line1}
                  <br />
                  <span className="text-bone/55">
                    ({siteData.address.line2})
                  </span>
                  <br />
                  {siteData.address.city}, {siteData.address.state}{" "}
                  {siteData.address.zip}
                </span>
              </a>
              <a
                href={siteData.phone.href}
                className="flex items-center gap-3 transition-colors hover:text-bone"
              >
                <Phone
                  className="size-3.5 shrink-0 text-mint/55"
                  strokeWidth={1.7}
                />
                {siteData.phone.display}
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start gap-3 break-all transition-colors hover:text-bone"
              >
                <Mail
                  className="mt-0.5 size-3.5 shrink-0 text-mint/55"
                  strokeWidth={1.7}
                />
                {siteData.email}
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[0.56rem] text-mint/60">Office hours</p>
            <div className="mt-5 flex items-start gap-3 text-[0.8rem] leading-relaxed text-bone/55">
              <Clock3
                className="mt-0.5 size-3.5 shrink-0 text-mint/55"
                strokeWidth={1.7}
              />
              <div>
                <p>Monday–Thursday</p>
                <p className="text-bone/55">8:00 AM – 5:00 PM</p>
                <p className="mt-3">Friday</p>
                <p className="text-bone/55">Closed</p>
              </div>
            </div>
            <a
              href={siteData.social.myAccount}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[0.74rem] font-semibold text-mint/75 transition-colors hover:text-mint"
            >
              My Account
              <ArrowUpRight className="size-3" strokeWidth={1.8} />
            </a>
          </div>

          <div>
            <p className="eyebrow text-[0.56rem] text-mint/60">Connect</p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[0.8rem] text-bone/55 transition-colors hover:text-bone"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] transition-colors group-hover:border-mint/30 group-hover:bg-mint/10">
                  <Image
                    src="/facebook.png"
                    alt=""
                    width={14}
                    height={14}
                    className="size-3.5 object-contain"
                  />
                </span>
                Facebook
              </a>
              <a
                href={siteData.social.google}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-[0.8rem] text-bone/55 transition-colors hover:text-bone"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-mint/65 transition-colors group-hover:border-mint/30 group-hover:bg-mint/10">
                  <Star className="size-3.5" strokeWidth={1.7} />
                </span>
                Google reviews
              </a>
              <a
                href={siteData.social.privacyPolicy}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[0.74rem] text-bone/55 transition-colors hover:text-bone/70"
              >
                Privacy Policy
                <ArrowUpRight className="size-3" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[0.68rem] text-bone/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            All rights reserved. © Copyright 2026.{" "}
            <span className="text-bone/55">Website design by </span>
            <a
              href={siteData.webaloo}
              target="_blank"
              rel="noreferrer"
              className="text-bone/55 underline decoration-bone/20 underline-offset-4 transition-colors hover:text-bone"
            >
              Webaloo
            </a>
            <span className="text-bone/55">.</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[0.52rem] tracking-[0.16em] text-bone/55 uppercase">
              {fullAddress}
            </span>
            <Link
              href="#top"
              className="inline-flex items-center gap-1 text-bone/55 transition-colors hover:text-bone"
            >
              Back to top
              <ArrowUpRight className="size-3" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
