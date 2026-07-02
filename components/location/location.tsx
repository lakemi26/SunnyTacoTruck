"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Images from "../utils/images";
import Title from "../utils/titles";
import Link from "next/link";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-10">
        <Images
          alt={t("location.imgAlt")}
          src="/location/findUs.png"
          priority
          className="xl:ml-[100px]"
        />

        <div className="flex flex-col gap-4 max-w-[600px] xl:ml-10">
          <Title text={t("location.title")} />

          <div className="flex flex-col gap-8 max-w-[480px]">
            <p className="text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              {t("location.line1")}
            </p>

            <p className=" text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              {t("location.line2")}
            </p>

            <p className="text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              {t("location.line3")}
            </p>

            <p className="text-[#EA6C12] font-bold font-inter text-[18px] xl:text-[22px] hover:underline">
              <Link href="https://www.instagram.com">@sunnytacotruck</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
