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
  address: string;
  city: string;
  state: string;
  pin: string;
  total: number;
  orderDate: string;
  orderId: number;
}

export interface PastOrderProduct {
  productName: string;
  productId: number;
  productImage: string;
  rating: number;
  qty: number;
  price: number;
  amount: number;
}
