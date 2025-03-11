import { dictionary } from "@/app/sources/dictionary";
import Image from "next/image";

interface Props { 
    icon: string;
    title: string;
}

export default function HeroCat({icon, title}: Props) {
    return(
        <section className="bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px] bg-white">
            <div className="flex flex-col justify-center items-center gap-4 py-32 px-4 max-w-[1536px] mx-auto ">
                <span>{dictionary.category_products_page.title}</span>
                <Image className="object-contain" src={icon} alt="product icon" width={96} height={96} />
                <h1 className="text-4xl font-bold font-alegreya">{title}</h1>
            </div>
        </section>
    )
}