import Image from "next/image";
import Link from "next/link";

interface Props {
    name: string,
    path: string,
    image: string,
}

export default function CategoryProductCard({name, path, image} : Props) {
    return (
        <li className="aspect-square">
            <Link className="group flex p-4 justify-center items-center overflow-hidden rounded-2xl w-full h-full relative" href={path}>
                <Image className="absolute saturate-0 transition-all group-hover:scale-125 group-hover:brightness-110 w-full top-0 left-0" alt={name.toLocaleLowerCase()} width={350} height={350} src={image}/>
                <h3 className="z-10 text-xl md:text-3xl 2xl:text-4xl text-primary-600 font-bold">{name}</h3>
            </Link>
        </li>
    )
}