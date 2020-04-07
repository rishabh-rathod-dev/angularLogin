import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from '../product-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ ProductService ]

})
export class ShoppingListComponent implements OnInit {
  productList : Product[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList =  this.productService.getProduct();
    console.log(this.productList,"this.productList ")
  }

}
