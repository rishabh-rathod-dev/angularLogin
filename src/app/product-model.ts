
export class Product { 

    id: number;
    name: string;    
    category: string;
    subCategory: string;
    price: number;
    quantity: string;
    productImage: string;    
    description: string

    constructor(id, name, category, subCategory, price, quantity, productImage, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.subCategory = subCategory;
        this.productImage = productImage;
        this.quantity = quantity;
        this.description = description; 
    }

}