"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react";

import type { Property } from "@/data/properties";
import { useLanguage } from "./LanguageProvider";

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  const { language, t } = useLanguage();

  const title = property.title[language];
  const purpose = property.purpose[language];
  const price = property.price[language];
  const location = property.location[language];
  const area = property.area[language];

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
          {purpose}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={15} />
          {location}
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-lg font-black text-amber-600">
          {price}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
          {property.bedrooms !== undefined && (
            <span className="flex items-center gap-1">
              <BedDouble size={17} />
              {property.bedrooms} {t.property.bedrooms}
            </span>
          )}

          {property.bathrooms !== undefined && (
            <span className="flex items-center gap-1">
              <Bath size={17} />
              {property.bathrooms} {t.property.bathrooms}
            </span>
          )}

          <span className="flex items-center gap-1">
            <Maximize size={17} />
            {area}
          </span>
        </div>
      </div>
    </Link>
  );
}