import Image from "next/image";

export default function Tagline(){
    return(
        <p className="uppercase tracking-[0.2em] text-[16px] md:text-[20px] font-poppins font-semibold text-[#E86A33] flex gap-3 items-center m-auto">
      <span className="flex items-center gap-3">
        <Image alt="Icon Sun and taco" src="/hero/IconHero.png" width={25} height={25}/>
        STREET-MADE
      </span>
      <span>•</span>
      <span>FRESH DAILY</span>
    </p>
    )
}