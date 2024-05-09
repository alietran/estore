import { Component } from "@angular/core";
import { ProductStoreItem } from "src/app/core/services/product/product.storeItem";

@Component({
  selector: "app-product-item",

  templateUrl: "./product-item.component.html",
  styleUrl: "./product-item.component.scss",
})
export class ProductItemComponent {
  constructor(private productStoreItem: ProductStoreItem) {
    this.productStoreItem.loadProduct();
  }

  onSelectSubCate(subCateId: number) {
    this.productStoreItem.loadProduct("subcategoryid=" + subCateId);
  }
}
