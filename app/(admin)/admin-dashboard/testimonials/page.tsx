import TestimonialsList from "@/components/adminComp/Testimonials";
import React from "react";

export default async function TestimonialsPage() {
  try {
    // Fetch testimonials from API
    const res = await fetch(`/api/testimonials`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await res.json();
    console.log(data)
    const testimonials = data.testimonials;

    return <TestimonialsList testimonials={testimonials} />;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return (
      <div className="text-center py-20 text-gray-700 text-xl">
        Failed to load testimonials.
      </div>
    );
  }
}
