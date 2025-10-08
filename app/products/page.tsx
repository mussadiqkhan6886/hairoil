'use client';

import { instrumental, styleScript } from '@/fonts/font';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const page = () => {
  return (
    <main className="px-10 md:px-28 pb-10">
      <h2
        className={`${instrumental.className} text-5xl text-center py-10 text-main`}
      >
        Products
      </h2>

      <div className="flex">
        <Link href="/products/herbal-oil" className=" rounded-lg shadow-md overflow-hidden">
          {/* Swiper Image Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-[300px] h-[300px] hover:scale-105 cursor-pointer duration-300 transition-all rounded-t "
          >
            <SwiperSlide>
              <Image
                src="/oil (1).jpg"
                alt="Herbal Oil"
                width={300}
                height={300}
                className="rounded object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/oil (2).jpg"
                alt="Herbal Oil"
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/oil (3).jpg"
                alt="Herbal Oil"
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
            </SwiperSlide>

            {/* Custom Arrows */}
            <div className="swiper-button-prev !text-[#1B4D3E] !scale-75"></div>
            <div className="swiper-button-next !text-[#1B4D3E] !scale-75"></div>
          </Swiper>

          {/* Product Info */}
          <div className="p-5 text-center">
            <h3 className={`${instrumental.className} text-[26px] text-main`}>
              Herbal Oil
            </h3>
            <h4 className="text-main/90 font-semibold">PKR 2200</h4>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default page;
