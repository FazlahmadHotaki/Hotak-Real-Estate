import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="font-bold text-amber-600">املاک</p>

          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            همه املاک
          </h1>

          <p className="mt-4 text-slate-500">
            خانه، آپارتمان، زمین و املاک موجود برای فروش و کرایه.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </main>
  );
}