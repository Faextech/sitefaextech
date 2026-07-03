"use client";

import { Rocket, Briefcase, TrendingUp, Sparkles, type LucideIcon } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import TechBackground from "@/components/TechBackground";
import { TIMELINE } from "@/lib/team";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  briefcase: Briefcase,
  "trending-up": TrendingUp,
  sparkles: Sparkles,
};

export default function TimelineSection() {
  return (
    <section className="relative border-t border-gray-100 bg-white py-24 md:py-32">
      <TechBackground intensity="low" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-16 text-center">
          <div className="section-badge mb-4">Nossa História</div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Marcos da nossa <span className="headline-accent">jornada</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-hb-blue via-hb-orange to-hb-blue md:left-1/2" aria-hidden="true" />

          {TIMELINE.map((event, i) => {
            const Icon = icons[event.icon] ?? Rocket;
            const even = i % 2 === 0;
            return (
              <SectionReveal key={event.year} delay={i * 0.1}>
                <div className={`relative mb-12 flex gap-6 md:mb-16 ${even ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden flex-1 md:block" />
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-hb-orange/40 bg-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-5 w-5 text-hb-orange" />
                  </div>
                  <div className={`glow-card flex-1 p-6 ${even ? "md:text-right" : ""}`}>
                    <span className="font-mono text-sm font-bold text-hb-orange">{event.year}</span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="mt-2 text-sm text-hb-text-muted">{event.description}</p>
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
