"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Compass, GitMerge, Code2, Cloud, Workflow, Headphones, Check, ArrowRight,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  compass: Compass,
  "git-merge": GitMerge,
  "code-2": Code2,
  cloud: Cloud,
  workflow: Workflow,
  headphones: Headphones,
};

export default function ServiceCard({
  title,
  description,
  icon,
  highlights,
}: {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}) {
  const Icon = icons[icon] ?? Compass;

  return (
    <motion.div whileHover={{ y: -8 }} className="glow-card group flex h-full flex-col overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-hb-blue via-hb-orange to-transparent" />
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-5 inline-flex rounded-xl border border-hb-blue/30 bg-hb-blue/10 p-3 text-hb-orange shadow-[0_0_20px_rgba(30,91,170,0.2)]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-hb-text-muted">{description}</p>
        <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-hb-text-muted">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-hb-orange" />
              {h}
            </li>
          ))}
        </ul>
        <Link
          href="/contato"
          className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-hb-orange transition-colors hover:text-hb-navy"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
