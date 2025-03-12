import ProductCard from "@/app/components/Cards/ProductCard";
import HeroCat from "@/app/components/CategoryProductPage/HeroCat";
import { categoryProducts } from "@/app/sources/category-products";
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
      <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1536px] mx-auto px-4 py-48">
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
    </main>
  );
}
