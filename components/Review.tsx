'use client';

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { instrumental } from "@/fonts/font";

const Review = ({data} : {data: reviewType[]}) => {
  return (
    <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation
        breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        }}
        className="reviewSwiper"
    >
        {data.map((review) => (
        <SwiperSlide key={review._id}>
            <div className="bg-white shadow-lg rounded-2xl p-6 text-left h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 italic mb-4">“{review.message}”</p>
            <h3 className={`${instrumental.className} text-main capitalize text-xl sm:text-2xl`}>– {review.name}</h3>
            <p className='text-gray-500 text-sm text-center'>{review.designation}</p>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Review
