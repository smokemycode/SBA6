# Reflection: E-Commerce Product Management System

## TypeScript Features and OOP Principles

I implemented TypeScript's strong typing throughout the project, using
explicit types for every property, parameter, and return value. Custom
interfaces and classes (Product, ApiError, ValidationError, NotFoundError)
demonstrated object-oriented programming. The Product class encapsulated
data and behavior (displayDetails, getPriceWithDiscount), while inheritance
was used to extend Error for custom error types. I used the `unknown` type
in the error handler to enforce safe type checking with `instanceof`.

## Challenges and Solutions

The biggest challenge was handling the lack of a `taxPercentage` field in
the API. I solved this by designing `calculateTax()` with a default rate
and category-based logic. Another challenge was TypeScript's strict mode
flagging `possibly undefined` values — I learned to use type assertions
and non-null operators (`!`) carefully. Debugging async issues was tricky
until I added descriptive console logs and try/catch blocks.

## Asynchronous Operations and Error Management

I used `async/await` with the `fetch` API for clean, non-blocking I/O.
Every network call is wrapped in `try/catch` to prevent runtime crashes.
Custom error classes (ApiError, NotFoundError) allowed the application to
distinguish between network failures, invalid responses, and missing
resources, then report them with a human-friendly `handleError()` function.
This made the app resilient — even when fetching an invalid product ID,
the app printed a clear message instead of crashing.

## Conclusion

This project solidified my understanding of TypeScript's type system,
OOP design patterns, and modern async JavaScript. I now feel more confident
building modular, well-tested applications.