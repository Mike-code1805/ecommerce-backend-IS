import { model } from "mongoose";
import { Product } from "./product";
import { productSchema } from "./productSchema";

export const ProductModel = model<Product>("Product", productSchema);
