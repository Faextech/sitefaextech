import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { InstagramIcon } from "@/components/SocialIcons";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="vertical" className="mb-6" />
            <p className="text-sm leading-relaxed text-hb-text-muted">
              Conectamos tecnologia, estratégia e execução para criar soluções
              escaláveis e precisas para empresas B2B.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-hb-blue">Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-hb-text-muted transition-colors hover:text-hb-navy">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-hb-blue">Contato</h3>
            <ul className="space-y-3 text-sm text-hb-text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-hb-orange" />
                {SITE.address.full}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-hb-orange" />
                <a href={`mailto:${SITE.email}`} className="hover:text-hb-navy">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-hb-orange" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-hb-navy">{SITE.phoneDisplay}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-hb-orange">Instagram</h3>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram 3 HouseHub"
              className="inline-flex items-center gap-2 text-sm text-hb-text-muted transition-all hover:text-hb-orange"
            >
              <InstagramIcon className="h-4 w-4" />
              @3househub
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-hb-text-dim">
          © {year} {SITE.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
