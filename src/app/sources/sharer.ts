import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const sharer = [
    {
        "name": "facebook",
        "icon": FaFacebookF,
        "url": "https://www.facebook.com/sharer/sharer.php?u="
    },
    {
        "name": "whatsapp",
        "icon": BsWhatsapp,
        "url": "https://api.whatsapp.com/send?text="
    },
    {
        "name": "telegram",
        "icon": FaTelegramPlane,
        "url": "https://t.me/share/url?url="
    },
    {
        "name": "twitter",
        "icon": FaXTwitter,
        "url": "https://twitter.com/intent/tweet?url="
    },
];