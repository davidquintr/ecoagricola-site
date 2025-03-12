import { settings } from "@/app/sources/settings";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

interface Props{
    title: string;
    duration: string;
    slug: string;
    image: string;
}

export default function CourseCard({title, duration, slug, image} : Props){

    return(
        <li>
            <Link className="flex flex-col border-2 hover:bg-primary-50 active:scale-95 transition-all bg-white border-primary-400 rounded-2xl h-full" href={`/${settings.slug_courses}/${slug}`}>
                <Image className="rounded-xl w-full" src={image} alt={title.toLocaleLowerCase()} width={480} height={270} />
                <div className="flex flex-col gap-2 p-4 text-primary-600">
                    <h2 className="text-xl font-bold text-primary-700">{title}</h2>
                    <div className="flex items-center gap-1">
                        <FaPlay className="size-3" />
                        <span>{duration}</span>
                    </div>
                </div>
            </Link>
        </li>
    )

}