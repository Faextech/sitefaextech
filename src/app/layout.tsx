import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.headline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Faex Tech",
    "desenvolvimento de software",
    "sistemas sob medida",
    "automação de processos",
    "inteligência artificial",
    "agentes de IA",
    "sites institucionais",
    "e-commerce",
    "landing pages",
    "CRM",
    "telefonia VoIP",
    "integrações",
    "Business Intelligence",
    "consultoria tecnológica",
    "soluções SaaS",
    "Pinhais",
    "Paraná",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} | ${SITE.headline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-faex-navy antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
