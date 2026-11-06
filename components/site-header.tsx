"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Menu,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteData, fullAddress } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={siteData.social.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Park River Dental on Facebook"
        className={cn(
          "flex size-7 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-white/35 hover:bg-white/12",
          compact && "size-8",
        )}
      >
        <Image
          src="/facebook.png"
          alt=""
          width={15}
          height={15}
          className="size-3.5 object-contain"
        />
      </a>
      <a
        href={siteData.social.google}
        target="_blank"
        rel="noreferrer"
        aria-label="Park River Dental on Google"
        className={cn(
          "flex size-7 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-white/35 hover:bg-white/12",
          compact && "size-8",
        )}
      >
        <Image
          src="/google.png"
          alt=""
          width={15}
          height={15}
          className="size-3.5 object-contain"
        />
      </a>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setScrolled(scrollTop > 24);
      setProgress(Math.min(scrollTop / max, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="bg-ink text-bone/72">
        <div className="container-page flex h-9 items-center justify-between gap-4 text-[0.66rem] tracking-[0.04em]">
          <p className="hidden truncate xl:block">
            Dr. Nicholas Beneda
            <span className="mx-2 text-bone/55">·</span>
            Dr. Brian Larson
            <span className="mx-2 text-bone/55">·</span>
            Dr. Gretchen Brummond
          </p>
          <p className="flex min-w-0 items-center gap-2 truncate">
            <span className="hidden size-1 rounded-full bg-mint/70 sm:block" />
            <span className="truncate">{fullAddress}</span>
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={siteData.phone.href}
              className="font-semibold text-bone transition-colors hover:text-mint"
            >
              {siteData.phone.display}
            </a>
            <span className="hidden h-3 w-px bg-bone/20 sm:block" />
            <a
              href={siteData.social.myAccount}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-bone/72 transition-colors hover:text-bone sm:flex"
            >
              My Account
              <ExternalLink className="size-2.5" strokeWidth={1.8} />
            </a>
            <div className="hidden sm:block">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative border-b transition-[background-color,border-color,box-shadow] duration-500",
          scrolled
            ? "border-ink/10 bg-paper/88 shadow-[0_14px_40px_-30px_rgba(17,18,37,0.45)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
          <Link
            href="#top"
            aria-label="Park River Dental — home"
            className="group relative flex shrink-0 items-center"
          >
            <span className="flex items-center rounded-2xl bg-cream px-3 py-2 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)] ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:px-4">
              <Image
                src="/logo.png"
                alt="Park River Dental"
                width={589}
                height={166}
                priority
                className="h-8 w-auto sm:h-9 lg:h-10"
              />
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {siteData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.8rem] font-semibold tracking-[0.01em] transition-colors duration-300 xl:px-4",
                  scrolled
                    ? "text-ink/65 hover:bg-ink/[0.05] hover:text-ink"
                    : "text-bone/75 hover:bg-white/8 hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              asChild
              size="sm"
              variant={scrolled ? "primary" : "light"}
              className="hidden sm:inline-flex"
            >
              <Link href="#appointment">
                <CalendarDays className="size-3.5" strokeWidth={1.9} />
                Request appointment
              </Link>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className={cn(
                    "flex size-10 cursor-pointer items-center justify-center rounded-full border transition-colors lg:hidden",
                    scrolled
                      ? "border-ink/15 bg-cream/60 text-ink hover:bg-ink hover:text-cream"
                      : "border-white/20 bg-white/8 text-bone backdrop-blur-md hover:bg-white/16",
                  )}
                >
                  <Menu className="size-[1.125rem]" strokeWidth={1.8} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sr-only">Park River Dental menu</DialogTitle>
                <DialogDescription className="sr-only">
                  Navigate the site and find contact information for Park River
                  Dental.
                </DialogDescription>

                <div className="mt-10 flex items-center">
                  <span className="inline-flex rounded-2xl bg-cream px-3 py-2 ring-1 ring-black/5">
                    <Image
                      src="/logo.png"
                      alt="Park River Dental"
                      width={589}
                      height={166}
                      className="h-9 w-auto"
                    />
                  </span>
                </div>

                <nav
                  aria-label="Mobile navigation"
                  className="mt-10 flex flex-col"
                >
                  {siteData.navigation.map((item, index) => (
                    <DialogClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between border-b border-ink/10 py-4 font-display text-[1.65rem] font-light tracking-[-0.02em] text-ink transition-colors hover:text-brand"
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-[0.62rem] tracking-[0.18em] text-ink/65">
                            0{index + 1}
                          </span>
                          <ArrowRight className="size-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                      </Link>
                    </DialogClose>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3">
                  <Button asChild size="lg" variant="primary">
                    <Link href="#appointment">
                      <CalendarDays className="size-4" strokeWidth={1.9} />
                      Request an appointment
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={siteData.phone.href}>
                      <Phone className="size-4" strokeWidth={1.9} />
                      {siteData.phone.display}
                    </a>
                  </Button>
                </div>

                <div className="mt-auto space-y-3 border-t border-ink/10 pt-6 text-sm text-ink/62">
                  <p className="leading-relaxed">{fullAddress}</p>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="block break-all transition-colors hover:text-brand"
                  >
                    {siteData.email}
                  </a>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[0.72rem] text-ink/65">
                      Mon–Thu · 8:00 AM – 5:00 PM
                    </p>
                    <a
                      href={siteData.social.myAccount}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[0.72rem] font-semibold text-brand"
                    >
                      My Account
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand via-royal to-mint transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
