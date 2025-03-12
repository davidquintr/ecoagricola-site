"use client"
import { companies } from "@/app/sources/companies"
import Image from "next/image"
import Link from "next/link"
import { IconType } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa"

const PRODUCT_SINGLE_URL = "producto";

interface Props {
    name: string,
    slug: string
    price: number,
    company: number,
    image: string
}

interface ButtonProps {
  onClick: () => void;
  icon: IconType;
  disabled: boolean;
}

const QuantityButton = ({ onClick, icon: Icon, disabled }: ButtonProps) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="disabled:opacity-10 disabled:pointer-events-none cursor-pointer flex justify-center p-2 border border-primary-500 rounded-[8px] hover:bg-primary-500 active:scale-95 transition-all hover:text-white text-primary-500"
    >
      <Icon className="size-4" />
    </button>
  );

export default function ProductCard({name, slug, price, company, image} : Props) {

  const handlePlusClick = () => {

  }

  const handleMinusClick = () => {

  }

    return(
        <li className="flex flex-col rounded-2xl overflow-hidden bg-white">
            <Link className="w-full h-auto aspect-square" href={`/${PRODUCT_SINGLE_URL}/${slug}`}>
                <Image className="size-full object-contain" src={image} alt={name.toLocaleLowerCase()} width={480} height={480} />
            </Link>
            <div className="flex flex-col justify-center text-center p-4 flex-1 gap-8">
                <div className="flex flex-col gap-1 flex-1 text-primary-500">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-primary-600">{name}</h3>
                    <span className="text-xl md:text-3xl">C${price}</span>
                    <span>Publicado por {companies[company]?.name}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 text-primary-500">
                    <div className="flex gap-2 items-center">
                        <QuantityButton icon={FaMinus} disabled={false} onClick={handleMinusClick}  />
                        <span className="text-xl flex-1">0</span>
                        <QuantityButton icon={FaPlus} disabled={false} onClick={handlePlusClick}  />
                    </div>
                    <button className="border cursor-pointer active:scale-95 rounded-[8px] border-primary-500 flex-1 px-4 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">
                        Agregar
                    </button>
                </div>
            </div>
        </li>
    )

}