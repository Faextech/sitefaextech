import {
  Code2,
  Globe,
  Workflow,
  Plug,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const capabilities = [
  { icon: Code2, label: "Desenvolvimento", color: "#0570e8" },
  { icon: Globe, label: "Presença Digital", color: "#3b82f6" },
  { icon: Workflow, label: "Automação", color: "#a855f7" },
  { icon: Plug, label: "Integrações", color: "#8b5cf6" },
];

const flows = [
  { from: "Diagnóstico do negócio", to: "Solução projetada", color: "#0570e8" },
  { from: "Sistema desenvolvido", to: "Integrado ao ERP", color: "#8b5cf6" },
  { from: "Processo automatizado", to: "Dashboard atualizado", color: "#a855f7" },
  { from: "Operação em escala", to: "Evolução contínua", color: "#06b6d4" },
];

export default function Platform() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-faex-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <div>
              <div className="section-badge mb-4">Integração & Operação</div>
              <h2 className="text-3xl font-bold text-faex-text sm:text-4xl">
                Desenvolvemos, integramos e{" "}
                <span className="text-gradient">operamos</span>
              </h2>
              <p className="mt-4 text-lg text-faex-text-muted">
                Não entregamos apenas código. Conectamos sistemas, automatizamos
                processos e garantimos que a tecnologia funcione no dia a dia da
                sua empresa — com suporte e evolução contínua.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-faex-navy/50 p-4"
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${cap.color}20`, color: cap.color }}
                    >
                      <cap.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-faex-text">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="space-y-3">
              <div className="mb-4 flex items-center gap-2 text-sm text-faex-text-muted">
                <Workflow className="h-4 w-4 text-faex-blue-bright" />
                Da análise à operação em produção
              </div>

              {flows.map((flow, i) => (
                <div
                  key={flow.from}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-faex-navy/60 p-4"
                >
                  <div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: flow.color }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex flex-1 items-center gap-2 text-sm">
                    <span className="font-medium text-faex-text">{flow.from}</span>
                    <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-faex-text-dim" />
                    <span className="text-faex-text-muted">{flow.to}</span>
                  </div>
                  <div
                    className="h-2 w-2 animate-pulse-node rounded-full"
                    style={{ backgroundColor: flow.color }}
                  />
                </div>
              ))}

              <div className="mt-6 rounded-xl border border-white/5 bg-faex-navy/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-faex-text-muted">
                    <BarChart3 className="h-4 w-4 text-cyan-400" />
                    Resultados monitorados
                  </div>
                  <span className="text-xs text-green-400">● Live</span>
                </div>
                <div className="flex h-12 items-end gap-1.5">
                  {[35, 55, 40, 70, 50, 85, 65, 90, 75, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background:
                          i >= 7
                            ? "linear-gradient(to top, #06b6d4, #22d3ee)"
                            : "rgba(6, 182, 212, 0.25)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
