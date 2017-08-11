import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductsService {
  products: any;
  product: any;
  constructor(private http: HttpClient) {
    this.getProducts()
  }
  getProducts() {
    this.http.get('https://gocleanlaundry.herokuapp.com/api/products').subscribe(products => {
      this.products = products;
    });
  }
  getProductByID(id) {
    return this.http.get(`https://gocleanlaundry.herokuapp.com/api/products/${id}`).subscribe(product => {
      this.product = product;
    });
  }
}
