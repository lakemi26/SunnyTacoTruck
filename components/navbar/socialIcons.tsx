import Image from "next/image";
import Link from "next/link";

export default function SocialIcons(){
    return(
        <div className="flex">
            <Link 
                href="www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:opacity-90 transition"
            >
                <Image
                    src="/navbar/Instagram.png"
                    alt="Instagram"
                    width={35}
                    height={35}
                />
            </Link>

            <Link 
                href="www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg hover:opacity-90 transition"
            >
                <Image
                    src="/navbar/Whatsapp.png"
                    alt="WhatsApp"
                    width={35}
                    height={35}
                />
            </Link>
            
        </div>
    )
}