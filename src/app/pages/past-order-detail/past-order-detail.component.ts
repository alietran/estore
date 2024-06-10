import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { OrderDetail } from "src/app/core/models/interface/order.interface";
import { OrderService } from "src/app/core/services/order/order.service";

@Component({
  selector: "app-past-order-detail",
  templateUrl: "./past-order-detail.component.html",
  styleUrl: "./past-order-detail.component.scss",
})
export class PastOrderDetailComponent {
  subscription: Subscription = new Subscription();
  orderId: number;
  pastOrderProduct: OrderDetail;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.orderId = this.route.snapshot.params["id"];
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.subscription.add(
      this.orderService
        .getOrderProducts(this.orderId)
        .subscribe((products) => (this.pastOrderProduct = products[0]))
    );
  }

  back() {
    this.router.navigate(["home/past-order"]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
