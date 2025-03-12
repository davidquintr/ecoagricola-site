"use client"
import { categoryProducts } from "@/app/sources/category-products";
import { companies } from "@/app/sources/companies";
import { settings } from "@/app/sources/settings";
import { useCartStore } from "@/app/store/cart";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IconType } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
    slug: string;
    image: string;
    name: string;
    company: number;
    price: number
    quantity: number
    category: number;
}

export default function CartExtendedCard({slug, image, name, company, quantity, price, category}: Props) {

    const [localQuantity, setQuantity] = useState(quantity);
    const { setProductQuantity, removeFromCart} = useCartStore()

    useEffect(() => {

        if(localQuantity == 0) {
            removeFromCart(slug)
            return
        }

        setProductQuantity(slug, localQuantity)
    }, [localQuantity])
    
    const handlePlusClick = useCallback(() => {
        setQuantity((prev) => prev + 1);
    }, []);
    
    const handleMinusClick = useCallback(() => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    const handleRemoveFromCart = () => {
        setQuantity(0)
        toast.success(`${name} ha sido eliminado del carrito.`)
    }    
    return(
        <li className="flex flex-col md:flex-row items-center bg-primary-400 p-8 rounded-2xl gap-4 text-white">
            <Image className="rounded-xl w-full md:w-auto self-start" width={192} height={192} alt={slug} src={image}  />
            <div className="flex flex-col w-full md:w-auto flex-1 gap-4">
                <h2 className="text-3xl font-bold">{name}</h2>
                <span><strong className="font-semibold">Categoría:</strong> {categoryProducts[category].name}</span>
                <div className="flex flex-col gap-1">
                    <span>Publicado por:</span>
                    <Image className="invert-100 brightness-0" src={companies[company].icon} width={64} height={64} alt={companies[company].slug} />
                </div>
            </div>
            <div className="flex flex-col  w-full md:w-auto gap-2 justify-center items-center">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <span className="text-3xl font-semibold">{settings.currency_symbol} {price * quantity}</span>
                    <span className="text-md">Precio Unitario: {settings.currency_symbol} {price}</span>
                </div>
                <div className="flex gap-2 flex-1 w-full items-center">
                    <QuantityButton icon={FaMinus} disabled={localQuantity === 0} onClick={handleMinusClick} />
                    <span className="text-xl text-center flex-1">{localQuantity}</span>
                    <QuantityButton icon={FaPlus} disabled={false} onClick={handlePlusClick} />
                </div>
                <button onClick={handleRemoveFromCart} className="disabled:opacity-50 w-full text-sm disabled:pointer-events-none cursor-pointer flex justify-center p-2 h-[34px] border border-white rounded-[8px] hover:bg-white active:scale-95 transition-all hover:text-primary-600 text-white">
                    Eliminar                    
                </button>
        </div>
    </li>
    )
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
      className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex justify-center p-2 border border-white rounded-[8px] hover:bg-white active:scale-95 transition-all hover:text-primary-600 text-white"
    >
      <Icon className="size-4" />
    </button>
  );
  