"use client";

import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { DigitalGrid } from "@/components/animations/ParallaxLayers";
import { PROBLEM_BULLETS } from "@/lib/constants";

export default function VisionSection() {
  return (
    <ScrollSection className="relative bg-white py-20 md:py-24">
      <DigitalGrid opacity={0.05} />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="section-badge mb-5">Visão</div>

        <SplitTextReveal
          as="h2"
          triggerOnScroll
          className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-foreground"
          accentWords={["genérica", "entende"]}
        >
          Solução genérica não entende seu negócio.
        </SplitTextReveal>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-hb-text-muted">
          Toda empresa tem sua própria forma de operar. Nós modelamos tecnologia
          à sua realidade — não o contrário.
        </p>

        <div className="mt-10 grid gap-3 text-left md:grid-cols-3">
          {PROBLEM_BULLETS.map((bullet, i) => (
            <div key={bullet} className="glass-card-3d p-5">
              <span className="font-mono text-xs font-bold text-hb-blue">
                0{i + 1}
              </span>
              <p className="mt-2 text-sm font-medium leading-relaxed text-hb-text-muted">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
