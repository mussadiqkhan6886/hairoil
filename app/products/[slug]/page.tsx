import Image from "next/image";
import React from "react";
import { instrumental, styleScript } from "@/fonts/font";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  console.log(slug)
  // Example product data (you can later fetch from API or JSON)
  const products = [
    {
      slug: "herbal-oil",
      name: "Herbal Hair Oil",
      price: "PKR 2200",
      images: ["/oil (1).jpg", "/oil (2).jpg", "/oil (3).jpg"],
      description:
        "Our Herbal Hair Oil is a natural blend of pure herbs that deeply nourishes your scalp, strengthens roots, and promotes healthy hair growth. Crafted with care, it restores shine and reduces hair fall for smooth, silky, and strong hair naturally.",
      ingredients: ["Rosemary", "Amla", "Hibiscus", "Retha", "Sikakai", "Bal jhar", "Ratan jot", "Fenugreek", "Flax Seeds", "Neem", "Coconut oil", "Castor oil", "Rose Petals", "Essential herbs and oils"]
    },
  ];
  
  const product = products.find((p) => p.slug === slug);
  console.log(product)

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-700 text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <main className="px-10 md:px-28 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Product Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl shadow-lg w-full h-full"
          />
        </div>

        {/* Right - Product Details */}
        <div className="flex-1 space-y-6">
         <h2
            className={`${styleScript.className} text-5xl md:text-6xl text-main mb-5`}
          >
            {product.name}
          </h2>
          <h2 className="text-2xl text-[#1B4D3E] font-semibold">
            {product.price}
          </h2>
          <div className="rounded-lg text-lg font-bold p-3 border w-[160px] flex justify-between">
            <span>+</span>
            <span>1</span>
            <span>-</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>
          <div>
            <ul className=" pl-5">
              <h4 className={`${instrumental.className} text-2xl mb-2`}>Ingredients:</h4>
              {product.ingredients.map((item, i) => (
                <li className="text-gray-500 inline-block px-1" key={i}>
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-main text-white px-6 py-3 rounded-md hover:bg-[#163F33] transition font-semibold w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
