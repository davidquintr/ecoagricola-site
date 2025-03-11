import Image from "next/image";

interface Props { 
    icon: string;
    title: string;
    description: string;
}

export default function HeroPages({icon, title, description}: Props) {
    return(
        <section className="bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px] bg-white">
            <div className="flex gap-8 py-32 px-4 max-w-[1536px] mx-auto ">
                <div className="flex flex-col gap-4 items-center">
                    <Image className="object-contain" src={icon} alt="product icon" width={96} height={96} />
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>
                <p className="text-2xl">{description}</p>
            </div>
        </section>
    )
}