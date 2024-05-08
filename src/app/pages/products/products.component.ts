import { Component } from "@angular/core";
import { IProduct } from "src/app/core/models/interface/product.interface";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss",
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    productService
      .getAllProduct()
      .subscribe((products) => (this.products = products));
  }

  getProducts(): IProduct[] {
    return this.products;
  }
}
