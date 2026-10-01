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
 * All languages must have the same structure.
 * The values are strings, not Persian-specific literal values.
 */
type Translation = {
  nav: {
    home: string;
    properties: string;
    about: string;
    contact: string;
  };

  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    description: string;
    viewProperties: string;
    contact: string;
    location: string;
  };

  location: {
    label: string;
    title: string;
    description: string;
    coordinates: string;
    latitude: string;
    longitude: string;
    mapTitle: string;
    propertyLocation: string;
    getDirections: string;
    latitudeLabel: string;
    longitudeLabel: string;
    mapType: string;
    satelliteImagery: string;
  };

  /*
   * Keep the rest of your translation sections here.
   * If your translations.ts has more sections, they should
   * also be represented here.
   */
  [key: string]: unknown;
};

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

  const setLanguage = (
    newLanguage: Language
  ) => {
    setLanguageState(newLanguage);
  };

  const t = translations[language] as Translation;

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