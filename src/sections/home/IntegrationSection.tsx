"use client";

import Image from "next/image";
import { Check, Cloud, Code2, GitBranch } from "lucide-react";
import ScrollSection from "@/components/animations/ScrollSection";
import SplitTextReveal from "@/components/animations/SplitTextReveal";
import { INTEGRATION_FEATURES, INTEGRATION_IMAGES } from "@/lib/constants";

const tags = [
  { icon: GitBranch, label: "Integrações" },
  { icon: Cloud, label: "Cloud" },
  { icon: Code2, label: "APIs REST" },
];

export default function IntegrationSection() {
  return (
    <ScrollSection
      id="integracao"
      className="relative bg-white py-20 md:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="section-badge mb-5">Integração</div>
            <SplitTextReveal
              as="h2"
              triggerOnScroll
              className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-foreground"
              accentWords={["ecossistema."]}
            >
              Conectamos todo o seu ecossistema.
            </SplitTextReveal>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-hb-text-muted">
              ERP, CRM, financeiro, cloud e APIs conversando entre si — dados
              fluindo de ponta a ponta, sem planilhas paralelas.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-hb-blue/30 bg-hb-blue/10 px-3 py-1.5 text-xs font-semibold text-hb-blue-bright"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {INTEGRATION_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-hb-text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-hb-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-gray-200">
              <Image
                src={INTEGRATION_IMAGES[0].src}
                alt={INTEGRATION_IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-hb-navy shadow-sm">
                {INTEGRATION_IMAGES[0].label}
              </span>
            </div>

            {INTEGRATION_IMAGES.slice(1).map((img) => (
              <div
                key={img.label}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-hb-navy shadow-sm">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
