import ProductCard from '@/components/ProductCard';
import { instrumental } from '@/fonts/font';
import React from 'react';

const page = async () => {
  try {
    // Fetch products from API route
    const res = await fetch(`/api/products`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.data; // your API returns { message, data }
    console.log(data)
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
