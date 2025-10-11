"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

// Define context type (optional but recommended for TS)
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalAmount: number;
  totalItems: number;
  calculateTotalAmount: () => void;
  calculateTotalItems: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const calculateTotalAmount = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  const calculateTotalItems = () => {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  };

  // Recalculate totals whenever cart changes
  useEffect(() => {
    calculateTotalAmount();
    calculateTotalItems();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalAmount,
        totalItems,
        calculateTotalAmount,
        calculateTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
