import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute} from '@angular/router';
// import {  ParamMap } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';

import { ProductService } from '../product.service'
// import { Product } from '../product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRoute;
  constructor(private routes: AppRoutingModule, private product: ProductService ) { }

  ngOnInit(): void {
    console.log(this.routes, this.product)
   console.log( this.routes.paramMap.subscribe(params => {
      this.productRoute = this.product[+params.get('id')];
    }),"routes");
  }

}
