// src/types.ts
export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface Sale {
  _id: string;
  productId: string;
  quantity: number;
  totalPrice: number;
}
