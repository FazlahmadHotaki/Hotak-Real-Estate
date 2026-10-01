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
    <main className="min-h-[95vh] bg-slate-50 px-3 pb-3 pt-5 sm:px-4 sm:pt-24 md:px-5 md:pt-5">
      <div className="mx-auto flex min-h-[calc(95vh-6rem)] max-w-5xl flex-col justify-center">

        {/* Header */}
        <div className="mx-auto w-full max-w-2xl shrink-0 text-center">

          <div className="mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-slate-950 shadow-sm sm:mb-2 sm:h-10 sm:w-10">
            <Calculator
              size={18}
              className="sm:h-5 sm:w-5"
            />
          </div>

          <p className="text-[11px] font-bold text-amber-600 sm:text-xs">
            {t.label}
          </p>

          <h1 className="mt-0.5 text-xl font-black text-slate-950 sm:text-2xl md:text-3xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-1 max-w-xl text-[11px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
            {t.description}
          </p>

        </div>

        {/* Calculator Card */}
        <div className="mx-auto mt-3 w-full shrink-0 overflow-hidden rounded-2xl bg-white shadow-lg sm:mt-4 sm:rounded-3xl">

          <div className="grid md:grid-cols-2">

            {/* INPUT */}
            <section className="flex flex-col justify-center bg-slate-950 p-4 text-white sm:p-5 md:p-6">

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-slate-950 sm:mb-3 sm:h-10 sm:w-10">
                <Home size={18} />
              </div>

              <h2 className="text-base font-black sm:text-lg">
                {t.propertyPrice}
              </h2>

              <p className="mt-0.5 text-[11px] leading-4 text-white/60 sm:text-xs sm:leading-5">
                {t.description}
              </p>

              {/* Input */}
              <div className="mt-3 sm:mt-4">

                <label
                  htmlFor="property-price"
                  className="mb-1.5 block text-[11px] font-bold text-white/80 sm:text-xs"
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
                    className="block w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2.5 text-base font-black text-white outline-none placeholder:text-white/30 transition focus:border-amber-400 focus:bg-white/15 sm:rounded-xl sm:py-3 sm:text-lg"
                  />

                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-white/50 sm:text-xs">
                    {t.afn}
                  </span>

                </div>

              </div>

              {/* Note */}
              <div className="mt-3 flex items-start gap-1.5 rounded-lg border border-amber-400/20 bg-amber-400/10 p-2.5 sm:mt-4 sm:rounded-xl sm:p-3">
                <Percent
                  size={14}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <p className="text-[10px] leading-4 text-white/70 sm:text-xs sm:leading-5">
                  {t.note}
                </p>
              </div>

            </section>

            {/* RESULTS */}
            <section className="flex flex-col justify-center p-4 sm:p-5 md:p-6">

              <div className="grid gap-2.5 sm:gap-3">

                {/* Commission */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:rounded-2xl sm:p-4">

                  <div className="flex items-center justify-between gap-2">

                    <div className="min-w-0">

                      <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                        {t.commission}
                      </p>

                      <p className="mt-0.5 truncate text-xl font-black text-amber-600 sm:text-2xl">
                        {numericPrice > 0
                          ? formatNumber(commission)
                          : "—"}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400 sm:text-[11px]">
                        {numericPrice > 0
                          ? t.afn
                          : t.enterPrice}
                      </p>

                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 sm:h-9 sm:w-9">
                      <Percent size={15} />
                    </div>

                  </div>

                </div>

                {/* Rate */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:rounded-2xl sm:p-4">

                  <div className="flex items-center justify-between gap-2">

                    <div className="min-w-0">

                      <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                        {t.rate}
                      </p>

                      <p className="mt-0.5 text-xl font-black text-slate-950 sm:text-2xl">
                        1.5%
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400 sm:text-[11px]">
                        {t.rateDescription}
                      </p>

                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-amber-400 sm:h-9 sm:w-9">
                      <Calculator size={15} />
                    </div>

                  </div>

                </div>

                {/* Total */}
                <div className="rounded-xl bg-amber-400 p-3 shadow-sm sm:rounded-2xl sm:p-4">

                  <div className="flex items-center justify-between gap-2">

                    <div className="min-w-0">

                      <p className="text-[11px] font-bold text-slate-800 sm:text-xs">
                        {t.total}
                      </p>

                      <p className="mt-0.5 truncate text-xl font-black text-slate-950 sm:text-2xl">
                        {numericPrice > 0
                          ? formatNumber(total)
                          : "—"}
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-700 sm:text-[11px]">
                        {numericPrice > 0
                          ? t.afn
                          : t.enterPrice}
                      </p>

                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-amber-400 sm:h-9 sm:w-9">
                      <Wallet size={15} />
                    </div>

                  </div>

                </div>

              </div>

              {/* Formula */}
              <div className="mt-2.5 rounded-xl border border-slate-200 bg-white p-2.5 text-center sm:mt-3 sm:rounded-2xl sm:p-3">

                <p className="text-[10px] text-slate-500 sm:text-[11px]">
                  {t.formula}
                </p>

                <p className="mt-0.5 text-[11px] font-black text-slate-950 sm:text-xs">

                  {numericPrice > 0 ? (
                    <>
                      {formatNumber(numericPrice)}
                      {" × 0.015 = "}

                      <span className="text-amber-600">
                        {formatNumber(commission)} {t.afn}
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