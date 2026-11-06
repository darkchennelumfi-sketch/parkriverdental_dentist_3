import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-sans text-sm font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-out select-none disabled:pointer-events-none disabled:opacity-45 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-cream shadow-[0_10px_30px_-12px_rgba(47,43,125,0.9)] hover:bg-royal hover:shadow-[0_18px_40px_-14px_rgba(74,67,184,0.9)]",
        copper:
          "bg-copper text-cream shadow-[0_10px_30px_-12px_rgba(189,114,82,0.8)] hover:bg-[#a86144]",
        light:
          "bg-bone text-ink shadow-[0_10px_30px_-16px_rgba(0,0,0,0.55)] hover:bg-cream",
        outline:
          "border border-ink/15 bg-transparent text-ink hover:border-ink/30 hover:bg-ink/[0.04]",
        "outline-light":
          "border border-white/20 bg-white/[0.04] text-bone backdrop-blur-md hover:border-white/35 hover:bg-white/10",
        ghost: "text-ink hover:bg-ink/[0.05]",
        "ghost-light": "text-bone/80 hover:bg-white/10 hover:text-bone",
      },
      size: {
        sm: "h-9 px-4 text-[0.8rem]",
        md: "h-11 px-5",
        lg: "h-[3.25rem] px-7 text-[0.95rem]",
        icon: "size-10 p-0",
        "icon-lg": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
