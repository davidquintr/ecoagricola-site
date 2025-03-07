import Image from "next/image"
import Link from "next/link"
import { FaMinus, FaPlus } from "react-icons/fa"

interface Props {
    name: string,
    price: number,
    publishedBy: string,
    image: string
    path: string
}

export default function ProductCard({name, price, publishedBy, image, path} : Props) {

    return(
        <li className="flex flex-col bg-white">
            <Link className="w-full h-auto aspect-square" href={path}>
                <Image className="size-full object-contain" src={image} alt={name.toLocaleLowerCase()} width={480} height={480} />
            </Link>
            <div className="flex flex-col justify-center text-center p-4 flex-1 gap-8">
                <div className="flex flex-col gap-1 flex-1 text-primary-500">
                    <h3 className="text-4xl font-extrabold text-primary-600">{name}</h3>
                    <span className="text-3xl">C${price}</span>
                    <span>Publicado por {publishedBy}</span>
                </div>
                <div className="flex gap-4 text-primary-500">
                    <div className="hidden xl:flex gap-2 items-center">
                        <button className="flex aspect-square h-full justify-center items-center bg-primary-500 text-white">
                            <FaPlus className="size-4" />
                        </button>
                        <span className="text-xl">
                            0
                        </span>
                        <button className="flex aspect-square h-full justify-center items-center bg-primary-500 text-white">
                            <FaMinus className="size-4" />
                        </button>
                    </div>
                    <button className="border-2 border-primary-500 flex-1 px-4 py-2 text-primary-500">
                        Agregar
                    </button>
                </div>
            </div>
        </li>
    )

}