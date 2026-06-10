import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src="/logo-faex.png"
        alt="Faex Tech"
        width={160}
        height={48}
        className={`h-9 w-auto object-contain object-left ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src="/logo-faex.png"
      alt="Faex Tech"
      width={200}
      height={56}
      className={`h-10 w-auto object-contain object-left sm:h-11 ${className}`}
      priority
    />
  );
}
