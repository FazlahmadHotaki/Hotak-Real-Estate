"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import { useLanguage } from "../../components/LanguageProvider";

import "leaflet/dist/leaflet.css";

const DEFAULT_LATITUDE = 34.3233611;
const DEFAULT_LONGITUDE = 62.1744167;

type Location = {
  latitude: number;
  longitude: number;
};

/* Marker */
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

/* Double-click handler */
function MapClickHandler({
  onLocationChange,
}: {
  onLocationChange: (location: Location) => void;
}) {
  useMapEvents({
    dblclick(event) {
      onLocationChange({
        latitude: Number(event.latlng.lat.toFixed(7)),
        longitude: Number(event.latlng.lng.toFixed(7)),
      });
    },
  });

  return null;
}

export default function PropertyMapPage() {
  const { t } = useLanguage();

  const [location, setLocation] = useState<Location>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=` +
    `${location.latitude},${location.longitude}`;

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

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

          {/* Coordinates */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              {t.propertyMap.coordinates}
            </p>

            <p className="mt-3 font-semibold text-gray-900">
              {t.propertyMap.latitude}: {location.latitude}° N
            </p>

            <p className="mt-1 font-semibold text-gray-900">
              {t.propertyMap.longitude}: {location.longitude}° E
            </p>

          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[550px]">

            <MapContainer
              center={[
                DEFAULT_LATITUDE,
                DEFAULT_LONGITUDE,
              ]}
              zoom={17}
              doubleClickZoom={false}
              scrollWheelZoom={true}
              className="!h-full !w-full"
            >

              {/* Satellite layer */}
              <TileLayer
                attribution="Tiles © Esri"
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />

              {/* Listen for double-click */}
              <MapClickHandler
                onLocationChange={setLocation}
              />

              {/* Marker */}
              <Marker
                position={[
                  location.latitude,
                  location.longitude,
                ]}
                icon={markerIcon}
              />

            </MapContainer>

            {/* Instructions */}
            <div className="pointer-events-none absolute left-4 top-4 z-[1000] rounded-xl bg-white/95 px-4 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur">
              Double-click on the map to select a location
            </div>

            {/* Coordinates on map */}
            <div className="pointer-events-none absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">

              <p className="text-xs font-medium text-gray-500">
                {t.propertyMap.coordinates}
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-900">
                {location.latitude}° N
              </p>

              <p className="text-sm font-semibold text-gray-900">
                {location.longitude}° E
              </p>

            </div>

          </div>

          {/* Map Footer */}
          <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">

            <div>

              <h2 className="text-xl font-semibold text-gray-900">
                {t.propertyMap.propertyLocation}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {location.latitude}° N, {location.longitude}° E
              </p>

            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
            >
              {t.propertyMap.getDirections}

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
              {t.propertyMap.latitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {location.latitude}° N
            </p>

          </div>

          {/* Longitude */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">

            <p className="text-sm text-gray-500">
              {t.propertyMap.longitudeLabel}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {location.longitude}° E
            </p>

          </div>

          {/* Map Type */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">

            <p className="text-sm text-gray-500">
              {t.propertyMap.mapType}
            </p>

            <p className="mt-2 font-semibold text-gray-900">
              {t.propertyMap.satelliteImagery}
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}