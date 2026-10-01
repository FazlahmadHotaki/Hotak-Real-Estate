"use client";

import { Search } from "lucide-react";

export default function SearchProperties() {
  return (
    <section className="relative z-10 -mt-16 px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-5">
          <h2 className="text-2xl font-black text-slate-900">
            ملک مورد نظر خود را جستجو کنید
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            نوع ملک و موقعیت مورد نظر خود را انتخاب کنید.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400">
            <option>نوع معامله</option>
            <option>فروش</option>
            <option>کرایه</option>
          </select>

          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400">
            <option>نوع ملک</option>
            <option>خانه</option>
            <option>آپارتمان</option>
            <option>زمین</option>
            <option>دوکان</option>
          </select>

          <input
            type="text"
            placeholder="موقعیت، محله..."
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-amber-400"
          />

          <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-slate-800">
            <Search size={19} />
            جستجو
          </button>
        </div>
      </div>
    </section>
  );
}