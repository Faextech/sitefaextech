import WhatsAppLink from "@/components/WhatsAppLink";
import Button from "@/components/Button";
import SectionReveal from "@/components/SectionReveal";
import { MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-tech-grid opacity-40" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-foreground md:text-5xl">
                Pronto para transformar sua{" "}
                <span className="text-gradient">operação</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-hb-text-muted">
                Entre em contato e descubra como a 3HB integra tecnologia e estratégia ao seu negócio.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppLink
                  message="Olá! Gostaria de conversar com a 3 HouseHub."
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
                </WhatsAppLink>
                <Button href="/contato" variant="outline">Fale conosco</Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
