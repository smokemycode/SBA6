export declare class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, category: string, thumbnail: string);
    displayDetails(): string;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map