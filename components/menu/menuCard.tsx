import Image from "next/image";

interface MenuCardProps {
  src: string;
  title: string;
  description: string;
}

export default function MenuCard({ src, title, description }: MenuCardProps) {
  return (
    <div className="flex gap-4 bg-white shadow-[0_4px_20px_2px_rgba(232,106,51,0.17)] rounded-xl p-4 hover:scale-[1.02] transition max-w-[515px] max-h-[250px]">
      <Image
        src={src}
        alt={title}
        width={120}
        height={120}
        className="rounded-md object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-bold text-[#E58155] text-lg">{title}</h3>
        <p className="text-sm text-[#3A3A3A] leading-snug">{description}</p>
      </div>
    </div>
  );
}
