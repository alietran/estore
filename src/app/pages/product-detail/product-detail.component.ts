import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/core/models/interface/product.interface";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { ProductService } from "src/app/core/services/product/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrl: "./product-detail.component.scss",
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: IProduct;
  subscription: Subscription = new Subscription();
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    public cartStore: CartStoreItem
  ) {}

  ngOnInit(): void {
    const detailId: number = Number(
      this.activatedRoute.snapshot.paramMap.get("id")
    );
    this.subscription.add(
      this.productService.getDetailProduct(detailId).subscribe((product) => {
        this.product = product[0];
      })
    );
  }

  addToCart() {
    this.cartStore.addProduct(this.product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
