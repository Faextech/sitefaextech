"use client";

import { motion } from "framer-motion";
import {
  Lightbulb, Puzzle, TrendingUp, Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  puzzle: Puzzle,
  "trending-up": TrendingUp,
  target: Target,
};

export default function DifferentialCard({
  title,
  description,
  icon,
  index = 0,
}: {
  title: string;
  description: string;
  icon: string;
  index?: number;
}) {
  const Icon = icons[icon] ?? Lightbulb;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glow-card group relative overflow-hidden p-8"
    >
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-hb-orange/5 blur-2xl transition-all group-hover:bg-hb-orange/10"
        aria-hidden="true"
      />
      <span className="font-mono text-xs font-bold text-hb-blue/60">0{index + 1}</span>
      <div className="relative mt-4 mb-5 inline-flex rounded-xl border border-hb-orange/20 bg-hb-orange/10 p-3.5 text-hb-orange shadow-[0_0_24px_rgba(255,90,31,0.15)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="relative text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-hb-text-muted">{description}</p>
      <div className="relative mt-5 h-px w-full bg-gradient-to-r from-hb-orange/40 via-hb-blue/20 to-transparent" />
    </motion.div>
  );
}
