"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import Navbar from "./Navbar";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t, language } = useLanguage();

  const Arrow =
    language === "en" ? ArrowRight : ArrowLeft;

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/properties/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/60 to-transparent" />

      <Navbar />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pt-20">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            <ShieldCheck
              size={17}
              className="text-amber-400"
            />

            {t.hero.badge}
          </div>

          <h1 className="text-5xl font-black leading-[1.1] text-white md:text-7xl">

            {t.hero.title1}

            <span className="block text-amber-400">
              {t.hero.title2}
            </span>

            {t.hero.title3}

          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="/properties"
              className="flex items-center gap-2 rounded-full bg-amber-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
            >
              {t.hero.viewProperties}

              <Arrow size={18} />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              {t.hero.contact}
            </Link>

          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/60">

            <MapPin
              size={17}
              className="text-amber-400"
            />

            {t.hero.location}

          </div>

        </div>
      </div>
    </section>
  );
}