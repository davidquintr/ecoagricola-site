import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
    return(
        <footer className="bg-white">
            <div className="flex flex-col py-16 px-4 max-w-[1536] mx-auto justify-center text-center gap-8 text-primary-600">
                <div className="flex gap-16 justify-center">
                    <FaXTwitter className="size-9" />
                    <FiFacebook className="size-9" />
                    <FaTiktok className="size-9" />
                </div>
                <span className="text-2xl">©2025 Indiv</span>
            </div>
        </footer>
    )
}