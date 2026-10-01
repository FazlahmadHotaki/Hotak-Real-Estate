"use client";

import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

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
  const [location, setLocation] = useState<Location>({
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });

  return (
    <div className="relative h-[350px] w-full sm:h-[450px] lg:h-[550px]">
      <MapContainer
        center={[DEFAULT_LATITUDE, DEFAULT_LONGITUDE]}
        zoom={17}
        doubleClickZoom={false}
        scrollWheelZoom={true}
        className="!h-full !w-full"
      >
        <TileLayer
          attribution="Tiles © Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        <MapClickHandler onLocationChange={setLocation} />

        <Marker
          position={[location.latitude, location.longitude]}
          icon={markerIcon}
        />
      </MapContainer>

      <div className="pointer-events-none absolute left-4 top-4 z-[1000] rounded-xl bg-white/95 px-4 py-3 text-sm font-medium text-gray-700 shadow-lg backdrop-blur">
        Double-click on the map to select a location
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 z-[1000] rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
        <p className="text-xs font-medium text-gray-500">
          Coordinates
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-900">
          {location.latitude}° N
        </p>

        <p className="text-sm font-semibold text-gray-900">
          {location.longitude}° E
        </p>
      </div>
    </div>
  );
}