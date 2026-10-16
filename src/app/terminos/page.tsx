import NextLink from "next/link";
import { ArrowLeft, FileText, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio | Redi Networking",
  description:
    "Términos y condiciones de uso de la plataforma Redi Networking operada por Cellar Technologies México, S.A.P.I. de C.V.",
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Condiciones de Uso</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-xs text-slate-400 font-mono">Última actualización: 16 de octubre de 2026</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            Bienvenido a <strong>Redi Networking</strong>. Los presentes Términos y Condiciones de Servicio (en adelante los{" "}
            <strong>"Términos"</strong>) regulan el acceso y uso de la plataforma, el bot conversacional de WhatsApp y el
            sitio web comercial operados por{" "}
            <strong className="text-white">CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.</strong> (en adelante{" "}
            <strong className="text-cyan-300">"Redi Networking"</strong>, <strong className="text-cyan-300">"nosotros"</strong>{" "}
            o la <strong className="text-cyan-300">"Empresa"</strong>).
          </p>
          <p>
            Al interactuar con Redi por WhatsApp o navegar en este sitio web, usted confirma que ha leído, comprendido y
            acepta cumplir estos Términos en su totalidad. Si no está de acuerdo con alguno de ellos, le solicitamos
            abstenerse de utilizar el Servicio.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">1. Descripción del Servicio</h2>
          <p>
            Redi Networking es un servicio de copiloto de networking profesional impulsado por Inteligencia Artificial que
            opera a través de la aplicación de mensajería WhatsApp. El Servicio permite a profesionales, empresarios y líderes
            de negocios:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registrar datos de contactos y reuniones de negocios mediante notas de voz o mensajes de texto.</li>
            <li>Estructurar de forma automática nombres, especialidades, industrias, acuerdos y datos de contacto.</li>
            <li>Programar alertas y recordatorios proactivos de acuerdos y compromisos comerciales pactados.</li>
            <li>Consultar su libreta y red de contactos mediante preguntas en lenguaje natural.</li>
            <li>Preparar guiones y pitches de presentación comercial de 30 a 45 segundos para eventos y sesiones de networking.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">2. Registro y Acceso</h2>
          <p>
            El acceso al Servicio se realiza directamente a través de su número de teléfono celular en WhatsApp. No se requiere
            descargar aplicaciones adicionales ni crear contraseñas. Usted es responsable de la veracidad de la información
            que suministra y de mantener el control y custodia de su dispositivo móvil y cuenta de WhatsApp.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">3. Planes, Tarifas y Pagos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Prueba Gratuita:</strong> Todo nuevo usuario tiene acceso a registrar hasta{" "}
              <strong className="text-white">20 conexiones de contactos sin costo</strong> para evaluar el copiloto.
            </li>
            <li>
              <strong>Plan Redi Pro:</strong> Al superar la cuota gratuita o cuando el usuario lo solicite, puede activar el
              plan ilimitado por una suscripción mensual de{" "}
              <strong className="text-cyan-300">$199.00 MXN (pesos mexicanos)</strong>, con renovación mensual automática.
            </li>
            <li>
              <strong>Procesamiento Seguro:</strong> Los cobros se realizan mediante la pasarela segura{" "}
              <strong className="text-white">Stripe</strong>. Redi Networking no almacena los datos financieros de sus
              tarjetas.
            </li>
            <li>
              <strong>Cancelación:</strong> Usted puede cancelar su suscripción en cualquier momento enviando un mensaje a Redi o
              a través del enlace de gestión de Stripe. La cancelación surte efectos al concluir el periodo mensual ya pagado,
              sin cobros posteriores ni penalizaciones.
            </li>
            <li>
              <strong>Política de Reembolsos:</strong> No se otorgan reembolsos por periodos parciales o no utilizados, salvo
              aquellos casos en que la legislación mexicana aplicable lo exija expresamente.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4">4. Propiedad de la Información del Usuario</h2>
          <p>
            Usted conserva la titularidad y plena propiedad sobre los contactos, notas de voz, acuerdos y contenido que
            registre en el Servicio. Redi Networking procesa esta información única y exclusivamente para prestarle el
            Servicio a usted. <strong>No vendemos, rentamos ni transferimos sus contactos a terceros con fines publicitarios.</strong>
          </p>

          <h2 className="text-xl font-bold text-white pt-4">5. Propiedad Intelectual</h2>
          <p>
            Todo el software, algoritmos de indexación, modelos de estructuración, marcas, logotipos, diseños y código fuente
            de Redi Networking son propiedad exclusiva de{" "}
            <strong className="text-white">CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V.</strong> Queda estrictamente
            prohibida su reproducción, ingeniería inversa, distribución o explotación comercial sin autorización expresa y por
            escrito.
          </p>
          <p className="text-xs text-slate-400">
            WhatsApp® es una marca registrada de Meta Platforms, Inc. Redi Networking es una solución de software independiente
            que opera mediante las interfaces oficiales de Meta / Twilio.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">6. Reglas de Uso Aceptable</h2>
          <p>Al utilizar Redi Networking, usted se compromete a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No utilizar el Servicio para actividades ilícitas, fraudulentas, engañosas o que atenten contra terceros.</li>
            <li>No realizar envíos masivos no autorizados (spam) o acoso a través de la integración de WhatsApp.</li>
            <li>No intentar vulnerar, sobrecargar o realizar pruebas de penetración contra la infraestructura del Servicio.</li>
            <li>Respetar las políticas de uso de la plataforma de WhatsApp y Meta.</li>
          </ul>
          <p>
            Nos reservamos el derecho de suspender o revocar el acceso a cualquier usuario que viole estas condiciones.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">7. Disponibilidad y Limitación de Responsabilidad</h2>
          <p>
            Procuramos mantener el Servicio disponible las 24 horas del día con altos estándares de disponibilidad; sin
            embargo, no podemos garantizar una disponibilidad ininterrumpida debido a mantenimientos preventivos o fallas en
            redes de terceros (tales como caídas del servicio de WhatsApp, Twilio o AWS).
          </p>
          <p>
            Redi es una herramienta de asistencia y sugerencia con Inteligencia Artificial. El usuario es el único responsable
            final de validar los acuerdos comerciales y la toma de decisiones profesionales con sus propios clientes y
            contactos.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">8. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Estos Términos se rigen e interpretan de conformidad con las leyes de los Estados Unidos Mexicanos. Para cualquier
            controversia que pudiera derivarse de los presentes Términos o del uso del Servicio, las partes se someten
            expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro
            fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
          </p>

          <h2 className="text-xl font-bold text-white pt-4">9. Contacto</h2>
          <p className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>
              Si tiene dudas sobre estos Términos o el funcionamiento del Servicio, contáctenos en:{" "}
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
            <NextLink href="/privacidad" className="hover:text-cyan-400 transition-colors">
              Aviso de Privacidad
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
