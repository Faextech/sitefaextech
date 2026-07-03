"use client";

import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import TechCard3D from "@/components/ui/TechCard3D";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <ScrollSection className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="section-badge mb-6">Depoimentos</div>
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-foreground"
            accentWords={["confiam."]}
          >
            Quem confia.
          </SplitTextReveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <TechCard3D
              key={t.name}
              title={t.name}
              description={`"${t.text}"`}
              index={i}
              className="[&_h3]:text-base [&_h3]:font-semibold [&_p]:text-hb-text-muted [&_p]:italic"
            />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
