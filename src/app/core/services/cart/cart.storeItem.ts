import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICart, ICartItem } from "../../models/interface/cart.interface";
import { IProduct } from "../../models/interface/product.interface";
import { StoreItem } from "../../shared/storeItem";

@Injectable()
export class CartStoreItem extends StoreItem<ICart> {
  constructor() {
    const storeCart = sessionStorage.getItem("cart");
    if (storeCart) {
      super(JSON.parse(storeCart));
    } else {
      super({
        products: [],
        totalAmount: 0,
        totalProducts: 0,
      });
    }
  }

  get cart$(): Observable<ICart> {
    return this.value$;
  }

  get cart(): ICart {
    return this.value;
  }

  addProduct(product: IProduct): void {
    const cartProduct: ICartItem | undefined = this.cart.products.find(
      (cartProduct) => cartProduct.product.id === product.id
    );
    if (!cartProduct) {
      this.cart.products = [
        ...this.cart.products,
        {
          product,
          amount: Number(product.price),
          quantity: 1,
        },
      ];
    } else {
      cartProduct.quantity++;
      cartProduct.amount += Number(product.price);
    }
    this.cart.totalAmount += Number(product.price);
    ++this.cart.totalProducts;
    this.saveCart();
  }

  removeProduct(cartItem: ICartItem) {
    this.cart.products = this.cart.products.filter(
      (item) => item.product.id !== cartItem.product.id
    );
    this.cart.totalProducts -= cartItem.quantity;
    this.cart.totalAmount -= cartItem.amount;
    if (this.cart.totalProducts === 0) {
      sessionStorage.clear();
    } else {
      this.saveCart();
    }
  }

  decreaseProductQuantity(cartItem: ICartItem) {
    const cartProduct: ICartItem | undefined = this.cart.products.find(
      (cartProduct) => cartProduct.product.id === cartItem.product.id
    );

    if (cartProduct) {
      if (cartProduct.quantity === 1) {
        this.removeProduct(cartProduct);
      } else {
        this.cart.totalAmount -= Number(cartItem.product.price);
        cartProduct.quantity--;
        --this.cart.totalProducts;
        this.saveCart();
      }
    }
  }

  saveCart() {
    sessionStorage.clear();
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
