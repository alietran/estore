import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../../models/interface/product.interface";
import { StoreItem } from "../../shared/storeItem";
import { ProductService } from "./product.service";

@Injectable()
export class ProductStoreItem extends StoreItem<IProduct[]> {
  constructor(private productService: ProductService) {
    super([]);
  }

  async loadProduct(query?: string) {
    this.productService
      .getAllProduct(query)
      .subscribe((products) => this.setValue(products));
  }

  get products$(): Observable<IProduct[]> {
    return this.value$;
  }
}
