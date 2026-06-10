"use client";

import {
  BarChart3,
  Code2,
  Workflow,
  Plug,
  Layers,
  TrendingUp,
  Globe,
} from "lucide-react";

const miniBars = [40, 65, 45, 80, 60, 90, 75, 55];

export default function DashboardPreview() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-faex-blue/20 to-faex-orange/20 blur-2xl" />

      <div className="glass-card relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/5 bg-faex-surface-2/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md bg-faex-navy/60 px-3 py-1 text-xs text-faex-text-muted">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            faextech.com.br/projetos
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-4">
          <div className="col-span-3 space-y-2">
            {[
              { icon: Layers, label: "Projetos", active: true },
              { icon: Code2, label: "Desenvolvimento", active: false },
              { icon: Workflow, label: "Automações", active: false },
              { icon: Plug, label: "Integrações", active: false },
              { icon: BarChart3, label: "Analytics", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs ${
                  item.active
                    ? "bg-faex-blue/20 text-faex-blue-bright"
                    : "text-faex-text-dim"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </div>
            ))}
          </div>

          <div className="col-span-9 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Projetos ativos", value: "12", change: "+3", color: "#0570e8" },
                { label: "Automações", value: "47", change: "+8", color: "#a855f7" },
                { label: "Integrações", value: "23", change: "+2", color: "#06b6d4" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-white/5 bg-faex-surface-2/60 p-2.5"
                >
                  <p className="text-[10px] text-faex-text-dim">{kpi.label}</p>
                  <p className="text-sm font-bold text-faex-text">{kpi.value}</p>
                  <p className="text-[10px] font-medium" style={{ color: kpi.color }}>
                    {kpi.change}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-white/5 bg-faex-surface-2/60 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] text-faex-text-muted">Entregas do mês</span>
                <TrendingUp className="h-3 w-3 text-green-400" />
              </div>
              <div className="flex h-16 items-end gap-1">
                {miniBars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === miniBars.length - 1
                          ? "linear-gradient(to top, #0570e8, #1a8cff)"
                          : "rgba(5, 112, 232, 0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                { text: "Portal corporativo — deploy concluído", time: "agora", dot: "#0570e8", icon: Globe },
                { text: "API integrada ao ERP do cliente", time: "2min", dot: "#8b5cf6", icon: Plug },
                { text: "Automação de onboarding ativada", time: "5min", dot: "#a855f7", icon: Workflow },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-md bg-faex-navy/40 px-2 py-1.5"
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: item.dot }}
                  />
                  <span className="flex-1 text-[10px] text-faex-text-muted">{item.text}</span>
                  <span className="text-[9px] text-faex-text-dim">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
