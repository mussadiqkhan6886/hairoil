import TestimonialsList from "@/components/adminComp/Testimonials";

const dummyTestimonials = [
  {
    id: 1,
    name: "Ali Khan",
    designation: "Customer",
    message:
      "This hair oil has made my hair smoother and stronger. I highly recommend it to everyone.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    createdAt: "2025-10-09",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    designation: "Salon Owner",
    message:
      "The fragrance and results are amazing! My clients have started asking for it regularly.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    createdAt: "2025-10-07",
  },
  {
    id: 3,
    name: "Bilal Hussain",
    designation: "Customer",
    message:
      "Great product! My hair feels healthier and has more shine after just a few uses.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    createdAt: "2025-10-06",
  },
];

export default function TestimonialsPage() {
  return <TestimonialsList testimonials={dummyTestimonials} />;
}
