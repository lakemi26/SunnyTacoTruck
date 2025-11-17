import MenuCategory from "./menuCategory";
import MenuItem from "./menuItem";
import Image from "next/image";

export default function MenuList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      {/* SIDES */}
      <MenuCategory
        icon={<Image src="/menu/sun.png" alt="sun" width={24} height={24} />}
        title="Sides"
      >
        <MenuItem
          name="Crunchy Fries"
          desc="Crispy, golden, and lightly seasoned - a street classic."
        />
        <MenuItem
          name="Cheesy Nachos"
          desc="Loaded with melted cheese, jalapeños, and that perfect crunch."
        />
        <MenuItem
          name="Elote Cup"
          desc="Grilled corn with creamy sauce, chili, and lime zest - a fiesta in a cup."
        />
        <MenuItem
          name="Mini Guacamole"
          desc="Fresh avocado dip served with crunchy tortilla chips."
        />
      </MenuCategory>

      {/* DRINKS */}
      <MenuCategory
        icon={
          <Image src="/menu/drinks.png" alt="drink" width={24} height={24} />
        }
        title="Drinks"
      >
        <MenuItem
          name="Mango Agua Fresca"
          desc="Refreshing and naturally sweet with tropical mango flavor."
        />
        <MenuItem
          name="Lemon-Lime Soda"
          desc="Sparkling, citrusy, and full of sunshine energy."
        />
        <MenuItem
          name="Strawberry Cooler"
          desc="Sweet and chilled with a bright berry twist."
        />
        <MenuItem
          name="Tamarind Juice"
          desc="A tangy-sweet traditional favorite with a tropical touch."
        />
      </MenuCategory>
    </div>
  );
}
