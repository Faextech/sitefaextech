import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import { DELIVERABLES } from "@/lib/constants";

export default function DeliverablesSection() {
  return (
    <section className="relative border-t border-gray-100 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-16 text-center">
          <div className="section-badge mb-4">Entregáveis</div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            O que você <span className="headline-accent">realmente recebe</span>
          </h2>
        </SectionReveal>

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glow-card h-full p-6">
                <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-hb-orange to-hb-blue" />
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hb-text-muted">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
