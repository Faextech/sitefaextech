"use client";

import { useRef, useState } from "react";
import { Play, Pause, MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import Button from "@/components/Button";
import TechBackground from "@/components/TechBackground";
import SectionReveal from "@/components/SectionReveal";
import { SITE } from "@/lib/constants";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  }

  const waMsg = "Olá! Gostaria de agendar um diagnóstico com a 3 HouseHub.";

  return (
    <section className="relative min-h-screen overflow-hidden pt-16 mesh-gradient">
      <TechBackground intensity="high" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionReveal>
              <div className="section-badge mb-6">3 HouseHub — Tecnologia B2B</div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                Integração e tecnologia{" "}
                <span className="headline-accent">sob medida</span>
                <br />
                para o seu jeito de operar
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-hb-text-muted">
                Transformamos ideias em sistemas que automatizam rotinas, integram áreas
                e aceleram decisões — com precisão e escalabilidade.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <WhatsAppLink
                  message={waMsg}
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </WhatsAppLink>
                <Button href="/contato" variant="outline">
                  Agendar diagnóstico
                </Button>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <div className="video-frame group relative aspect-video w-full">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={SITE.heroVideoPoster}
              >
                <source src={SITE.heroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-hb-navy-deep/60 via-transparent to-transparent" />
              <button
                type="button"
                onClick={togglePlay}
                className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-hb-navy/80 text-foreground backdrop-blur transition-all hover:scale-110 hover:border-hb-orange/50"
                aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-0.5" />}
              </button>
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-gray-200 bg-hb-navy/80 px-3 py-1.5 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-[10px] font-bold text-foreground">DEMO AO VIVO</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
