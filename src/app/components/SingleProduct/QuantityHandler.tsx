"use client"
import { useCartStore } from "@/app/store/cart";
import Image from "next/image";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { IconType } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ButtonProps {
  onClick: () => void;
  icon: IconType;
  disabled: boolean;
}

interface Props {
    name: string;
    slug: string;
    image: string;
}
 

export default function QuantityHandler({ name, slug, image }: Props) {
    const { addToCart } = useCartStore();
    const [quantity, setQuantity] = useState(0);  
    
      const handlePlusClick = useCallback(() => {
        setQuantity((prev) => prev + 1);
      }, []);
    
      const handleMinusClick = useCallback(() => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
      }, []);

      const handleAddToCart = useCallback(() => {
        if (quantity < 1) {
          toast.error("Debes añadir al menos una unidad al carrito.");
          return;
        }
    
        addToCart(slug, quantity)
    
        toast.success(
          <div className="flex gap-2">
            <Image src={image} alt={name.toLowerCase()} width={64} height={64} />
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">{name}</h2>
              <p>{quantity} unidades agregadas al carrito</p>
            </div>
          </div>
        );
      }, [quantity, image, name]);
    

    return(
        <div className="flex gap-2">
            <div className="flex gap-2 items-center">
                <QuantityButton icon={FaMinus} disabled={quantity === 0} onClick={handleMinusClick} />
                <span className="text-xl flex-1">{quantity}</span>
                <QuantityButton icon={FaPlus} disabled={false} onClick={handlePlusClick} />
            </div>
            <button disabled={quantity == 0} onClick={handleAddToCart} className="disabled:opacity-50 disabled:pointer-events-none max-w-64 w-full self-start border cursor-pointer active:scale-95 rounded-[8px] border-primary-500 flex-1 px-4 py-2 text-sm text-primary-500 hover:bg-primary-500 hover:text-white transition-all">
                Agregar
            </button>
        </div>
    )
}


const QuantityButton = ({ onClick, icon: Icon, disabled }: ButtonProps) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex justify-center p-2 border border-primary-500 rounded-[8px] hover:bg-primary-500 active:scale-95 transition-all hover:text-white text-primary-500"
    >
      <Icon className="size-4" />
    </button>
  );