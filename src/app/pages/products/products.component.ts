import { Component } from "@angular/core";
import { IProduct } from "src/app/core/models/interface/product.interface";
import { CartStoreItem } from "src/app/core/services/cart/cart.storeItem";
import { ProductStoreItem } from "src/app/core/services/product/product.storeItem";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor(
    public productStoreItem: ProductStoreItem,
    public cartIem: CartStoreItem
  ) {}

  addToCart(product: IProduct): void {
    this.cartIem.addProduct(product);
  }
}
