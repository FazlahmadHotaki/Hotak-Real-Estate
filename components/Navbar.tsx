"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const PHONE = "+93728345023";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { t } = useLanguage();

  const links = [
    {
      label: t.nav.home,
      href: "/",
    },
    {
      label: t.nav.properties,
      href: "/properties",
    },
    {
      label: t.nav.about,
      href: "/about",
    },
    {
      label: t.nav.contact,
      href: "/contact",
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        {/* =========================
            LOGO
        ========================== */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 font-black text-lg text-slate-950 shadow-lg transition group-hover:bg-amber-300">
            ه
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-black text-white">
              هوتک
            </div>

            <div className="text-[10px] tracking-wide text-white/60">
              Real Estate
            </div>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-amber-400"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition-colors duration-200 hover:bg-amber-300"
          >
            <Phone size={16} />

            <span>
              +93 728 345 023
            </span>
          </a>
        </div>

        {/* =========================
            MOBILE CONTROLS
        ========================== */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language */}
          <LanguageSwitcher />

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 text-white transition-colors duration-200 hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Phone */}
            <a
              href={`tel:${PHONE}`}
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3 font-bold text-slate-950 transition-colors duration-200 hover:bg-amber-300"
            >
              <Phone size={17} />

              <span>
                +93 728 345 023
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}