import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-model';
import { from } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  product: Product[] = [];
  
  constructor( private productService: ProductService) { 
   
  }

  ngOnInit(): void {
    this.product =this.productService.getProduct();
    console.log(this.product,"product list is here")
  }

}
