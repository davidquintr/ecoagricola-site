import { dictionary } from "@/app/sources/dictionary";
import Image from "next/image";

interface Props { 
    icon: string;
    title: string;
}

export default function HeroCompany({icon, title}: Props) {
    return(
        <section className="bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px] bg-white">
            <div className="flex flex-col justify-center items-center gap-4 pb-32 pt-8 px-4 max-w-[1536px] mx-auto ">
                <span>{dictionary.companies_page.singular}</span>
                <Image className="object-contain" src={icon} alt="product icon" width={128} height={128} />
                <h1 className="text-4xl font-bold font-alegreya">{title}</h1>
            </div>
        </section>
    )
}