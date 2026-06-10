"use client";

import { useState, type FormEvent } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import TechBackground from "./TechBackground";
import { SITE } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Nome é obrigatório";
  else if (data.name.trim().length < 2) errors.name = "Nome muito curto";
  if (!data.email.trim()) errors.email = "E-mail é obrigatório";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "E-mail inválido";
  if (!data.phone.trim()) errors.phone = "Telefone é obrigatório";
  else if (data.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Telefone inválido";
  if (!data.message.trim()) errors.message = "Mensagem é obrigatória";
  else if (data.message.trim().length < 10)
    errors.message = "Mensagem muito curta";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(validationErrors).length === 0) {
      const msg = encodeURIComponent(
        `Olá! Meu nome é ${form.name}.\n\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\nMensagem: ${form.message}`
      );
      window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTouched({});
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border bg-faex-navy/60 px-4 py-3 text-faex-text placeholder:text-faex-text-dim transition-colors focus:outline-none focus:ring-2 focus:ring-faex-blue/30 ${
      touched[field] && errors[field]
        ? "border-red-500/50"
        : "border-white/10 focus:border-faex-blue/50"
    }`;

  return (
    <section id="contato" className="relative overflow-hidden bg-faex-navy-light py-24 lg:py-32">
      <TechBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-badge mb-4">Contato</div>
            <h2 className="text-3xl font-bold text-faex-text sm:text-4xl">
              Vamos construir sua{" "}
              <span className="text-gradient">operação digital</span>
            </h2>
            <p className="mt-4 text-lg text-faex-text-muted">
              Fale com nossos especialistas e descubra qual combinação de
              módulos é ideal para o seu negócio.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll delay={100}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {(["name", "email", "phone"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="mb-1.5 block text-sm font-medium text-faex-text-muted"
                  >
                    {field === "name"
                      ? "Nome"
                      : field === "email"
                        ? "E-mail"
                        : "Telefone"}
                  </label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    value={form[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    onBlur={() => handleBlur(field)}
                    className={inputClass(field)}
                    placeholder={
                      field === "name"
                        ? "Seu nome completo"
                        : field === "email"
                          ? "seu@email.com"
                          : "(41) 99999-9999"
                    }
                  />
                  {touched[field] && errors[field] && (
                    <p className="mt-1 text-sm text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-faex-text-muted">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Quais módulos você precisa? Como é sua operação?"
                />
                {touched.message && errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-faex-orange to-faex-orange-bright px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-faex-orange/20 transition-all hover:shadow-faex-orange/40 sm:w-auto"
              >
                <Send className="h-5 w-5" />
                Enviar Mensagem
              </button>

              {submitted && (
                <p className="text-sm font-medium text-green-400">
                  Mensagem enviada! Redirecionando ao WhatsApp...
                </p>
              )}
            </form>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: SITE.whatsappDisplay,
                  href: `https://wa.me/${SITE.whatsapp}`,
                },
                {
                  icon: MapPin,
                  label: "Edifício Espanha",
                  value: SITE.address,
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map((item) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-faex-surface/40 p-5 transition-all hover:border-white/10">
                    <div className="rounded-lg bg-faex-blue/10 p-3 text-faex-blue-bright">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-faex-text">{item.label}</p>
                      <p className="text-sm text-faex-text-muted">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <div className="overflow-hidden rounded-2xl border border-white/5 shadow-lg">
                <iframe
                  title="Faex Tech — Edifício Espanha, Centro, Pinhais, PR"
                  src={`https://maps.google.com/maps?q=${SITE.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="280"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
