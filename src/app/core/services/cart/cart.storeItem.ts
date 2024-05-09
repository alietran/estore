import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICart, ICartItem } from "../../models/interface/cart.interface";
import { IProduct } from "../../models/interface/product.interface";
import { StoreItem } from "../../shared/storeItem";

@Injectable()
export class CartStoreItem extends StoreItem<ICart> {
  constructor() {
    super({
      products: [],
      totalAmount: 0,
      totalProducts: 0,
    });
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
      this.cart.products.push({
        product,
        amount: product.price,
        quantity: 1,
      });
    } else {
      cartProduct.quantity++;
    }
    this.cart.totalAmount += Number(product.price);
    ++this.cart.totalProducts;
  }
}
