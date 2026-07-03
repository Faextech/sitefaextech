"use client";

import { cn } from "@/lib/utils";

type ScrollSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function ScrollSection({
  children,
  className,
  id,
}: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      <div className="relative z-10">{children}</div>
    </section>
  );
}
