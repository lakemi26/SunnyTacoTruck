"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MenuCard from "./menuCard";

export default function MenuGrid() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8  mt-8 max-w-[1440px]">
      <MenuCard
        src="/menu/fish.png"
        title={t("menu.bajaTitle")}
        description={t("menu.bajaDesc")}
      />
      <MenuCard
        src="/menu/chicken.png"
        title={t("menu.chickenTitle")}
        description={t("menu.chickenDesc")}
      />
      <MenuCard
        src="/menu/veggie.png"
        title={t("menu.veggieTitle")}
        description={t("menu.veggieDesc")}
      />
      <MenuCard
        src="/menu/churros.png"
        title={t("menu.churrosTitle")}
        description={t("menu.churrosDesc")}
      />
    </div>
  );
}
