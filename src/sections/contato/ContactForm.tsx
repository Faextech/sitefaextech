"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import SectionReveal from "@/components/SectionReveal";
import {
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/components/WhatsAppLink";
import { trackContact } from "@/lib/meta-pixel";

const SUBJECTS = [
  "Consultoria",
  "Integração de Sistemas",
  "Desenvolvimento",
  "Cloud & Escalabilidade",
  "Automação",
  "Suporte",
  "Outro",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", subject: SUBJECTS[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome é obrigatório";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.message.trim()) e.message = "Mensagem é obrigatória";
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);

    const url = buildWhatsAppUrl(buildContactWhatsAppMessage(form));
    setLastWhatsAppUrl(url);

    trackContact(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", company: "", phone: "", subject: SUBJECTS[0], message: "" });
    });
  }

  const inputCls =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-foreground placeholder:text-hb-text-dim transition-all focus:border-hb-orange/50 focus:outline-none focus:ring-2 focus:ring-hb-orange/20";

  return (
    <SectionReveal>
      <div className="glow-card p-8">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Envie sua mensagem</h2>
        <p className="mb-6 text-sm text-hb-text-muted">
          Você será redirecionado ao WhatsApp com sua mensagem pronta para enviar.
        </p>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-hb-orange/30 bg-hb-orange/10 p-6 text-center"
            >
              <p className="text-lg font-bold text-foreground">Abrindo WhatsApp...</p>
              <p className="mt-2 text-sm text-hb-text-muted">
                Se não abriu automaticamente, clique no botão abaixo.
              </p>
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  if (typeof window !== "undefined" && window.fbq) {
                    event.preventDefault();
                    trackContact(() => {
                      window.open(lastWhatsAppUrl, "_blank", "noopener,noreferrer");
                    });
                  }
                }}
                className="mt-4 inline-flex text-sm font-bold text-hb-orange hover:text-hb-navy"
              >
                Abrir WhatsApp
              </a>
              <button type="button" onClick={() => setSuccess(false)} className="mt-4 block w-full text-sm font-bold text-hb-text-muted hover:text-hb-navy">
                Enviar nova mensagem
              </button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-hb-text-muted">Nome *</label>
                  <input id="name" className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-hb-text-muted">E-mail *</label>
                  <input id="email" type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-hb-text-muted">Empresa</label>
                  <input id="company" className={inputCls} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Sua empresa" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-hb-text-muted">Telefone</label>
                  <input id="phone" type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-hb-text-muted">Assunto</label>
                <select id="subject" className={inputCls} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-hb-text-muted">Mensagem *</label>
                <textarea id="message" rows={5} className={inputCls} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Como podemos ajudar?" />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>
              <Button type="submit" loading={loading}>Enviar via WhatsApp</Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  );
}
