import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import {
  PastOrder,
  PastOrderProduct,
} from "src/app/core/models/interface/order.interface";
import { OrderService } from "src/app/core/services/order/order.service";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
  selector: "app-past-order",
  templateUrl: "./past-order.component.html",
  styleUrl: "./past-order.component.scss",
})
export class PastOrderComponent implements OnInit, OnDestroy {
  pastOrderProducts: PastOrderProduct[] = [];
  pastOrder: PastOrder;
  pastOrders: PastOrder[] = [];
  subscription: Subscription = new Subscription();
  userInfoJson = localStorage.getItem("userInfo");
  email = this.userInfoJson ? JSON.parse(this.userInfoJson).email : "";

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log(this.email);
    if (this.userService.isUserAuthenticated) {
      this.subscription.add(
        this.orderService.getOrders(this.email).subscribe((result) => {
          console.log("result", result);
          this.pastOrders = result;
        })
      );
    }
  }

  selectOrder(event: any): void {
    console.log("event", event);
    if (Number.parseInt(event.target.value) > 0) {
      this.pastOrder = this.pastOrders.filter(
        (order) => order.orderId === Number.parseInt(event.target.value)
      )[0];
      console.log("pastOrder[0]", this.pastOrder);
      this.getOrderProducts(this.pastOrder.orderId);
    } else {
      this.pastOrder = <any>undefined;
      this.pastOrderProducts = [];
    }
  }

  getOrderProducts(orderId: number) {
    this.subscription.add(
      this.orderService.getOrderProducts(orderId).subscribe(
        (products) =>
          // console.log("products", products)
          (this.pastOrderProducts = products)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
