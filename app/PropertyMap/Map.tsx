"use client";

const DEFAULT_LATITUDE = 34.3233611;
const DEFAULT_LONGITUDE = 62.1744167;

export default function PropertyMap() {
  const mapUrl = `https://maps.google.com/maps?q=${DEFAULT_LATITUDE},${DEFAULT_LONGITUDE}&t=k&z=17&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${DEFAULT_LATITUDE},${DEFAULT_LONGITUDE}`;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Property Location
          </h1>

          <p className="mt-2 text-gray-600">
            Satellite location of the property.
          </p>
        </div>

        {/* Coordinates */}
        <div className="mb-5 rounded-xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Property Coordinates
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-500">
                Latitude
              </p>

              <p className="mt-1 font-mono text-lg font-semibold text-gray-900">
                {DEFAULT_LATITUDE}° N
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-500">
                Longitude
              </p>

              <p className="mt-1 font-mono text-lg font-semibold text-gray-900">
                {DEFAULT_LONGITUDE}° E
              </p>
            </div>
          </div>
        </div>

        {/* Google Satellite Map */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <iframe
            title="Property Satellite Map"
            src={mapUrl}
            width="100%"
            height="500"
            className="block h-[400px] w-full border-0 sm:h-[500px] lg:h-[600px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Property Location
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {DEFAULT_LATITUDE}° N, {DEFAULT_LONGITUDE}° E
              </p>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
            >
              Get Directions
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}