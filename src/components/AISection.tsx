import { Brain, Bot, Sparkles, Zap, Code2, Lightbulb } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";

const aiFeatures = [
  {
    icon: Lightbulb,
    title: "IA Aplicada ao Negócio",
    description:
      "Inteligência artificial integrada aos seus processos para decisões mais rápidas e operação inteligente.",
    color: "#ec4899",
  },
  {
    icon: Bot,
    title: "Agentes Autônomos",
    description:
      "Agentes de IA que atendem, executam tarefas e qualificam demandas 24 horas por dia.",
    color: "#f472b6",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description:
      "Fluxos que aprendem com dados e otimizam processos automaticamente.",
    color: "#a855f7",
  },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-faex-navy-light py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-2xl" />
              <div className="glass-card relative overflow-hidden rounded-2xl p-6">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                    <Brain className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-faex-text">IA Faex Tech</p>
                    <p className="text-xs text-faex-text-dim">Análise em tempo real</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-pink-400" />
                    <span className="text-xs text-pink-400">Ativo</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-lg bg-faex-navy/60 p-3">
                    <p className="text-xs text-faex-text-dim">Demanda do cliente</p>
                    <p className="mt-1 text-sm text-faex-text-muted">
                      &quot;Preciso automatizar o onboarding de novos clientes no portal&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
                    <Bot className="h-4 w-4 text-pink-400" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
                  </div>

                  <div className="rounded-lg border border-pink-500/20 bg-pink-500/5 p-3">
                    <p className="text-xs font-medium text-pink-400">Análise & Recomendação</p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-faex-text-dim">Solução</span>
                        <span className="text-faex-text">Automação + Portal</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-faex-text-dim">Complexidade</span>
                        <span className="font-bold text-green-400">Média</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-faex-text-dim">Entrega estimada</span>
                        <span className="text-faex-text">3-4 semanas</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-faex-blue/10 p-3">
                    <p className="text-xs text-faex-blue-bright">Projeto iniciado</p>
                    <p className="mt-1 text-sm text-faex-text-muted">
                      Desenvolvimento de fluxo automatizado com agente de IA integrado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div>
              <div className="section-badge mb-4">Inteligência Artificial</div>
              <h2 className="text-3xl font-bold text-faex-text sm:text-4xl">
                Inovação que{" "}
                <span className="text-gradient">acelera resultados</span>
              </h2>
              <p className="mt-4 text-lg text-faex-text-muted">
                Desenvolvemos e integramos IA e agentes autônomos em qualquer
                solução — seja um portal, um sistema de gestão ou uma automação
                de processos. Tecnologia inteligente como parte do que construímos.
              </p>

              <div className="mt-8 space-y-4">
                {aiFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-faex-surface/40 p-4 transition-colors hover:border-white/10"
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${feature.color}18`,
                        color: feature.color,
                      }}
                    >
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-faex-text">{feature.title}</h3>
                      <p className="mt-1 text-sm text-faex-text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-pink-500/40"
              >
                <Code2 className="h-4 w-4" />
                Solicitar Projeto com IA
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
