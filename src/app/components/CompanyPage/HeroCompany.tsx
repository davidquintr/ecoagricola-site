import { dictionary } from "@/app/sources/dictionary";
import Image from "next/image";
import { BsBox } from "react-icons/bs";

interface Props { 
    icon: string;
    title: string;
    quantity: number;
}

export default function HeroCompany({icon, title, quantity}: Props) {
    return(
        <section className="bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px] bg-white">
            <div className="flex flex-col justify-center items-center gap-4 pb-32 pt-8 px-4 max-w-[1536px] mx-auto ">
                <span>{dictionary.companies_page.singular}</span>
                <Image className="object-contain" src={icon} alt="product icon" width={128} height={128} />
                <h1 className="text-4xl font-bold font-alegreya">{title}</h1>
                <div className="flex gap-1 items-center">
                    <BsBox className="size-4" />
                    <span>{dictionary.companies_page.product_count_text} {quantity}</span>
                </div>
            </div>
        </section>
    )
}