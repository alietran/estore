import { Component } from "@angular/core";
import { ICartItem } from "src/app/core/models/interface/cart.interface";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";

@Component({
  selector: "app-cart",

  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent {
  constructor(public cartStore: CartStoreItem) {}

  updateQuantity($event: any, cartItem: ICartItem) {
  
    if ($event.target.innerText === "+") {
      this.cartStore.addProduct(cartItem.product);
    }else if ($event.target.innerText === '-'){
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItemCart(cartItem: ICartItem) {
    this.cartStore.removeProduct(cartItem);
  }



}
