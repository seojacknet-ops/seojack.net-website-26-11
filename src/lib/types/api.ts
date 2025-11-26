/**
 * Standard API response wrapper for all endpoints.
 * Provides consistent structure for success and error cases.
 * 
 * @template T - Type of the response data
 * 
 * @example
 * ```typescript
 * // Success response
 * const response: APIResponse<{ leadId: string }> = {
 *   success: true,
 *   data: { leadId: 'lead_abc123' },
 *   requestId: 'req_xyz789'
 * };
 * 
 * // Error response
 * const errorResponse: APIResponse<never> = {
 *   success: false,
 *   error: 'Invalid email format',
 *   code: 'VALIDATION_ERROR',
 *   requestId: 'req_xyz789'
 * };
 * ```
 */
export interface APIResponse<T> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data (present on success) */
  data?: T;
  /** Error message (present on failure) */
  error?: string;
  /** Error code for programmatic handling */
  code?: string;
  /** Request ID for tracing and debugging */
  requestId?: string;
}

/**
 * Response from lead creation endpoint.
 * 
 * @example
 * ```typescript
 * const response: CreateLeadResponse = {
 *   success: true,
 *   leadId: 'lead_abc123',
 *   leadScore: 75,
 *   redirectUrl: 'https://app.seojack.net/signup?lead=lead_abc123'
 * };
 * ```
 */
export interface CreateLeadResponse {
  /** Whether lead was created successfully */
  success: boolean;
  /** Generated lead identifier */
  leadId: string;
  /** Calculated lead score */
  leadScore: number;
  /** URL to redirect user to (signup with pre-filled data) */
  redirectUrl: string;
}

/**
 * Standard error response structure.
 * 
 * @example
 * ```typescript
 * const error: ErrorResponse = {
 *   error: 'Rate limit exceeded',
 *   code: 'RATE_LIMIT_EXCEEDED',
 *   requestId: 'req_xyz789'
 * };
 * ```
 */
export interface ErrorResponse {
  /** Human-readable error message */
  error: string;
  /** Machine-readable error code */
  code: string;
  /** Request ID for tracing */
  requestId?: string;
}

