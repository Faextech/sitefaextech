"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/5 bg-faex-navy/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#home" className="flex-shrink-0" onClick={closeMenu}>
          <Logo size="xl" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-faex-text-muted transition-colors duration-300 hover:bg-white/5 hover:text-faex-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-lg bg-gradient-to-r from-faex-orange to-faex-orange-bright px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-faex-orange/20 transition-all duration-300 hover:shadow-faex-orange/40 lg:inline-block"
        >
          Solicitar Orçamento
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-faex-text transition-colors hover:bg-white/5 lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[88px] z-40 border-t border-white/5 bg-faex-navy/98 backdrop-blur-xl sm:top-[104px] lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-base font-medium text-faex-text-muted transition-colors hover:bg-white/5 hover:text-faex-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={closeMenu}
              className="mt-4 rounded-lg bg-gradient-to-r from-faex-orange to-faex-orange-bright px-4 py-3 text-center text-base font-semibold text-white"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
