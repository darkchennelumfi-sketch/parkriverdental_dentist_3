import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "flex h-12 w-full rounded-xl border border-ink/12 bg-cream/70 px-4 py-2 text-[0.95rem] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-ink/65 hover:border-ink/22 focus-visible:border-royal focus-visible:bg-cream focus-visible:ring-4 focus-visible:ring-royal/12 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-copper aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-copper/10",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
