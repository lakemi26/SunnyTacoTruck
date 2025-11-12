import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block">
      <Image
        src="/navbar/Logo.png"
        alt="Logo Sunny Taco Truck"
        width={200}
        height={80}
        className="block"
        priority
        unoptimized
      />
    </Link>
  );
}
