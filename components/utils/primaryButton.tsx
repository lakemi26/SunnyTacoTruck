"use client";

import Link from "next/link";

export default function PrimaryButton({href, children}: {href: string; children: React.ReactNode}){
    return(
        <Link
            href={href}
            className="bg-[#E86A33] text-white px-6 py-3 rounded-full font-poppins font-semibold text-base shadow-sm hover:opacity-90 transition"
        >
            {children}
        </Link>
    );
};