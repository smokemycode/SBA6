// main.ts

import { fetchAllProducts, fetchProductById } from './services/apiService';
import { calculateDiscount } from './utils/discountCalculator';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';
import { Product } from './models/Product';

/** Display full info for a single product, including discount and tax */

function displayProductWithCalculations(product: Product): void {
    console.log(product.displayDetails());

    const discountAmount = calculateDiscount(
        product.price, 
        product.discountPercentage);

    const discountedPrice = product.price - discountAmount;
    const taxAmount = calculateTax(discountedPrice, product.category);
    const finalPrice = discountedPrice + taxAmount;

    console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Price after Discount: $${discountedPrice.toFixed(2)}`);
    console.log(`Tax (${product.category === "groceries" ? "3%" : "4.75%"}): +$${taxAmount.toFixed(2)}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
    console.log('-----------------------------------');
}

async function main() {
    console.log("E-commerce Product Management System\n");

    // Fetch a single product
    try {
        console.log("Fetching product #1...\n");
        const product = await fetchProductById(1);
        displayProductWithCalculations(product);
    } catch (error) {
        console.error(handleError(error));
    }

    // Fetch all products
    try {
        console.log("\nFetching all products...\n");
        const products = await fetchAllProducts();
        console.log(`Loaded ${products.length} products.\n`);

        // Show just the first 5 to keep output manageable
        products.slice(0, 5).forEach(p => {
            displayProductWithCalculations(p);
        });
    } catch (error) {
        console.error(handleError(error));
    }

    // Deliberate error demo
    try {
        console.log("\nTesting error handling (bad product ID)...\n");
        await fetchProductById(-1); // Invalid ID to trigger error
    } catch (error) {
        console.error(handleError(error));
    }
}

// Run the main function
main();