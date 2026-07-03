import type { Metadata } from "next";
import AbHeroSection from "@/sections/sob-medida/AbHeroSection";
import PainSection from "@/sections/sob-medida/PainSection";
import BenefitsSection from "@/sections/sob-medida/BenefitsSection";
import CasesSection from "@/sections/home/CasesSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import AbProcessSection from "@/sections/sob-medida/AbProcessSection";
import IntegrationSection from "@/sections/home/IntegrationSection";
import TechnologyGridSection from "@/sections/home/TechnologyGridSection";
import HomeCtaSection from "@/sections/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Software Sob Medida",
  description:
    "Sua empresa cresceu. Seus sistemas não acompanharam. A 3 HouseHub constrói a tecnologia que sua operação precisa — sob medida, do zero.",
  robots: { index: false, follow: false },
};

export default function SobMedidaPage() {
  return (
    <>
      <AbHeroSection />
      <PainSection />
      <BenefitsSection />
      <CasesSection />
      <TestimonialsSection />
      <AbProcessSection />
      <IntegrationSection />
      <TechnologyGridSection />
      <HomeCtaSection />
    </>
  );
}
