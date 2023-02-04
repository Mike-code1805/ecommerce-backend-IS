import { Schema } from "mongoose";
import { Product } from "./product";

export const productSchema = new Schema<Product>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
