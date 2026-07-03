"use client";

import { SITE } from "@/lib/constants";
import { trackContact } from "@/lib/meta-pixel";
import { cn } from "@/lib/utils";

type WhatsAppLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  message: string;
};

export default function WhatsAppLink({
  message,
  className,
  children,
  href: _href,
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (typeof window !== "undefined" && window.fbq) {
      event.preventDefault();
      trackContact(() => {
        window.open(href, "_blank", "noopener,noreferrer");
      });
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  );
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildContactWhatsAppMessage(form: {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const lines = [
    `Olá! Meu nome é ${form.name}.`,
    `E-mail: ${form.email}`,
  ];

  if (form.company.trim()) lines.push(`Empresa: ${form.company}`);
  if (form.phone.trim()) lines.push(`Telefone: ${form.phone}`);

  lines.push(`Assunto: ${form.subject}`, "", form.message);

  return lines.join("\n");
}
