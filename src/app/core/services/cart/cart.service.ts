import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategory } from "../../models/interface/category.interface";

@Injectable()
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      "http://localhost:5001/productCategories"
    );
  }
}
