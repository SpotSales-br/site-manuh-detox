"use client";

import {
  createElement,
  useRef,
  type ReactNode,
} from "react";
import {
  gsap,
  prefersReducedMotion,
  useIsoLayoutEffect,
} from "@/lib/gsap";

type Variant =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "zoom";

type Tag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "ul"
  | "ol"
  | "li"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "nav";

interface RevealProps {
  children: ReactNode;
  as?: Tag;
  variant?: Variant;
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  staggerSelector?: string;
  start?: string;
  once?: boolean;
  className?: string;
  id?: string;
}

export function Reveal({
  children,
  as = "div",
  variant = "fade-up",
  delay = 0,
  duration = 0.9,
  distance = 40,
  stagger,
  staggerSelector,
  start = "top 85%",
  once = true,
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element[] =
      stagger !== undefined
        ? Array.from(
            el.querySelectorAll<HTMLElement>(
              staggerSelector ?? ":scope > *",
            ),
          )
        : [el];

    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { clearProps: "all", autoAlpha: 1 });
      return;
    }

    const from = fromVars(variant, distance);
    const to = toVars(variant);

    const ctx = gsap.context(() => {
      gsap.set(targets, from);
      gsap.to(targets, {
        ...to,
        duration,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [
    variant,
    delay,
    duration,
    distance,
    stagger,
    staggerSelector,
    start,
    once,
  ]);

  return createElement(as, { ref, className, id }, children);
}

function fromVars(variant: Variant, distance: number) {
  switch (variant) {
    case "fade":
      return { autoAlpha: 0 };
    case "fade-up":
      return { autoAlpha: 0, y: distance };
    case "fade-down":
      return { autoAlpha: 0, y: -distance };
    case "fade-left":
      return { autoAlpha: 0, x: -distance };
    case "fade-right":
      return { autoAlpha: 0, x: distance };
    case "scale":
      return { autoAlpha: 0, scale: 0.92 };
    case "zoom":
      return { autoAlpha: 0, scale: 1.08 };
  }
}

function toVars(variant: Variant) {
  switch (variant) {
    case "fade":
      return { autoAlpha: 1 };
    case "fade-up":
    case "fade-down":
      return { autoAlpha: 1, y: 0 };
    case "fade-left":
    case "fade-right":
      return { autoAlpha: 1, x: 0 };
    case "scale":
    case "zoom":
      return { autoAlpha: 1, scale: 1 };
  }
}
