import React from "react";
import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/config/database";
import Product from "@/lib/model/ProductSchema";
import { instrumental } from "@/fonts/font";


const CollectionPage = async () => {
  await connectDB();

  const products = await Product.find({ category: "hair oil" }).lean<Product[]>();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        No hair oil products found.
      </div>
    );
  }

  return (
    <main className="px-6 md:px-16 py-16">
      <h1
        className={`${instrumental.className} text-4xl md:text-5xl text-center text-main mb-12`}
      >
        Our Hair Oil Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item._id}
            className="group bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <Link href={`/products/${item._id}`}>
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`${instrumental.className} text-2xl text-main mb-1`}
                >
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm line-clamp-2 mb-2">
                  {item.description}
                </p>
                <p className="text-main font-semibold">PKR {item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CollectionPage;
