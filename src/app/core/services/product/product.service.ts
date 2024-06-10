import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../../models/interface/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProduct(query?: string): Observable<IProduct[]> {
    let url: string = `${environment.apiBaseUrl}/products`;
    if (query) {
      url += "?" + query;
    }
    return this.httpClient.get<IProduct[]>(url);
  }

  getDetailProduct(id: number): Observable<IProduct[]> {
    const url: string = `${environment.apiBaseUrl}/products/` + id;
    return this.httpClient.get<IProduct[]>(url);
  }
}
