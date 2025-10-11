"use client";

import React from "react";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ProductQuantity = ({ quantity, setQuantity }: Props) => {
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center justify-between border rounded-lg w-[160px] px-4 py-3 text-lg font-bold text-main">
      <button
        onClick={handleDecrement}
        className="text-main hover:text-[#163F33] transition"
        type="button"
      >
        −
      </button>
      <span>{quantity}</span>
      <button
        onClick={handleIncrement}
        className="text-main hover:text-[#163F33] transition"
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
