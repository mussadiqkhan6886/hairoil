"use client";

import { useCart } from "@/hooks/useCart";
import React from "react";

interface Props {
  data: Product;
  quantity: number;
}

const AddToCartButton = ({ data, quantity }: Props) => {
  const { addToCart, cart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: data._id,
          name: data.name,
          price: data.isSale ? data.discountPrice : data.price,
          image: data.images[0],
          quantity,
        })
      }
      className="bg-main text-white px-6 py-3 rounded-md hover:bg-[#163F33] transition font-semibold w-full"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
