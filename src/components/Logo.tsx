import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 140, height: 40, className: "h-8" },
  md: { width: 180, height: 52, className: "h-9 sm:h-10" },
  lg: { width: 220, height: 64, className: "h-11 sm:h-12" },
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
