import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CaseBrand } from "@/lib/cases";

export default function CaseBrandLogo({
  brand,
  className,
  height = 40,
}: {
  brand: CaseBrand;
  className?: string;
  height?: number;
}) {
  const width = Math.round((brand.logoWidth / brand.logoHeight) * height);

  return (
    <Image
      src={brand.logo}
      alt={brand.logoAlt}
      width={width}
      height={height}
      className={cn("h-auto w-auto object-contain object-left", className)}
      style={{ maxHeight: height, width: "auto" }}
    />
  );
}
