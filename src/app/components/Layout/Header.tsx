"use client";
import { navigationRoutes } from "@/app/sources/navigation-routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-40 bg-white">
            <div className="flex gap-8 justify-between py-6 px-4 items-center max-w-[1536px] mx-auto">
                <Link href="/">
                    <Image className="size-12 md:size-16 object-contain" width={81} height={64} src="/identity/logo.webp" alt="ecoagricola logo" />
                </Link>
                
                <ul className="hidden lg:flex gap-8 lg:gap-16 text-xl xl:text-2xl uppercase text-primary-600">
                    {navigationRoutes.map((route, index) => (
                        <li
                            className={`hover:scale-125 transition-transform ${
                                currentPath === route.path ? "font-black" : ""
                            }`}
                            key={index}
                        >
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
                
                {/* Desktop Icons */}
                <div className="flex justify-end flex-1 lg:!flex-none gap-8 text-primary-600">
                    <Link href={"/carrito"}>
                        <FiShoppingCart className="size-8" aria-label="shopping-cart" />
                    </Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button className="block lg:hidden text-primary-600 *:size-8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-md p-4 z-50">
                    <ul className="flex flex-col gap-4 text-xl text-primary-600">
                        {navigationRoutes.map((route, index) => (
                            <li
                                className={`text-center py-2 ${currentPath === route.path ? "font-black" : ""}`}
                                key={index}
                            >
                                <Link href={route.path} onClick={() => setIsMenuOpen(false)}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}