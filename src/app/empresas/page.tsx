import Link from "next/link";
import HeroPages from "../components/General/HeroPages";
import { companies } from "../sources/companies";
import { dictionary } from "../sources/dictionary";
import { settings } from "../sources/settings";
import Image from "next/image";

export default function Empresas() {
    return(
        <main className="bg-primary-500">
            <HeroPages title={dictionary.companies_page.title} description={dictionary.companies_page.description} icon={dictionary.companies_page.icon} />
            <ul className="grid gap-8 md:grid-cols-3 justify-center lg:grid-cols-5 max-w-[1536px] mx-auto px-4 py-8 sm:py-16 lg:py-48">
                {
                    companies.map((company, index) => (
                        <li key={index}>
                            <Link className="flex flex-col h-full items-center justify-center gap-4 text-white" href={`/${settings.slug_companies}/${company.slug}`}>
                                <Image src={company.icon} width={300} height={300} className="brightness-0 invert-100 object-contain aspect-square" alt={company.name.toLocaleLowerCase()}  />
                                <h2>{company.name}</h2>
                            </Link>                            
                        </li>
                    ))
                }
            </ul>
            <p>{}</p>
        </main>
    )
}