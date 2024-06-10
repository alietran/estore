import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { PastOrder } from "src/app/core/models/interface/order.interface";
import { OrderService } from "src/app/core/services/order/order.service";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
  selector: "app-past-order",
  templateUrl: "./past-order.component.html",
  styleUrl: "./past-order.component.scss",
})
export class PastOrderComponent implements OnInit, OnDestroy {
  pastOrder: PastOrder;
  pastOrders: PastOrder[] = [];
  subscription: Subscription = new Subscription();
  userInfoJson = localStorage.getItem("userInfo");
  email = this.userInfoJson ? JSON.parse(this.userInfoJson).email : "";
  collection: any = [];
  p: number = 1;
  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private router: Router
  ) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() {
    if (this.userService.isUserAuthenticated) {
      this.subscription.add(
        this.orderService.getOrders(this.email).subscribe((result) => {
          this.pastOrders = result;
        })
      );
    }
  }

  getOrderDetails(orderId: number) {
    this.router.navigate(["/home/past-order", orderId]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
