import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseBrand } from "@/lib/cases";

export default function CaseBrandVisual({
  brand,
  className,
  logoHeight = 56,
}: {
  brand: CaseBrand;
  tagline?: string;
  className?: string;
  logoHeight?: number;
}) {
  const displayHeight = logoHeight;
  const displayWidth = Math.round(
    (brand.logoWidth / brand.logoHeight) * displayHeight
  );

  return (
    <div
      className={cn(
        "flex h-full min-h-[200px] items-center justify-center bg-white px-6 py-10 md:px-10 md:py-12",
        className
      )}
    >
      <Image
        src={brand.logo}
        alt={brand.logoAlt}
        width={displayWidth}
        height={displayHeight}
        className="h-auto object-contain"
        style={{ width: `min(92%, ${displayWidth}px)` }}
        sizes={`${displayWidth}px`}
        priority
      />
    </div>
  );
}
