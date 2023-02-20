import { Product } from "../../product/entity/product";
import { UserId } from "../../user/entity/user";

export interface Cart {
  products: Product[];
  owner: UserId;
}
