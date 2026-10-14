"use strict";
// errorHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.ValidationError = exports.ApiError = void 0;
exports.handleError = handleError;
/**
 * Custom error for API-related issues.
 */
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message); // Call the parent Error constructor
        this.name = 'ApiError'; // Set the error name
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
/** Custom error for data validation issues.
 */
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
/** Custom error for when a resource is not found.
 */
class NotFoundError extends Error {
    constructor(message = "Resource not found") {
        super(message);
        this.name = "NotFoundError";
    }
}
exports.NotFoundError = NotFoundError;
/** Central place to handle errors */
function handleError(error) {
    if (error instanceof ApiError) {
        return `API Error: ${error.message} (Status Code: ${error.statusCode})`;
    }
    if (error instanceof ValidationError) {
        return `Validation Error: ${error.message}`;
    }
    if (error instanceof NotFoundError) {
        return `Not Found Error: ${error.message}`;
    }
    if (error instanceof Error) {
        return `Error: ${error.message}`;
    }
    return "An unexpected error occurred";
}
//# sourceMappingURL=errorHandler.js.map