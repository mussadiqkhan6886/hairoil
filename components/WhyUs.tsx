'use client';

import { instrumental, styleScript } from '@/fonts/font';
import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  // animation variants for smoother control
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger each card
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const cards = [
    {
      title: '100% Natural Ingredients',
      text: 'Our hair oil is crafted with pure herbal extracts, free from chemicals, parabens, and sulfates — perfect for all hair types.',
    },
    {
      title: 'Visible Results',
      text: 'Experience stronger, shinier, and healthier hair within weeks — proven results from real users who trusted nature’s touch.',
    },
    {
      title: 'Traditionally Inspired',
      text: 'Inspired by ancient herbal remedies, our formula blends tradition with modern hair care science for the best nourishment.',
    },
  ];

  return (
    <section className="py-24 px-5 md:px-16 lg:px-28 text-center overflow-hidden">
      <h2 className={`${styleScript.className} text-5xl mb-10 text-main`}>
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="p-6 shadow-lg rounded-2xl bg-green-50 hover:scale-105 transition-transform"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <h3
              className={`${instrumental.className} text-4xl text-green-700 mb-3`}
            >
              {card.title}
            </h3>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.video
        src="/anim.mp4"
        playsInline
        muted
        autoPlay
        loop
        className="mt-10 rounded-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default WhyUs;
