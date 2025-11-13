"use client";

import Link from "next/link";

export default function OutlineButton({href, children} : {href:string; children:React.ReactNode}){
    return(
        <Link
         href={href} 
         className="border border-[#2E2E2E] text-[#2E2E2E] px-6 py-3 rounded-full font-poppins text-base hover:bg-black/5 transition">
        {children}
        </Link>
    )
}