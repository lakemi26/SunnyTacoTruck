"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import translations, { type Language } from "@/data/translations";

type LangContext = {
  lang: Language;
  toggleLang: () => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LangContext | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "en" ? "pt" : "en"));
  }, []);

  const t = useCallback(
    (path: string): string => {
      const keys = path.split(".");
      let result: unknown = translations[lang];
      for (const key of keys) {
        if (result && typeof result === "object" && key in result) {
          result = (result as Record<string, unknown>)[key];
        } else {
          return path;
        }
      }
      return typeof result === "string" ? result : path;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
