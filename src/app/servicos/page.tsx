import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import SectionReveal, { StaggerGrid, StaggerItem } from "@/components/SectionReveal";
import Button from "@/components/Button";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Soluções completas da 3 HouseHub para inovação, integração e crescimento sustentável.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        badge="Serviços"
        title={<>Nossos <span className="headline-accent">Serviços</span></>}
        subtitle="Soluções completas para empresas que buscam inovação, integração e crescimento sustentável."
      />
      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.id}><ServiceCard {...s} /></StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>
      <section className="border-t border-gray-100 bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
              Tem uma necessidade <span className="headline-accent">específica</span>?
            </h2>
            <p className="mt-4 text-lg text-hb-text-muted">
              Nossa equipe está pronta para entender seu desafio e propor a melhor solução integrada.
            </p>
            <div className="mt-8"><Button href="/contato">Conversar com especialista</Button></div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
