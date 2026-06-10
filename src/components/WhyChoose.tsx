import {
  FlaskConical,
  Headphones,
  Settings,
  Cpu,
  Handshake,
  Code2,
  Building2,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const reasons = [
  {
    icon: Code2,
    title: "Desenvolvimento Completo",
    description:
      "Do site institucional ao sistema complexo — desenvolvemos qualquer solução que seu negócio precisa.",
    color: "#0570e8",
  },
  {
    icon: FlaskConical,
    title: "Testado no Grupo Faex",
    description:
      "Nenhuma solução vai ao mercado antes de ser validada intensamente nas empresas do Grupo Faex.",
    color: "#6366f1",
  },
  {
    icon: Building2,
    title: "Parte do Grupo Faex",
    description:
      "Estrutura empresarial consolidada com operações reais que sustentam nossa capacidade de inovação.",
    color: "#3b82f6",
  },
  {
    icon: Settings,
    title: "100% Personalizado",
    description:
      "Cada projeto é analisado e construído sob medida para a realidade do cliente.",
    color: "#a855f7",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description:
      "IA, automação, integrações e analytics com arquitetura moderna e escalável.",
    color: "#06b6d4",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description:
      "Equipe próxima que acompanha, opera e evolui a solução após a entrega.",
    color: "#22c55e",
  },
  {
    icon: Handshake,
    title: "Parceria de Longo Prazo",
    description:
      "Mais que fornecedor — parceiros estratégicos no crescimento do seu negócio.",
    color: "#f58220",
  },
];

export default function WhyChoose() {
  return (
    <section className="border-t border-white/5 bg-faex-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-badge mb-4">Diferenciais</div>
            <h2 className="text-3xl font-bold text-faex-text sm:text-4xl">
              Por que empresas escolhem a{" "}
              <span className="text-gradient">Faex Tech</span>
            </h2>
            <p className="mt-4 text-lg text-faex-text-muted">
              Uma empresa de tecnologia consolidada, capaz de desenvolver,
              integrar e operar soluções completas para qualquer negócio.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={reason.title} delay={index * 60}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/5 bg-faex-navy/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${reason.color}18`,
                    color: reason.color,
                  }}
                >
                  <reason.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-faex-text">{reason.title}</h3>
                  <p className="mt-1.5 text-sm text-faex-text-muted">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
