"use client";

import { Eye, Heart, Target, type LucideIcon } from "lucide-react";
import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import TechBackground from "@/components/TechBackground";
import { MISSION_ITEMS } from "@/lib/team";

const icons: Record<string, LucideIcon> = { target: Target, eye: Eye, heart: Heart };

export default function MissionSection() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <TechBackground intensity="low" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid gap-6 md:grid-cols-3">
          {MISSION_ITEMS.map((item) => {
            const Icon = icons[item.icon] ?? Target;
            return (
              <StaggerItem key={item.title}>
                <div className="glow-card h-full p-8">
                  <div className="mb-4 inline-flex rounded-xl border border-hb-orange/20 bg-hb-orange/10 p-3 text-hb-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-hb-text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
