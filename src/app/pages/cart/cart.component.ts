import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import {
  DeliveryAddress,
  ICartItem,
} from "src/app/core/models/interface/cart.interface";
import { userInfoRO } from "src/app/core/models/ro/auth.ro";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { OrderService } from "src/app/core/services/order/order.service";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.scss",
})
export class CartComponent implements OnInit {
  orderForm: FormGroup;
  user: userInfoRO;
  subscriptions: Subscription = new Subscription();
  alertMessage: string;
  userName = "";
  constructor(
    public cartStore: CartStoreItem,
    private fb: FormBuilder,
    private userService: UserService,
    private orderService: OrderService
  ) {
    this.user = {
      firstName: "",
      lastName: "",
      state: "",
      city: "",
      address: "",
      pin: "",
    };
    const storedUserInfo = localStorage.getItem("userInfo");
    this.user = storedUserInfo !== null ? JSON.parse(storedUserInfo) : "";
  }

  ngOnInit(): void {
    const isAuthenticated = this.userService.isUserAuthenticated;
    this.userName = isAuthenticated
      ? `${this.user.firstName} ${this.user.lastName}`
      : "";
    this.orderForm = this.fb.group({
      name: [this.userName, Validators.required],
      address: [this.user.address, Validators.required],
      pin: [this.user.pin, Validators.required],
      state: [this.user.state, Validators.required],
      city: [this.user.city, Validators.required],
    });
  }

  updateQuantity($event: any, cartItem: ICartItem) {
    if ($event.target.innerText === "+") {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === "-") {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItemCart(cartItem: ICartItem) {
    this.cartStore.removeProduct(cartItem);
  }

  onSubmit() {
    if (this.userService.isUserAuthenticated) {
      const deliveryAddress: DeliveryAddress = {
        userName: this.orderForm.get("name")?.value,
        state: this.orderForm.get("state")?.value,
        address: this.orderForm.get("address")?.value,
        pin: this.orderForm.get("pin")?.value,
        city: this.orderForm.get("city")?.value,
      };

      const email = this.user.email ?? "";
      this.subscriptions.add(
        this.orderService.saveOrder(deliveryAddress, email).subscribe({
          next: () => {
            this.cartStore.clearCart();
            this.alertMessage = "Order saved successfully";
          },
          error: (err) => {
            if (err.error.message === "Authentication failed") {
              this.alertMessage = "Please login to checkout the order";
            } else {
              this.alertMessage = err.error.message;
            }
          },
        })
      );
    }
  }
}
