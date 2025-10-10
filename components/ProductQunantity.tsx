'use client';

import React, { useState } from 'react'

const ProductQunantity = () => {

    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => setQuantity((prev) => prev + 1);

    const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // prevent 0

  return (
    <div className="flex items-center justify-between border rounded-lg w-[160px] px-4 py-3 text-lg font-bold text-main">
        <button
            onClick={handleDecrement}
            className="text-main hover:text-[#163F33] transition"
        >
            −
        </button>
        <span>{quantity}</span>
        <button
            onClick={handleIncrement}
            className="text-main hover:text-[#163F33] transition"
        >
            +
        </button>
    </div>
  )
}

export default ProductQunantity
