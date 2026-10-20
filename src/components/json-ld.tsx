import { getDictionary } from "@/lib/i18n";

interface JsonLdProps {
  locale?: "es" | "en";
}

export function JsonLd({ locale = "es" }: JsonLdProps) {
  const t = getDictionary(locale);
  const isEn = locale === "en";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Redi Networking",
    legalName: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
    url: isEn ? "https://redinetworking.com/en" : "https://redinetworking.com",
    logo: "https://redinetworking.com/images/logo.jpg",
    email: "hi@cellartech.net",
    telephone: "+1-978-350-0663",
    sameAs: ["https://cellartech.net"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-978-350-0663",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English", "es", "en"],
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Redi Networking",
    operatingSystem: "WhatsApp, iOS, Android, Web",
    applicationCategory: "BusinessApplication",
    description: isEn
      ? "AI-powered WhatsApp copilot for business networking. Capture contacts via voice notes, receive follow-up reminders, and draft weekly 30-second elevator pitches."
      : "Copiloto inteligente de networking en WhatsApp para registrar contactos por voz, recibir recordatorios de seguimiento y generar pitches comerciales de 30 segundos.",
    offers: [
      {
        "@type": "Offer",
        name: isEn ? "Free Plan" : "Plan Gratuito",
        price: "0",
        priceCurrency: "MXN",
        description: isEn
          ? "20 lifetime contact connections with no credit card required."
          : "20 conexiones de por vida sin tarjeta de crédito.",
      },
      {
        "@type": "Offer",
        name: isEn ? "Monthly Pro Plan" : "Plan Pro Mensual",
        price: "199.00",
        priceCurrency: "MXN",
        description: isEn
          ? "Unlimited contacts, proactive reminders, and weekly pitch generator."
          : "Contactos ilimitados, recordatorios proactivos y generador de pitch semanal.",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Redi Networking",
    url: isEn ? "https://redinetworking.com/en" : "https://redinetworking.com",
    inLanguage: isEn ? "en-US" : "es-MX",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
