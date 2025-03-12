"use client"
import { sharer } from "@/app/sources/sharer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShareObject() {
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className="flex gap-2">
            {
                sharer.map((item, index) => (
                    <Link target="_blank" key={index} href={`${item.url}${currentUrl}`}>
                        <item.icon className="text-shades-500 size-8" />
                    </Link>
                ))
            }
        </div>
    );
}
