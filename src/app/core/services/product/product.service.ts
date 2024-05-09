import { Injectable } from "@angular/core";
import { IProduct } from "../../models/interface/product.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct(query?: string): Observable<IProduct[]> {
    let url: string = "http://localhost:5001/products";
    if (query) {
      url += "?" + query;
    }
    return this.httpClient.get<IProduct[]>(url);
  }

  getDetailProduct(id: number): Observable<IProduct[]>{
    const url : string = "http://localhost:5001/products/" + id;
    return this.httpClient.get<IProduct[]>(url);
  }
}
