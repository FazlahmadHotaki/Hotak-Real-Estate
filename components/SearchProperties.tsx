"use client";

import { Search } from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export default function SearchProperties() {
const { t } = useLanguage();

return ( <section className="relative z-10 -mt-16 px-6"> <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-2xl"> <div className="mb-5"> <h2 className="text-2xl font-black text-slate-900">
{t.search.title} </h2>

      <p className="mt-1 text-sm text-slate-500">
        {t.search.description}
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-4">
      {/* Purpose */}
      <select
        defaultValue=""
        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400"
      >
        <option value="" disabled>
          {t.search.purpose}
        </option>

        <option value="sale">
          {t.search.sale}
        </option>

        <option value="rent">
          {t.search.rent}
        </option>
      </select>

      {/* Property Type */}
      <select
        defaultValue=""
        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400"
      >
        <option value="" disabled>
          {t.search.type}
        </option>

        <option value="house">
          {t.search.house}
        </option>

        <option value="apartment">
          {t.search.apartment}
        </option>

        <option value="land">
          {t.search.land}
        </option>

        <option value="shop">
          {t.search.shop}
        </option>
      </select>

      {/* Location */}
      <input
        type="text"
        placeholder={t.search.location}
        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400"
      />

      {/* Search Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-slate-800"
      >
        <Search size={19} />

        {t.search.search}
      </button>
    </div>
  </div>
</section>

);
}
