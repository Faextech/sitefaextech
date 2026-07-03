"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { EASE_APPLE } from "@/lib/animations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHeroPage = pathname === "/" || pathname === "/sob-medida";
  const hideOnHero = isHeroPage && !visible;
  const showBar = visible || !isHeroPage;

  useEffect(() => {
    if (!isHeroPage) {
      setVisible(true);
      return;
    }

    const fn = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };

    fn();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
    };
  }, [isHeroPage]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {hideOnHero && (
        <button
          type="button"
          className="fixed right-4 top-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-foreground shadow-md backdrop-blur-xl transition hover:bg-white sm:right-6"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          hideOnHero && "pointer-events-none -translate-y-full opacity-0",
          showBar &&
            !hideOnHero &&
            "border-b border-gray-100 bg-white/95 shadow-[0_1px_0_rgba(12,22,41,0.04)] backdrop-blur-xl"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative z-10 shrink-0 transition-opacity hover:opacity-90"
          >
            <Logo size="xl" />
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn("nav-link", pathname === href && "active")}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contato" variant="ghost">
              Contato
            </Button>
          </div>

          <button
            type="button"
            className="relative z-10 rounded-lg p-2 text-foreground md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_APPLE }}
              className={cn(
                "fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm",
                !hideOnHero && "md:hidden"
              )}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: EASE_APPLE }}
              className={cn(
                "fixed inset-y-0 right-0 z-[80] flex w-80 max-w-[85vw] flex-col border-l border-gray-200 bg-white p-6",
                !hideOnHero && "md:hidden"
              )}
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo size="lg" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-xl px-4 py-3.5 text-lg font-medium transition-colors",
                    pathname === href
                      ? "bg-hb-blue/5 text-hb-blue"
                      : "text-hb-text-muted hover:bg-gray-100 hover:text-hb-navy"
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-auto pt-6">
                <Button href="/contato" className="w-full justify-center">
                  Contato
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
