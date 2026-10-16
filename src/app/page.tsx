"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  MessageSquare,
  Mic,
  Calendar,
  Sparkles,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  ChevronDown,
  Clock,
  PhoneCall,
  Users,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/19783500663?text=Hola%20Redi";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "¿Necesito descargar alguna aplicación o registrarme en una web?",
      a: "No. Redi funciona 100% dentro de WhatsApp. Solo das clic en el botón de comenzar, le envías un mensaje y listo, tu copiloto está activo al instante sin descargar nada ni crear contraseñas.",
    },
    {
      q: "¿Cómo registro a una persona después de un café de negocios?",
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
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. STICKY NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-cyan-500/40 shadow-lg shadow-cyan-500/10 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Redi Networking Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                Redi Networking
              </span>
              <span className="text-xs text-cyan-400 font-medium">Copiloto de IA en WhatsApp</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-cyan-400 transition-colors">
              Cómo funciona
            </a>
            <a href="#caracteristicas" className="hover:text-cyan-400 transition-colors">
              Características
            </a>
            <a href="#precios" className="hover:text-cyan-400 transition-colors">
              Precios
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              Preguntas
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 sm:px-5 py-2.5 rounded-full text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Abrir WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tu Copiloto Inteligente de Networking en WhatsApp</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              Convierte tus cafés de negocios en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                oportunidades reales.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Registra contactos dictando notas de voz al salir de tus reuniones, recibe recordatorios automáticos de tus promesas y prepara tu pitch semanal de 30 segundos. Todo directamente en WhatsApp.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-8 py-4 rounded-full text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Empezar Gratis en WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-800 font-semibold text-sm transition-all"
              >
                <span>Ver cómo funciona</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>20 Conexiones sin costo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sin instalar aplicaciones</span>
              </div>
            </div>
          </div>

          {/* CHAT PREVIEW INTERACTIVO */}
          <div className="mt-16 max-w-xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-cyan-950/40 relative">
            {/* Header del Mockup */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/50">
                  <Image src="/images/logo.jpg" alt="Redi Avatar" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                    <span>Redi Networking</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-xs text-slate-400">en línea (+1 978 350 0663)</div>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                WhatsApp Bot
              </span>
            </div>

            {/* Mensajes del Chat */}
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Audio del usuario */}
              <div className="flex justify-end">
                <div className="bg-emerald-950/60 border border-emerald-800/50 text-emerald-100 rounded-2xl rounded-tr-sm p-3 max-w-[85%] flex items-center gap-3 shadow">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-xs text-emerald-300">Nota de voz (0:14)</div>
                    <div className="text-[11px] text-emerald-200/70">"Desayuné con Carlos Mendoza de CargoFast..."</div>
                  </div>
                  <span className="text-[10px] text-emerald-300/60 self-end">10:42 a.m.</span>
                </div>
              </div>

              {/* Respuesta de Redi */}
              <div className="flex justify-start">
                <div className="bg-slate-800/90 border border-slate-700/60 text-slate-100 rounded-2xl rounded-tl-sm p-4 max-w-[90%] space-y-2 shadow">
                  <div className="font-bold text-cyan-300 text-xs">
                    🤝 ¡Listo! Guardé el café con Carlos Mendoza
                  </div>
                  <div className="text-xs space-y-1 text-slate-300">
                    <div>🏢 <strong>Empresa:</strong> CargoFast</div>
                    <div>💼 <strong>Especialidad:</strong> Importaciones y logística aduanal</div>
                    <div>🎯 <strong>Busca conectar:</strong> Empresas de manufactura automotriz</div>
                    <div className="pt-1 text-amber-300">
                      ⏰ <strong>Recordatorio agendado:</strong> Viernes 9:00 AM para presentarle a tu primo.
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 text-right pt-1">10:42 a.m.</div>
                </div>
              </div>

              {/* Pitch Trigger */}
              <div className="flex justify-end">
                <div className="bg-emerald-950/60 border border-emerald-800/50 text-emerald-100 rounded-2xl rounded-tr-sm px-4 py-2 text-xs">
                  "ayúdame con mi pitch de 30 segundos"
                </div>
              </div>

              {/* Pitch Response */}
              <div className="flex justify-start">
                <div className="bg-slate-800/90 border border-slate-700/60 text-slate-100 rounded-2xl rounded-tl-sm p-4 max-w-[90%] space-y-2 shadow">
                  <div className="font-bold text-cyan-300 text-xs">🎯 Pitch de Networking listo para leer (35s):</div>
                  <div className="text-xs text-slate-200 italic bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/40">
                    "¿Sabías que el 80% de los acuerdos en eventos de networking se olvidan en menos de 48 horas? Con Redi nunca más pierdes un prospecto..."
                  </div>
                  <div className="text-[10px] text-slate-400 text-right pt-1">10:43 a.m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA Y SOLUCIÓN */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">80%</div>
              <h3 className="font-semibold text-white mb-1">De oportunidades perdidas</h3>
              <p className="text-sm text-slate-400">
                La mayoría de empresarios olvidan dar seguimiento después de un evento o café de negocios por falta de tiempo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">10 Segundos</div>
              <h3 className="font-semibold text-white mb-1">Es todo lo que necesitas</h3>
              <p className="text-sm text-slate-400">
                Manda un audio rápido en el estacionamiento o camino a tu coche. Redi hace todo el trabajo pesado por ti.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-extrabold text-violet-400 mb-2">0 Apps</div>
              <h3 className="font-semibold text-white mb-1">Sin fricción adicional</h3>
              <p className="text-sm text-slate-400">
                No necesitas descargar otra app que olvidarás abrir. Redi vive en WhatsApp, la aplicación que abres todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Paso a paso</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">¿Cómo funciona Redi?</p>
            <p className="text-slate-400 text-sm sm:text-base">
              Tan simple como mandarle un mensaje a un amigo, pero con el poder de una base de datos con Inteligencia Artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/70 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-6 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Dicta o escribe tu reunión</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Al salir de tu junta, mándale una nota de voz con el nombre, lo que hace la persona y cualquier acuerdo que hayan cerrado.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-6 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Redi organiza y recuerda</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                La IA categoriza la especialidad, los clientes que busca y programa alertas automáticas para que nunca olvides una promesa.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-violet-950 border border-violet-800/60 flex items-center justify-center text-violet-400 mb-6 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Consulta y cierra negocios</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pregúntale a Redi "¿quién en mi red hace empaques?" o pídele tu pitch semanal antes de tu junta de networking matutina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CARACTERÍSTICAS PRINCIPALES */}
      <section id="caracteristicas" className="py-24 bg-slate-900/50 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Funcionalidades</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Todo lo que tu networking necesita</p>
            <p className="text-slate-400 text-sm sm:text-base">
              Diseñado exclusivamente para el ritmo de trabajo de dueños de negocio y directores comerciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Mic className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Notas de Voz con IA</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Transcripción y extracción de datos en tiempo real. Olvídate de teclear formularios eternos al terminar un evento.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Recordatorios Proactivos</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                ¿Quedaste de cotizar o presentar a alguien el jueves? Redi te envía una alerta matutina por WhatsApp el día del compromiso.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Pitch Semanal de 30 Segundos</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Guiones listos para juntas semanales de networking (BNI, cámaras). Con gancho comercial, solución y pedido concreto.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Búsqueda Semántica en tu Red</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pregúntale "¿quién en mi red sabe de marcas?" y Redi te entregará el nombre, especialidad y enlace de WhatsApp del contacto.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Resumen y Estadísticas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Escribe "mis contactos" o "resumen" y consulta cuántas conexiones tienes y cuáles son las principales industrias en tu red.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Seguridad y Privacidad</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tus contactos e información empresarial están protegidos y aislados. Solo tú tienes acceso a tus notas y directorio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TABLA DE PRECIOS */}
      <section id="precios" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Precios Transparentes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Comienza gratis hoy mismo</p>
            <p className="text-slate-400 text-sm sm:text-base">
              Sin sorpresas ni contratos forzosos. Prueba Redi con tus primeros contactos y escala cuando lo necesites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
            {/* PLAN FREE */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Prueba Gratuita</h3>
                  <p className="text-slate-400 text-sm mt-1">Para probar tu copiloto en tus primeras reuniones.</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">$0</span>
                  <span className="text-slate-400 text-sm">/ para siempre</span>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>20 Conexiones</strong> de networking guardadas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Registro ilimitado por notas de voz y texto</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Búsqueda semántica en tu red</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Generador de pitch semanal</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>100% en WhatsApp, sin apps externas</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-full text-sm border border-slate-700 transition-all"
                >
                  <span>Probar Gratis</span>
                </a>
              </div>
            </div>

            {/* PLAN PRO */}
            <div className="bg-gradient-to-b from-slate-900 to-cyan-950/40 border-2 border-cyan-500/60 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
              <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                Más Popular
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Plan Redi Pro</h3>
                  <p className="text-cyan-200/80 text-sm mt-1">Para empresarios activos y líderes de networking.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl font-extrabold text-white">$199</span>
                    <span className="text-slate-300 text-sm font-medium">MXN / mes</span>
                    <span className="text-xs text-cyan-300 font-bold bg-cyan-950 border border-cyan-700/60 px-2 py-0.5 rounded-md">
                      + IVA
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    $230.84 MXN con IVA incluido • Factura deducible (CFDI)
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Conexiones ilimitadas</strong> de contactos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span><strong>Recordatorios proactivos</strong> vía WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Transcripción prioritaria de audios</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Pitches ilimitados para juntas y eventos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Activación instantánea dentro del chat</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Cancela en cualquier momento con un clic</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-extrabold py-3.5 rounded-full text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Comenzar Ahora en WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Sin plazos forzosos • Cancela cuando quieras en 1 clic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-24 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Dudas frecuentes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Preguntas Frecuentes</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-emerald-950/30 pointer-events-none -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="relative w-20 h-20 mx-auto rounded-3xl overflow-hidden ring-2 ring-cyan-500/50 shadow-2xl shadow-cyan-500/20">
            <Image src="/images/logo.jpg" alt="Redi Logo" fill className="object-cover" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Lleva tu networking al siguiente nivel hoy mismo.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Únete a los empresarios que ya no pierden clientes por olvidar un seguimiento. Prueba tus 20 conexiones gratis.
            </p>
          </div>

          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-9 py-4 rounded-full text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chatear con Redi en WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-xs text-slate-400 mt-3">Número oficial de WhatsApp: +1 (978) 350-0663</div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden">
              <Image src="/images/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="font-bold text-white">Redi Networking</span> © {new Date().getFullYear()} CELLAR TECHNOLOGIES MÉXICO, S.A.P.I. DE C.V. Todos los derechos reservados.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacidad" className="hover:text-cyan-400 transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-cyan-400 transition-colors">
              Términos de Servicio
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              Contacto (+1 978 350 0663)
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 pt-6 border-t border-slate-900 text-[11px] text-slate-400 text-center md:text-left">
          WhatsApp® es una marca registrada de Meta Platforms, Inc. Redi Networking es un servicio independiente desarrollado con tecnología de Inteligencia Artificial.
        </div>
      </footer>
    </div>
  );
}
