"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_APPLE } from "@/lib/animations";

type TechCard3DProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
  className?: string;
};

export default function TechCard3D({
  title,
  description,
  icon,
  index = 0,
  className,
}: TechCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`;

    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(124,58,237,0.12), transparent 60%)`;
    }
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (card) {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: EASE_APPLE }}
      className={cn("group", className)}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="glass-card-3d relative h-full cursor-default p-6 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        />
        {icon && (
          <div className="mb-6 inline-flex rounded-xl border border-hb-blue/15 bg-hb-blue/5 p-3 text-hb-blue">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-hb-text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
