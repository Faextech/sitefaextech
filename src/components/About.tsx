import { Code2, Target, Layers, Shield } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";

const pillars = [
  {
    icon: Code2,
    title: "Desenvolvimento Completo",
    description:
      "Sites, sistemas, plataformas, apps e SaaS — construímos qualquer solução que seu negócio precisa.",
    color: "#0570e8",
  },
  {
    icon: Target,
    title: "Gestão Estratégica",
    description:
      "Mais que software: atuamos como braço tecnológico na gestão e evolução das suas operações.",
    color: "#6366f1",
  },
  {
    icon: Layers,
    title: "Soluções Integradas",
    description:
      "Automação, IA, telefonia, CRM e analytics conectados em um ecossistema coeso e escalável.",
    color: "#a855f7",
  },
  {
    icon: Shield,
    title: "Empresa Consolidada",
    description:
      "Parceiro de longo prazo com suporte dedicado, infraestrutura robusta e entregas comprovadas.",
    color: "#f58220",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-faex-navy py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <div>
              <div className="section-badge mb-4">Sobre a Faex Tech</div>
              <h2 className="text-3xl font-bold text-faex-text sm:text-4xl">
                Empresa de tecnologia{" "}
                <span className="text-gradient">especializada em resultados</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-faex-text-muted">
                A Faex Tech é uma empresa de tecnologia focada em gestão,
                automação e desenvolvimento de soluções integradas para negócios.
                Analisamos a operação de cada cliente e criamos a tecnologia
                necessária para resolver problemas e acelerar o crescimento.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-faex-text-muted">
                A Faex Tech faz parte do <strong className="text-faex-text">Grupo Faex</strong> —
                o que nos permite desenvolver, testar e operar tecnologia em
                ambientes reais antes de levar ao mercado. Desenvolvemos desde
                sites institucionais até sistemas complexos de gestão, automação,
                IA e comunicação corporativa.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <AnimateOnScroll key={pillar.title} delay={index * 80}>
                <div className="group h-full rounded-2xl border border-white/5 bg-faex-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                  <div
                    className="mb-4 inline-flex rounded-xl p-3"
                    style={{
                      backgroundColor: `${pillar.color}18`,
                      color: pillar.color,
                    }}
                  >
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-faex-text">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-faex-text-muted">
                    {pillar.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
