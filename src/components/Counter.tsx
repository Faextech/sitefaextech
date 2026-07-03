"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function CounterSimple({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toString();

  return (
    <span ref={ref} className="font-mono text-5xl font-extrabold md:text-6xl">
      <span className="text-gradient">{formatted}{suffix}</span>
    </span>
  );
}
