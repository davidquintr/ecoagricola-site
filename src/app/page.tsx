import Hero from "./components/Home/Hero";
import CallToActionSimple from "./components/Home/CallToActionSimple";
import { dictionary } from "./sources/dictionary";
import EntireSection from "./components/Home/EntireSection";
import { categoryProducts } from "./sources/category-products";
import CategoryProductCard from "./components/Cards/CategoryProductCard";
import { products } from "./sources/products";
import ProductCard from "./components/Cards/ProductCard";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <main className="bg-primary-500">
      <Hero />
      <CallToActionSimple title={dictionary.home.separator.title} description={dictionary.home.separator.description} />
      <EntireSection title={dictionary.home.category_product.title} description={dictionary.home.category_product.description}>
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            categoryProducts.map((cat, index) => (
              <CategoryProductCard image={cat.image} name={cat.name} path={cat.path} key={index} />
            ))
          }
        </ul>
      </EntireSection>
      <EntireSection title={dictionary.home.products.title} description={dictionary.home.products.description}>
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            products.map((product, index) => (
              <ProductCard 
                key={index}
                image={product.image}
                name={product.name}
                price={product.price}
                path={product.path}
                publishedBy={product.publishedBy}
              />
            ))
          }
        </ul>
      </EntireSection>
      <section className="flex flex-col gap-8 py-16 px-4 max-w-[1536px] mx-auto text-white">
        <h2 className="text-4xl font-bold font-alegreya">{dictionary.home.advantages.title}</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <Image className="h-full w-full object-cover" src="/ilustration_home_advantages.webp" alt="ilustration advantages" width={748} height={720} />
          <ul className="flex flex-col gap-8 text-white py-8">
            {
              dictionary.home.advantages.items.map((advantage, index) => (
                <li className="flex gap-2 justify-start" key={index}>
                  <FiCheckCircle className="size-16 -mt-3" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-bold font-alegreya">{advantage.title}</h3>
                    <p className="text-2xl leading-normal">{advantage.description}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  );
}
