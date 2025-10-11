"use client";

import { instrumental } from "@/fonts/font";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";



export default function CartPage() {
  
  const {cart, totalAmount, removeFromCart} = useCart()

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <h1 className={`${instrumental.className} text-main text-4xl mb-6`}>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-gray-500">Your cart is empty.</p>
        <Link href="/" className="bg-main text-white px-6 py-2 rounded-lg ">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded-2xl"
              >
                <div className="flex flex-col  gap-2 md:flex-row items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-xl"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500 text-sm">Rs. {item.price}</p>
                  </div>
                </div>


                <div className="flex flex-col items-end">
                  <p className="font-semibold text-sm text-nowrap md:text-base">
                    Rs. {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 mt-1 hover:underline"
                    >
                    Remove
                  </button>
                    <p className="text-sm text-gray-700 mt-1">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {totalAmount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>250</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>Rs. {totalAmount + 250}</span>
            </div>
            <button className="w-full py-3 bg-main text-white">
              <Link href={"/checkout"}>Processed to Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
