import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: { width: 180, height: 52, className: "h-10 sm:h-11" },
  md: { width: 240, height: 70, className: "h-12 sm:h-14" },
  lg: { width: 300, height: 88, className: "h-14 sm:h-16" },
  xl: { width: 380, height: 110, className: "h-16 sm:h-20 lg:h-24" },
} as const;

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  return (
    <Image
      src="/logo-faex.png"
      alt="Faex Tech"
      width={width}
      height={height}
      className={`w-auto object-contain object-left ${sizeClass} ${className}`}
      priority
    />
  );
}
