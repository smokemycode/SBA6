// errorHandler.ts

/**
 * Custom error for API-related issues.
 */

export class ApiError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message); // Call the parent Error constructor
        this.name = 'ApiError'; // Set the error name
        this.statusCode = statusCode;
    }
}

/** Custom error for data validation issues.
 */

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

/** Custom error for when a resource is not found.
 */

export class NotFoundError extends Error {
    constructor(message: string = "Resource not found") {
        super(message);
        this.name = "NotFoundError";
    }
}

/** Central place to handle errors */

export function handleError(error: unknown): string {
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