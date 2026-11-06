import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

import { RiverLines } from "@/components/decor";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[78vh] items-center overflow-hidden bg-ink pt-32 pb-24 text-bone">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_20%_0%,rgba(74,67,184,0.28),transparent_60%),radial-gradient(60%_60%_at_90%_90%,rgba(189,114,82,0.14),transparent_55%)]"
      />
      <RiverLines className="absolute -right-56 -bottom-40 h-[40rem] w-[62rem] text-mint/[0.1]" />
      <div className="grain-layer" />

      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <p className="eyebrow text-[0.6rem] text-mint/65">Page not found</p>
          <p className="mt-6 font-display text-[clamp(5rem,16vw,11rem)] leading-[0.8] font-light tracking-[-0.06em] text-bone/55">
            404
          </p>
          <h1 className="-mt-3 font-display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[0.98] font-light tracking-[-0.04em]">
            This page took
            <br />
            a <span className="italic text-mint">wrong turn.</span>
          </h1>
          <p className="mt-6 max-w-md text-[0.95rem] leading-[1.75] text-bone/55">
            The page you are looking for is not here. Head back home, or call our
            office and we will point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="light">
              <Link href="/">
                <ArrowLeft className="size-4" strokeWidth={1.8} />
                Back to home
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
      </div>
    </section>
  );
}
