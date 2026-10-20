"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { trackFirebaseEvent } from "@/lib/firebase";
import { getDictionary } from "@/lib/i18n";
import { LanguageSelector } from "@/components/LanguageSelector";

interface LandingPageProps {
  locale: "es" | "en";
}

export function LandingPage({ locale }: LandingPageProps) {
  const t = getDictionary(locale);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const toggleFaq = (index: number) => {
    const isOpening = openFaq !== index;
    setOpenFaq(isOpening ? index : null);
    if (isOpening) {
      trackFirebaseEvent("faq_toggle", {
        question_index: index,
        question: t.faq.items[index].q,
        locale,
      });
    }
  };

  const featureIcons = [
    <Mic key="mic" className="w-6 h-6 text-cyan-400" />,
    <Clock key="clock" className="w-6 h-6 text-teal-400" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-emerald-400" />,
    <Search key="search" className="w-6 h-6 text-cyan-400" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-teal-400" />,
    <MessageSquare key="msg" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href={locale === "en" ? "/en" : "/"} className="flex items-center gap-3 group">
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
              <span className="text-xs text-cyan-400 font-medium">
                {locale === "en" ? "AI Copilot on WhatsApp" : "Copiloto de IA en WhatsApp"}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#como-funciona"
              onClick={() => trackFirebaseEvent("nav_click", { target: "como-funciona", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#caracteristicas"
              onClick={() => trackFirebaseEvent("nav_click", { target: "caracteristicas", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.features}
            </a>
            <a
              href="#precios"
              onClick={() => trackFirebaseEvent("nav_click", { target: "precios", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.pricing}
            </a>
            <a
              href="#faq"
              onClick={() => trackFirebaseEvent("nav_click", { target: "faq", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.nav.faq}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector currentLocale={locale} />

            <a
              href={t.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFirebaseEvent("click_whatsapp_cta", { location: "navbar", locale })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-4 sm:px-5 py-2.5 rounded-full text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">{t.nav.cta}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              {t.hero.titlePart1}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {t.hero.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={t.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackFirebaseEvent("click_whatsapp_cta", { location: "hero", label: "start_free", locale })
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-8 py-4 rounded-full text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs font-medium text-slate-400">
              {t.hero.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* 3. MOCKUP PREVIEW */}
          <div className="mt-16 md:mt-20 max-w-xl mx-auto">
            <div className="relative mx-auto rounded-[32px] border-4 border-slate-800/80 bg-slate-900 shadow-2xl shadow-cyan-500/10 overflow-hidden">
              <div className="bg-slate-950 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-emerald-500">
                    <Image src="/images/logo.jpg" alt="Redi Avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white">Redi Networking</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{t.mockup.status}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-4 bg-slate-950/70 text-xs sm:text-sm">
                <div className="flex justify-end">
                  <div className="bg-emerald-950/90 border border-emerald-700/60 text-emerald-100 rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] space-y-1 shadow-md">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                      <Mic className="w-3.5 h-3.5" />
                      <span>{t.mockup.audioTitle}</span>
                    </div>
                    <p className="text-slate-200 text-xs italic">
                      {t.mockup.audioTranscript}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-4 max-w-[90%] space-y-3 shadow-lg">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs sm:text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>{t.mockup.botGreeting}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-300 border-l-2 border-cyan-500/70 pl-3">
                      <div>
                        <span className="text-slate-400">{t.mockup.companyLabel}</span>{" "}
                        <span className="font-semibold text-white">{t.mockup.companyVal}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">{t.mockup.specialtyLabel}</span>{" "}
                        <span className="text-slate-200">{t.mockup.specialtyVal}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">{t.mockup.idealClientLabel}</span>{" "}
                        <span className="text-slate-200">{t.mockup.idealClientVal}</span>
                      </div>
                      <div className="pt-1 text-amber-300 font-medium">
                        ⏰ {t.mockup.reminderLabel} {t.mockup.reminderVal}
                      </div>
                    </div>

                    <div className="bg-slate-950/60 rounded-lg p-2 text-[11px] text-cyan-300 flex items-center justify-between border border-cyan-900/30">
                      <span>✓ {t.mockup.scheduledNote}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-emerald-950/80 border border-emerald-700/50 text-emerald-200 rounded-2xl rounded-tr-none px-3.5 py-2 text-xs">
                    {t.mockup.pitchPrompt}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              {t.howItWorks.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.howItWorks.title}
            </h2>
            <p className="text-slate-400 text-base">{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((s, idx) => (
              <div
                key={idx}
                className="relative bg-slate-950 border border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition-all hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-cyan-400/30">{s.step}</span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARACTERÍSTICAS */}
      <section id="caracteristicas" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-teal-400 text-xs font-semibold uppercase tracking-wider">
              {t.features.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.features.title}
            </h2>
            <p className="text-slate-400 text-base">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.features.cards.map((f, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-4 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/60">
                  {featureIcons[idx % featureIcons.length]}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-white">{f.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-cyan-400">{f.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRECIOS */}
      <section id="precios" className="py-20 md:py-28 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              {t.pricing.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.pricing.title}
            </h2>
            <p className="text-slate-400 text-base">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PLAN GRATUITO */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{t.pricing.freePlan.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{t.pricing.freePlan.subtitle}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">{t.pricing.freePlan.price}</span>
                    <span className="text-slate-400 text-sm font-medium">{t.pricing.freePlan.period}</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium">
                    {locale === "en" ? "No credit card required" : "Sin tarjeta de crédito requerida"}
                  </p>
                </div>

                <ul className="space-y-3 text-sm text-slate-300">
                  {t.pricing.freePlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={t.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackFirebaseEvent("click_whatsapp_cta", { location: "pricing_free", plan: "free", locale });
                    trackFirebaseEvent("select_plan", { plan_name: "free", price: 0, currency: "MXN", locale });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 rounded-full text-sm border border-slate-700 transition-all"
                >
                  <span>{t.pricing.freePlan.cta}</span>
                </a>
              </div>
            </div>

            {/* PLAN PRO */}
            <div className="bg-gradient-to-b from-slate-900 to-cyan-950/40 border-2 border-cyan-500/60 rounded-3xl p-8 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
              <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                {t.pricing.proPlan.badge}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{t.pricing.proPlan.title}</h3>
                  <p className="text-cyan-200/80 text-sm mt-1">{t.pricing.proPlan.subtitle}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-4xl font-extrabold text-white">{t.pricing.proPlan.price}</span>
                    <span className="text-slate-300 text-sm font-medium">{t.pricing.proPlan.period}</span>
                    <span className="text-xs text-cyan-300 font-bold bg-cyan-950 border border-cyan-700/60 px-2 py-0.5 rounded-md">
                      {t.pricing.proPlan.tax}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{t.pricing.proPlan.taxNote}</p>
                </div>

                <ul className="space-y-3 text-sm text-slate-200">
                  {t.pricing.proPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={t.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackFirebaseEvent("click_whatsapp_cta", { location: "pricing_pro", plan: "pro", locale });
                    trackFirebaseEvent("select_plan", { plan_name: "pro", price: 199, currency: "MXN", locale });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-extrabold py-3.5 rounded-full text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>{t.pricing.proPlan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  {t.pricing.proPlan.guarantee}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              {t.faq.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.faq.title}
            </h2>
            <p className="text-slate-400 text-base">{t.faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-800 bg-slate-900/60 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === index ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="relative w-16 h-16 mx-auto rounded-2xl overflow-hidden ring-2 ring-cyan-500/40 shadow-xl shadow-cyan-500/20">
            <Image src="/images/logo.jpg" alt="Redi Logo" fill className="object-cover" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {t.ctaBanner.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">{t.ctaBanner.subtitle}</p>
          </div>

          <div className="pt-2">
            <a
              href={t.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackFirebaseEvent("click_whatsapp_cta", { location: "cta_banner", label: "bottom_banner", locale })
              }
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold px-9 py-4 rounded-full text-base sm:text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>{t.ctaBanner.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-xs text-slate-400 mt-3">{t.ctaBanner.phoneLabel}</div>
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
              <span className="font-bold text-white">Redi Networking</span> © {new Date().getFullYear()}{" "}
              {t.footer.rights}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacidad"
              onClick={() => trackFirebaseEvent("legal_link_click", { target: "/privacidad", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terminos"
              onClick={() => trackFirebaseEvent("legal_link_click", { target: "/terminos", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.footer.terms}
            </Link>
            <a
              href={t.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackFirebaseEvent("click_whatsapp_cta", { location: "footer", locale })}
              className="hover:text-cyan-400 transition-colors"
            >
              {t.footer.contact}
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 pt-6 border-t border-slate-900 text-[11px] text-slate-400 text-center md:text-left">
          {t.footer.disclaimer}
        </div>
      </footer>
    </div>
  );
}
