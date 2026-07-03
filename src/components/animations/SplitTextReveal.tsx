"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { EASE_APPLE_CSS } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

type SplitTextRevealProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  triggerOnScroll?: boolean;
  accentWords?: string[];
  accentClassName?: string;
};

export default function SplitTextReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
  triggerOnScroll = false,
  accentWords = [],
  accentClassName = "text-gradient-accent",
}: SplitTextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>(".split-word");

    const animation = gsap.from(words, {
      y: 20,
      opacity: 0,
      duration: 0.45,
      stagger: 0.025,
      delay,
      ease: EASE_APPLE_CSS,
      immediateRender: false,
      scrollTrigger: triggerOnScroll
        ? {
            trigger: el,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          }
        : undefined,
    });

    return () => {
      animation.kill();
    };
  }, [children, delay, triggerOnScroll]);

  const words = children.split(" ").map((word, i) => {
    const isAccent = accentWords.some(
      (a) => word.toLowerCase().replace(/[.,!?]/g, "") === a.toLowerCase()
    );
    return (
      <span
        key={`${word}-${i}`}
        className={cn(
          "split-word inline-block",
          isAccent && accentClassName
        )}
        style={{ marginRight: "0.28em" }}
      >
        {word}
      </span>
    );
  });

  return (
    <Tag ref={ref as never} className={className}>
      {words}
    </Tag>
  );
}
