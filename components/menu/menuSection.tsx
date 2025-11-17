export default function MenuSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full py-16 bg-[#FFF6E1] shadow-[0_4px_20px_2px_rgba(232,106,51,0.17)] ">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:ml-[325px]">
        {children}
      </div>
    </section>
  );
}
