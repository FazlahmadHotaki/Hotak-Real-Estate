"use client";

import { useState } from "react";
import {
  ChevronDown,
  Globe2,
  Check,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";

const languages = [
  {
    code: "fa" as const,
    label: "دری",
    native: "دری",
  },
  {
    code: "ps" as const,
    label: "پښتو",
    native: "پښتو",
  },
  {
    code: "en" as const,
    label: "English",
    native: "EN",
  },
];

export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
  } = useLanguage();

  const [open, setOpen] = useState(false);

  const currentLanguage =
    languages.find(
      (item) => item.code === language
    ) ?? languages[0];

  const handleLanguageChange = (
    newLanguage: (typeof languages)[number]["code"]
  ) => {
    setLanguage(newLanguage);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe2
          size={17}
          className="text-amber-400"
        />

        <span>
          {currentLanguage.native}
        </span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <>
          {/* Click Outside */}
          <button
            type="button"
            aria-label="Close language menu"
            className="fixed inset-0 z-40 cursor-default"
            onClick={() => setOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute end-0 top-full z-50 mt-2 min-w-[150px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl">
            {languages.map((item) => {
              const active =
                language === item.code;

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() =>
                    handleLanguageChange(item.code)
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-amber-400 text-slate-950"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>
                    {item.label}
                  </span>

                  {active && (
                    <Check size={16} />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}