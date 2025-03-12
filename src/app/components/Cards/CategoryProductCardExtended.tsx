import { settings } from "@/app/sources/settings";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Props {
    name: string;
    slug: string;
    icon: string;
    description: string;
}

export default function CategoryProductCardExtended({name, slug, icon, description} : Props) {
    return (
        <li>
            <Link className="flex gap-4 p-8 h-full justify-center items-center transition-all active:scale-95 bg-primary-400 hover:bg-primary-300 text-white rounded-2xl" href={`/${settings.slug_product_categories}/${slug}`}>
                <Image className="object-contain self-start invert-100 group-hover: brightness-0" alt={name.toLocaleLowerCase()} width={84} height={84} src={icon}/>
                <div className="flex flex-col items gap-1 flex-1">
                    <h2 className="z-10 text-3xl font-alegreya font-bold">{name}</h2>
                    <p className="text-xl">{description}</p>
                </div>
                <FaChevronRight className="text-xl hidden sm:block" />
            </Link>
        </li>
    )
}