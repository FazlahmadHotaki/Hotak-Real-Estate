"use client";

import {
Home,
Handshake,
KeyRound,
FileCheck,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";

export default function Services() {
const { t } = useLanguage();

const services = [
{
icon: Home,
title: t.services.buying.title,
text: t.services.buying.description,
},
{
icon: Handshake,
title: t.services.selling.title,
text: t.services.selling.description,
},
{
icon: KeyRound,
title: t.services.renting.title,
text: t.services.renting.description,
},
{
icon: FileCheck,
title: t.services.consulting.title,
text: t.services.consulting.description,
},
];

return ( <section className="bg-white py-24"> <div className="mx-auto max-w-7xl px-6"> <div className="mx-auto mb-14 max-w-2xl text-center"> <p className="font-bold text-amber-600">
{t.services.label} </p>


      <h2 className="mt-3 text-4xl font-black text-slate-950">
        {t.services.title}
      </h2>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <Icon size={27} />
            </div>

            <h3 className="text-xl font-black">
              {service.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              {service.text}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

);
}
