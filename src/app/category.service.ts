import { Injectable } from '@angular/core';
import { Category } from  './category';

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
    new Category("Jea", "Mens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "Womens","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "Kids","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new Category("Shoes", "All","https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
  ]
}
