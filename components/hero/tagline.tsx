"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Tagline() {
  const { t } = useLanguage();

  return (
    <p className="uppercase tracking-[0.2em] text-[16px] md:text-[20px] font-poppins font-semibold text-[#E86A33] flex gap-3 items-center m-auto">
      <span className="flex items-center gap-3">
        <Image
          alt="Icon Sun and taco"
          src="/hero/IconHero.png"
          width={25}
          height={25}
        />
        {t("hero.tagline1")}
      </span>
      <span>•</span>
      <span>{t("hero.tagline2")}</span>
    </p>
  );
}
