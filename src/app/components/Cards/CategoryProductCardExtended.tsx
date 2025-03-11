import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface Props {
    name: string;
    path: string;
    icon: string;
    description: string;
}

export default function CategoryProductCardExtended({name, path, icon, description} : Props) {
    return (
        <li>
            <Link className="flex gap-4 p-8 justify-center items-center transition-all active:scale-95 bg-primary-400 hover:bg-primary-300 text-white rounded-2xl" href={path}>
                <Image className="object-contain invert-100 group-hover: brightness-0" alt={name.toLocaleLowerCase()} width={84} height={84} src={icon}/>
                <div className="flex flex-col gap-1 flex-1">
                    <h2 className="z-10 text-3xl font-alegreya font-bold">{name}</h2>
                    <p className="text-xl">{description}</p>
                </div>
                <FaChevronRight className="text-xl" />
            </Link>
        </li>
    )
}