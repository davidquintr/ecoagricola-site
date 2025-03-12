import ImagePreview from "@/app/components/SingleProduct/ImagePreview";
import { products } from "@/app/sources/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const productIndex = products.findIndex((product) => product.slug === slug);
  const product = products[productIndex];

  if (!product) {
    notFound();
  }


  return (
    <main className="bg-primary-500">
      <section className="py-32 px-4 flex gap-8 bg-white">
        <div className="max-w-[1536px] mx-auto w-full">
          <div className="flex flex-col gap-4">
            <picture className="flex flex-col gap-4 max-w-[512px]">
              <ImagePreview images={product.images} />
            </picture>
          </div>
        </div>
      </section>
    </main>
  );
}

