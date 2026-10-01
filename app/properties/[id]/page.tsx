"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react";

import { properties } from "@/data/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function PropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const { language, t } = useLanguage();

  const property = properties.find(
    (item) => item.id === params.id
  );

  if (!property) {
    notFound();
  }

  const title = property.title[language];
  const type = property.type[language];
  const purpose = property.purpose[language];
  const price = property.price[language];
  const location = property.location[language];
  const area = property.area[language];
  const description = property.description[language];

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back */}
        <Link
          href="/properties"
          className="mb-7 inline-flex items-center gap-2 font-bold text-slate-600 transition hover:text-slate-950"
        >
          <ArrowLeft
            size={18}
            className="rtl:rotate-0 ltr:rotate-180"
          />

          {t.property.back}
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Property Image */}
          <div className="relative h-[400px] md:h-[550px]">
            <Image
              src={property.image}
              alt={title}
              fill
              priority
              className="object-cover"
            />

            {/* Purpose */}
            <div className="absolute right-5 top-5 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-slate-950">
              {purpose}
            </div>
          </div>

          {/* Property Information */}
          <div className="p-7 md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div>
                {/* Type */}
                <div className="mb-2 text-sm font-bold text-amber-600">
                  {type}
                </div>

                {/* Location */}
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  <span>{location}</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-black text-slate-950 md:text-5xl">
                  {title}
                </h1>
              </div>

              {/* Price */}
              <div className="text-2xl font-black text-amber-600 md:text-3xl">
                {price}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6 border-y border-slate-100 py-6 text-slate-600">
              {property.bedrooms !== undefined && (
                <span className="flex items-center gap-2">
                  <BedDouble size={21} />

                  <span>
                    {property.bedrooms}{" "}
                    {t.property.bedrooms}
                  </span>
                </span>
              )}

              {property.bathrooms !== undefined && (
                <span className="flex items-center gap-2">
                  <Bath size={21} />

                  <span>
                    {property.bathrooms}{" "}
                    {t.property.bathrooms}
                  </span>
                </span>
              )}

              <span className="flex items-center gap-2">
                <Maximize size={21} />

                <span>{area}</span>
              </span>
            </div>

            {/* Description */}
            <h2 className="mt-8 text-2xl font-black text-slate-950">
              {t.property.description}
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-500">
              {description}
            </p>

            {/* Contact */}
            <a
              href="tel:+93728345023"
              dir="ltr"
              className="mt-8 inline-flex items-center rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              {t.property.call}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}