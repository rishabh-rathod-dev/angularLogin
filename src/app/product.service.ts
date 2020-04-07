import { Injectable } from '@angular/core';
import {Product } from './product-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: Product[] =[
    new Product (1,"Addidas Sport Shoes", "Shoes", 8000, 1,'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg') ,
    new Product (2,"Addidas Sport Shoes", "Shoes", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (3,"Addidas Sport Shoes", "Shoes", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (4,"Addidas Sport Shoes", "Shoes", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (5,"Shirts", "Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (6,"Shirts", "Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (7,"Shirts", "Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (8,"Shirts", "Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (9,"T-Shirts", "T-Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (10, "T-Shirts", "T-Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (11, "T-Shirts", "T-Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (12, "T-Shirts", "T-Shirts", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (13, "Jeans", "Jeans", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (14,"Jeans", "Jeans", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (15,"Jeans", "Jeans", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' ),
    new Product (16,"Jeans", "Jeans", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg' )

 ]

 cart: Product[] = [];
 getProduct(){
   return this.productList;
   console.log(this.productList,"Product List")
 }
  
}
