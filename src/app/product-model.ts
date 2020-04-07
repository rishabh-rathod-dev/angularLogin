
export class Product { 

    id: number;
    name: string;
    
    category: string;
    price: number;
    productImage: string;
    quantity: string

    constructor(id, name, category, price, quantity, productImage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.productImage = productImage;
        this.quantity = quantity; 
    }

}