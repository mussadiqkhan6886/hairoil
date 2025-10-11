export const revalidate = 60; // regenerate page every 60 seconds

import TestimonialsList from "@/components/adminComp/Testimonials";
import { connectDB } from "@/lib/config/database";
import Testimonial from "@/lib/model/Testimonials";


export default async function TestimonialsPage() {

  await connectDB()

  const res = await Testimonial.find({})
  const testimonials = JSON.parse(JSON.stringify(res))

  return <TestimonialsList testimonials={testimonials} />;
}
