import { Injectable } from "@angular/core";
import { IProduct } from "../models/interface/product.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:5001/products");
  }
}
