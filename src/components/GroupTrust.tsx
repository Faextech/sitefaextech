import { Building2, FlaskConical } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import { GRUPO_FAEX, SITE } from "@/lib/constants";

export default function GroupTrust() {
  return (
    <section className="border-y border-white/5 bg-faex-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="overflow-hidden rounded-2xl border border-faex-blue/20 bg-gradient-to-br from-faex-blue/10 via-faex-surface/80 to-faex-orange/5">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-b border-white/5 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-faex-blue/30 bg-faex-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-faex-blue-bright">
                  <Building2 className="h-3.5 w-3.5" />
                  {SITE.groupName}
                </div>
                <h3 className="text-xl font-bold text-faex-text sm:text-2xl">
                  {GRUPO_FAEX.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-faex-text-muted sm:text-base">
                  {GRUPO_FAEX.description}
                </p>
              </div>

              <div className="p-8 lg:p-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-faex-orange/30 bg-faex-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-faex-orange-bright">
                  <FlaskConical className="h-3.5 w-3.5" />
                  Validação interna
                </div>
                <h3 className="text-xl font-bold text-faex-text sm:text-2xl">
                  {GRUPO_FAEX.testingTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-faex-text-muted sm:text-base">
                  {GRUPO_FAEX.testingDescription}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
