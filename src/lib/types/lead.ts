/**
 * Source domain for lead capture.
 * Represents which marketing site the lead came from.
 */
export type LeadSource = 'seojack.net' | 'seojack.co.uk';

/**
 * Current status of the lead in the sales funnel.
 */
export type LeadStatus = 'new' | 'contacted' | 'converted' | 'lost';

/**
 * UTM tracking parameters for attribution.
 * Used to track marketing campaign effectiveness.
 * 
 * @example
 * ```typescript
 * const utm: UTMParams = {
 *   campaign: 'summer-sale',
 *   source: 'google',
 *   medium: 'cpc',
 *   content: 'ad-variant-a'
 * };
 * ```
 */
export interface UTMParams {
  /** Campaign name (e.g., 'summer-sale') */
  campaign?: string;
  /** Traffic source (e.g., 'google', 'facebook') */
  source?: string;
  /** Marketing medium (e.g., 'cpc', 'email', 'social') */
  medium?: string;
  /** Ad content or variant identifier */
  content?: string;
}

/**
 * Behavioral tracking data captured during site visit.
 * Used for lead scoring and qualification.
 * 
 * @example
 * ```typescript
 * const behavior: BehaviorData = {
 *   pagesVisited: ['/pricing', '/features', '/contact'],
 *   timeOnSite: 320,
 *   pricingTierViewed: 'pro'
 * };
 * ```
 */
export interface BehaviorData {
  /** Array of page paths visited during session */
  pagesVisited: string[];
  /** Total time spent on site in seconds */
  timeOnSite: number;
  /** Pricing tier page viewed, if any */
  pricingTierViewed?: string;
}

/**
 * Represents a lead captured from marketing sites before user registration.
 * Contains contact information, attribution data, and behavioral signals.
 * 
 * @example
 * ```typescript
 * const lead: Lead = {
 *   id: 'lead_abc123',
 *   email: 'john@example.com',
 *   fullName: 'John Smith',
 *   businessName: 'Acme Corp',
 *   source: 'seojack.net',
 *   leadScore: 85,
 *   status: 'new',
 *   createdAt: new Date(),
 *   updatedAt: new Date(),
 * };
 * ```
 */
export interface Lead {
  /** Unique identifier for the lead */
  id: string;
  /** Email address (required for contact) */
  email: string;
  /** Full name of the contact */
  fullName: string;
  /** Optional business/company name */
  businessName?: string;
  /** Optional phone number */
  phone?: string;
  /** Source marketing site */
  source: LeadSource;
  /** UTM tracking parameters for attribution */
  utmParams?: UTMParams;
  /** Behavioral tracking data */
  behaviorData?: BehaviorData;
  /** Calculated lead score (0-100) */
  leadScore: number;
  /** Current lead status */
  status: LeadStatus;
  /** User ID if lead converted to customer */
  convertedUserId?: string;
  /** Timestamp of lead creation */
  createdAt: Date;
  /** Timestamp of last update */
  updatedAt: Date;
}

/**
 * Input data for creating a new lead.
 * Excludes system-generated fields like id, leadScore, status, timestamps.
 * 
 * @example
 * ```typescript
 * const input: CreateLeadInput = {
 *   email: 'john@example.com',
 *   fullName: 'John Smith',
 *   businessName: 'Acme Corp',
 *   source: 'seojack.net',
 *   utmParams: {
 *     campaign: 'summer-sale',
 *     source: 'google'
 *   }
 * };
 * ```
 */
export interface CreateLeadInput {
  /** Email address (required) */
  email: string;
  /** Full name of the contact */
  fullName: string;
  /** Optional business/company name */
  businessName?: string;
  /** Optional phone number */
  phone?: string;
  /** Source marketing site */
  source: LeadSource;
  /** UTM tracking parameters */
  utmParams?: UTMParams;
  /** Behavioral tracking data */
  behaviorData?: BehaviorData;
}

