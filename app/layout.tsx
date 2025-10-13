import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/fonts/font";
import { CartContextProvider } from "@/context/CartContext";

// app/layout.js
export const metadata : Metadata = {
  title: "IqzaibEssence 100% Natural Hair Oil for Strong, Shiny & Healthy Hair",
  description:
    "IqzaibEssence brings you 100% pure and organic hair oils that promote hair growth, reduce dandruff, and restore natural shine. Crafted with natural ingredients for stronger, healthier, and thicker hair.",
    keywords: [
      "Iqzaibessence",
      "hair oil",
      "natural hair oil",
      "organic hair oil",
      "hair growth oil",
      "anti hair fall oil",
      "herbal hair oil",
      "best hair oil in Pakistan",
      "hair oil for dandruff",
      "non sticky hair oil",
      "rosemary hair oil",
      "castor hair oil",
      "coconut hair oil",
      "argan hair oil",
    ],
  authors: [{ name: "Iqzaibessence" }],
  metadataBase: new URL("https://hairoilbyiqra.vercel.app/"), // replace with your real domain
  openGraph: {
    title: "IqzaibEssence | Natural Hair Oils for Healthy Hair",
    description:
      "Discover IqzaibEssence’s premium range of organic hair oils that nourish your scalp, prevent hair fall, and promote healthy hair growth.",
    url: "https://hairoilbyiqra.vercel.app/",
    siteName: "hairoilbyiqra",
    images: [
      {
        url: "/oil (1).jpg",
        width: 1200,
        height: 630,
        alt: "IqzaibEssence Natural Hair Oil",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IqzaibEssence | 100% Organic Hair Oil for Healthy Hair",
    description:
      "Experience the natural power of IqzaibEssence — 100% pure hair oils made to strengthen, repair, and nourish your hair.",
    images: ["/oil (2).jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hairoilbyiqra.vercel.app/",
  },
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
