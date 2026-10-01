"use client";

import { useState } from "react";
import {
  Calculator,
  Home,
  Percent,
  Wallet,
} from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";

const COMMISSION_RATE = 1.5;

export default function CalculatorPage() {
  const { language } = useLanguage();

  const [price, setPrice] = useState("");

  const numericPrice = Number(price.replace(/,/g, ""));

  const commission =
    numericPrice > 0
      ? (numericPrice * COMMISSION_RATE) / 100
      : 0;

  const total =
    numericPrice > 0
      ? numericPrice + commission
      : 0;

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(
      language === "en" ? "en-US" : "fa-AF"
    ).format(value);
  };

  const content = {
    fa: {
      label: "محاسبه‌گر معاملات",
      title: "محاسبه کمیسیون معامله",
      description:
        "قیمت ملک را وارد کنید تا کمیسیون ۱.۵٪ محاسبه شود.",
      propertyPrice: "قیمت ملک",
      placeholder: "مثلاً ۲,۰۰۰,۰۰۰",
      commission: "کمیسیون دفتر",
      rate: "نرخ کمیسیون",
      total: "مجموع با کمیسیون",
      afn: "افغانی",
      rateDescription: "از ارزش معامله",
      note: "کمیسیون دفتر ۱.۵٪ از ارزش معامله است.",
      enterPrice: "قیمت ملک را وارد کنید",
      formula: "قیمت ملک × ۱.۵٪ = کمیسیون",
    },

    ps: {
      label: "د معاملې محاسبه",
      title: "د معاملې کمېشن محاسبه",
      description:
        "د ملکیت بیه ولیکئ تر څو ۱.۵٪ کمېشن محاسبه شي.",
      propertyPrice: "د ملکیت بیه",
      placeholder: "لکه ۲,۰۰۰,۰۰۰",
      commission: "د دفتر کمېشن",
      rate: "د کمېشن کچه",
      total: "له کمېشن سره ټولټال",
      afn: "افغانۍ",
      rateDescription: "د معاملې له ارزښت څخه",
      note: "د دفتر کمېشن د معاملې ۱.۵٪ دی.",
      enterPrice: "د ملکیت بیه ولیکئ",
      formula: "د ملکیت بیه × ۱.۵٪ = کمېشن",
    },

    en: {
      label: "Transaction Calculator",
      title: "Real Estate Commission",
      description:
        "Enter the property price to calculate the 1.5% commission.",
      propertyPrice: "Property Price",
      placeholder: "Example: 2,000,000",
      commission: "Office Commission",
      rate: "Commission Rate",
      total: "Total With Commission",
      afn: "AFN",
      rateDescription: "of transaction value",
      note: "Office commission is 1.5% of the transaction value.",
      enterPrice: "Enter the property price",
      formula: "Property Price × 1.5% = Commission",
    },
  };

  const t = content[language];

  return (
    <main className="min-h-[95vh] bg-slate-50 px-4 pb-6 pt-24 sm:px-5 md:px-6 md:pt-28">
      <div className="mx-auto flex min-h-[calc(95vh-7rem)] max-w-5xl flex-col justify-center">

        {/* Header */}
        <div className="mx-auto w-full max-w-2xl shrink-0 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-md sm:mb-3 sm:h-12 sm:w-12">
            <Calculator
              size={20}
              className="sm:h-6 sm:w-6"
            />
          </div>

          <p className="text-xs font-bold text-amber-600 sm:text-sm">
            {t.label}
          </p>

          <h1 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl md:text-4xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
            {t.description}
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto mt-4 w-full shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl sm:mt-5 sm:rounded-3xl">
          <div className="grid md:grid-cols-2">

            {/* INPUT SIDE */}
            <section className="flex flex-col justify-center bg-slate-950 p-5 text-white sm:p-6 md:p-7 lg:p-8">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950 sm:mb-4 sm:h-12 sm:w-12">
                <Home size={20} />
              </div>

              <h2 className="text-lg font-black sm:text-xl">
                {t.propertyPrice}
              </h2>

              <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
                {t.description}
              </p>

              {/* INPUT */}
              <div className="mt-4 sm:mt-5">
                <label
                  htmlFor="property-price"
                  className="mb-2 block text-xs font-bold text-white/80 sm:text-sm"
                >
                  {t.propertyPrice}
                </label>

                <div className="relative">
                  <input
                    id="property-price"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={price}
                    onChange={(event) =>
                      setPrice(event.target.value)
                    }
                    placeholder={t.placeholder}
                    className="block w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 text-lg font-black text-white outline-none placeholder:text-white/30 transition focus:border-amber-400 focus:bg-white/15 sm:py-4 sm:text-xl"
                  />

                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white/50 sm:text-sm">
                    {t.afn}
                  </span>
                </div>
              </div>

              {/* NOTE */}
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 sm:mt-5 sm:p-4">
                <Percent
                  size={17}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <p className="text-xs leading-5 text-white/70 sm:text-sm">
                  {t.note}
                </p>
              </div>
            </section>

            {/* RESULTS SIDE */}
            <section className="flex flex-col justify-center p-5 sm:p-6 md:p-7 lg:p-8">

              <div className="grid gap-3 sm:gap-4">

                {/* COMMISSION */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 sm:text-sm">
                        {t.commission}
                      </p>

                      <p className="mt-1 truncate text-2xl font-black text-amber-600 sm:text-3xl">
                        {numericPrice > 0
                          ? formatNumber(commission)
                          : "—"}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                        {numericPrice > 0
                          ? t.afn
                          : t.enterPrice}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 sm:h-11 sm:w-11">
                      <Percent size={18} />
                    </div>

                  </div>
                </div>

                {/* RATE */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500 sm:text-sm">
                        {t.rate}
                      </p>

                      <p className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">
                        1.5%
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400 sm:text-xs">
                        {t.rateDescription}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-amber-400 sm:h-11 sm:w-11">
                      <Calculator size={18} />
                    </div>

                  </div>
                </div>

                {/* TOTAL */}
                <div className="rounded-2xl bg-amber-400 p-4 shadow-md sm:p-5">
                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-800 sm:text-sm">
                        {t.total}
                      </p>

                      <p className="mt-1 truncate text-2xl font-black text-slate-950 sm:text-3xl">
                        {numericPrice > 0
                          ? formatNumber(total)
                          : "—"}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-700 sm:text-xs">
                        {numericPrice > 0
                          ? t.afn
                          : t.enterPrice}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-amber-400 sm:h-11 sm:w-11">
                      <Wallet size={18} />
                    </div>

                  </div>
                </div>

              </div>

              {/* FORMULA */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 text-center sm:mt-4 sm:p-4">
                <p className="text-[11px] text-slate-500 sm:text-xs">
                  {t.formula}
                </p>

                <p className="mt-1 text-xs font-black text-slate-950 sm:text-sm">
                  {numericPrice > 0 ? (
                    <>
                      {formatNumber(numericPrice)}
                      {" × 0.015 = "}

                      <span className="text-amber-600">
                        {formatNumber(commission)}{" "}
                        {t.afn}
                      </span>
                    </>
                  ) : (
                    <span className="text-slate-400">
                      {t.enterPrice}
                    </span>
                  )}
                </p>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}