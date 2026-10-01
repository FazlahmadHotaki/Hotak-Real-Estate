import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/properties/office.jpg"
            alt="دفتر رهنمای معاملات ملا داد محمد هوتک"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-bold text-amber-400">درباره ما</p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            معاملات املاک،
            <span className="block text-amber-400">با اعتماد بیشتر</span>
          </h2>

          <p className="mt-6 leading-8 text-white/65">
            دفتر رهنمای معاملات ملا داد محمد هوتک در زمینه خرید، فروش، رهن و
            کرایه خانه، زمین و املاک فعالیت می‌کند. هدف ما ارائه خدمات ساده،
            شفاف و قابل اعتماد برای مشتریان است.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "مشاوره در خرید و فروش املاک",
              "معرفی املاک مناسب با نیاز مشتری",
              "رهن و کرایه خانه و املاک",
              "راهنمایی در روند معاملات",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={21} />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}