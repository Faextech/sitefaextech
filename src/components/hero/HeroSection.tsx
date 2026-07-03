"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] h-[100svh] min-h-[100dvh] w-full overflow-hidden bg-white"
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

      <Link
        href="/contato"
        className="absolute right-4 top-24 z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2.5 text-sm font-semibold text-hb-navy shadow-md backdrop-blur transition hover:bg-white sm:right-6 lg:top-28"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        Faça sua cotação
      </Link>

      <a
        href="#intro"
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
