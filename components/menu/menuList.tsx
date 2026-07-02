"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MenuCategory from "./menuCategory";
import MenuItem from "./menuItem";
import Image from "next/image";

export default function MenuList() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
      {/* SIDES */}
      <MenuCategory
        icon={<Image src="/menu/sun.png" alt="sun" width={24} height={24} />}
        title={t("menu.sides")}
      >
        <MenuItem name={t("menu.friesName")} desc={t("menu.friesDesc")} />
        <MenuItem name={t("menu.nachosName")} desc={t("menu.nachosDesc")} />
        <MenuItem name={t("menu.eloteName")} desc={t("menu.eloteDesc")} />
        <MenuItem
          name={t("menu.guacamoleName")}
          desc={t("menu.guacamoleDesc")}
        />
      </MenuCategory>

      {/* DRINKS */}
      <MenuCategory
        icon={
          <Image src="/menu/drinks.png" alt="drink" width={24} height={24} />
        }
        title={t("menu.drinks")}
      >
        <MenuItem name={t("menu.mangoName")} desc={t("menu.mangoDesc")} />
        <MenuItem name={t("menu.lemonName")} desc={t("menu.lemonDesc")} />
        <MenuItem
          name={t("menu.strawberryName")}
          desc={t("menu.strawberryDesc")}
        />
        <MenuItem
          name={t("menu.tamarindName")}
          desc={t("menu.tamarindDesc")}
        />
      </MenuCategory>
    </div>
  );
}
