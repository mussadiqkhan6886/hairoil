import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Reviews from "@/components/Testiominals";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Product />
      <Collection />
      <Reviews />
    </main>
  );
}
