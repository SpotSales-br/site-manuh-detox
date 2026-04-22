"use client";

import { createElement, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from "@/lib/gsap";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  as?: "div" | "section" | "figure" | "span";
}

export function Parallax({
  children,
  speed = 0.25,
  className,
  as = "div",
}: ParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const distance = 120 * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -distance },
        {
          y: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return createElement(as, { ref, className }, children);
}
