"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { PROCESS_STEPS } from "@/lib/constants";
import { EASE_APPLE_CSS } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const steps = el.querySelectorAll(".process-step");
    const ctx = gsap.context(() => {
      steps.forEach((step, i) => {
        gsap.from(step, {
          x: i % 2 === 0 ? -20 : 20,
          opacity: 0,
          duration: 0.45,
          ease: EASE_APPLE_CSS,
          immediateRender: false,
          scrollTrigger: {
            trigger: step,
            start: "top 92%",
            once: true,
            toggleActions: "play none none none",
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <ScrollSection className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="section-badge mb-6">Processo</div>
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-foreground"
            accentWords={["produção."]}
          >
            Da descoberta à produção.
          </SplitTextReveal>
        </div>

        <div ref={timelineRef} className="relative space-y-0">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-hb-blue/30 via-gray-200 to-transparent md:block" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="process-step relative flex gap-6 border-b border-gray-100 py-7 last:border-0"
            >
              <div className="hidden shrink-0 md:block">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white font-mono text-xs font-bold text-hb-blue">
                  {step.step}
                </div>
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-hb-blue md:hidden">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-hb-text-dim">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
