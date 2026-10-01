"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/properties/office.jpg"
            alt={t.about.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="font-bold text-amber-400">
            {t.about.label}
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            {t.about.title}

            <span className="block text-amber-400">
              {t.about.highlight}
            </span>
          </h2>

          <p className="mt-6 leading-8 text-white/65">
            {t.about.description}
          </p>

          <div className="mt-8 space-y-4">
            {t.about.points.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  className="text-amber-400"
                  size={21}
                />

                <span className="text-white/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}