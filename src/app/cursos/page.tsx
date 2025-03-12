import CourseCard from "../components/Cards/CourseCard";
import HeroPages from "../components/General/HeroPages";
import { courses } from "../sources/courses";
import { dictionary } from "../sources/dictionary";

export default function Cursos() {
    return (
        <main className="bg-primary-500">
            <HeroPages title={dictionary.courses_page.title} description={dictionary.courses_page.description} icon={dictionary.courses_page.icon} />
            <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1536px] mx-auto px-4 py-8 sm:py-16 lg:py-48">
                {
                courses.map((course, index) => (
                    <CourseCard duration={course.duration} image={course.image} title={course.title} slug={course.slug} key={index} />
                ))
                }
            </ul>
        </main>
    )
}