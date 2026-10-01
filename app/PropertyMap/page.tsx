"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { useLanguage } from "../../components/LanguageProvider";

const PropertyMapClient = dynamic(
  () => import("./PropertyMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[350px] w-full items-center justify-center bg-gray-100 text-gray-500 sm:h-[450px] lg:h-[550px]">
        Loading map...
      </div>
    ),
  }
);

export default function PropertyMapPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Home Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm transition hover:border-emerald-900 hover:bg-emerald-50 hover:text-emerald-900"
          >
            <span aria-hidden="true">←</span>
            {t.nav.home}
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              {t.propertyMap.label}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {t.propertyMap.title}
            </h1>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              {t.propertyMap.description}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              {t.propertyMap.coordinates}
            </p>

            <p className="mt-3 font-semibold text-gray-900">
              {t.propertyMap.latitude}: 34.3233611° N
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {t.propertyMap.longitude}: 62.1744167° E
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <PropertyMapClient />

          {/* Map Footer */}
          <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t.propertyMap.propertyLocation}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                34.3233611° N, 62.1744167° E
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=34.3233611,62.1744167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
            >
              {t.propertyMap.getDirections}

              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.propertyMap.latitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              34.3233611° N
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.propertyMap.longitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              62.1744167° E
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.propertyMap.mapType}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {t.propertyMap.satelliteImagery}
            </p>
          </div>

        </div>

        {/* Bottom Home Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            <span aria-hidden="true">←</span>
            {t.nav.home}
          </Link>
        </div>

      </div>
    </main>
  );
}