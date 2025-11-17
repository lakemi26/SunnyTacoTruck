import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority: boolean;
};

export default function Images({
  src,
  alt,
  priority = false,
  className = "",
}: ImageProps) {
  return (
    <div
      className={`relative w-full max-w-[600px] h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-md ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
