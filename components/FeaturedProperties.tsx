import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-bold text-amber-600">املاک منتخب</p>

            <h2 className="text-4xl font-black text-slate-950 md:text-5xl">
              ملک مناسب خود را پیدا کنید
            </h2>

            <p className="mt-4 max-w-xl text-slate-500">
              مجموعه‌ای از خانه‌ها، آپارتمان‌ها و زمین‌های موجود برای فروش.
            </p>
          </div>

          <Link
            href="/properties"
            className="flex items-center gap-2 font-bold text-slate-900"
          >
            مشاهده همه
            <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}