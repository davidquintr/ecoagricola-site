"use client"
import { useEffect, useState } from "react";
import { products } from "../sources/products";
import { useCartStore } from "../store/cart";
import { settings } from "../sources/settings";
import CartExtendedCard from "../components/Cards/CartExtendedCard";
import Link from "next/link";
import { FaBox, FaCcMastercard, FaCcVisa, FaCreditCard, FaPaypal, FaUserAlt } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

export default function Carrito() {
    const { cart, clearCart } = useCartStore();
    const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar la visibilidad del modal
    const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false);  // Estado para la simulación de la transacción
    const [totalPrice, setTotalPrice] = useState("");
    const [totalItems, setTotalItems] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

    useEffect(() => {
        const total = cart.reduce((acc, item) => {
            const product = products.find((el) => el.slug === item.productSlug);
            if (!product) return acc;
            return acc + item.quantity * product.price;
        }, 0).toFixed(2);

        setTotalPrice(total);

        const itemsQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

        setTotalItems(itemsQuantity);
    }, [cart]);

    const handleCheckoutClick = () => {
        setIsModalOpen(true);
    };

    const handleFinalizeTransaction = () => {
        setIsTransactionSuccessful(true);
        setIsModalOpen(false);
    };

    const paymentMethods: { [key: string]: string } = {
        creditCard: "Tarjeta de Crédito",
        paypal: "PayPal",
        bankTransfer: "Transferencia Bancaria"
    };

    const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentMethod(e.target.value);
    };

    return (
        <main>
            <section className="bg-[url('/divider.webp')] py-8 bg-bottom bg-repeat-x bg-[auto_64px] bg-white"></section>
            <section className="bg-primary-600 px-4 py-8 sm:py-16">
                <div className="max-w-[1536px] mx-auto">
                    <h1 className="text-4xl text-white font-alegreya font-bold">Carrito</h1>
                    <div className="flex flex-col lg:flex-row mt-8 gap-8">
                        <ul className="flex flex-col gap-8 lg:max-w-3/5 w-full">
                            {
                                cart.map((item, index) => {
                                    const product = products.find((el) => el.slug === item.productSlug);

                                    if (!product) return <></>;

                                    return (
                                        <CartExtendedCard
                                            key={index}
                                            slug={product.slug}
                                            quantity={item.quantity}
                                            category={product.category}
                                            name={product.name}
                                            price={product.price}
                                            image={product.images[0]}
                                            company={product.company}
                                        />
                                    );
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
                        <div className="flex flex-col self-start flex-1 w-full gap-4 p-8 bg-primary-400 rounded-2xl text-white">
                            <h2 className="text-3xl font-bold">Resumen del carrito</h2>
                            <ul className="flex flex-col gap-2">
                                <li className="flex justify-between gap-4 text-xl">
                                    <span>{totalItems} Artículos</span>
                                    <span>{settings.currency_symbol} {totalPrice}</span>
                                </li>
                                <li className="flex justify-between gap-4 text-xl">
                                    <span>Transporte</span>
                                    <span>~ </span>
                                </li>
                            </ul>
                            <button
                                disabled={cart.length < 1}
                                onClick={handleCheckoutClick}
                                className="bg-white p-4 w-full disabled:opacity-50 disabled:pointer-events-none hover:bg-primary-50 active:scale-95 transition-all text-primary-400 cursor-pointer rounded-2xl text-xl"
                            >
                                Pasar por Caja
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && !isTransactionSuccessful && (
                <div className="fixed inset-0 bg-primary-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-xl max-w-[1024px] w-full">
                        <h2 className="text-3xl text-primary-700 font-bold mb-4">Formulario de Pago</h2>
                        <form onSubmit={handleFinalizeTransaction} className="flex flex-col gap-4">
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-1 items-center">
                                        <FaUserAlt />
                                        <h2 className="text-2xl font-bold text-primary-600">Información Personal</h2>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            required
                                            type="text"
                                            placeholder="Nombres"
                                            className="p-2 border border-gray-300 rounded-md"
                                        />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Apellidos"
                                            className="p-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Correo Electrónico"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Número de teléfono"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />

                                    <div className="flex gap-1 items-center">
                                        <FaBox />
                                        <h2 className="text-2xl font-bold text-primary-600">Información de Envio</h2>
                                    </div>
                                    <textarea
                                        required
                                        placeholder="Dirección"
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                    <select required className="p-2 border border-gray-300 rounded-md">
                                        <option disabled={true}>Seleccione el Departamento</option>
                                        <option value="Managua">Managua</option>
                                        <option value="León">León</option>
                                        <option value="Granada">Granada</option>
                                        <option value="Masaya">Masaya</option>
                                        <option value="Chinandega">Chinandega</option>
                                        <option value="Matagalpa">Matagalpa</option>
                                        <option value="Estelí">Estelí</option>
                                        <option value="Rivas">Rivas</option>
                                        <option value="Jinotega">Jinotega</option>
                                        <option value="Carazo">Carazo</option>
                                        <option value="Boaco">Boaco</option>
                                        <option value="Chontales">Chontales</option>
                                        <option value="Río San Juan">Río San Juan</option>
                                        <option value="Nueva Segovia">Nueva Segovia</option>
                                        <option value="Madriz">Madriz</option>
                                        <option value="RAAN">RAAN</option>
                                        <option value="RAAS">RAAS</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-1 items-center">
                                        <FaCreditCard />
                                        <h2 className="text-2xl font-bold text-primary-600">Métodos de Pago</h2>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        {Object.keys(paymentMethods).map((key) => (
                                            <li key={key}>
                                                <label className={`flex items-center gap-2 p-2 border border-primary-400 rounded-md accent-primary-400 hover:bg-primary-50 ${selectedPaymentMethod == key ? "bg-primary-50" : ""}`}>
                                                    <input
                                                        onChange={handlePaymentMethodChange}
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value={key}
                                                        className="form-radio"
                                                        checked={selectedPaymentMethod === key}
                                                    />
                                                    {paymentMethods[key]}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                    {selectedPaymentMethod == "creditCard" && <div className="flex flex-col gap-4">
                                        <input
                                            required
                                            type="text"
                                            placeholder="Número de Tarjeta"
                                            className="p-2 border border-gray-300 rounded-md"
                                        />
                                        <div className="grid grid-cols-2 gap-2">
                                            <input
                                                required
                                                type="text"
                                                placeholder="Fecha de Vencimiento"
                                                className="p-2 border border-gray-300 rounded-md"
                                            />
                                            <input
                                                required
                                                type="text"
                                                placeholder="Apellidos"
                                                className="p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>}
                                    <ul className="flex gap-2 *:size-8 mt-auto text-primary-500">
                                        <FaCcVisa />
                                        <FaCcMastercard />
                                        <SiAmericanexpress />
                                        <FaPaypal />
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between gap-4 text-xl">
                                <span className="font-bold">Total</span>
                                <span>{settings.currency_symbol} {totalPrice}</span>
                            </div>
                            <div className="flex justify-between gap-4 text-xl">
                                <span className="font-bold">Artículos</span>
                                <span>{totalItems}</span>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary-600 hover:bg-primary-400 active:scale-95 transition-all cursorpo p-4 text-white rounded-xl mt-4"
                            >
                                Finalizar Transacción
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isTransactionSuccessful && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-xl w-[1024px]">
                        <h2 className="text-3xl font-bold mb-4">¡Transacción Exitosa!</h2>
                        <p className="text-xl">Tu compra se ha realizado correctamente. ¡Gracias por tu compra!</p>
                        <button
                            type="button"
                            onClick={() => {setIsTransactionSuccessful(false); clearCart()}}
                            className="bg-primary-600 hover:bg-primary-400 active:scale-95 transition-all cursor-pointer w-full p-4 text-white rounded-xl mt-4"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
