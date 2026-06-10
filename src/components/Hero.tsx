import { ArrowRight, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";
import DashboardPreview from "./DashboardPreview";
import { SITE, COMPANY_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-faex-navy pt-20"
    >
      <TechBackground variant="hero" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AnimateOnScroll>
              <div className="section-badge mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Empresa de Tecnologia & Inovação
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-faex-text sm:text-5xl lg:text-[3.25rem]">
                {SITE.headline.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="text-gradient">
                  {SITE.headline.split(" ").slice(2).join(" ")}
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-faex-text-muted">
                Criamos soluções inteligentes para empresas que querem crescer —
                desenvolvimento de software, automação, IA, integrações e gestão.
                Do site institucional ao sistema complexo de operação.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-faex-orange to-faex-orange-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-faex-orange/25 transition-all duration-300 hover:shadow-faex-orange/40"
                >
                  Nossas Soluções
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-lg border border-faex-blue/40 bg-faex-blue/5 px-8 py-3.5 text-base font-semibold text-faex-blue-bright transition-all duration-300 hover:border-faex-blue hover:bg-faex-blue/10"
                >
                  Fale com um Especialista
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {COMPANY_STATS.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl font-bold text-faex-text">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-faex-text-dim">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={200}>
            <div className="hidden lg:block">
              <DashboardPreview />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
