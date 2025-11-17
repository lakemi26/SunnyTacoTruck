interface MenuItemProps {
  name: string;
  desc: string;
}

export default function MenuItem({ name, desc }: MenuItemProps) {
  return (
    <p className="font-popins text-[#3A3A3A] text-[16px]">
      <span className="font-bold text-[#E58155]">{name}</span>
      <br />
      {desc}
    </p>
  );
}
