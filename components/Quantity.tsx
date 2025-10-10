import React from 'react'

const Quantity = () => {

    const updateQuantity = (id: number, type: "inc" | "dec") => {
        setCart((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    type === "inc"
                      ? item.quantity + 1
                      : item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                }
              : item
          )
        );
      };
    

  return (
    <div className="flex items-center mr-2 sm:mr-0 gap-3">
        <button
        onClick={() => updateQuantity(item.id, "dec")}
        className=" px-2 md:px-3 py-0.5 md:py-1 border rounded-lg"
        >
        −
        </button>
        <span className="text-sm lg:text-lg">{item.quantity}</span>
        <button
        onClick={() => updateQuantity(item.id, "inc")}
        className=" px-2 md:px-3 py-0.5 md:py-1 border rounded-lg"
        >
        +
        </button>
    </div>
  )
}

export default Quantity
