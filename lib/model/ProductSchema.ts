import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = new Schema(
  {
    productId: { type: String, default: () => uuidv4() },
    name: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    isSale: { type: Boolean, default: false },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    images: [{ type: String, required: true }],
    isNewArrival: { type: Boolean, default: true },
    size: { type: String, required: true },
    ingredients: [{type: String, required: true}],
    benefits: [
      {
        type: String,
        trim: true,
      },
    ],
    },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
