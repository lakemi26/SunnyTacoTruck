"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#E58155] py-4">
      <div className="max-w-[1440px] mx-auto px-4 text-center text-white text-sm font-inter">
        &copy; {new Date().getFullYear()} Sunny Taco Truck &mdash; {t("footer.credit")}{" "}
        <a
          href="https://wwww.lakemi.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80"
        >
          Lakemi Works
        </a>
      </div>
    </footer>
  );
}
