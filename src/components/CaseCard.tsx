"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import CaseCover from "@/components/CaseCover";
import type { SuccessCase } from "@/lib/cases";

export default function CaseCard({ case: item }: { case: SuccessCase }) {
  const accent = item.brand?.accent;
  const primary = item.brand?.primary;

  return (
    <Link
      href={`/cases/${item.slug}`}
      className="group glass-card-3d flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <CaseCover item={item} logoHeight={48} className="absolute inset-0 min-h-0" />
        {!item.brand && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-hb-navy backdrop-blur-sm">
            {item.category}
          </span>
        )}
        {item.brand && (
          <span
            className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
            style={{ color: primary }}
          >
            {item.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p
          className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: primary ?? "var(--hb-blue)" }}
        >
          {item.industry}
        </p>
        <h3
          className={cn(
            "mt-2 text-xl font-extrabold md:text-2xl",
            !primary && "text-foreground transition-colors group-hover:text-hb-blue"
          )}
          style={primary ? { color: primary } : undefined}
        >
          {item.client}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-hb-text-muted">
          {item.summary}
        </p>
        <span
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-all group-hover:gap-2.5"
          style={{ color: accent ?? "var(--hb-orange)" }}
        >
          Ver case completo
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
