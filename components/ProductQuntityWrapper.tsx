'use client';

import React, { useState } from 'react'
import ProductQuantity from "@/components/ProductQunantity";
import AddToCartButton from "@/components/AddToCartButton";

const ProductQuantityWrapper = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-4">
      <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton data={product} quantity={quantity} />
    </div>
  );
};


export default ProductQuantityWrapper
