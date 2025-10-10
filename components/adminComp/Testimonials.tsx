"use client";

import React from "react";
import { FaStar, FaRegStar, FaEdit, FaTrash } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  designation?: string;
  message: string;
  image?: string;
  createdAt: string;
}

export default function TestimonialsList({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="p-6">
      <div className="flex justify-between px-10 mb-4">
        <h1 className="text-2xl font-bold mb-6">Testimonials</h1>
        <button className="bg-black text-white px-3.5 cursor-pointer rounded-lg">Add Testimonial</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={t.image || "/default-avatar.png"}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{t.name}</h2>
                <p className="text-gray-500 text-sm">{t.designation}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-3">
              “{t.message.length > 120
                ? t.message.slice(0, 120) + "..."
                : t.message}”
            </p>


            <div className="flex justify-between items-center text-sm text-gray-600">
            
              <div className="flex gap-3">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
