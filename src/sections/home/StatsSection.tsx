"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSection from "@/components/animations/ScrollSection";
import { CounterSimple } from "@/components/Counter";
import { COMPANY_COUNTERS } from "@/lib/constants";
import { EASE_APPLE_CSS } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".stat-item");
    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 24,
        opacity: 0,
        scale: 0.96,
        duration: 0.5,
        stagger: 0.08,
        ease: EASE_APPLE_CSS,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection className="relative bg-white py-20 md:py-24">
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_COUNTERS.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <CounterSimple value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-hb-text-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
