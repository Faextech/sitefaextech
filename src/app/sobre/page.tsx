import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MissionSection from "@/sections/sobre/MissionSection";
import TimelineSection from "@/sections/sobre/TimelineSection";
import TeamSection from "@/sections/sobre/TeamSection";
import CtaSection from "@/sections/home/CtaSection";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a 3 HouseHub — tecnologia, integração e soluções B2B escaláveis.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        badge="Sobre nós"
        title={<>Quem <span className="headline-accent">Somos</span></>}
        subtitle="Uma empresa de tecnologia apaixonada por resolver desafios complexos com soluções integradas."
      />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
