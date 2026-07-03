"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import CaseCover from "@/components/CaseCover";
import { SUCCESS_CASES } from "@/lib/cases";
import { EASE_APPLE } from "@/lib/animations";

export default function CasesSection() {
  const [active, setActive] = useState(0);
  const current = SUCCESS_CASES[active];
  const accent = current.brand?.accent ?? undefined;
  const primary = current.brand?.primary ?? undefined;

  return (
    <ScrollSection id="cases" className="relative bg-white py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="section-badge mb-6">Cases de Sucesso</div>
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-foreground"
            accentWords={["construímos."]}
          >
            O que construímos.
          </SplitTextReveal>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {SUCCESS_CASES.map((c, i) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "text-white"
                  : "border border-gray-200 text-hb-text-muted hover:border-hb-blue/30 hover:text-hb-navy"
              }`}
              style={
                active === i
                  ? { backgroundColor: c.brand?.primary ?? "var(--hb-navy)" }
                  : undefined
              }
            >
              {c.client}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_APPLE }}
            className="glass-card-3d overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2">
                <CaseCover
                  item={current}
                  logoHeight={64}
                  priority={active === 0}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="min-h-[240px] lg:min-h-[320px]"
                />
              </div>

              <div className="flex flex-col justify-center border-t border-gray-100 p-8 lg:col-span-3 lg:border-t-0 lg:border-l lg:p-12">
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: primary ?? "var(--hb-blue)" }}
                >
                  {current.category}
                </span>
                {current.brand ? (
                  <h3
                    className="mt-3 text-xl font-extrabold leading-snug lg:text-2xl"
                    style={{ color: primary }}
                  >
                    {current.client}
                  </h3>
                ) : (
                  <h3 className="mt-3 text-2xl font-extrabold text-foreground lg:text-3xl">
                    {current.client}
                  </h3>
                )}
                <p className="mt-4 text-base leading-relaxed text-hb-text-muted">
                  {current.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {current.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 text-sm text-hb-text-muted"
                    >
                      <Check
                        className="h-4 w-4 shrink-0"
                        style={{ color: accent ?? "var(--hb-orange)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/cases/${current.slug}`}
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-2.5"
                  style={{ color: accent ?? "var(--hb-orange)" }}
                >
                  Ver case completo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <Link
            href="/cases"
            className="text-sm font-bold text-hb-blue transition-colors hover:text-hb-navy"
          >
            Ver todos os cases →
          </Link>
        </div>
      </div>
    </ScrollSection>
  );
}
