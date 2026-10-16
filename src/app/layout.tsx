import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redi Networking | Tu Copiloto con IA en WhatsApp",
  description:
    "El asistente de networking inteligente para empresarios y profesionales. Registra contactos dictando notas de voz, recibe recordatorios de compromisos y prepara tu pitch comercial de 30 segundos en segundos.",
  keywords: [
    "networking",
    "copiloto de networking",
    "whatsapp bot empresarios",
    "asistente ia whatsapp",
    "bni pitch semanal",
    "seguimiento de contactos",
    "crm whatsapp inteligencia artificial",
  ],
  authors: [{ name: "Redi Networking", url: "https://redinetworking.com" }],
  creator: "Cellar Technologies",
  metadataBase: new URL("https://redinetworking.com"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://redinetworking.com",
    title: "Redi Networking | Tu Copiloto con IA en WhatsApp",
    description:
      "Registra contactos dictando notas de voz al salir de tus reuniones, recibe recordatorios automáticos y prepara tu pitch semanal para juntas comerciales.",
    siteName: "Redi Networking",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Redi Networking Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redi Networking | Copiloto con IA en WhatsApp",
    description:
      "Convierte reuniones en oportunidades. Registra contactos con notas de voz y prepara tu pitch de networking en WhatsApp.",
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
