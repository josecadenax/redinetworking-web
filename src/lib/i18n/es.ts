import { TranslationDictionary } from "./types";

export const es: TranslationDictionary = {
  locale: "es",
  whatsappUrl: "https://wa.me/19783500663?text=Hola%20Redi",
  nav: {
    howItWorks: "Cómo funciona",
    features: "Características",
    pricing: "Precios",
    faq: "Preguntas",
    cta: "Abrir WhatsApp",
  },
  hero: {
    badge: "Tu Copiloto Inteligente de Networking en WhatsApp",
    titlePart1: "Convierte tus reuniones de negocios en ",
    titleHighlight: "oportunidades reales.",
    description:
      "El asistente que vive en tu WhatsApp. Al salir de cada junta o evento de networking, dicta una nota de voz de 15 segundos y Redi extrae datos de tu contacto, programa recordatorios y redacta tu pitch comercial.",
    primaryCta: "Empezar Gratis en WhatsApp",
    phoneLabel: "Número oficial de WhatsApp: +1 (978) 350-0663",
    pills: [
      "🎙️ Dicta notas de voz al salir",
      "⏰ Recordatorios proactivos",
      "🎯 Pitch semanal de 30s",
    ],
  },
  mockup: {
    status: "en línea (+1 978 350 0663)",
    audioTitle: "Nota de voz (0:18)",
    audioTranscript:
      '"Desayuné con Santiago de LogiPack, hace importaciones a EE.UU. y busca maquiladoras. Quedé de llamarle el martes a las 9 am..."',
    botGreeting: "¡Listo! Guardé tu reunión con Santiago Mendoza",
    companyLabel: "Empresa:",
    companyVal: "LogiPack Internacional",
    specialtyLabel: "Especialidad:",
    specialtyVal: "Fletes y logística aduanal",
    idealClientLabel: "Cliente Ideal:",
    idealClientVal: "Empresas con exportación a EE.UU.",
    reminderLabel: "Recordatorio:",
    reminderVal: "Martes 9:00 AM para seguimiento.",
    scheduledNote: "Recordatorio agendado en WhatsApp",
    pitchPrompt: '"Ayúdame con mi pitch de 30 segundos"',
    pitchResponse: "🎯 Tu pitch semanal listo para BNI / networking:",
  },
  howItWorks: {
    badge: "Proceso Simple",
    title: "3 pasos para no volver a perder un contacto",
    subtitle:
      "Diseñado para profesionales ocupados que no tienen tiempo de llenar formularios lentos de CRM.",
    steps: [
      {
        step: "01",
        title: "Dicta tu nota de voz",
        desc: "Al salir de tu junta, restaurante o evento, abre WhatsApp y mándale un audio a Redi platicándole con quién te viste y a qué acuerdos llegaron.",
        tag: "15 segundos",
      },
      {
        step: "02",
        title: "Redi procesa y estructura",
        desc: "Nuestra Inteligencia Artificial extrae automáticamente el nombre, empresa, especialidad, acuerdos y la fecha pactada para tu siguiente contacto.",
        tag: "IA Inmediata",
      },
      {
        step: "03",
        title: "Recordatorios proactivos",
        desc: "La mañana de la fecha acordada, Redi te envía un mensaje directo recordándote qué prometiste hacer para que jamás quedes mal.",
        tag: "Seguimiento puntual",
      },
    ],
  },
  features: {
    badge: "Capacidades Clave",
    title: "Todo lo que necesitas para tu networking profesional",
    subtitle:
      "Herramientas diseñadas para cerrar más acuerdos comerciales sin la fricción de apps complejas.",
    cards: [
      {
        title: "Notas de Voz Inteligentes",
        desc: "Solo habla con naturalidad al salir de tus juntas. Redi procesa audios en español, transcribe y detecta compromisos automáticamente.",
        highlight: "Cero tecleo",
      },
      {
        title: "Recordatorios Proactivos",
        desc: "Recibe un mensaje en tu WhatsApp la mañana pactada para enviar una cotización, hacer una llamada o presentar a un colega.",
        highlight: "Puntualidad 100%",
      },
      {
        title: "Pitch Semanal de 30 Segundos",
        desc: "Pídele 'ayúdame con mi pitch' y redactará tu presentación semanal de networking con gancho, problema, solución y tu petición específica.",
        highlight: "Ideal para BNI",
      },
      {
        title: "Directorio Inteligente",
        desc: "Pregúntale a Redi por cualquier contacto: '¿quién hace empaques de cartón?' o '¿cuándo vi a Santiago?' y te responderá en segundos.",
        highlight: "Búsqueda semántica",
      },
      {
        title: "Privacidad y Seguridad",
        desc: "Tus contactos son estrictamente tuyos. Encriptación de nivel bancario bajo la infraestructura de AWS y Cellar Technologies.",
        highlight: "Datos protegidos",
      },
      {
        title: "100% en WhatsApp",
        desc: "Sin descargar apps adicionales, sin recordar contraseñas ni lidiar con interfaces pesadas de CRM tradicional.",
        highlight: "Fricción cero",
      },
    ],
  },
  pricing: {
    badge: "Precios Transparentes",
    title: "Invierte en tu red de contactos, sin plazos forzosos",
    subtitle:
      "Comienza 100% gratis con 20 conexiones. Si te ayuda a cerrar clientes, activa el Plan Pro.",
    freePlan: {
      title: "Plan Gratuito",
      subtitle: "Para probar el poder de Redi en tus próximas reuniones.",
      price: "$0",
      period: "de por vida",
      features: [
        "20 conexiones de contactos de por vida",
        "Registro con notas de voz y texto",
        "Recordatorios automáticos en WhatsApp",
        "Generador de pitch semanal",
        "100% en WhatsApp, sin apps externas",
      ],
      cta: "Probar Gratis",
    },
    proPlan: {
      badge: "Más Popular",
      title: "Plan Redi Pro",
      subtitle: "Para empresarios activos y líderes de networking.",
      price: "$199",
      period: "MXN / mes",
      tax: "+ IVA",
      taxNote: "$230.84 MXN con IVA incluido • Factura deducible (CFDI)",
      features: [
        "Conexiones ilimitadas de contactos",
        "Recordatorios proactivos vía WhatsApp",
        "Transcripción prioritaria de audios",
        "Pitches ilimitados para juntas y eventos",
        "Activación instantánea dentro del chat",
        "Cancela en cualquier momento con un clic",
      ],
      cta: "Comenzar Ahora en WhatsApp",
      guarantee: "Sin plazos forzosos • Cancela cuando quieras en 1 clic",
    },
  },
  faq: {
    badge: "Respuestas Claras",
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber antes de empezar a usar Redi.",
    items: [
      {
        q: "¿Necesito descargar alguna aplicación o registrarme en una web?",
        a: "No. Redi funciona 100% dentro de WhatsApp. Solo das clic en el botón de comenzar, le envías un mensaje y listo, tu copiloto está activo al instante sin descargar nada ni crear contraseñas.",
      },
      {
        q: "¿Cómo registro a una persona después de una reunión de negocios?",
        a: "Al salir de tu reunión, solo abre el chat de Redi y mándale una nota de voz rápida (por ejemplo: 'Acabo de desayunar con Carlos de CargoFast, hace importaciones y busca empresas de manufactura. Quedé de presentarle a mi primo el viernes'). Redi transcribe, extrae los datos y agenda el recordatorio automáticamente.",
      },
      {
        q: "¿Cómo me recuerda mis acuerdos y promesas?",
        a: "Redi utiliza tecnología de calendario inteligente vinculada a WhatsApp. La mañana del día en que acordaste dar seguimiento, te enviará un mensaje directo con el nombre del contacto y la tarea que prometiste cumplir.",
      },
      {
        q: "¿Cómo funciona el generador de pitch semanal?",
        a: "Si participas en grupos de networking empresarial (como BNI, cámaras de comercio o eventos de ventas), solo escríbele a Redi 'ayúdame con mi pitch'. Redi estructurará un guion contundente de 30 a 45 segundos con gancho, solución y la petición específica de cliente que buscas esta semana.",
      },
      {
        q: "¿Mis contactos y datos de clientes están seguros?",
        a: "Totalmente. Tu libreta de contactos es estrictamente privada y está aislada bajo encriptación en la nube. Jamás compartimos ni vendemos tu directorio a terceros.",
      },
      {
        q: "¿El precio del Plan Pro incluye IVA y emiten factura?",
        a: "El costo base es de $199.00 MXN mensuales más el 16% de IVA ($230.84 MXN en total). Al realizar tu pago a través de Stripe puedes ingresar tu RFC y datos fiscales para recibir automáticamente tu factura electrónica (CFDI) deducible emitida por CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.",
      },
      {
        q: "¿Cómo cancelo mi suscripción mensual si ya no la necesito?",
        a: "Puedes cancelar en cualquier momento de forma 100% autoservicio y en 1 solo clic. Solo escríbele a Redi en WhatsApp 'cancelar suscripción' para recibir tu enlace privado de autoservicio de Stripe, o haz clic en 'Administrar suscripción' desde el recibo que Stripe envía a tu correo cada mes. No necesitas hablar con ejecutivos, no hay letras chiquitas ni trámites engorrosos.",
      },
      {
        q: "¿Qué sucede con mis contactos guardados si decido cancelar?",
        a: "Tus contactos, notas y acuerdos jamás se borran ni se pierden. Al cancelar, mantienes todos los beneficios de Redi Pro hasta que termine tu periodo de 30 días ya pagado. Al concluir el ciclo, tu cuenta pasa automáticamente al plan básico gratuito y tu información continúa segura y accesible en tu libreta.",
      },
      {
        q: "¿Qué pasa si ya tenía más de 20 contactos guardados y cancelo el Plan Pro?",
        a: "Absolutamente ninguno de tus contactos se borra ni se bloquea. Si acumulaste 50, 100 o más contactos durante tu suscripción, todos permanecen 100% seguros en tu cuenta. Podrás seguir buscándolos ('¿quién sabe de logística?', '¿cuál es el teléfono de Carlos?'), consultar acuerdos pasados y enriquecer notas de tus contactos existentes sin costo alguno. Lo único que se pausa es la posibilidad de registrar contactos nuevos adicionales hasta que decidas reactivar Redi Pro.",
      },
      {
        q: "¿Hay contratos de permanencia o plazos forzosos?",
        a: "Ninguno. Redi Pro es un servicio mensual libre. Puedes probarlo el tiempo que lo necesites para tus reuniones y pausar o cancelar cuando lo decidas sin ninguna penalización.",
      },
    ],
  },
  ctaBanner: {
    title: "Lleva tu networking al siguiente nivel hoy mismo.",
    subtitle:
      "Únete a los empresarios que ya no pierden clientes por olvidar un seguimiento. Prueba tus 20 conexiones gratis.",
    cta: "Chatear con Redi en WhatsApp",
    phoneLabel: "Número oficial de WhatsApp: +1 (978) 350-0663",
  },
  footer: {
    rights: "CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V. Todos los derechos reservados.",
    privacy: "Aviso de Privacidad",
    terms: "Términos de Servicio",
    contact: "Contacto (+1 978 350 0663)",
    disclaimer:
      "WhatsApp® es una marca registrada de Meta Platforms, Inc. Redi Networking es un servicio independiente desarrollado con tecnología de Inteligencia Artificial.",
  },
};
