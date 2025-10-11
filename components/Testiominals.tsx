import React from "react";
import { instrumental } from "@/fonts/font";
import Review from "./Review";
import Testimonial from "@/lib/model/Testimonials";
import { connectDB } from "@/lib/config/database";


const Reviews = async () => {

  await connectDB()

    const res = await Testimonial.find({})
    const testimonials = JSON.parse(JSON.stringify(res))

  return (
    <section className="py-25 px-6 md:px-16 lg:px-28 bg-primary/10">
      <div className="text-center mb-10">
        <h2 className={`${instrumental.className} text-3xl md:text-6xl text-main`}>What Our Customers Say</h2>
        <p className="text-font text-sm md:text-base mt-3">
          Real experiences from people who’ve fallen in love with Iqzaibessence.
        </p>
      </div>

      <div className="container mx-auto px-0 md:px-5">
        <Review data={testimonials} />
      </div>
    </section>
  );
};

export default Reviews;
