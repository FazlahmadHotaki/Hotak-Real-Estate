"use client";

import Link from "next/link";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
const { t } = useLanguage();

return ( <footer className="bg-slate-950 py-12 text-white"> <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between"> <div> <Link href="/" className="text-2xl font-black">
هوتک<span className="text-amber-400">.</span> </Link>

      <p className="mt-2 text-sm text-white/50">
        {t.footer.description}
      </p>
    </div>

    <div className="flex gap-6 text-sm text-white/60">
      <Link href="/properties">
        {t.nav.properties}
      </Link>

      <Link href="/about">
        {t.nav.about}
      </Link>

      <Link href="/contact">
        {t.nav.contact}
      </Link>
    </div>

    <p className="text-sm text-white/40">
      © {new Date().getFullYear()} {t.footer.rights}
    </p>
  </div>
</footer>


);
}
