'use client';

import React from 'react'
import { instrumental, styleScript } from '@/fonts/font';
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
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <Link href={`/products/${item.slug}`}>
            {/* Image Slider */}
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
                    className="w-full h-[300px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </SwiperSlide>
              ))}

              {/* Custom Navigation Arrows */}
              <div className="swiper-button-prev !text-main !scale-75 !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
              <div className="swiper-button-next !text-main !scale-75 !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
            </Swiper>

            {/* Product Info */}
            <div className="p-5 text-center space-y-2">
              <h3 className={`${instrumental.className} text-[22px] text-main`}>
                {item.name}
              </h3>
              <p className="text-gray-700 font-medium">
                PKR <span className="text-main font-semibold">{item.price}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;