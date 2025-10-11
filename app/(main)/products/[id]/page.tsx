import Image from "next/image";
import React from "react";
import { instrumental } from "@/fonts/font";
import ProductQuantityWrapper from "@/components/ProductQuntityWrapper";
import { connectDB } from "@/lib/config/database";
import Product from "@/lib/model/ProductSchema";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  await connectDB();
  const products = await Product.find().lean();
  return products.map((p) => ({
    id: p._id.toString(),
  }));
};


const Page = async ({ params }: ProductPageProps) => {
  await connectDB();
  const { id } = await params;
  const res = await Product.findById(id);
  const product = JSON.parse(JSON.stringify(res))

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

          {/* Quantity + Add to Cart */}
          <ProductQuantityWrapper product={product} />

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Ingredients */}
          <div>
            <h4 className={`${instrumental.className} text-2xl mb-3`}>
              Ingredients:
            </h4>
            <ul className="flex flex-wrap gap-2 text-gray-600">
              {product.ingredients.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-1">
                  <span className="text-main">&bull;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          {product.benefits && (
            <div>
              <h4 className={`${instrumental.className} text-2xl mb-3`}>
                Benefits:
              </h4>
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
};

export default Page;


