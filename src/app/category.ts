export class Category { 
    category: string;
    subCategory: string;
    categoryImage: string;

    constructor( category, subCategory, categoryImage) {
        this.category = category;
        this.subCategory = subCategory;
        this.categoryImage = categoryImage;
    }
}