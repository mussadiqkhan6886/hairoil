'use client';

import { instrumental } from '@/fonts/font';
import Link from 'next/link';
import React from 'react';
import { motion, easeOut } from 'framer-motion'; // ✅ import easing preset
import Image from 'next/image';

const Product = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }, // ✅ fixed here
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut }, // ✅ fixed here
    },
  };

  return (
    <section className="py-10 lg:py-20 bg-green-50 overflow-hidden">
      <h2
        className={`${instrumental.className} text-5xl text-center mb-10 font-main text-main`}
      >
        Our Product
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-16">
        {/* Left Side - Product Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            width={150}
            height={150}
            src="/oil (3).jpg"
            alt="Herbal Hair Oil Bottle"
            className="w-full md:w-[80%] rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Product Description */}
        <motion.div
          className="md:w-1/2"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className={`${instrumental.className} text-[35px] sm:text-4xl text-main mb-6 leading-snug`}
          >
            Pure Herbal Hair Oil
          </h2>
          <p className="text-main text-lg mb-10 leading-relaxed">
            Discover the secret to naturally radiant, healthy, and strong hair with our
            <span className="text-main font-semibold">
              {' '}
              Pure Herbal Hair Oil
            </span>
            . Made with a blend of ancient herbs and essential oils, this luxurious formula
            deeply nourishes your scalp, strengthens hair roots, and reduces breakage —
            leaving your hair visibly shinier and smoother.
            <br />
            <br />
            Enriched with ingredients like Amla, Bhringraj, Coconut, and Castor Oil, it
            promotes natural growth, prevents dandruff, and restores lost vitality. Free
            from parabens, sulfates, and mineral oils — it’s 100% natural, safe, and
            effective for all hair types.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 bg-main text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition-colors"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
