
import Image from "next/image";
import React from "react";
import { instrumental } from "@/fonts/font";
import ProductQuantityWrapper from "@/components/ProductQuntityWrapper";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product metadata");
    }

    const data = await res.json();
    const product = data.data;

    return {
      title: `${product.name}  IqzaibEssence`,
      description:
        product.description?.slice(0, 155) ||
        `Discover ${product.name} by IqzaibEssence — a premium organic hair oil crafted to nourish your hair and boost natural shine.`,
      openGraph: {
        title: `${product.name} | IqzaibEssence`,
        description:
          product.description?.slice(0, 155) ||
          `Discover ${product.name} by IqzaibEssence — a premium organic hair oil crafted to nourish your hair and boost natural shine.`,
        url: `https://iqzaibessence.com/products/${id}`,
        type: "website",
        siteName: "IqzaibEssence",
        images: product.images?.length
          ? [{ url: product.images[0], width: 800, height: 800, alt: product.name }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: `${product.name} | IqzaibEssence`,
        description:
          product.description?.slice(0, 155) ||
          `Explore ${product.name} by IqzaibEssence — a nourishing herbal oil blend for strong, healthy hair.`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "IqzaibEssence | Hair Oil Product",
      description:
        "Discover premium organic and herbal hair oils by IqzaibEssence — crafted to promote growth, reduce hair fall, and restore shine.",
    };
  }
}

const Page = async ({ params }: ProductPageProps) => {
  try {
    // Fetch product via API route
    const id = (await params).id
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, { next: {revalidate: 10} });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await res.json();
    const product = data.data;

    if (!product) {
      return (
        <div className="text-center py-20 text-gray-700 text-xl">
          Product not found.
        </div>
      );
    }

    return (
      <main className="px-6 md:px-24 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center">
            <Image
              fetchPriority="high"
              src={product.images[0]}
              alt={product.name}
              width={450}
              height={450}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right - Product Details */}
          <div className="flex-1 space-y-6">
            <h2 className={`${instrumental.className} text-3xl sm:text-5xl text-main mb-5`}>
              {product.name}
            </h2>

            <h3 className="text-gray-700 font-medium">
              PKR{" "}
              <span
                className={`${
                  product.isSale
                    ? "line-through text-gray-800 text-sm"
                    : "text-main text-3xl font-semibold"
                }`}
              >
                {product.price}
              </span>
              {product.isSale && (
                <span className="font-semibold inline-block pl-2 text-3xl">
                  {product.discountPrice}
                </span>
              )}
            </h3>

            <div>
              <span className="font-semibold">Size: </span>
              <span>{product.size}</span>
            </div>

            <ProductQuantityWrapper product={product} />

            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>

            <div>
              <h4 className={`${instrumental.className} text-2xl mb-3`}>Ingredients:</h4>
              <ul className="flex flex-wrap gap-2 text-gray-600">
                {product.ingredients.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-main">&bull;</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {product.benefits && (
              <div>
                <h4 className={`${instrumental.className} text-2xl mb-3`}>Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.benefits.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-center py-20 text-gray-700 text-xl">
        Failed to load product.
      </div>
    );
  }
};

export default Page;
