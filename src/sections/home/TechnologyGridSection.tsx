"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Puzzle, TrendingUp, Target, type LucideIcon } from "lucide-react";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { DigitalGrid } from "@/components/animations/ParallaxLayers";
import { BRAND_KEYWORDS, TECH_STACK } from "@/lib/constants";
import { EASE_APPLE_CSS } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  puzzle: Puzzle,
  "trending-up": TrendingUp,
  target: Target,
};

export default function TechnologyGridSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".tech-pillar");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 24,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: EASE_APPLE_CSS,
        immediateRender: false,
        scrollTrigger: {
          trigger: grid,
          start: "top 92%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <ScrollSection className="relative border-y border-gray-100 bg-white py-20 md:py-24">
      <DigitalGrid opacity={0.05} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="section-badge mb-6">Tecnologia</div>
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-foreground"
            accentWords={["ponta."]}
          >
            Engenharia de ponta. Resultados reais.
          </SplitTextReveal>
        </div>

        <div ref={gridRef} className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BRAND_KEYWORDS.map((item) => {
            const Icon = icons[item.icon] ?? Lightbulb;
            return (
              <div key={item.key} className="tech-pillar glass-card-3d p-6">
                <div className="mb-4 inline-flex rounded-lg border border-hb-blue/15 bg-hb-blue/5 p-2.5 text-hb-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hb-text-dim">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee gap-4">
            {doubled.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="shrink-0 rounded-full border border-gray-200 bg-white px-5 py-2.5 font-mono text-xs font-medium text-hb-text-dim"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
