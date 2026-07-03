"use client";

import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { DigitalGrid } from "@/components/animations/ParallaxLayers";

export default function PainSection() {
  return (
    <ScrollSection id="dor" className="relative scroll-mt-20 bg-white py-20 md:py-24">
      <DigitalGrid opacity={0.05} />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="section-badge mb-5">O problema</div>

        <SplitTextReveal
          as="h2"
          triggerOnScroll
          className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-foreground"
          accentWords={["escala.", "serve."]}
        >
          Planilha não escala. Sistema genérico não serve.
        </SplitTextReveal>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-hb-text-muted sm:text-lg">
          Cada negócio opera de um jeito. Quando você tenta encaixar sua empresa em um
          software pronto, alguma coisa sempre fica faltando. A gente faz o caminho
          contrário: entende como você trabalha e constrói o sistema em volta disso.
        </p>
      </div>
    </ScrollSection>
  );
}
