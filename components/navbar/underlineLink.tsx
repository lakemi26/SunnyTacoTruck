import Link from "next/link";

type Props = React.PropsWithChildren<{ href: string; className?: string }>;

export default function UnderlineLink({ href, className, children }: Props) {
  return (
    <Link href={href} className={`group relative ${className || ""}`}>
      {children}
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-linear-to-r from-[#E86A33] to-[#E86A33] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </Link>
  );
}
