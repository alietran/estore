export interface Order {
  userName: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  total: number;
  userEmail: string;
  orderDetails: OrderItem[];
}

export interface OrderItem {
  productId: number;
  qty: number;
  price: number;
  amount: number;
}

export interface PastOrder {
  userName: string;

  total: number;
  orderDate: string;
  orderId: number;
  amount: number;
  products: PastOrderProduct[];
}

export interface PastOrderProduct {
  productName: string;
  productId: number;
  productImage: string;
  rating: number;
  quantity: number;
  price: number;
  amount?: number;
}

export interface OrderDetail {
  address: string;
  city: string;
  state: string;
  pin: string;
  rating: number;
  quantity: number;
  price: number;
  userName: string;
  amount: string;
  orderDate: string;
  total: string;
  products: PastOrderProduct[];
}
