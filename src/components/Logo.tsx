import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "horizontal" | "vertical" | "icon";

const ICON_CLASSES = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
  xl: "h-16 w-16",
} as const;

type IconSize = keyof typeof ICON_CLASSES;

export function LogoIcon({
  className,
  size = "md",
}: {
  className?: string;
  size?: IconSize;
}) {
  return (
    <Image
      src="/logo-icon.png"
      alt=""
      width={728}
      height={638}
      className={cn("shrink-0 object-contain", ICON_CLASSES[size], className)}
      aria-hidden="true"
      priority
    />
  );
}

export default function Logo({
  variant = "horizontal",
  size = "md",
  onDark = false,
  className,
}: {
  variant?: Variant;
  size?: IconSize;
  onDark?: boolean;
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <div className={cn("inline-flex", className)} aria-label="3 HouseHub">
        <LogoIcon size={size === "md" ? "lg" : size} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div
        className={cn("inline-flex flex-col items-center gap-2", className)}
        aria-label="3 HouseHub"
      >
        <LogoIcon size="xl" />
        <span className="text-2xl font-extrabold tracking-tight text-hb-navy">
          3HB
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="3 HouseHub"
    >
      <LogoIcon size={size} />
      <span
        className={cn(
          "font-extrabold tracking-tight",
          onDark ? "text-white drop-shadow-sm" : "text-hb-navy",
          size === "xl" ? "text-2xl" : size === "lg" ? "text-xl" : "text-lg"
        )}
      >
        3HB
      </span>
    </div>
  );
}
