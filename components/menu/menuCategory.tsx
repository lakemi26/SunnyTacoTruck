interface MenuCategoryProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function MenuCategory({
  icon,
  title,
  children,
}: MenuCategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#E58155] text-2xl font-semibold mb-4 font-poppins">
        {icon}
        {title}
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
