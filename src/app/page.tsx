import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import HeroIntroSection from "@/sections/home/HeroIntroSection";
import VisionSection from "@/sections/home/VisionSection";
import CapabilitiesSection from "@/sections/home/CapabilitiesSection";
import IntegrationSection from "@/sections/home/IntegrationSection";
import CasesSection from "@/sections/home/CasesSection";
import StatsSection from "@/sections/home/StatsSection";
import TechnologyGridSection from "@/sections/home/TechnologyGridSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import HomeCtaSection from "@/sections/home/HomeCtaSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroIntroSection />
      <VisionSection />
      <CapabilitiesSection />
      <IntegrationSection />
      <CasesSection />
      <StatsSection />
      <TechnologyGridSection />
      <ProcessSection />
      <TestimonialsSection />
      <HomeCtaSection />
    </>
  );
}
