import { Product } from '../models/Product';
/** Fetches a single product by ID */
export declare function fetchProductById(id: number): Promise<Product>;
/** Fetches all products */
export declare function fetchAllProducts(): Promise<Product[]>;
export declare function fetchProductsByCategory(category: string): Promise<Product[]>;
//# sourceMappingURL=apiService.d.ts.map