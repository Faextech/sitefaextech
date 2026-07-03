import Image from "next/image";
import { cn } from "@/lib/utils";
import CaseBrandVisual from "@/components/CaseBrandVisual";
import type { SuccessCase } from "@/lib/cases";

export default function CaseCover({
  item,
  className,
  logoHeight,
  priority,
  sizes,
}: {
  item: SuccessCase;
  className?: string;
  logoHeight?: number;
  priority?: boolean;
  sizes?: string;
}) {
  if (item.brand) {
    return (
      <CaseBrandVisual
        brand={item.brand}
        className={className}
        logoHeight={logoHeight}
      />
    );
  }

  return (
    <div className={cn("relative h-full min-h-[240px]", className)}>
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        className="object-cover object-top"
        sizes={sizes ?? "100vw"}
        priority={priority}
      />
    </div>
  );
}
