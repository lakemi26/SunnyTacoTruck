import Title from "../utils/titles";
import MenuGrid from "./menuGrid";
import MenuList from "./menuList";
import MenuSection from "./menuSection";

export default function Menu() {
  return (
    <MenuSection>
      <Title text="Our sunny bites" />

      <p className="font-inter mt-2 text-[#3A3A3A]">
        A taste of sunshine in every bite
      </p>

      <MenuGrid />
      <MenuList />
    </MenuSection>
  );
}
