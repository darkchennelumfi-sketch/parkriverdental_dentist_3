"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-ink/65 backdrop-blur-[6px] data-[state=closed]:animate-[fade-out_180ms_ease-in] data-[state=open]:animate-[fade-in_240ms_ease-out]",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-0 right-0 z-50 flex h-dvh w-[min(90vw,25rem)] flex-col overflow-y-auto border-l border-ink/10 bg-paper p-6 shadow-[-30px_0_80px_-30px_rgba(17,18,37,0.35)] data-[state=closed]:animate-[slide-out-right_220ms_ease-in] data-[state=open]:animate-[slide-in-right_340ms_cubic-bezier(0.22,1,0.36,1)] sm:p-8",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute top-5 right-5 flex size-10 cursor-pointer items-center justify-center rounded-full border border-ink/12 bg-cream/70 text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline-none">
        <X className="size-4" strokeWidth={1.6} />
        <span className="sr-only">Close menu</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-display text-2xl font-medium text-ink", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm leading-relaxed text-ink/60", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
