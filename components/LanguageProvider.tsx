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

/*
 * Translation can be any of the supported languages.
 */
type Translation = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  direction: "rtl" | "ltr";
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Persian/Dari is the default language.
  const [language, setLanguageState] =
    useState<Language>("fa");

  /*
   * Load saved language.
   */
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

  /*
   * Update HTML language, direction,
   * and localStorage whenever language changes.
   */
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

  /*
   * Change language.
   */
  const setLanguage = (
    newLanguage: Language
  ) => {
    setLanguageState(newLanguage);
  };

  /*
   * Current translation.
   */
  const t = translations[language];

  /*
   * Current text direction.
   */
  const direction =
    language === "en" ? "ltr" : "rtl";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        direction,
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