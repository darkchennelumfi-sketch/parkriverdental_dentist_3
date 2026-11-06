import { Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteData } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-bone py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/3 size-[26rem] rounded-full bg-mint/20 blur-[120px]"
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Good to know"
              title={
                <>
                  Questions,
                  <br />
                  <span className="italic text-brand">answered.</span>
                </>
              }
              description="A few helpful details before you call or send a message."
            />

            <div className="mt-9 rounded-[1.5rem] border border-ink/10 bg-paper p-6">
              <p className="eyebrow text-[0.56rem] text-ink/65">Still have a question?</p>
              <p className="mt-3 max-w-xs text-[0.9rem] leading-relaxed text-ink/65">
                A member of our team is happy to help you find the answer.
              </p>
              <div className="mt-5 space-y-2.5">
                <a
                  href={siteData.phone.href}
                  className="group flex items-center gap-3 text-[0.84rem] font-semibold text-ink transition-colors hover:text-brand"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                    <Phone className="size-3.5" strokeWidth={1.8} />
                  </span>
                  {siteData.phone.display}
                </a>
                <a
                  href={`mailto:${siteData.email}`}
                  className="group flex items-center gap-3 text-[0.78rem] text-ink/65 transition-colors hover:text-brand"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand/8 text-brand">
                    <Mail className="size-3.5" strokeWidth={1.8} />
                  </span>
                  <span className="break-all">{siteData.email}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="border-t border-ink/10"
          >
            {siteData.faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
