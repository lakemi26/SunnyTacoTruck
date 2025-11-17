import Images from "../utils/images";
import OutlineButton from "../utils/outlineButton";
import PrimaryButton from "../utils/primaryButton";
import Tagline from "./tagline";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFF6E1] py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col-reverse xl:flex-row items-center gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 max-w-xl m-auto">
          <Tagline />

          <div className="flex flex-col gap-3 m-auto">
            <h1 className="text-[50px] md:text-[85px] font-pacifico text-[#FFC252] leading-[1.1]  -rotate-7 text-center">
              Sunny
            </h1>

            <h2 className="text-[40px] md:text-[60px] md:text-5xl font-bold text-[#5A422A]">
              Taco Truck
            </h2>
          </div>

          <p className="text-[25px] md:text-[36px] text-[#5B3A1E] text-center mt-2 m-auto">
            Flavor that follows sun.
          </p>

          <p className="text-base text-[16px] md:text-[18px] font-inter text-[#3A3A3A] text-center leading-relaxed max-w-md">
            Fresh street-style tacos, bowls and snacks rolling through the city.
            Made with bright ingredients and a lot of good energy.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-row gap-4 mt-4 m-auto">
            <PrimaryButton href="#menu">See today&apos;s menu</PrimaryButton>
            <OutlineButton href="#location">Find our location</OutlineButton>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <Images alt="Sunny taco truck at night" src="/hero/Hero.png" priority />
      </div>
    </section>
  );
}
