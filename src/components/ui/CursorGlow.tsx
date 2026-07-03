"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full",
        "bg-gradient-radial-purple opacity-[0.04] blur-3xl transition-transform duration-300 ease-out",
        "hidden lg:block"
      )}
      aria-hidden="true"
    />
  );
}
