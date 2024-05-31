import { IProduct } from "./product.interface";

export interface ICartItem {
  product: IProduct;
  quantity: number;
  amount: number;
}

export interface ICart {
  products: ICartItem[];
  totalAmount: number;
  totalProducts: number;
}

export interface DeliveryAddress {
  userName: string;
  address: string;
  city: string;
  state: string;
  pin: string;
}
