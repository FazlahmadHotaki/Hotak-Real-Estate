import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "@/data/properties";

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
          {property.purpose}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-sm text-slate-500">
          <MapPin size={15} />
          {property.location}
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {property.title}
        </h3>

        <p className="mt-2 text-lg font-black text-amber-600">
          {property.price}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
          {property.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble size={17} />
              {property.bedrooms} اتاق
            </span>
          )}

          {property.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={17} />
              {property.bathrooms} حمام
            </span>
          )}

          <span className="flex items-center gap-1">
            <Maximize size={17} />
            {property.area}
          </span>
        </div>
      </div>
    </Link>
  );
}