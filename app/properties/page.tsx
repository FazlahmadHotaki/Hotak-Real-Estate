"use client";

import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { useLanguage } from "@/components/LanguageProvider";

export default function PropertiesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page Header */}
        <div className="mb-12">
          <p className="font-bold text-amber-600">
            {t.pages.properties.label}
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            {t.pages.properties.title}
          </h1>

          <p className="mt-4 text-slate-500">
            {t.pages.properties.description}
          </p>
        </div>

        {/* Properties */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </main>
  );
}