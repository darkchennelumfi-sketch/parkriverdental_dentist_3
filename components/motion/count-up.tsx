"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();
  // Always start at zero so the server and first client render agree. The
  // reduced-motion value is applied in the effect below after hydration.
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      const frame = requestAnimationFrame(() => setValue(to));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reducedMotion, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
