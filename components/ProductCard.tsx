'use client';

import React from 'react'
import { instrumental } from '@/fonts/font';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ data }: { data: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 px-4">
      {data.map((item) => (
        <div
          key={item._id}
          className={`${
            item.inStock ? "opacity-100" : "opacity-60 cursor-not-allowed"
          } bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
        >
          {/* ✅ Disable link when not in stock */}
          {item.inStock ? (
            <Link href={`/products/${item._id}`}>
              <ProductContent item={item} />
            </Link>
          ) : (
            <div className="pointer-events-none">
              <ProductContent item={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* 🧩 Reusable Content Component */
const ProductContent = ({ item }: { item: Product }) => (
  <>
    {/* 🖼️ Image Slider */}
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="relative group"
    >
      {item.images.map((image, i) => (
        <SwiperSlide key={i}>
          <Image
            src={image}
            alt={item.name}
            width={400}
            height={400}
            className="w-full h-[300px] object-cover object-center transition-transform duration-300 group-hover:scale-105 relative"
          />
          {item.isSale && (<div className='bg-red-600 absolute top-6 right-6 rounded-lg text-white px-2 '>on sale</div>)}
        </SwiperSlide>
      ))}

      {/* Custom Arrows */}
      <div className="swiper-button-prev !text-main !scale-75 !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
      <div className="swiper-button-next !text-main !scale-75 !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
    </Swiper>

    {/* 🛍️ Product Info */}
    <div className="p-5 text-center space-y-2">
      <h3 className={`${instrumental.className} text-[22px] text-main`}>
        {item.name}
      </h3>
      {!item.inStock && (
        <p className="text-red-500 font-medium text-sm">Not in stock</p>
      )}
      <p className="text-gray-700 font-medium">
        PKR <span className={`${item.isSale ? "line-through text-gray-800 text-sm" : "text-main font-semibold"}`}>{item.price}</span>
        {item.isSale && (<span className="font-semibold inline-block pl-2 text-lg">{item.discountPrice}</span>)}
      </p>
    </div>
  </>
);

export default ProductCard;
