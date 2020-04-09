import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = [];
  
  constructor( private categoryService: CategoryService) { 
   
  }

  ngOnInit(): void {
    this.categoryList =this.categoryService.getCategory();
  }

}
