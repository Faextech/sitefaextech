"use client";

import SectionReveal from "@/components/SectionReveal";
import TechBackground from "@/components/TechBackground";

export default function PageHero({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <TechBackground intensity="low" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {badge && <div className="section-badge mb-6">{badge}</div>}
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-hb-text-muted">{subtitle}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
