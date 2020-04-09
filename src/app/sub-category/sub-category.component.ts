import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../sub-category.service';
import { SubCategory } from '../subCategory-model';
import { CategoryService } from '../category.service';
import { Category } from '../category-model';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

   subCategoryList: SubCategory[] = [];
   categoryList: Category[] = [];

  constructor(private subCategoryService: SubCategoryService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.subCategoryList =this.subCategoryService.getCategory();
    this.categoryList =this.categoryService.getCategory();
    console.log(this.categoryList,"category list is here  look")
  }

}
