import MenuCard from "./menuCard";

export default function MenuGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8  mt-8 max-w-[1440px]">
      <MenuCard
        src="/menu/fish.png"
        title="Baja Fish Taco"
        description="Crispy battered fish, zesty slaw, and a squeeze of fresh lime."
      />
      <MenuCard
        src="/menu/chicken.png"
        title="Chicken Taco"
        description="Juicy marinated chicken with crunchy slaw and a touch of chili mayo."
      />
      <MenuCard
        src="/menu/veggie.png"
        title="Veggie Bowl"
        description="Grilled veggies, rice, pico de gallo, and avocado for the perfect sunny balance."
      />
      <MenuCard
        src="/menu/churros.png"
        title="Churro Bites"
        description="Golden, cinnamon-sugar churros served with creamy caramel dip."
      />
    </div>
  );
}
