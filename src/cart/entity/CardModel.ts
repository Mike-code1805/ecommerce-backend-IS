import { model } from "mongoose";
import { Cart } from "./cart";
import { cartSchema } from "./cartSchema";

export const CartModel = model<Cart>("Cart", cartSchema);
