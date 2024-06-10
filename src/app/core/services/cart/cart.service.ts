import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICategory } from "../../models/interface/category.interface";

@Injectable()
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getAllCategory(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      `${environment.apiBaseUrl}/productCategories`
    );
  }
}
