"use client";

import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import SocialIcons from "./socialIcons";
import { NAV_ITEMS } from "./navItems";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={50}
        color="#E86A33"
        duration={0.8}
        label="Open/Close menu"
      />

      {isOpen && (
        <div className="absolute right-4 top-20 bg-[#FFF8EC] shadow-lg rounded-lg p-6 flex flex-col gap-4 text-[#E86A33] text-lg font-medium z-50">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-[#FFD369]">
            <SocialIcons />
          </div>
        </div>
      )}
    </div>
  );
}
