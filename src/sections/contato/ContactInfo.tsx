import { MapPin, Mail, Phone, Clock } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { InstagramIcon } from "@/components/SocialIcons";
import { SITE } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <SectionReveal delay={0.15}>
      <div className="space-y-6">
        <div className="glow-card p-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Informações</h2>
          <ul className="space-y-5">
            {[
              { icon: MapPin, label: "Endereço", value: SITE.address.full },
              { icon: Mail, label: "E-mail", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, label: "Telefone", value: SITE.phoneDisplay, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
              { icon: Clock, label: "Horário", value: SITE.hours },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-3">
                <div className="rounded-lg border border-hb-orange/20 bg-hb-orange/10 p-2">
                  <Icon className="h-4 w-4 text-hb-orange" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-hb-text-muted hover:text-hb-orange">{value}</a>
                  ) : (
                    <p className="text-sm text-hb-text-muted">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glow-card p-8">
          <h3 className="mb-4 font-bold text-foreground">Instagram</h3>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-hb-text-muted transition-colors hover:text-hb-orange"
          >
            <InstagramIcon className="h-4 w-4" />
            @3househub
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <iframe
            title="Localização 3 HouseHub"
            src={`https://maps.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
            className="h-56 w-full grayscale contrast-125 invert"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionReveal>
  );
}
