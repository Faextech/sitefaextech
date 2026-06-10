"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";
import { CAPABILITIES } from "@/lib/constants";

export default function Ecosystem() {
  const [activeId, setActiveId] = useState("desenvolvimento");
  const active = CAPABILITIES.find((c) => c.id === activeId) ?? CAPABILITIES[0];

  return (
    <section id="capacidades" className="relative overflow-hidden bg-faex-navy py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-badge mb-4">Nossa Capacidade</div>
            <h2 className="text-3xl font-bold text-faex-text sm:text-4xl lg:text-5xl">
              Tudo que sua empresa precisa em{" "}
              <span className="text-gradient">um só parceiro</span>
            </h2>
            <p className="mt-4 text-lg text-faex-text-muted">
              Desenvolvemos, integramos e operamos soluções completas — do
              diagnóstico à entrega. Cada área abaixo representa uma frente real
              de atuação da Faex Tech.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                const isActive = activeId === cap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveId(cap.id)}
                    className={`group relative flex flex-col items-center gap-3 rounded-xl border p-4 transition-all duration-300 sm:p-5 ${
                      isActive
                        ? "border-transparent bg-faex-surface-2 shadow-lg"
                        : "border-white/5 bg-faex-surface/40 hover:border-white/10 hover:bg-faex-surface-2/60"
                    }`}
                    style={
                      isActive
                        ? { boxShadow: `0 0 30px ${cap.accentGlow}` }
                        : undefined
                    }
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
                      style={{
                        backgroundColor: isActive
                          ? `${cap.accent}25`
                          : "rgba(255,255,255,0.04)",
                        color: isActive ? cap.accent : "#64748b",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-center text-xs font-semibold leading-tight sm:text-sm ${
                        isActive ? "text-faex-text" : "text-faex-text-dim"
                      }`}
                    >
                      {cap.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="mx-auto mt-10 max-w-2xl rounded-2xl border p-6 transition-all duration-500 sm:p-8"
              style={{
                borderColor: `${active.accent}40`,
                background: `linear-gradient(135deg, ${active.accentGlow}, rgba(17,24,39,0.8))`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${active.accent}25`, color: active.accent }}
                >
                  <active.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-faex-text">{active.title}</h3>
                  <p className="mt-2 text-faex-text-muted">{active.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-white/10 bg-faex-navy/50 px-2.5 py-1 text-xs text-faex-text-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
