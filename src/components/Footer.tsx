import Logo from "./Logo";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-faex-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-faex-text-muted">
              Empresa de tecnologia do {SITE.groupName}, especializada em gestão,
              automação e desenvolvimento de soluções integradas. Transformamos
              processos em tecnologia para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-faex-text-dim">
              Navegação
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-faex-text-muted transition-colors hover:text-faex-blue-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-faex-text-dim">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-faex-text-muted">
              <li>{SITE.whatsappDisplay}</li>
              <li>{SITE.email}</li>
              <li>{SITE.addressShort}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-faex-text-dim">
            &copy; {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-faex-text-dim">
            <a href="#" className="transition-colors hover:text-faex-blue-bright">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-faex-blue-bright">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
