import CategoryProductCardExtended from "../components/Cards/CategoryProductCardExtended";
import HeroPages from "../components/General/HeroPages";
import { categoryProducts } from "../sources/category-products";
import { dictionary } from "../sources/dictionary";

export default function Productos() {
    return (
        <main className="bg-primary-500">
            <HeroPages title={dictionary.products_page.title} description={dictionary.products_page.description} icon={dictionary.products_page.icon} />
            <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[1536px] mx-auto px-4 py-48">
                {
                categoryProducts.map((cat, index) => (
                    <CategoryProductCardExtended icon={cat.icon} description={cat.description} name={cat.name} path={cat.path} key={index} />
                ))
                }
            </ul>
        </main>
    )
}