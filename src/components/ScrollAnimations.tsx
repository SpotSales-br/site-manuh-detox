"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealConfig = {
  from: gsap.TweenVars;
  to: Partial<gsap.TweenVars>;
  start?: string;
};

const REVEAL_VARIANTS: Record<string, RevealConfig> = {
  "fade-up": {
    from: { autoAlpha: 0, y: 48 },
    to: { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
  },
  "fade-right": {
    from: { autoAlpha: 0, x: -48 },
    to: { autoAlpha: 1, x: 0, duration: 0.9, ease: "power3.out" },
  },
  "fade-left": {
    from: { autoAlpha: 0, x: 48 },
    to: { autoAlpha: 1, x: 0, duration: 0.9, ease: "power3.out" },
  },
  "scale-in": {
    from: { autoAlpha: 0, scale: 0.88 },
    to: { autoAlpha: 1, scale: 1, duration: 1, ease: "expo.out" },
  },
  "zoom-reveal": {
    from: { autoAlpha: 0, scale: 1.15 },
    to: { autoAlpha: 1, scale: 1, duration: 1.4, ease: "power3.out" },
  },
  "slide-blur": {
    from: { autoAlpha: 0, y: 60, filter: "blur(14px)" },
    to: {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.1,
      ease: "power3.out",
    },
  },
  "rotate-in": {
    from: { autoAlpha: 0, rotationX: -55, y: 30, transformPerspective: 900 },
    to: {
      autoAlpha: 1,
      rotationX: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
      transformOrigin: "50% 100%",
    },
  },
  "flip-in": {
    from: { autoAlpha: 0, rotationY: 40, transformPerspective: 900 },
    to: {
      autoAlpha: 1,
      rotationY: 0,
      duration: 1,
      ease: "power3.out",
      transformOrigin: "0% 50%",
    },
  },
  "clip-reveal": {
    from: { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 },
    to: {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.1,
      ease: "power4.inOut",
    },
  },
};

const STAGGER_VARIANTS: Record<string, RevealConfig> = {
  stagger: REVEAL_VARIANTS["fade-up"],
  "stagger-scale": REVEAL_VARIANTS["scale-in"],
  "stagger-blur": REVEAL_VARIANTS["slide-blur"],
  "stagger-rotate": REVEAL_VARIANTS["rotate-in"],
  "stagger-flip": REVEAL_VARIANTS["flip-in"],
  "stagger-right": REVEAL_VARIANTS["fade-right"],
};

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      document
        .querySelectorAll<HTMLElement>("[data-animate]")
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.visibility = "visible";
          el.style.transform = "none";
        });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      Object.entries(REVEAL_VARIANTS).forEach(([variant, config]) => {
        gsap.utils
          .toArray<HTMLElement>(`[data-animate='${variant}']`)
          .forEach((el) => {
            const delay = Number(el.dataset.animateDelay ?? 0);
            const start = el.dataset.animateStart ?? "top 88%";
            const durationOverride = el.dataset.animateDuration
              ? Number(el.dataset.animateDuration)
              : undefined;
            gsap.fromTo(el, config.from, {
              ...config.to,
              ...(durationOverride !== undefined
                ? { duration: durationOverride }
                : {}),
              delay,
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none none",
              },
            });
          });
      });

      Object.entries(STAGGER_VARIANTS).forEach(([variant, config]) => {
        gsap.utils
          .toArray<HTMLElement>(`[data-animate='${variant}']`)
          .forEach((group) => {
            const items = group.querySelectorAll<HTMLElement>(
              "[data-animate-item]",
            );
            if (items.length === 0) return;
            const stagger = Number(group.dataset.animateStagger ?? 0.12);
            const start = group.dataset.animateStart ?? "top 82%";
            const durationOverride = group.dataset.animateDuration
              ? Number(group.dataset.animateDuration)
              : undefined;
            gsap.fromTo(items, config.from, {
              ...config.to,
              ...(durationOverride !== undefined
                ? { duration: durationOverride }
                : {}),
              stagger,
              scrollTrigger: {
                trigger: group,
                start,
                toggleActions: "play none none none",
              },
            });
          });
      });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='parallax']")
        .forEach((el) => {
          const distance = Number(el.dataset.parallaxDistance ?? 80);
          gsap.fromTo(
            el,
            { y: -distance / 2 },
            {
              y: distance / 2,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='hero']")
        .forEach((el) => {
          const items = el.querySelectorAll<HTMLElement>("[data-animate-item]");
          if (items.length === 0) return;
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 30, filter: "blur(8px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              stagger: 0.14,
              delay: 0.1,
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-animate='pin-fade']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 80 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "top 55%",
                scrub: 0.6,
              },
            },
          );
        });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
