'use client';

import React from 'react';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { instrumental } from '@/fonts/font';

const Contact = () => {
  return (
    <main className="bg-[#F8FAF8] text-[#1B4D3E] py-20 px-0 md:px-20">
      {/* Section Header */}
      <section className="text-center mb-12">
        <h1 className={`${instrumental.className} text-4xl md:text-5xl font-bold mb-3`}>
          Get In Touch With Us
        </h1>
        <p className="text-[#4A6B5B] text-lg">
          Have a question or need more information about our herbal hair oil?  
          We’d love to hear from you!
        </p>
      </section>

      {/* Contact Form + Info */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side - Contact Form */}
        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-[#C1DACC] rounded-md p-3 outline-none focus:ring-2 focus:ring-[#1B4D3E]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-[#C1DACC] rounded-md p-3 outline-none focus:ring-2 focus:ring-[#1B4D3E]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-[#C1DACC] rounded-md p-3 outline-none focus:ring-2 focus:ring-[#1B4D3E]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-main text-white py-3 rounded-md font-semibold hover:bg-[#163F33] transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Side - Contact Info */}
        <div className="space-y-8 pt-15 px-6">
          <div className="flex items-start gap-4">
            <FiMapPin className="text-3xl text-[#1B4D3E]" />
            <div>
              <h3 className="font-semibold text-lg">Our Address</h3>
              <p> Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiPhone className="text-3xl text-[#1B4D3E]" />
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p>+92 318 ********</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiMail className="text-3xl text-[#1B4D3E]" />
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p>mussadiqkhan6886@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
