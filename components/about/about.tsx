import Image from "next/image";
import Images from "../utils/images";
import Title from "../utils/titles";

export default function About() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-10">
        <Images
          alt="Sunny Taco Truck at night"
          src="/about/AboutUs.png"
          priority
          className="xl:ml-[100px]"
        />

        <div className="flex flex-col gap-4 max-w-[600px] xl:ml-10">
          <Title text="About the truck" />

          <p className="font-inter text-[#2E2E2E] max-w-[480px] font-medium text-[18px] xl:text-[22px]">
            Sunny Taco Truck was born to bring sunny flavors to busy streets. We
            serve Mexican-inspired food with a fresh twist - quick to grab, fun
            to eat, and perfect for markets, offices and events.
          </p>

          <div className="flex flex-col gap-8 max-w-[480px]">
            <p className="flex gap-2 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon fresh"
                src="/about/Fresh.png"
                width={50}
                height={30}
              />
              Fresh ingredients every day
            </p>

            <p className="flex gap-7 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon Street"
                src="/about/Street.png"
                width={30}
                height={37}
              />
              Street-food vibes
            </p>

            <p className="flex gap-2 text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              <Image
                alt="Icon Vegan"
                src="/about/Vegan.png"
                width={50}
                height={30}
              />
              Vegetarian options available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
