import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Location from "@/components/location/location";
import Menu from "@/components/menu/menu";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Menu />
      <Location />
    </div>
  );
}
