import { Injectable } from '@angular/core';
import { Category } from  './category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categoryList: Category [] = [
    new Category("Shoes"),    
    new Category("Shirts"),
    new Category("T-Shirts"),
    new Category("Jeans"),
  ]
  getCategory(){
    return this.categoryList;
  }
}
