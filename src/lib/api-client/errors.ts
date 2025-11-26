/**
 * Custom error classes for SEOJack API SDK
 */

/**
 * Error thrown when the API returns an error response
 */
export class APIError extends Error {
  public readonly statusCode: number;
  public readonly endpoint?: string;

  constructor(message: string, statusCode: number, endpoint?: string) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.endpoint = endpoint;

    // Maintains proper stack trace for where error was thrown (V8 only)
    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, APIError);
    }
  }
}

/**
 * Error thrown when request validation fails
 */
export class ValidationError extends Error {
  public readonly validationErrors: Record<string, unknown>;

  constructor(message: string, validationErrors: Record<string, unknown>) {
    super(message);
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;

    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, ValidationError);
    }
  }
}

/**
 * Error thrown when a network request fails
 */
export class NetworkError extends Error {
  public readonly originalError: Error;

  constructor(message: string, originalError: Error) {
    super(message);
    this.name = 'NetworkError';
    this.originalError = originalError;

    if (typeof (Error as any).captureStackTrace === 'function') {
      (Error as any).captureStackTrace(this, NetworkError);
    }
  }
}

