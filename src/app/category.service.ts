import { Injectable } from '@angular/core';
import { Category } from  './category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categoryList: Category [] = [
    new Category("Shoes", "Mens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "Womens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "Kids","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "All","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Jeans", "Mens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Jeans", "Womens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Jeans", "Kids","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Jeans", "All","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
  ]
  getCategory(){
    return this.categoryList;
  }
}
