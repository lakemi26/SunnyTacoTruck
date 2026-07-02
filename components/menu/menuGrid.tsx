"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MenuCard from "./menuCard";

export default function MenuGrid() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-8">
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
