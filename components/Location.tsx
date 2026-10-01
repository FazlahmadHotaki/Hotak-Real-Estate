"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Location() {
  const { t } = useLanguage();

  const DEFAULT_LAT = 34.3233611;
  const DEFAULT_LNG = 62.1744167;

  const [latitude, setLatitude] = useState(DEFAULT_LAT);
  const [longitude, setLongitude] = useState(DEFAULT_LNG);

  const [latInput, setLatInput] = useState(String(DEFAULT_LAT));
  const [lngInput, setLngInput] = useState(String(DEFAULT_LNG));

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=k&z=17&output=embed`;

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=` +
    `${latitude},${longitude}`;

  const handleShowLocation = () => {
    const newLat = Number(latInput);
    const newLng = Number(lngInput);

    if (
      Number.isNaN(newLat) ||
      Number.isNaN(newLng) ||
      newLat < -90 ||
      newLat > 90 ||
      newLng < -180 ||
      newLng > 180
    ) {
      return;
    }

    setLatitude(newLat);
    setLongitude(newLng);
  };

  return (
    <section
      id="location"
      className="bg-stone-50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              {t.location.label}
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {t.location.title}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              {t.location.description}
            </p>
          </div>

          {/* Current Coordinates */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">
              {t.location.coordinates}
            </p>

            <p className="mt-3 font-semibold text-gray-900">
              {latitude}° N
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {longitude}° E
            </p>
          </div>
        </div>

        {/* Coordinate Input */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            {t.propertyMap.coordinates}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Enter coordinates such as 34.3233611, 62.1744167
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr_auto]">

            {/* Latitude */}
            <div>
              <label
                htmlFor="latitude"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                {t.location.latitudeLabel}
              </label>

              <input
                id="latitude"
                type="number"
                step="any"
                value={latInput}
                onChange={(e) => setLatInput(e.target.value)}
                placeholder="34.3233611"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Longitude */}
            <div>
              <label
                htmlFor="longitude"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                {t.location.longitudeLabel}
              </label>

              <input
                id="longitude"
                type="number"
                step="any"
                value={lngInput}
                onChange={(e) => setLngInput(e.target.value)}
                placeholder="62.1744167"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
  type="button"
  onClick={handleShowLocation}
  className="w-full rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 md:w-auto"
>
  {t.location.showLocation}
</button>
            </div>
          </div>

          {/* Selected coordinates */}
          <div className="mt-5 rounded-xl bg-stone-50 p-4">
            <p className="text-sm text-gray-500">
              {t.propertyMap.coordinates}
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {latitude}° N, {longitude}° E
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <iframe
            key={`${latitude}-${longitude}`}
            title={t.location.mapTitle}
            src={mapUrl}
            width="100%"
            height="500"
            className="block h-[350px] w-full border-0 sm:h-[450px] lg:h-[550px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map Footer */}
          <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t.location.propertyLocation}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {latitude}° N, {longitude}° E
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
            >
              {t.location.getDirections}

              <span aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Latitude */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.location.latitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {latitude}° N
            </p>
          </div>

          {/* Longitude */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.location.longitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {longitude}° E
            </p>
          </div>

          {/* Map Type */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">
              {t.location.mapType}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {t.location.satelliteImagery}
            </p>
          </div>

        </div>

        {/* Coordinate Map Link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/PropertyMap"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            {t.propertyMap.coordinatePageLink}

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}