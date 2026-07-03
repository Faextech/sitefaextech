import { Check } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { PROBLEM_BULLETS } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Solução genérica{" "}
            <span className="headline-accent">não entende</span> seu negócio?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-hb-text-muted">
            Toda empresa tem sua própria forma de trabalhar. A 3 HouseHub modela
            tecnologia à sua realidade — não o contrário.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <ul className="mt-12 space-y-4 text-left md:mx-auto md:max-w-xl">
            {PROBLEM_BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-hb-orange" />
                <span className="font-medium text-hb-text-muted">{bullet}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
