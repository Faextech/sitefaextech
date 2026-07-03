import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} | ${SITE.headline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "3 HouseHub",
    "3HB",
    "integração de sistemas",
    "consultoria tecnológica",
    "desenvolvimento de software",
    "inteligência artificial",
    "automação",
    "B2B",
    "tecnologia",
  ],
  openGraph: {
    title: `${SITE.shortName} | ${SITE.headline}`,
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
    <html lang="pt-BR" className={exo2.variable}>
      <body className="min-h-screen bg-white font-sans antialiased text-foreground">
        <MetaPixel />
        <SmoothScrollProvider>
          <Header />
          <main className="bg-white">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
