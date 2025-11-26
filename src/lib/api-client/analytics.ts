import { z } from 'zod';
import type { TrackEventInput } from '../types';
import type { SEOJackAPI } from './client';
import { ValidationError } from './errors';

// Validation schema
const trackEventInputSchema = z.object({
  sessionId: z.string().min(1, 'Session ID is required'),
  eventType: z.enum(['page_view', 'form_submit', 'button_click', 'pricing_view']),
  eventData: z.record(z.unknown()), // Zod v3: record takes value type, keys default to string
  source: z.enum(['seojack.net', 'seojack.co.uk']),
});

/**
 * Response from analytics track endpoint
 */
export interface TrackEventResponse {
  /** Whether event was tracked successfully */
  success: boolean;
  /** Generated event identifier */
  eventId: string;
}

/**
 * Analytics API methods for tracking events
 */
export class AnalyticsAPI {
  constructor(private readonly client: SEOJackAPI) {}

  /**
   * Track an analytics event
   * 
   * @param event - Event data to track
   * @returns Promise with event tracking response including event ID
   * @throws {ValidationError} If input data is invalid
   * @throws {APIError} If API returns an error
   * @throws {NetworkError} If network request fails
   * 
   * @example
   * ```typescript
   * const result = await client.analytics.track({
   *   sessionId: 'sess_xyz789',
   *   eventType: 'pricing_view',
   *   eventData: { tier: 'pro', currency: 'USD' },
   *   source: 'seojack.net'
   * });
   * console.log(result.eventId); // 'evt_abc123'
   * ```
   */
  async track(event: TrackEventInput): Promise<TrackEventResponse> {
    // Validate input data
    try {
      trackEventInputSchema.parse(event);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const issues = error.issues || [];
        const validationErrors = issues.reduce((acc: Record<string, string>, err: any) => {
          const path = err.path?.join('.') || 'unknown';
          acc[path] = err.message;
          return acc;
        }, {});
        
        throw new ValidationError(
          `Validation failed: ${Object.values(validationErrors).join(', ')}`,
          validationErrors
        );
      }
      throw error;
    }

    // Make API request
    return this.client.request<TrackEventResponse>('/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  }
}

