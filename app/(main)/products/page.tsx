import ProductCard from '@/components/ProductCard';
import { instrumental, styleScript } from '@/fonts/font';
import { connectDB } from '@/lib/config/database';
import Product from '@/lib/model/ProductSchema';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';


const page = async () => {

 await connectDB()

 const products = await Product.find({})

 const data = JSON.parse(JSON.stringify(products))


  return (
    <main className="px-10 md:px-28 pb-10">
      <h2
        className={`${instrumental.className} text-5xl text-center py-10 text-main`}
      >
        Products
      </h2>

      <ProductCard data={data} />
    </main>
  );
};

export default page;
