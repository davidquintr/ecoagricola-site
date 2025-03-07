interface Props {
    title: string
    description: string
}

export default function CallToActionSimple({title, description}: Props) {
    return(
        <section className="flex flex-col gap-0 px-4 py-16 text-white text-center max-w-[1536px] mx-auto">
            <h2 className="font-alegreya text-4xl font-bold">{title}</h2>
            <p className="text-2xl leading-normal">{description}</p>
        </section>
    )
}