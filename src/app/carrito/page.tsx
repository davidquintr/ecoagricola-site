"use client"
import { products } from "../sources/products";
import { useCartStore } from "../store/cart"
import { settings } from "../sources/settings";
import CartExtendedCard from "../components/Cards/CartExtendedCard";
import Link from "next/link";

export default function Carrito() {
    const {cart} = useCartStore();

    return(
        <main>
            <section className="bg-[url('/divider.webp')] py-8 bg-bottom bg-repeat-x bg-[auto_64px] bg-white"></section>
            <section className="bg-primary-600  px-4 py-8 sm:py-16">
                <div className="max-w-[1536px] mx-auto">
                    <h1 className="text-4xl text-white font-alegreya font-bold">Carrito</h1>
                    <div className="flex mt-8 gap-8">
                        <ul className="flex flex-col gap-8 max-w-3/5 w-full">
                            {
                                cart.map((item, index) => {
                                    const product = products.find((el) => el.slug === item.productSlug)
                                    
                                    if(!product) return <></>

                                    return (
                                        <CartExtendedCard key={index} slug={product.slug} quantity={item.quantity} category={product.category} name={product.name} price={product.price} image={product.images[0]} company={product.company} />
                                    )
                                })
                            }
                            {
                                cart.length < 1 && (
                                    <li className="flex flex-col gap-4 text-white">
                                        <span className="text-4xl">No hay elementos en el carrito</span>
                                        <Link className="text-primary-500 hover:bg-primary-50 active:scale-95 transition-all text-2xl rounded-xl self-start p-4 bg-white" href="/productos">
                                            <span>Ver Productos en la Tienda</span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        <div className="flex flex-col self-start flex-1 gap-4 p-8 bg-primary-400 rounded-2xl text-white">
                            <h2 className="text-3xl font-bold">Resumen del carrito</h2>
                            <ul className="flex flex-col gap-2">
                                <li className="flex justify-between gap-4 text-xl">
                                    <span>{cart.reduce((acc, item) => acc + item.quantity, 0)} Artículos</span>
                                    <span>{settings.currency_symbol} {cart.reduce((acc, item) => {
                                        const product = products.find((el) => el.slug === item.productSlug);
                                        if (!product) return acc;
                                        return acc + item.quantity * product.price;
                                    }, 0).toFixed(2)}
                                    </span>
                                </li>
                                <li className="flex justify-between gap-4 text-xl">
                                    <span>Transporte</span>
                                    <span>~ </span>
                                </li>
                            </ul>
                            <button disabled={cart.length < 1} className="bg-white p-4 w-full disabled:opacity-50 disabled:pointer-events-none hover:bg-primary-50 active:scale-95 transition-all text-primary-400 cursor-pointer rounded-2xl text-xl">Pasar por Caja</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}