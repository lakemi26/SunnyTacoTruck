"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Images from "../utils/images";
import Title from "../utils/titles";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-10">
        <Images
          alt={t("about.imgAlt")}
          src="/about/AboutUs.png"
          priority
          className="xl:ml-[100px]"
        />

        <div className="flex flex-col gap-4 max-w-[600px] xl:ml-10">
          <Title text={t("about.title")} />

          <p className="font-inter text-[#2E2E2E] max-w-[480px] font-medium text-[18px] xl:text-[22px]">
            {t("about.description")}
          </p>

          <div className="flex flex-col gap-8 max-w-[480px]">
            <p className="flex gap-2 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon fresh"
                src="/about/Fresh.png"
                width={50}
                height={30}
              />
              {t("about.fresh")}
            </p>

            <p className="flex gap-7 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon Street"
                src="/about/Street.png"
                width={30}
                height={37}
              />
              {t("about.street")}
            </p>

            <p className="flex gap-2 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon Vegan"
                src="/about/Vegan.png"
                width={50}
                height={30}
              />
              {t("about.vegan")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
