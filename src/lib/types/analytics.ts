import type { LeadSource } from './lead';

/**
 * Types of events tracked in the analytics system.
 */
export type EventType = 'page_view' | 'form_submit' | 'button_click' | 'pricing_view';

/**
 * Represents an analytics event tracked across the platform.
 * Used for behavioral analysis and conversion tracking.
 * 
 * @example
 * ```typescript
 * const event: AnalyticsEvent = {
 *   id: 'evt_abc123',
 *   sessionId: 'sess_xyz789',
 *   eventType: 'pricing_view',
 *   eventData: { tier: 'pro', currency: 'USD' },
 *   source: 'seojack.net',
 *   timestamp: new Date()
 * };
 * ```
 */
export interface AnalyticsEvent {
  /** Unique identifier for the event */
  id: string;
  /** Session identifier for grouping events */
  sessionId: string;
  /** User ID if authenticated */
  userId?: string;
  /** Associated lead ID if applicable */
  leadId?: string;
  /** Type of event being tracked */
  eventType: EventType;
  /** Custom event data (flexible structure) */
  eventData: Record<string, unknown>;
  /** Source marketing site */
  source: LeadSource;
  /** Timestamp when event occurred */
  timestamp: Date;
}

/**
 * Input data for tracking a new analytics event.
 * Excludes system-generated fields like id and timestamp.
 * 
 * @example
 * ```typescript
 * const input: TrackEventInput = {
 *   sessionId: 'sess_xyz789',
 *   eventType: 'button_click',
 *   eventData: { button: 'get-started', page: '/pricing' },
 *   source: 'seojack.net'
 * };
 * ```
 */
export interface TrackEventInput {
  /** Session identifier */
  sessionId: string;
  /** Type of event to track */
  eventType: EventType;
  /** Custom event data */
  eventData: Record<string, unknown>;
  /** Source marketing site */
  source: LeadSource;
}

