// apiService.ts

import { Product } from '../models/Product';
import { ApiError, NotFoundError } from '../utils/errorHandler';
import fetch from "node-fetch";

const BASE_URL = 'https://dummyjson.com/products';

/** Fetches a single product by ID */

export async function fetchProductById(id: number): Promise<Product> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        // Check if the response was successful
        if (response.status === 404) {
            throw new NotFoundError(`Product with ID ${id} not found`);
        }

        if (!response.ok) {
            throw new ApiError(`Failed to fetch product with ID ${id}: ${response.statusText}`, response.status);
        }

        const data = await response.json();

        // Convert plain object into a Product instance
        return new Product(
            data.id,
            data.title,
            data.description,
            data.price,
            data.discountPercentage,
            data.rating,
            data.stock,
            data.brand,
            data.category,
            data.thumbnail
        );
    } catch (error) {
        // Re-throw our custom errors, wrap others

        if (error instanceof ApiError || error instanceof NotFoundError) {
            throw error;
        }
        throw new ApiError(
            `Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
        }
}

/** Fetches all products */
export async function fetchAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new ApiError(
                `Failed to fetch products: ${response.statusText}`, response.status
            );
        }

        const data = await response.json();

        // Map raw data to Product instances
        return data.products.map((p: any) => new Product(
            p.id,
            p.title,
            p.description,
            p.price,
            p.discountPercentage,
            p.rating,
            p.stock,
            p.brand,
            p.category,
            p.thumbnail
        ));
    } catch (error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(
            `Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
    }
}

// Fetches products by category

export async function fetchProductsByCategory(category: string): Promise<Product[]> {
    try {
        const response = await fetch(`${BASE_URL}/category/${category}`);

        if (response.status === 404) {
            throw new NotFoundError(`Category '${category}' not found`);
        }

        if (!response.ok) {
            throw new ApiError(
                `Failed to fetch products in category '${category}': ${response.statusText}`, response.status
            );
        }

        const data = await response.json();

        // Map raw data to Product instances
        return data.products.map((p: any) => new Product(
            p.id,
            p.title,
            p.description,
            p.price,
            p.discountPercentage,
            p.rating,
            p.stock,
            p.brand,
            p.category,
            p.thumbnail
        ));
    } catch (error) {
        if (error instanceof ApiError || error instanceof NotFoundError) throw error;
        throw new ApiError(
            `Network error: ${error instanceof Error ? error.message : "Unknown"}`, 0);
    }
}
