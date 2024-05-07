import { Injectable } from '@angular/core';
import { IProduct } from '../models/interface/product.interface';
import { products } from '../sampleData/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProduct(): IProduct[] {
    return products;
  }
}
