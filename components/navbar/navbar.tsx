"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./logo";
import Menu from "./menu";
import UnderlineLink from "./underlineLink";
import SocialIcons from "./socialIcons";
import LanguageToggle from "./languageToggle";

const NAV_LINKS = [
  { href: "#home", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#menu", key: "nav.menu" },
  { href: "#findUs", key: "nav.findUs" },
];

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 relative text-[#E86A33]">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between lg:hidden">
        <Logo />
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <Menu />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-around h-full">
        <Logo />

        <nav className="flex items-center justify-center gap-8 text-xl font-semibold font-poppins">
          {NAV_LINKS.map((item) => (
            <UnderlineLink key={item.href} href={item.href}>
              {t(item.key)}
            </UnderlineLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SocialIcons />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
