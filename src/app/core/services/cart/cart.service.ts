import { Injectable } from "@angular/core";
import { ICategory } from "../../models/interface/category.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      "http://localhost:5001/productCategories"
    );
  }
}
