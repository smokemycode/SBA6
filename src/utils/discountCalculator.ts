// discountCalculator.ts

/**
 * Calculates the dollar amount a product is discounted by.
 * @param price - The original price of the product.
 * @param discountPercentage - The discount percentage to apply.
 * @returns The dollar amount discount
 */

export function calculateDiscount(
    price: number,
    discountPercentage: number
): number {
    // Validate inputs
    if (price < 0) {
        throw new Error("Price cannot be negative.");
    }
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount percentage must be between 0 and 100.");
    }

    return price * (discountPercentage / 100);
}
