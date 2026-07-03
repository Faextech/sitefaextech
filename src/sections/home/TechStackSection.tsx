import SectionReveal from "@/components/SectionReveal";
import { TECH_STACK } from "@/lib/constants";

export default function TechStackSection() {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="border-y border-gray-100 bg-white py-16 md:py-20">
      <SectionReveal className="mb-10 text-center">
        <div className="section-badge mb-4">Stack</div>
        <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
          Tecnologias que usamos
        </h2>
        <p className="mt-3 text-sm text-hb-text-muted">
          As ferramentas mais modernas para soluções eficientes e escaláveis
        </p>
      </SectionReveal>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-marquee gap-6">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 rounded-lg border border-gray-200 bg-white px-6 py-3 font-mono text-sm font-medium text-hb-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
