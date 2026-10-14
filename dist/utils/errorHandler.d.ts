/**
 * Custom error for API-related issues.
 */
export declare class ApiError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
/** Custom error for data validation issues.
 */
export declare class ValidationError extends Error {
    constructor(message: string);
}
/** Custom error for when a resource is not found.
 */
export declare class NotFoundError extends Error {
    constructor(message?: string);
}
/** Central place to handle errors */
export declare function handleError(error: unknown): string;
//# sourceMappingURL=errorHandler.d.ts.map