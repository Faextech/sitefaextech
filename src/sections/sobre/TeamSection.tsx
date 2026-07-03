import TeamCard from "@/components/TeamCard";
import SectionReveal from "@/components/SectionReveal";
import { TEAM } from "@/lib/team";

export default function TeamSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10 text-center">
          <div className="section-badge mb-4">Liderança</div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Quem está por trás da{" "}
            <span className="headline-accent">3 HouseHub</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-hb-text-muted">
            Tecnologia e estratégia comercial alinhadas para entregar soluções
            que funcionam na prática.
          </p>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <SectionReveal key={member.id} delay={i * 0.1}>
              <TeamCard {...member} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
