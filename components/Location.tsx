
export default function Location() {
  const lat = 34.3233611;
  const lng = 62.1744167;

  const mapUrl =
    `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.04}%2C${lat - 0.025}%2C${lng + 0.04}%2C${lat + 0.025}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section id="location" className="bg-stone-50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
          Find Us
        </p>

        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Our Location
        </h2>

        <p className="mb-8 mt-4 text-gray-600">
          Explore the location of our real estate property.
        </p>

        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Real estate location map"
            src={mapUrl}
            className="h-[380px] w-full border-0 md:h-[500px]"
            loading="lazy"
          />

          {/* Custom real estate icon overlay */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-emerald-900 shadow-xl">
              <img
                src="https://img.icons8.com/?size=100&id=hmZnke9jb8oq&format=png&color=000000"
                alt=""
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-600">
            34°19'24.1"N, 62°10'27.9"E
          </p>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Get Directions ↗
          </a>
        </div>
      </div>
    </section>
  );
}