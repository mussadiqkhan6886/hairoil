import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { instrumental } from '@/fonts/font';
import React from 'react';


export const metadata: Metadata = {
  title: "IqzaibEssence Products",
  description:
    "Explore IqzaibEssence’s premium range of natural and organic hair oils made from argan, castor, coconut, and rosemary. Designed to promote hair growth, reduce hair fall, and bring back shine naturally — available across Pakistan.",
}

const page = async () => {
  try {
    // Fetch products from API route
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {next: {revalidate: 10}});

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.data; // your API returns { message, data }
    return (
      <main className="px-10 md:px-28 pb-10">
        <h2
          className={`${instrumental.className} text-5xl text-center py-10 text-main`}
        >
          Products
        </h2>

        <ProductCard data={products} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <main className="px-10 md:px-28 pb-10 text-center py-20 text-gray-700">
        Failed to load products.
      </main>
    );
  }
};

export default page;
