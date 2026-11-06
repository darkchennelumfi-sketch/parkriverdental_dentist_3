"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "span" | "li" | "header";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
  as = "div",
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.09, delayChildren: delay },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
