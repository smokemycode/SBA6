"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
/** Display full info for a single product, including discount and tax */
function displayProductWithCalculations(product) {
    console.log(product.displayDetails());
    const discountAmount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountPercentage);
    const discountedPrice = product.price - discountAmount;
    const taxAmount = (0, taxCalculator_1.calculateTax)(discountedPrice, product.category);
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
        const product = await (0, apiService_1.fetchProductById)(1);
        displayProductWithCalculations(product);
    }
    catch (error) {
        console.error((0, errorHandler_1.handleError)(error));
    }
    // Fetch all products
    try {
        console.log("\nFetching all products...\n");
        const products = await (0, apiService_1.fetchAllProducts)();
        console.log(`Loaded ${products.length} products.\n`);
        // Show just the first 5 to keep output manageable
        products.slice(0, 5).forEach(p => {
            displayProductWithCalculations(p);
        });
    }
    catch (error) {
        console.error((0, errorHandler_1.handleError)(error));
    }
    // Deliberate error demo
    try {
        console.log("\nTesting error handling (bad product ID)...\n");
        await (0, apiService_1.fetchProductById)(-1); // Invalid ID to trigger error
    }
    catch (error) {
        console.error((0, errorHandler_1.handleError)(error));
    }
}
// Run the main function
main();
//# sourceMappingURL=main.js.map