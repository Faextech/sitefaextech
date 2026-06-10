import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-faex-navy-light py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-badge mb-4">Como Atuamos</div>
            <h2 className="text-3xl font-bold text-faex-text sm:text-4xl lg:text-5xl">
              Analisamos seu negócio e{" "}
              <span className="text-gradient">criamos a tecnologia certa</span>
            </h2>
            <p className="mt-4 text-lg text-faex-text-muted">
              Não vendemos um produto pronto. Entendemos sua operação, identificamos
              oportunidades e desenvolvemos a solução ideal — de um site institucional
              a um ecossistema completo de gestão e automação.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <AnimateOnScroll key={step.step} delay={index * 100}>
              <div className="group relative h-full rounded-2xl border border-white/5 bg-faex-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-faex-blue/20">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl font-bold text-faex-blue/30">{step.step}</span>
                  <div className="rounded-xl bg-faex-blue/10 p-2.5 text-faex-blue-bright transition-colors group-hover:bg-faex-blue/20">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-faex-text">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-faex-text-muted">
                  {step.description}
                </p>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-gradient-to-r from-faex-blue/40 to-transparent lg:block" />
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
