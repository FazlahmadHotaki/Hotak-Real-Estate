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

export default function PropertyMapClient() {
  const { t } = useLanguage();

  const [location, setLocation] = useState<Location>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });

  const [copied, setCopied] = useState(false);

  const coordinates =
    `${location.latitude}° N, ${location.longitude}° E`;

  const handleCopyCoordinates = async () => {
    try {
      await navigator.clipboard.writeText(coordinates);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy coordinates:", error);
    }
  };

  return (
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
        {/* Satellite Layer */}
        <TileLayer
          attribution="Tiles © Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        {/* Double-click location selector */}
        <MapClickHandler
          onLocationChange={(newLocation) => {
            setLocation(newLocation);
            setCopied(false);
          }}
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
        {t.propertyMap.selectLocationInstruction}
      </div>

      {/* Coordinates Box */}
      <div className="absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">

        <p className="text-xs font-medium text-gray-500">
          {t.propertyMap.coordinates}
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-900">
          {location.latitude}° N
        </p>

        <p className="text-sm font-semibold text-gray-900">
          {location.longitude}° E
        </p>

        {/* Copy Coordinates */}
        <button
          type="button"
          onClick={handleCopyCoordinates}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-800"
        >
          {copied
            ? t.propertyMap.copied
            : t.propertyMap.copyCoordinates}

          <span aria-hidden="true">
            {copied ? "✓" : "⧉"}
          </span>
        </button>

      </div>
    </div>
  );
}