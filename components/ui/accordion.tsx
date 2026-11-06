"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-ink/12", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 cursor-pointer items-center justify-between gap-6 py-6 text-left font-display text-[1.2rem] leading-snug font-medium tracking-[-0.02em] text-ink transition-colors duration-200 hover:text-brand sm:text-[1.35rem]",
          className,
        )}
        {...props}
      >
        {children}
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/12 bg-cream/60 transition-[background-color,border-color,transform] duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-brand/30 group-data-[state=open]:bg-brand group-data-[state=open]:text-cream">
          <Plus className="size-4" strokeWidth={1.7} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_220ms_ease-out] data-[state=open]:animate-[accordion-down_280ms_ease-out]"
      {...props}
    >
      <div
        className={cn(
          "max-w-2xl pb-7 text-[0.95rem] leading-[1.75] text-ink/66",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
