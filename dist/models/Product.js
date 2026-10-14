"use strict";
// Product model
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
        this.thumbnail = thumbnail;
    }
    // Method to display product details
    displayDetails() {
        return `
        Title: ${this.title}
        Brand: ${this.brand}
        Category: ${this.category}
        Price: $${this.price.toFixed(2)}
        Discount: ${this.discountPercentage}%
        Discounted Price: $${this.getPriceWithDiscount().toFixed(2)}
        Rating: ${this.rating} stars
        Stock: ${this.stock} units
        `;
    }
    // Method to calculate the price after discount
    getPriceWithDiscount() {
        const discount = this.price * (this.discountPercentage / 100);
        return this.price - discount;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map