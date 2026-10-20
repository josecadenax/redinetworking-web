"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { trackFirebaseEvent } from "@/lib/firebase";

interface LanguageSelectorProps {
  currentLocale: "es" | "en";
}

export function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 p-1 text-xs font-semibold backdrop-blur-sm">
      <div className="pl-1.5 pr-0.5 text-slate-400">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <Link
        href="/"
        onClick={() => {
          if (currentLocale !== "es") {
            trackFirebaseEvent("language_switch", { from: currentLocale, to: "es" });
          }
        }}
        className={`px-2.5 py-1 rounded-full transition-all ${
          currentLocale === "es"
            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold"
            : "text-slate-400 hover:text-slate-200"
        }`}
        aria-label="Cambiar idioma a Español"
      >
        ES
      </Link>

      <Link
        href="/en"
        onClick={() => {
          if (currentLocale !== "en") {
            trackFirebaseEvent("language_switch", { from: currentLocale, to: "en" });
          }
        }}
        className={`px-2.5 py-1 rounded-full transition-all ${
          currentLocale === "en"
            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm font-bold"
            : "text-slate-400 hover:text-slate-200"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </Link>
    </div>
  );
}
