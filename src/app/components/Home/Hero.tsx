import { dictionary } from "@/app/sources/dictionary";
import Link from "next/link";

export default function Hero() {

    return(
        <section className="relative bg-[0%_35%] bg-cover bg-no-repeat bg-[url(/home-picture.webp)] min-h-[calc(100dvh_-_112px)] px-8 pt-4 md:pt-24 pb-12 flex justify-between items-center flex-col">
            <div className="flex flex-col">
                <h1 className="text-2xl text-center uppercase">{dictionary.name}</h1>
                <h2 className="text-5xl md:text-7xl font-alegreya font-bold text-center" dangerouslySetInnerHTML={{__html: dictionary.home.hero.title}}></h2>
            </div>

            <div className="flex flex-col justify-center text-center gap-8 z-10 text-white">
                <p className="text-2xl md:text-3xl">{dictionary.home.hero.subtitle}</p>
                <Link className="px-4 py-3 text-xl md:px-9 md:py-6 font-bold rounded-xl md:rounded-2xl bg-white text-primary-600 self-center zmd:text-4xl" href={dictionary.home.hero.cta.path}>
                    <span>{dictionary.home.hero.cta.name}</span>
                </Link>
            </div>
            <span className="w-full absolute bottom-0 left-0 h-1/2 bg-gradient-to-t from-primary-500 to-transparent"></span>
        </section>
    )
}