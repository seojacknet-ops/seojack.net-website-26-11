/**
 * Local types for SEOJack API Client
 * These types are copied from @seojack/types package for standalone usage
 */

// Lead-related types
export type {
  LeadSource,
  LeadStatus,
  UTMParams,
  BehaviorData,
  Lead,
  CreateLeadInput,
} from './lead';

// Analytics types
export type {
  EventType,
  AnalyticsEvent,
  TrackEventInput,
} from './analytics';

// API types
export type {
  APIResponse,
  CreateLeadResponse,
  ErrorResponse,
} from './api';

