export const revalidate = 60; // regenerate page every 60 seconds

import ProductTable from "@/components/adminComp/ProductTable";
import Product from "@/lib/model/ProductSchema";
import { connectDB } from "@/lib/config/database";

export default async function AdminProductsPage() {
  await connectDB();

  const products = await Product.find({});

  const plainProducts = JSON.parse(JSON.stringify(products));

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <ProductTable products={plainProducts} />
    </div>
  );
}
