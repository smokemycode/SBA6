// Product model

export class Product {
	// Product properties
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

	constructor(
		id: number,
		title: string,
		description: string,
		price: number,
		discountPercentage: number,
		rating: number,
		stock: number,
		brand: string,
		category: string,
		thumbnail: string,
	) {
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
	displayDetails(): string {
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
    getPriceWithDiscount(): number {
        const discount = this.price * (this.discountPercentage / 100);
        return this.price - discount;
    }
}
