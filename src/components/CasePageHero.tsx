import SectionReveal from "@/components/SectionReveal";
import CaseBrandLogo from "@/components/CaseBrandLogo";
import TechBackground from "@/components/TechBackground";
import type { SuccessCase } from "@/lib/cases";

export default function CasePageHero({ item }: { item: SuccessCase }) {
  const primary = item.brand?.primary;

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      <TechBackground intensity="low" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div
            className="section-badge mb-6"
            style={primary ? { color: primary, borderColor: `${primary}33` } : undefined}
          >
            {item.category}
          </div>
          {item.brand ? (
            <CaseBrandLogo brand={item.brand} height={52} className="md:hidden" />
          ) : null}
          {item.brand ? (
            <CaseBrandLogo brand={item.brand} height={64} className="hidden md:block" />
          ) : (
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {item.client}
            </h1>
          )}
          <p
            className="mt-4 max-w-2xl text-xl font-semibold md:text-2xl"
            style={{ color: primary ?? "var(--hb-text-muted)" }}
          >
            {item.tagline}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-hb-text-muted">{item.description}</p>
        </SectionReveal>
      </div>
    </section>
  );
}
