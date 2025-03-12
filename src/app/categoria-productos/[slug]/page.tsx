import ProductCard from "@/app/components/Cards/ProductCard";
import HeroCat from "@/app/components/CategoryProductPage/HeroCat";
import { categoryProducts } from "@/app/sources/category-products";
import { dictionary } from "@/app/sources/dictionary";
import { products } from "@/app/sources/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return categoryProducts.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;

  const categoryIndex = categoryProducts.findIndex((category) => category.slug === slug);
  const category = categoryProducts[categoryIndex];

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter((product) => product.category === categoryIndex);

  return (
    <main className="bg-primary-500">
      <HeroCat icon={category.icon} title={category.name} />
      <section className="max-w-[1536px] flex flex-col gap-8 mx-auto px-4 py-8 sm:py-16 lg:py-48">
        <div className="flex justify-between text-white text-xl">
          <span>
            {filteredProducts.length > 1 
              ? `${filteredProducts.length} ${dictionary.showing_products.quantity_text}` 
              : filteredProducts.length === 1 
              ? dictionary.showing_products.only_one_text 
              : dictionary.showing_products.empty_text}
          </span>
        </div>
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.images[0]}
              name={product.name}
              price={product.price}
              slug={product.slug}
              company={product.company}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
