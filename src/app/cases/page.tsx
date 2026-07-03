import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseCard from "@/components/CaseCard";
import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import Button from "@/components/Button";
import { SUCCESS_CASES } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases de Sucesso",
  description:
    "Conheça projetos reais da 3 HouseHub — da ideia de negócio à plataforma em produção, como a CIOT Express.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        badge="Cases de Sucesso"
        title={
          <>
            Projetos que{" "}
            <span className="headline-accent">transformamos</span> em realidade
          </>
        }
        subtitle="Da estratégia à execução — plataformas, integrações e soluções sob medida que resolvem problemas reais de negócio."
      />

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid gap-8 md:grid-cols-2">
            {SUCCESS_CASES.map((item) => (
              <StaggerItem key={item.slug}>
                <CaseCard case={item} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Quer ser o próximo{" "}
              <span className="headline-accent">case de sucesso</span>?
            </h2>
            <p className="mt-4 text-lg text-hb-text-muted">
              Conte seu desafio — ajudamos a estruturar a ideia, desenvolver a
              plataforma e colocar no ar.
            </p>
            <div className="mt-8">
              <Button href="/contato">Iniciar meu projeto</Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
