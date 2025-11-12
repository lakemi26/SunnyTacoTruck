import Logo from "./logo";
import Menu from "./menu";
import UnderlineLink from "./underlineLink";
import { NAV_ITEMS } from "./navItems";
import SocialIcons from "./socialIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 relative text-[#E86A33]">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between mt-2 lg:hidden">
        <Logo />
        <Menu />
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-around h-full mt-2">
        <Logo />

        <nav className="flex items-center justify-center gap-8 text-xl font-semibold">
          {NAV_ITEMS.map((item) => (
            <UnderlineLink key={item.href} href={item.href}>
              {item.label}
            </UnderlineLink>
          ))}
        </nav>

        <SocialIcons />
      </div>
    </div>
  );
}
