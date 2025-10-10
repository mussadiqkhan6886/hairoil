import TestimonialsList from "@/components/adminComp/Testimonials";
import Testimonial from "@/lib/model/Testimonials";


export default async function TestimonialsPage() {

  const res = await Testimonial.find({})
  const testimonials = JSON.parse(JSON.stringify(res))

  return <TestimonialsList testimonials={testimonials} />;
}
