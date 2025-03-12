import { ReactNode } from 'react';

interface Props {
    title: string,
    description: string,
    children: ReactNode,
}

export default function EntireSection({ title, description, children }: Props) {
    return (
        <section className="flex flex-col gap-8 py-16 px-4 max-w-[1536px] mx-auto">
            <div className="flex flex-col text-white">
                <h2 className="text-2xl md:text-4xl font-bold font-alegreya">{title}</h2>
                <p className="text-xl md:text-xl leading-normal">{description}</p>
            </div>
            {children}
        </section>
    )
}