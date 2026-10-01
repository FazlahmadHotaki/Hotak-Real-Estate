"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const PHONE = "+93728345023";
const WHATSAPP = "https://wa.me/93728345023";

// Replace this with your real Telegram username.
// Example: https://t.me/hotak_real_estate
const TELEGRAM = "https://t.me/+93728345023";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-bold text-amber-600">
            تماس با ما
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            با ما در تماس باشید
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            برای خرید، فروش، رهن یا کرایه خانه و زمین با دفتر
            رهنمای معاملات ملا داد محمد هوتک تماس بگیرید.
          </p>
        </div>

        {/* Main Contact Box */}
        <div className="overflow-hidden rounded-[2rem] bg-amber-400 p-6 shadow-xl md:p-10 lg:p-12">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}
            <div className="flex flex-col justify-center">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                <Phone size={30} />
              </div>

              <h3 className="text-3xl font-black text-slate-950 md:text-4xl">
                آماده کمک به شما هستیم
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-slate-800/75">
                اگر قصد خرید یا فروش خانه، زمین، آپارتمان یا
                ملک تجاری را دارید، با ما تماس بگیرید.
              </p>

              <div className="mt-8">

                <p className="text-sm font-medium text-slate-700">
                  شماره تماس
                </p>

                <a
                  href={`tel:${PHONE}`}
                  className="mt-1 inline-block text-2xl font-black text-slate-950 transition hover:text-slate-700"
                  dir="ltr"
                >
                  +93 728 345 023
                </a>

              </div>

            </div>

            {/* Right */}
            <div className="grid gap-4">

              {/* Phone */}
              <a
                href="tel:+93728345023"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Phone size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-slate-500">
                    تماس تلفنی
                  </p>

                  <p
                    className="mt-1 font-bold text-slate-950"
                    dir="ltr"
                  >
                    +93 728 345 023
                  </p>
                </div>

                <ArrowLeft
                  size={19}
                  className="text-slate-400 transition group-hover:-translate-x-1"
                />
              </a>

              {/* WhatsApp */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <MessageCircle size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-slate-500">
                    واتساپ
                  </p>

                  <p className="mt-1 font-bold text-slate-950">
                    پیام در واتساپ
                  </p>
                </div>

                <ArrowLeft
                  size={19}
                  className="text-slate-400 transition group-hover:-translate-x-1"
                />
              </a>

              {/* Telegram */}
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Send size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-slate-500">
                    تلگرام
                  </p>

                  <p className="mt-1 font-bold text-slate-950">
                    پیام در تلگرام
                  </p>
                </div>

                <ArrowLeft
                  size={19}
                  className="text-slate-400 transition group-hover:-translate-x-1"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    آدرس دفتر
                  </p>

                  <p className="mt-1 font-bold text-slate-950">
                    هرات، افغانستان
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 border-t border-slate-950/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

              <div>
                <h4 className="text-xl font-black text-slate-950">
                  ملک مورد نظر خود را پیدا نکردید؟
                </h4>

                <p className="mt-1 text-sm text-slate-800/70">
                  با ما تماس بگیرید تا در پیدا کردن ملک مناسب کمک کنیم.
                </p>
              </div>

              <Link
                href="/properties"
                className="flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
              >
                مشاهده املاک
                <ArrowLeft size={18} />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}