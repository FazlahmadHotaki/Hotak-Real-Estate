import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react";

import { properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }) {
  const { id } = await params;

  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28">
      <div className="mx-auto max-w-6xl px-6">

        <Link
          href="/properties"
          className="mb-7 inline-flex items-center gap-2 font-bold text-slate-600"
        >
          <ArrowRight size={18} />
          بازگشت به املاک
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Property Image */}
          <div className="relative h-[400px] md:h-[550px]">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Property Information */}
          <div className="p-7 md:p-10">

            <div className="flex flex-col justify-between gap-5 md:flex-row">

              <div>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} />
                  {property.location}
                </div>

                <h1 className="text-3xl font-black md:text-5xl">
                  {property.title}
                </h1>
              </div>

              <div className="text-2xl font-black text-amber-600">
                {property.price}
              </div>

            </div>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-6 border-y border-slate-100 py-6 text-slate-600">

              {property.bedrooms && (
                <span className="flex items-center gap-2">
                  <BedDouble />
                  {property.bedrooms} اتاق
                </span>
              )}

              {property.bathrooms && (
                <span className="flex items-center gap-2">
                  <Bath />
                  {property.bathrooms} حمام
                </span>
              )}

              <span className="flex items-center gap-2">
                <Maximize />
                {property.area}
              </span>

            </div>

            {/* Description */}
            <h2 className="mt-8 text-2xl font-black">
              توضیحات ملک
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-500">
              {property.description}
            </p>

            {/* Contact */}
            <a
              href="tel:+93700000000"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              تماس برای این ملک
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}