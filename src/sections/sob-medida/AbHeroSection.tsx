"use client";

import { useRef } from "react";
import { ArrowDown, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { SITE } from "@/lib/constants";
import { AB_WHATSAPP_MESSAGE } from "@/lib/sob-medida";

export default function AbHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="intro"
      className="relative h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="hero-video-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Apresentação 3 HouseHub"
        >
          <source src={SITE.heroLaunchVideo} type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-white/20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-28 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass-badge mb-5">{SITE.shortName} — Software sob medida</div>

          <h1 className="hero-headline text-[clamp(1.875rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
            Sua empresa cresceu.{" "}
            <span className="hero-headline-accent">Seus sistemas não acompanharam.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-hb-text-muted sm:text-lg">
            A gente constrói a tecnologia que sua operação precisa — sob medida, do zero,
            sem amarras a software genérico.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppLink
              message={AB_WHATSAPP_MESSAGE}
              className="btn-minimal-primary text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um especialista
            </WhatsAppLink>
          </div>
        </div>
      </div>

      <a
        href="#dor"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-2 text-hb-navy/70 transition hover:text-hb-navy"
        aria-label="Rolar para o conteúdo"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-float" />
      </a>
    </section>
  );
}
