import Images from "../utils/images";
import Title from "../utils/titles";
import Link from "next/link";

export default function Location() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-10">
        <Images
          alt="Sunny Taco Truck at day time"
          src="/location/findUs.png"
          priority
          className="xl:ml-[100px]"
        />

        <div className="flex flex-col gap-4 max-w-[600px] xl:ml-10">
          <Title text="Where to find us today" />

          <div className="flex flex-col gap-8 max-w-[480px]">
            <p className="text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              We park around town from Monday to Friday, 11AM - 10PM.
            </p>

            <p className=" text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              Weekends: local food markets & events.
            </p>

            <p className="text-[#2E2E2E] font-medium font-inter text-[18px] xl:text-[22px]">
              DM us on Instagram for today’s location.
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
