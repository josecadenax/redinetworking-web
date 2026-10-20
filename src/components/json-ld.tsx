export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Redi Networking",
    legalName: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
    url: "https://redinetworking.com",
    logo: "https://redinetworking.com/images/logo.jpg",
    email: "hi@cellartech.net",
    telephone: "+1-978-350-0663",
    sameAs: ["https://cellartech.net"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-978-350-0663",
      contactType: "customer service",
      availableLanguage: ["Spanish", "es"],
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Redi Networking",
    operatingSystem: "WhatsApp, iOS, Android, Web",
    applicationCategory: "BusinessApplication",
    description:
      "Copiloto inteligente de networking en WhatsApp para registrar contactos por voz, recibir recordatorios de seguimiento y generar pitches comerciales de 30 segundos.",
    offers: [
      {
        "@type": "Offer",
        name: "Plan Gratuito",
        price: "0",
        priceCurrency: "MXN",
        description: "20 conexiones de por vida sin tarjeta de crédito.",
      },
      {
        "@type": "Offer",
        name: "Plan Pro Mensual",
        price: "199.00",
        priceCurrency: "MXN",
        description: "Contactos ilimitados, recordatorios proactivos y generador de pitch semanal.",
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
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Necesito descargar alguna aplicación o registrarme en una web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Redi funciona 100% dentro de WhatsApp. Solo das clic en el botón de comenzar, le envías un mensaje y listo, tu copiloto está activo al instante sin descargar nada ni crear contraseñas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo registro a una persona después de una reunión de negocios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Al salir de tu reunión, solo abre el chat de Redi y mándale una nota de voz rápida. Redi transcribe, extrae los datos del contacto y agenda el recordatorio automáticamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo me recuerda mis acuerdos y promesas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Redi utiliza tecnología de calendario inteligente vinculada a WhatsApp. La mañana del día en que acordaste dar seguimiento, te enviará un mensaje directo con el nombre del contacto y la tarea pactada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona el generador de pitch semanal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si participas en grupos de networking empresarial (como BNI, cámaras de comercio o eventos de ventas), solo escríbele a Redi 'ayúdame con mi pitch'. Redi estructurará un guion contundente de 30 a 45 segundos con gancho, solución y la petición específica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Mis contactos y datos de clientes están seguros?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Totalmente. Tu libreta de contactos es estrictamente privada y está aislada bajo encriptación en la nube. Jamás compartimos ni vendemos tu directorio a terceros.",
        },
      },
      {
        "@type": "Question",
        name: "¿El precio del Plan Pro incluye IVA y emiten factura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo base es de $199.00 MXN mensuales más el 16% de IVA ($230.84 MXN en total). Puedes ingresar tu RFC y datos fiscales en Stripe para recibir automáticamente tu factura electrónica (CFDI) deducible emitida por CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo cancelo mi suscripción mensual si ya no la necesito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes cancelar en cualquier momento de forma 100% autoservicio y en 1 solo clic. Solo escríbele a Redi en WhatsApp 'cancelar suscripción' para recibir tu enlace privado de Stripe.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede con mis contactos guardados si decido cancelar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tus contactos, notas y acuerdos jamás se borran ni se pierden. Al concluir el ciclo pagado, tu información continúa segura y accesible en tu libreta de contactos sin costo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hay contratos de permanencia o plazos forzosos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ninguno. Redi Pro es un servicio mensual libre. Puedes probarlo el tiempo que lo necesites y pausar o cancelar cuando lo decidas sin penalización.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Redi Networking",
    url: "https://redinetworking.com",
    inLanguage: "es-MX",
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
