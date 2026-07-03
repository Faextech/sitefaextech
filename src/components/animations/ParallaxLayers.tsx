"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxBackground({
  className,
  speed = 0.3,
}: {
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    />
  );
}

export function DigitalGrid({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-digital-grid"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

export function GlowOrb({
  color = "purple",
  className,
}: {
  color?: "purple" | "blue" | "orange";
  className?: string;
}) {
  const colors = {
    purple: "bg-accent-purple/25",
    blue: "bg-hb-blue/20",
    orange: "bg-hb-orange/15",
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-[120px]",
        colors[color],
        className
      )}
      aria-hidden="true"
    />
  );
}
