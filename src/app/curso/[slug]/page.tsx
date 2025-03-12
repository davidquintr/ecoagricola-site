import { courses } from "@/app/sources/courses";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaBook, FaChevronDown, FaPlay } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = courses.find((course) => {
    return course.slug === slug;
  });

  if (!course) {
    notFound();
  }

  return (
    <main className="bg-primary-500">
      <section className="bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px] bg-white">
        <div className="flex flex-col lg:flex-row pb-32 pt-8 px-4 max-w-[1536px] mx-auto gap-8">
          <div className="lg:w-2/3 flex flex-col gap-4">
            <Image
              className="aspect-video rounded-2xl w-full"
              src={course.image}
              alt={course.title}
              width={800}
              height={450}
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-alegreya text-4xl font-bold">
                {course.title}
              </h1>
              <p>{course.description}</p>
            </div>
          </div>
          <ul className="p-4 w-full rounded-2xl border-1 border-primary-500 self-start flex flex-col flex-1 gap-4 text-primary-600">
            <li>
              <span className="text-3xl font-bold text-primary-700">
                Detalles del Curso
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <div className="flex gap-1 items-center text-xl ">
                <FaPlay className="size-4" />
                <span>Duración</span>
              </div>
              <span>{course.duration}</span>
            </li>
            <li className="flex justify-between gap-4">
              <div className="flex gap-1 items-center text-xl ">
                <FaBook className="size-4" />
                <span>Lecciones</span>
              </div>
              <span>{course.lesson_count}</span>
            </li>
            <li className="flex justify-between gap-4">
              <div className="flex gap-1 items-center text-xl ">
                <FaChartSimple className="size-4" />
                <span>Nivel</span>
              </div>
              <span>{course.level}</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-[1536px] flex flex-col gap-8 mx-auto px-4 py-8 sm:py-16 lg:py-24">
        <h2 className="text-3xl font-bold font-alegreya text-white">
          Contenido del Curso
        </h2>

        <div className="flex flex-wrap gap-4">
          {course.units.map((unit, index) => (
            <details
              key={index}
              className="group rounded-2xl overflow-hidden text-2xl text-white self-start w-full md:w-[calc(50%_-_16px)]"
            >
              <summary className="relative flex flex-col p-4 cursor-pointer bg-primary-400 hover:bg-primary-300 transition-all">
                <span className="text-sm text-primary-100">
                  Unidad {index + 1}
                </span>
                <span className="font-bold font-alegreya">{unit.title}</span>
                <FaChevronDown className="size-4 absolute right-4 top-1/2 -translate-1/2 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <ul className="flex flex-col gap-4 bg-primary-600 p-4">
                {unit.lessons.map((lesson, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    <span className="font-bold text-xl">{lesson.title}</span>
                    <p className="text-sm">{lesson.content}</p>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
