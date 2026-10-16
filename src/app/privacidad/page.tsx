import Link from "next/image";
import NextLink from "next/link";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Redi Networking",
  description:
    "Aviso de Privacidad integral de Redi Networking, operado por Cellar Technologies México, S.A.P.I. de C.V.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <NextLink
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </NextLink>

          <div className="flex items-center gap-3">
            <span className="font-bold text-base bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Redi Networking
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-8">
        <div className="space-y-3 border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Marco Legal & Protección de Datos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-xs text-slate-400 font-mono">Última actualización: 16 de octubre de 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            El presente Aviso de Privacidad se emite en cumplimiento con lo establecido por la{" "}
            <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>{" "}
            de los Estados Unidos Mexicanos y describe la forma en que{" "}
            <strong className="text-white">CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.</strong>{" "}
            (en adelante <strong className="text-cyan-300">"Redi Networking"</strong>,{" "}
            <strong className="text-cyan-300">"nosotros"</strong> o la{" "}
            <strong className="text-cyan-300">"Empresa"</strong>) recaba, utiliza, almacena, protege y trata los datos
            personales de los usuarios que interactúan con nuestro servicio de copiloto de networking a través de
            WhatsApp y nuestro sitio web oficial (el "Servicio").
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Identidad y Domicilio del Responsable</h2>
          <p>
            El responsable del tratamiento de sus datos personales es{" "}
            <strong className="text-white">CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.</strong>, con correo electrónico
            de contacto para atención a la privacidad y ejercicio de derechos en:{" "}
            <a href="mailto:hi@cellartech.net" className="text-cyan-400 hover:underline">
              hi@cellartech.net
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-white pt-4">2. Datos Personales que Recabamos</h2>
          <p>Para la correcta prestación de nuestro copiloto de networking, recabamos las siguientes categorías de datos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Datos de identificación y contacto del Usuario:</strong> Número de teléfono de WhatsApp, nombre de
              perfil público de WhatsApp y correo electrónico (cuando se suscribe a planes de pago).
            </li>
            <li>
              <strong>Notas de voz y mensajes de texto:</strong> Grabaciones de audio enviadas voluntariamente por el
              usuario para transcribir y registrar cafés de negocios, reuniones o eventos de networking.
            </li>
            <li>
              <strong>Datos de su Red de Contactos:</strong> Nombres, empresas, especialidades, acuerdos de seguimiento,
              notas personales o profesionales y números de contacto de terceras personas que usted decide registrar en su
              directorio personal.
            </li>
            <li>
              <strong>Datos de Facturación y Pago:</strong> Los pagos de suscripciones se procesan exclusivamente a través
              de <strong className="text-white">Stripe Inc.</strong> Redi Networking jamás almacena ni tiene acceso a
              números completos de tarjetas de crédito o débito.
            </li>
            <li>
              <strong>Registros técnicos de operación:</strong> Registros de fecha y hora de peticiones, identificadores de
              mensajes y tokens de sesión para soporte técnico y seguridad.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">3. Finalidades del Tratamiento de los Datos</h2>
          <p>Tratamos sus datos personales para las siguientes finalidades primarias y necesarias:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Operación del Copiloto de Networking:</strong> Transcribir notas de voz, estructurar información de
              contactos, indexar relaciones de negocio y generar respuestas contextuales mediante Inteligencia
              Artificial.
            </li>
            <li>
              <strong>Recordatorios y Seguimiento:</strong> Programar y enviar alertas directas a su WhatsApp sobre
              compromisos, fechas límite y acuerdos comerciales que usted haya pactado en sus reuniones.
            </li>
            <li>
              <strong>Generación de Pitches Comerciales:</strong> Diseñar guiones de presentación de 30 a 45 segundos
              personalizados según su especialidad y objetivos semanales.
            </li>
            <li>
              <strong>Búsqueda Semántica en su Red:</strong> Permitirle consultar rápidamente su catálogo de contactos
              mediante lenguaje natural (ej. "¿quién en mi red hace empaques?").
            </li>
            <li>
              <strong>Gestión de Suscripciones:</strong> Controlar el límite de conexiones gratuitas y administrar las
              suscripciones activas de Redi Pro.
            </li>
            <li>
              <strong>Soporte y Seguridad:</strong> Resolver dudas técnicas, prevenir uso malintencionado y respaldar su
              información.
            </li>
          </ul>
          <p className="text-emerald-300 font-semibold">
            No utilizamos su directorio de contactos para fines de publicidad de terceros ni para vender bases de datos.
            Sus contactos son estrictamente suyos.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">4. Transferencias de Datos a Terceros</h2>
          <p>
            Para hacer posible el funcionamiento de Redi Networking, transferimos datos indispensables a proveedores de
            infraestructura de clase mundial bajo estrictos convenios de confidencialidad y procesamiento:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Meta Platforms Inc. / WhatsApp:</strong> Como canal oficial de mensajería para entrega y recepción
              de mensajes.
            </li>
            <li>
              <strong>Twilio Inc.:</strong> Proveedor de telecomunicaciones y API oficial para la transmisión de mensajes
              de WhatsApp Business.
            </li>
            <li>
              <strong>Amazon Web Services (AWS):</strong> Alojamiento de servidores seguros, base de datos encriptada en
              reposo y tránsito, transcripción de audio (Amazon Transcribe) y modelos de Inteligencia Artificial (Amazon
              Bedrock / Anthropic Claude).
            </li>
            <li>
              <strong>Stripe Payments:</strong> Pasarela de cobros segura para la gestión de suscripciones Pro.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">5. Ejercicio de Derechos ARCO y Revocación del Consentimiento</h2>
          <p>
            Usted tiene en todo momento derecho de <strong>Acceder</strong> a sus datos personales, <strong>Rectificarlos</strong>{" "}
            si son inexactos o incompletos, solicitar su <strong>Cancelación</strong> (eliminación total de su cuenta y
            contactos) u <strong>Oponerse</strong> al tratamiento de los mismos (Derechos ARCO), así como a revocar el
            consentimiento otorgado.
          </p>
          <p>
            Para ejercer estos derechos, envíe una solicitud por correo electrónico a:{" "}
            <a href="mailto:hi@cellartech.net" className="text-cyan-400 font-semibold hover:underline">
              hi@cellartech.net
            </a>
            , indicando su nombre completo, el número de teléfono registrado en WhatsApp con el que usa Redi y la
            descripción clara del derecho que desea ejercer. Responderemos a su solicitud en los plazos previstos por la
            legislación aplicable.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Medidas de Seguridad</h2>
          <p>
            Implementamos medidas de seguridad administrativas, técnicas y físicas para salvaguardar sus datos contra daño,
            pérdida, alteración o tratamiento no autorizado. Todas las comunicaciones viajan a través de canales cifrados
            (TLS/HTTPS) y las bases de datos cuentan con aislamiento por usuario en infraestructura en la nube de alta
            disponibilidad.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">7. Modificaciones al Aviso de Privacidad</h2>
          <p>
            CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V. se reserva el derecho de actualizar este Aviso de Privacidad para
            reflejar mejoras al Servicio o actualizaciones legislativas. Cualquier cambio será publicado en este mismo
            sitio web indicando la fecha de última modificación.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">8. Contacto Legal</h2>
          <p className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>
              Para cualquier consulta sobre este aviso o el tratamiento de su información:{" "}
              <a href="mailto:hi@cellartech.net" className="text-cyan-400 hover:underline">
                hi@cellartech.net
              </a>
            </span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <NextLink href="/terminos" className="hover:text-cyan-400 transition-colors">
              Términos de Servicio
            </NextLink>
            <NextLink href="/" className="hover:text-cyan-400 transition-colors">
              Página Principal
            </NextLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
