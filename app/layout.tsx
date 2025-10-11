import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/fonts/font";
import { CartContextProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Hair oil by iqra",
  description: "Hair oil by iqra, herbal oil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased`}
      >
        <CartContextProvider>
        {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
