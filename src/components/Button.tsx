"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  loading?: boolean;
}

const styles: Record<Variant, string> = {
  primary: "btn-primary",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-hb-blue px-6 py-3 text-sm font-bold text-white shadow-[0_8px_32px_rgba(30,91,170,0.4)] transition-all hover:scale-[1.03]",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const cls = cn(styles[variant], className, (disabled || loading) && "pointer-events-none opacity-60");

  const motionProps = {
    whileTap: { scale: disabled || loading ? 1 : 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.span {...motionProps} className="inline-flex">
        <Link href={href} className={cls}>{children}</Link>
      </motion.span>
    );
  }

  return (
    <motion.button className={cls} disabled={disabled || loading} {...motionProps} {...props}>
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Enviando...
        </>
      ) : children}
    </motion.button>
  );
}
