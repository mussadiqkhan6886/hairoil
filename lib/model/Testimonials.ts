import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    designation: { type: String }, // e.g. "Customer", "Hair Specialist"
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
