import { APIError, NetworkError } from './errors';
import { LeadsAPI } from './leads';
import { AnalyticsAPI } from './analytics';

/**
 * Configuration options for SEOJackAPI client
 */
export interface SEOJackAPIConfig {
  /** API key for authentication */
  apiKey: string;
  /** Base URL for the API (e.g., https://seojack.app) */
  baseURL: string;
}

/**
 * Standard error response format from API
 */
interface ErrorResponse {
  /** Error message */
  error?: string;
  /** Error code (optional) */
  code?: string;
}

/**
 * Main SDK client for SEOJack platform API
 * 
 * @example
 * ```typescript
 * const client = new SEOJackAPI({
 *   apiKey: process.env.SEOJACK_API_KEY,
 *   baseURL: 'https://seojack.app'
 * });
 * 
 * const result = await client.leads.create({
 *   email: 'user@example.com',
 *   fullName: 'John Doe',
 *   source: 'seojack.net'
 * });
 * ```
 */
export class SEOJackAPI {
  private readonly apiKey: string;
  private readonly baseURL: string;

  /** Leads API methods */
  public readonly leads: LeadsAPI;
  
  /** Analytics API methods */
  public readonly analytics: AnalyticsAPI;

  /**
   * Create a new SEOJackAPI client instance
   * @param config - Configuration with apiKey and baseURL
   */
  constructor(config: SEOJackAPIConfig) {
    this.apiKey = config.apiKey;
    this.baseURL = config.baseURL;

    // Initialize API method groups
    this.leads = new LeadsAPI(this);
    this.analytics = new AnalyticsAPI(this);
  }

  /**
   * Make an HTTP request with retry logic and proper error handling
   * 
   * @param endpoint - API endpoint path (e.g., '/api/leads/create')
   * @param options - Fetch options (method, body, etc.)
   * @param retries - Number of retry attempts remaining (default: 3)
   * @returns Typed response data
   * @throws {APIError} When API returns an error response
   * @throws {NetworkError} When network request fails after all retries
   * @internal
   */
  async request<T>(
    endpoint: string,
    options: RequestInit,
    retries = 3
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': this.apiKey,
          ...options.headers,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({} as ErrorResponse));
        const errorMessage = errorData?.error || `HTTP ${response.status}`;
        
        // Don't retry on client errors (4xx) or rate limits (429)
        if (response.status >= 400 && response.status < 500) {
          throw new APIError(
            `API error: ${errorMessage}`,
            response.status,
            endpoint
          );
        }
        
        // Server errors (5xx) - will retry if retries remain
        throw new APIError(
          `API error: ${errorMessage}`,
          response.status,
          endpoint
        );
      }

      return response.json() as Promise<T>;
    } catch (error) {
      // Check if we should retry
      if (retries > 0 && this.shouldRetry(error)) {
        // Calculate exponential backoff delay
        const delayMs = Math.pow(2, 3 - retries) * 1000;
        await this.delay(delayMs);
        
        // Retry the request
        return this.request<T>(endpoint, options, retries - 1);
      }

      // No retries left or shouldn't retry - throw appropriate error
      if (error instanceof APIError) {
        throw error;
      }

      throw new NetworkError(
        `Network request failed: ${(error as Error).message}`,
        error as Error
      );
    }
  }

  /**
   * Determine if an error should trigger a retry
   * @param error - The error that occurred
   * @returns true if the request should be retried
   * @private
   */
  private shouldRetry(error: unknown): boolean {
    // Don't retry APIErrors with 4xx status codes
    if (error instanceof APIError) {
      return error.statusCode >= 500;
    }

    // Retry on network errors (fetch throws)
    return true;
  }

  /**
   * Delay execution for specified milliseconds
   * @param ms - Milliseconds to delay
   * @private
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

