export interface Product {
  id: ProductId;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  inStock: boolean;
  rating: number;
}

export interface ProductId {
  _id: Types.ObjectId;
}
