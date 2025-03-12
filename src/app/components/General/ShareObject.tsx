"use client"
import { sharer } from "@/app/sources/sharer";
import Link from "next/link";


export default function ShareObject() {
    return(
        <div className="flex gap-2">
            {
                sharer.map((item, index) => (
                    <Link key={index} href={`${item.url}?currentUrl=${encodeURIComponent(window.location.href)}`}>
                        <item.icon className="text-shades-500 size-8" />
                    </Link>
                ))
            }
        </div>
    )
}