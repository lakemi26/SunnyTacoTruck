"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="p-2 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center text-3xl"
      aria-label={lang === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      {lang === "en" ? "🇺🇸" : "🇧🇷"}
    </button>
  );
}
