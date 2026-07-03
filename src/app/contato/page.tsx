import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/sections/contato/ContactForm";
import ContactInfo from "@/sections/contato/ContactInfo";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a 3 HouseHub e descubra como podemos ajudar sua empresa.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        badge="Contato"
        title={<>Entre em <span className="headline-accent">Contato</span></>}
        subtitle="Fale com nossa equipe e descubra como a 3HB pode ajudar sua empresa."
      />
      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
