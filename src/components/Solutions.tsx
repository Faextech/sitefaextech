"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";
import { SOLUTIONS, SOLUTION_CATEGORIES, type SolutionCategory } from "@/lib/constants";

const ALL_CATEGORIES = "all" as const;
type Filter = typeof ALL_CATEGORIES | SolutionCategory;

export default function Solutions() {
  const [filter, setFilter] = useState<Filter>(ALL_CATEGORIES);

  const categories = Object.entries(SOLUTION_CATEGORIES) as [
    SolutionCategory,
    { label: string; color: string },
  ][];

  const filtered =
    filter === ALL_CATEGORIES
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.category === filter);

  return (
    <section id="solucoes" className="relative overflow-hidden bg-faex-navy-light py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-badge mb-4">Portfólio de Soluções</div>
            <h2 className="text-3xl font-bold text-faex-text sm:text-4xl lg:text-5xl">
              Do site institucional ao{" "}
              <span className="text-gradient">sistema complexo</span>
            </h2>
            <p className="mt-4 text-lg text-faex-text-muted">
              17 frentes de atuação para resolver qualquer desafio tecnológico do
              seu negócio. O CRM é uma das nossas soluções — não a única.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setFilter(ALL_CATEGORIES)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === ALL_CATEGORIES
                  ? "bg-faex-blue text-white shadow-lg shadow-faex-blue/25"
                  : "border border-white/10 bg-faex-surface/60 text-faex-text-muted hover:border-white/20"
              }`}
            >
              Todos
            </button>
            {categories.map(([key, { label, color }]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === key
                    ? "text-white shadow-lg"
                    : "border border-white/10 bg-faex-surface/60 text-faex-text-muted hover:border-white/20"
                }`}
                style={
                  filter === key
                    ? { backgroundColor: color, boxShadow: `0 4px 20px ${color}40` }
                    : undefined
                }
              >
                {label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof SOLUTIONS)[number];
  index: number;
}) {
  const Icon = solution.icon;

  return (
    <AnimateOnScroll delay={(index % 3) * 80}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-faex-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/10">
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${solution.accent}, transparent)`,
          }}
        />

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${solution.accent}18`,
                color: solution.accent,
              }}
            >
              <Icon className="h-5 w-5" />
            </div>
            {solution.metric && (
              <span
                className="rounded-full px-2.5 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: `${solution.accent}15`,
                  color: solution.accent,
                }}
              >
                {solution.metric}
              </span>
            )}
          </div>

          <span
            className="mt-4 text-xs font-semibold uppercase tracking-wider"
            style={{ color: solution.accent }}
          >
            {solution.categoryLabel}
          </span>

          <h3 className="mt-1 text-lg font-bold text-faex-text">{solution.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-faex-text-muted">
            {solution.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {solution.features.map((f) => (
              <span
                key={f}
                className="rounded-md border border-white/5 bg-faex-navy/50 px-2 py-0.5 text-[11px] text-faex-text-dim"
              >
                {f}
              </span>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: solution.accent }}
          >
            Saiba mais
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundColor: solution.accentGlow }}
        />
      </div>
    </AnimateOnScroll>
  );
}
