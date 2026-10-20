import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FirebaseAnalytics } from "@/components/firebase-analytics";
import { JsonLd } from "@/components/json-ld";

export const viewport: Viewport = {
  themeColor: "#060d1a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Redi Networking | Tu Copiloto de IA en WhatsApp",
  description:
    "Nunca más pierdas una oportunidad después de tus reuniones de negocios. Registra contactos dictando notas de voz, recibe recordatorios automáticos de compromisos y genera tu pitch de 30 segundos en WhatsApp.",
  keywords: [
    "copiloto de networking",
    "networking empresarial",
    "asistente ia whatsapp",
    "crm whatsapp inteligencia artificial",
    "seguimiento de prospectos whatsapp",
    "bni pitch semanal",
    "recordatorios de reuniones whatsapp",
    "notas de voz crm",
    "red de contactos profesional",
    "automatizacion de ventas whatsapp",
    "cierre de negocios networking",
    "asistente comercial whatsapp",
  ],
  authors: [{ name: "Redi Networking", url: "https://redinetworking.com" }],
  creator: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
  publisher: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
  metadataBase: new URL("https://redinetworking.com"),
  alternates: {
    canonical: "https://redinetworking.com",
    languages: {
      "es-MX": "https://redinetworking.com",
      "es": "https://redinetworking.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://redinetworking.com",
    siteName: "Redi Networking",
    title: "Redi Networking | Tu Copiloto con IA en WhatsApp",
    description:
      "Nunca más pierdas una oportunidad después de tus reuniones de negocios. Dicta notas de voz al salir de tus citas, recibe recordatorios automáticos y prepara tu pitch de 30 segundos en WhatsApp.",
    images: [
      {
        url: "https://redinetworking.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Redi Networking - Copiloto de Inteligencia Artificial en WhatsApp para Reuniones de Negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redi Networking | Tu Copiloto con IA en WhatsApp",
    description:
      "Nunca más pierdas una oportunidad después de tus reuniones de negocios. Registra contactos con notas de voz y prepara tu pitch de networking en WhatsApp.",
    images: ["https://redinetworking.com/images/og-image.jpg"],
    creator: "@cellartech",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <JsonLd />
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
