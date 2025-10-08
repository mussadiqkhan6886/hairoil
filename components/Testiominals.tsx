"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { instrumental } from "@/fonts/font";

const reviews = [
  {
    name: "Ayesha Khan",
    message:
      "Iqzaib Essence completely transformed my hair! It feels softer, smoother, and looks so much healthier after just two weeks.",
  },
  {
    name: "Sara Malik",
    message:
      "The herbal fragrance is amazing and calming. My hair fall has reduced a lot — definitely my go-to oil now!",
  },
  {
    name: "Hassan Raza",
    message:
      "I never thought an oil could make such a difference. My scalp feels nourished and dandruff is gone!",
  },
  {
    name: "Marium Sheikh",
    message:
      "This oil revived my dull hair. It’s lightweight, non-greasy, and leaves a beautiful shine. Totally recommend it!",
  },
  {
    name: "Sana Javed",
    message:
      "After trying so many products, Iqzaib Essence finally gave me real results. My hair feels alive again!",
  },
  {
    name: "Ali Hamza",
    message:
      "The best natural oil I’ve ever used. My hair feels stronger and thicker, and the scent is so refreshing.",
  },
  {
    name: "Hina Qureshi",
    message:
      "I love how this oil absorbs easily and doesn’t leave residue. It’s become part of my weekly hair care routine.",
  },
  {
    name: "Nimra Fatima",
    message:
      "It’s pure herbal magic! My split ends are gone, and my hair finally has its shine back.",
  },
  {
    name: "Usman Tariq",
    message:
      "I gifted this to my sister and now she’s obsessed. Even I started using it, and I can see visible improvement!",
  },
  {
    name: "Laiba Noor",
    message:
      "A premium oil that actually works. My hair feels thicker and smoother every time I use it.",
  },
];

const Reviews = () => {
  return (
    <section className="py-25 px-6 md:px-16 lg:px-28 bg-primary/10">
      <div className="text-center mb-10">
        <h2 className={`${instrumental.className} text-3xl md:text-6xl text-main`}>What Our Customers Say</h2>
        <p className="text-font text-sm md:text-base mt-3">
          Real experiences from people who’ve fallen in love with Iqzaib Essence.
        </p>
      </div>

      <div className="container mx-auto px-0 md:px-5">
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
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-left h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 italic mb-4">“{review.message}”</p>
                <h3 className={`${instrumental.className} text-main text-xl sm:text-2xl`}>– {review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
