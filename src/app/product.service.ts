import { Injectable } from '@angular/core';
import {Product } from './product-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: Product[] =[
    new Product (1,"Addidas Sport Shoes", "Shoes", "Mens", 8000, 1,'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description") ,
    new Product (2,"Addidas Sport Shoes", "Shoes", "Womens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (3,"Addidas Sport Shoes", "Shoes", "Kids", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (4,"Addidas Sport Shoes", "Shoes", "All", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (5,"Shirts", "Shirts", "Mens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (6,"Shirts", "Shirts", "Womens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (7,"Shirts", "Shirts", "Kids", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (8,"Shirts", "Shirts", "All", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (9,"T-Shirts", "T-Shirts", "Womens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (10, "T-Shirts", "T-Shirts", "Mens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (11, "T-Shirts", "T-Shirts", "Kids", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (12, "T-Shirts", "T-Shirts", "All", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (13, "Jeans", "Jeans", "Mens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (14,"Jeans", "Jeans", "Womens", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (15,"Jeans", "Jeans", "Kids", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" ),
    new Product (16,"Jeans", "Jeans", "All", 8000, 1, 'https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg',"Description" )

 ]

 getProduct(){
   return this.productList;
 }
  
}
