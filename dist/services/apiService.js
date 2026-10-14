"use strict";
// apiService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductById = fetchProductById;
exports.fetchAllProducts = fetchAllProducts;
exports.fetchProductsByCategory = fetchProductsByCategory;
const Product_1 = require("../models/Product");
const errorHandler_1 = require("../utils/errorHandler");
const BASE_URL = 'https://dummyjson.com/products';
/** Fetches a single product by ID */
async function fetchProductById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);
        // Check if the response was successful
        if (response.status === 404) {
            throw new errorHandler_1.NotFoundError(`Product with ID ${id} not found`);
        }
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch product with ID ${id}: ${response.statusText}`, response.status);
        }
        const data = await response.json();
        // Convert plain object into a Product instance
        return new Product_1.Product(data.id, data.title, data.description, data.price, data.discountPercentage, data.rating, data.stock, data.brand, data.category, data.thumbnail);
    }
    catch (error) {
        // Re-throw our custom errors, wrap others
        if (error instanceof errorHandler_1.ApiError || error instanceof errorHandler_1.NotFoundError) {
            throw error;
        }
        throw new errorHandler_1.ApiError(`Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
    }
}
/** Fetches all products */
async function fetchAllProducts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch products: ${response.statusText}`, response.status);
        }
        const data = await response.json();
        // Map raw data to Product instances
        return data.products.map((p) => new Product_1.Product(p.id, p.title, p.description, p.price, p.discountPercentage, p.rating, p.stock, p.brand, p.category, p.thumbnail));
    }
    catch (error) {
        if (error instanceof errorHandler_1.ApiError)
            throw error;
        throw new errorHandler_1.ApiError(`Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
    }
}
// Fetches products by category
async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(`${BASE_URL}/category/${category}`);
        if (response.status === 404) {
            throw new errorHandler_1.NotFoundError(`Category '${category}' not found`);
        }
        if (!response.ok) {
            throw new errorHandler_1.ApiError(`Failed to fetch products in category '${category}': ${response.statusText}`, response.status);
        }
        const data = await response.json();
        // Map raw data to Product instances
        return data.products.map((p) => new Product_1.Product(p.id, p.title, p.description, p.price, p.discountPercentage, p.rating, p.stock, p.brand, p.category, p.thumbnail));
    }
    catch (error) {
        if (error instanceof errorHandler_1.ApiError || error instanceof errorHandler_1.NotFoundError)
            throw error;
        throw new errorHandler_1.ApiError(`Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
    }
}
//# sourceMappingURL=apiService.js.map