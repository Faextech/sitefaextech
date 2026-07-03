"use client";

import { GitMerge, Settings, Brain, type LucideIcon } from "lucide-react";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import TechCard3D from "@/components/ui/TechCard3D";
import { WHY_CHOOSE } from "@/lib/constants";

const icons: Record<string, LucideIcon> = {
  "git-merge": GitMerge,
  settings: Settings,
  brain: Brain,
};

export default function CapabilitiesSection() {
  return (
    <ScrollSection id="capacidades" className="relative bg-white py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="section-badge mb-4">Capacidades</div>
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-tight text-foreground"
            accentWords={["HouseHub"]}
          >
            Por que a 3 HouseHub é diferente.
          </SplitTextReveal>
          <p className="mx-auto mt-4 max-w-xl text-hb-text-muted">
            Inteligência aplicada, integração real e software que se adapta
            ao seu jeito de operar.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = icons[item.icon] ?? GitMerge;
            return (
              <TechCard3D
                key={item.title}
                title={item.title}
                description={item.description}
                icon={<Icon className="h-6 w-6" />}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </ScrollSection>
  );
}
