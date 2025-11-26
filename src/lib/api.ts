/**
 * SEOJack API Client Initialization
 * 
 * Singleton instance of the SEOJack API client configured for seojack.net.
 * Used across the application for making API calls.
 */

import { SEOJackAPI } from './api-client';

// Validate required environment variables at module load time
if (!process.env.NEXT_PUBLIC_SEOJACK_API_KEY) {
  console.warn('NEXT_PUBLIC_SEOJACK_API_KEY is not configured. API calls will fail.');
}

/**
 * Singleton API client instance.
 * Configured with API key and base URL from environment variables.
 */
export const api = new SEOJackAPI({
  apiKey: process.env.NEXT_PUBLIC_SEOJACK_API_KEY || '',
  baseURL: process.env.NEXT_PUBLIC_SEOJACK_API_URL || 'https://seojack.app',
});

/**
 * Export the API class for type checking and direct instantiation if needed.
 */
export { SEOJackAPI } from './api-client';

/**
 * Re-export commonly used types for convenience.
 */
export type {
  CreateLeadInput,
  CreateLeadResponse,
  APIError,
  ValidationError,
  NetworkError,
} from './api-client';

