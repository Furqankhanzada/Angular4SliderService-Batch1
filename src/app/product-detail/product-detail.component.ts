import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProductByID(this.route.snapshot.params.id)
  }

}
