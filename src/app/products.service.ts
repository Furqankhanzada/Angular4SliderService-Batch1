import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {
  products: any;
  constructor(private http: HttpClient) {
    this.getProducts()
  }
  getProducts() {
    console.log('getProducts called')
    this.http.get('https://gocleanlaundry.herokuapp.com/api/products').subscribe(products => {
      // Read the result field from the JSON response.
      console.log('products', products)
      this.products = products;
    });
  }
}
