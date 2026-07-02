"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Title from "../utils/titles";
import MenuGrid from "./menuGrid";
import MenuList from "./menuList";
import MenuSection from "./menuSection";

export default function Menu() {
  const { t } = useLanguage();

  return (
    <MenuSection>
      <div className="text-center">
        <Title text={t("menu.title")} />
        <p className="font-inter mt-2 text-[#3A3A3A]">{t("menu.subtitle")}</p>
      </div>

      <MenuGrid />
      <MenuList />
    </MenuSection>
  );
}
