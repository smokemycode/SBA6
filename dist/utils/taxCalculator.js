"use strict";
// taxCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
// Default tax rate constant
const DEFAULT_TAX_RATE = 0.0475; // 4.75%
const GROCERY_TAX_RATE = 0.03; // 3%
/**
 * Calulates the tax amount for a product.
 * @param price - The original price of the product.
 * @param category - The category of the product (e.g., "grocery", "electronics").
 * @returns The dollar amount of tax to be added to the product price.
 */
function calculateTax(price, category) {
    if (price < 0) {
        throw new Error("Price cannot be negative.");
    }
    // Pick the right tax rate based on the category
    let taxRate = DEFAULT_TAX_RATE;
    if (category.toLowerCase() === "groceries") {
        taxRate = GROCERY_TAX_RATE;
    }
    return price * taxRate;
}
//# sourceMappingURL=taxCalculator.js.map