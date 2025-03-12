import ShareObject from "@/app/components/General/ShareObject";
import ImagePreview from "@/app/components/SingleProduct/ImagePreview";
import { categoryProducts } from "@/app/sources/category-products";
import { companies } from "@/app/sources/companies";
import { dictionary } from "@/app/sources/dictionary";
import { products } from "@/app/sources/products";
import { settings } from "@/app/sources/settings";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar, FaStarHalf } from "react-icons/fa";

function StarRating({ rate }: { rate: number }) {
  return (
    <ul className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <li key={i} className="relative z-10 min-w-8 min-h-8">
          {rate >= i + 1 ? (
            <FaStar className="size-8 z-20 text-primary-400" />
          ) : rate >= i + 0.5 ? (
            <>
              <FaStarHalf className="size-8 z-20 text-primary-400" />
              <FaStar className="top-0 -z-10 left-0 absolute size-8 text-shades-100" />
            </>
          ) : (
            <FaStar className="size-8 z-20 text-shades-100" />
          )}
        </li>
      ))}
    </ul>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const productIndex = products.findIndex((product) => product.slug === slug);
  const product = products[productIndex];
  const company = companies[product.company];

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-primary-500">
      <section className="py-4 pb-32 md:py-32 px-4 flex gap-8 bg-white bg-[url('/divider.webp')] bg-bottom bg-repeat-x bg-[auto_64px]">
        <div className="max-w-[1536px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            <picture className="flex flex-col gap-4 lg:max-w-[512px]">
              <ImagePreview images={product.images} />
            </picture>
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h1 className="text-6xl font-alegreya text-primary-600 font-bold">{product.name}</h1>
                    <span className="text-2xl">{categoryProducts[product.category].name}</span>
                  </div>
                  <StarRating rate={product.rate} />
                </div>
                <span className="text-4xl">{settings.currency_symbol} {product.price}</span>
                <p className="text-xl">{product.short_description}</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">{dictionary.single_product.published_by}</span>
                <Image width={64} height={64} className="object-contain" alt={company.slug} src={company.icon} />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-bold">{dictionary.single_product.share}</span>
                <ShareObject />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 max-w-[1536px] mx-auto px-4 py-8 sm:py-16 lg:py-48 text-white">
        <h3 className="text-5xl font-alegreya font-bold">{dictionary.single_product.description}</h3>
        <p className="text-xl" dangerouslySetInnerHTML={{__html: product.description}} />
      </section>
    </main>
  );
}