import { navigationRoutes } from "@/app/sources/navigation-routes";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";


export default function Header(){
    return(
        <header className="sticky top-0 z-40 bg-white">
            <div className="flex gap-8 justify-between py-6 px-4 items-center max-w-[1536px] mx-auto">
                <Link href="/">
                    <Image width={81} height={64} src="/identity/logo.webp" alt="ecoagricola logo" />
                </Link>
                <ul className="hidden lg:flex gap-16 text-2xl uppercase font-bold text-primary-600">
                    {
                        navigationRoutes.map((route, index) => (
                            <li className="hover:scale-125 transition-transform" key={index}>
                                <Link href={route.path}>{route.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="hidden lg:flex gap-8 text-primary-600">
                    <FiUser className="size-8" aria-label="user" />
                    <FiSearch className="size-8" aria-label="search" />
                    <FiShoppingCart className="size-8" aria-label="shopping-cart" />
                </div>
                <FiMenu className="block lg:hidden text-primary-600 size-8" />
            </div>
        </header>
    )
}