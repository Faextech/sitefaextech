import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import CasePageHero from "@/components/CasePageHero";
import CaseCover from "@/components/CaseCover";
import Button from "@/components/Button";
import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import CtaSection from "@/sections/home/CtaSection";
import { getCaseBySlug, getCaseSlugs } from "@/lib/cases";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return { title: "Case não encontrado" };

  return {
    title: `Case ${item.client}`,
    description: item.summary,
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const primary = item.brand?.primary;
  const accent = item.brand?.accent;

  return (
    <>
      <CasePageHero item={item} />

      <section className="border-t border-gray-100 bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-hb-text-muted transition-colors hover:text-hb-navy"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar aos cases
          </Link>

          <SectionReveal>
            <div className="glass-card-3d overflow-hidden">
              <CaseCover
                item={item}
                logoHeight={88}
                priority
                sizes="100vw"
                className="py-16 md:py-24"
              />
            </div>
          </SectionReveal>

          {item.website && (
            <SectionReveal className="mt-6">
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors"
                style={{
                  borderColor: accent ? `${accent}44` : undefined,
                  color: primary ?? undefined,
                }}
              >
                Visitar {item.client}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </SectionReveal>
          )}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <SectionReveal>
              <div className="section-badge mb-4">Desafio</div>
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                {item.challenge.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-hb-text-muted">
                {item.challenge.description}
              </p>
              <ul className="mt-6 space-y-3">
                {item.challenge.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-hb-text-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent ?? "var(--hb-orange)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="section-badge mb-4">Solução</div>
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                {item.solution.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-hb-text-muted">
                {item.solution.description}
              </p>
              <div className="mt-8 space-y-4">
                {item.solution.modules.map((mod, i) => (
                  <div
                    key={mod.title}
                    className="rounded-xl border border-gray-100 bg-hb-surface-2 p-5"
                  >
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: primary ?? "var(--hb-blue)" }}
                    >
                      Módulo {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-bold text-foreground">{mod.title}</h3>
                    <p className="mt-1 text-sm text-hb-text-muted">{mod.description}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-hb-surface-2 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12 text-center">
            <div className="section-badge mb-4">Nosso papel</div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
              O que a 3 HouseHub entregou
            </h2>
          </SectionReveal>

          <StaggerGrid className="mx-auto grid max-w-3xl gap-4">
            {item.ourRole.map((role) => (
              <StaggerItem key={role}>
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: accent ?? "var(--hb-orange)" }}
                  />
                  <p className="text-sm leading-relaxed text-hb-text-muted">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-12 text-center">
            <div className="section-badge mb-4">Resultados</div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
              Impacto do projeto
            </h2>
          </SectionReveal>

          <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {item.results.map((result) => (
              <StaggerItem key={result.label}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                  <p
                    className={cn("text-4xl font-extrabold", !accent && "text-gradient")}
                    style={accent ? { color: accent } : undefined}
                  >
                    {result.value}
                  </p>
                  <p className="mt-2 text-sm text-hb-text-muted">{result.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {item.testimonial && (
            <SectionReveal className="mt-16">
              <blockquote className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-hb-surface-2 p-8 text-center md:p-12">
                <p className="text-lg italic leading-relaxed text-foreground md:text-xl">
                  &ldquo;{item.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="font-bold text-foreground">
                      {item.testimonial.author}
                    </span>
                    <span className="mt-1 block text-sm text-hb-text-muted">
                      {item.testimonial.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </SectionReveal>
          )}
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="section-badge mb-4">Stack técnica</div>
            <div className="flex flex-wrap gap-3">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-hb-navy"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="mt-10 flex flex-wrap gap-4">
            <Button href="/contato">Quero um projeto assim</Button>
            {item.website && (
              <Button href={item.website} variant="outline">
                Visitar site do cliente
              </Button>
            )}
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
