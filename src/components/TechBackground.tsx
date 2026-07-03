"use client";

export default function TechBackground({ intensity = "medium" }: { intensity?: "low" | "medium" | "high" }) {
  const opacity = intensity === "high" ? 0.08 : intensity === "medium" ? 0.05 : 0.03;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden="true">
      <div className="absolute inset-0 bg-tech-grid" style={{ opacity }} />
    </div>
  );
}
