"use client";

import Link from "next/link";
import { GitMerge, Settings, Brain, type LucideIcon } from "lucide-react";
import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import { WHY_CHOOSE } from "@/lib/constants";

const icons: Record<string, LucideIcon> = {
  "git-merge": GitMerge,
  settings: Settings,
  brain: Brain,
};

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-16 text-center">
          <div className="section-badge mb-4">Diferenciais</div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
            Por que escolher a{" "}
            <span className="headline-accent">3 HouseHub</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-2xl font-bold text-hb-orange">
            + de 150 empresas confiam no nosso trabalho
          </p>
        </SectionReveal>

        <StaggerGrid className="grid gap-8 md:grid-cols-3">
          {WHY_CHOOSE.map((item) => {
            const Icon = icons[item.icon] ?? GitMerge;
            return (
              <StaggerItem key={item.title}>
                <div className="glow-card flex h-full flex-col p-8">
                  <div className="mb-5 inline-flex rounded-xl border border-hb-orange/20 bg-hb-orange/10 p-3 text-hb-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-hb-text-muted">
                    {item.description}
                  </p>
                  <Link
                    href="/contato"
                    className="mt-6 inline-flex text-sm font-bold text-hb-orange transition-colors hover:text-hb-navy"
                  >
                    {item.cta} →
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
