import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
// import {  ParamMap } from '@angular/router';
import { Router } from '@angular/router';

// import { AppRoutingModule } from '../app-routing.module';

import { ProductService } from '../product.service'
// import { Product } from '../product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productService: ProductService;
  constructor(private router: Router, private product: ProductService ) { }

  ngOnInit(): void {
    this.productService = this.product;
    console.log(this.router.url, "router module")
    console.log(this.productService.productList,"product list")
  }

}
