"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import Button from "@/components/Button";
import WhatsAppLink from "@/components/WhatsAppLink";
import { SITE } from "@/lib/constants";
import { EASE_APPLE } from "@/lib/animations";

export default function HeroIntroSection() {
  return (
    <section
      id="intro"
      className="relative scroll-mt-20 border-b border-gray-100 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.45, ease: EASE_APPLE }}
        >
          <div className="glass-badge mb-6">{SITE.shortName} — Software House</div>

          <SplitTextReveal
            as="h1"
            triggerOnScroll
            className="hero-headline text-[clamp(2.25rem,5.5vw,4.75rem)] font-extrabold leading-[1.06] tracking-tight text-foreground"
            accentWords={["empresariais."]}
            accentClassName="hero-headline-accent"
          >
            Construindo o futuro das operações empresariais.
          </SplitTextReveal>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hb-text-muted sm:text-xl">
            Desenvolvimento sob medida, inteligência artificial e automação
            para empresas que não aceitam o comum.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppLink
              message="Olá! Quero conhecer as soluções da 3 HouseHub."
              className="btn-minimal-primary text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar conversa
            </WhatsAppLink>
            <Button href="#capacidades" variant="ghost" className="text-base">
              Explorar experiência
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
