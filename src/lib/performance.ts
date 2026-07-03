"use client";

import { useEffect, useState } from "react";

export function getPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getIsLowPowerDevice() {
  if (typeof window === "undefined") return false;
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  return cores <= 4 || memory <= 4;
}

export function usePerformanceProfile() {
  const [profile, setProfile] = useState({
    reducedMotion: false,
    lowPower: false,
  });

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setProfile({
        reducedMotion: motion.matches,
        lowPower: getIsLowPowerDevice(),
      });
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  return profile;
}

export function useInViewPause(ref: React.RefObject<Element | null>, margin = "100px") {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: margin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin, ref]);

  return active;
}
