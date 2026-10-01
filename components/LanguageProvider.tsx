"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "@/data/translations";

type Translation = (typeof translations)["fa"];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  direction: "rtl" | "ltr";
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Persian/Dari is the default.
  const [language, setLanguageState] =
    useState<Language>("fa");

  useEffect(() => {
    const saved = localStorage.getItem(
      "hotak-language"
    ) as Language | null;

    if (
      saved === "fa" ||
      saved === "ps" ||
      saved === "en"
    ) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    const direction =
      language === "en" ? "ltr" : "rtl";

    document.documentElement.lang = language;
    document.documentElement.dir = direction;

    localStorage.setItem(
      "hotak-language",
      language
    );
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
        direction:
          language === "en" ? "ltr" : "rtl",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}