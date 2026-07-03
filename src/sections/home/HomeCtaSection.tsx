"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { DigitalGrid } from "@/components/animations/ParallaxLayers";
import WhatsAppLink from "@/components/WhatsAppLink";
import Button from "@/components/Button";
import ContactForm from "@/sections/contato/ContactForm";
import { EASE_APPLE } from "@/lib/animations";

export default function HomeCtaSection() {
  const waMsg =
    "Olá! Quero simplificar minha operação com uma solução sob medida da 3 HouseHub.";

  return (
    <>
      <ScrollSection className="relative bg-white py-24 md:py-28">
        <DigitalGrid opacity={0.03} />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SplitTextReveal
            as="h2"
            triggerOnScroll
            className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-foreground"
            accentWords={["futuro."]}
          >
            Pronto para construir o futuro.
          </SplitTextReveal>

          <motion.p
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, ease: EASE_APPLE }}
            className="mx-auto mt-8 max-w-xl text-lg text-hb-text-muted"
          >
            Cada negócio tem sua forma única de funcionar.
            O próximo passo é conversar com a gente.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.08, ease: EASE_APPLE }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <WhatsAppLink
              message={waMsg}
              className="btn-minimal-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar conversa
            </WhatsAppLink>
            <Button href="#formulario" variant="ghost">
              Falar com especialista
            </Button>
          </motion.div>
        </div>
      </ScrollSection>

      <section
        id="formulario"
        className="relative border-t border-gray-100 bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="section-badge mb-6">Contato</div>
            <SplitTextReveal
              as="h2"
              triggerOnScroll
              className="text-3xl font-extrabold text-foreground md:text-4xl"
              accentWords={["projeto."]}
            >
              Vamos falar sobre seu projeto.
            </SplitTextReveal>
          </div>
          <div className="glass-card-3d p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
