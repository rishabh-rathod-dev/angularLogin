import { Injectable } from '@angular/core';
import { SubCategory } from './subCategory-model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor() { }
  subCategoryList: SubCategory [] = [ 
    new SubCategory ("Mens", "https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),    
    new SubCategory ("Womens", "https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new SubCategory ("Kids", "https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
    new SubCategory ("All", "https://images-eu.ssl-images-amazon.com/images/I/41VuRZdLo0L.jpg"),
  ]
  getCategory(){
    return this.subCategoryList;
  }
}
