/**
 * SEOJack API Client SDK
 * 
 * TypeScript SDK for interacting with the SEOJack platform API.
 * Provides type-safe methods for lead creation, analytics tracking, and more.
 * 
 * This is a standalone version copied from @seojack/api-client package.
 */

// Main client class
export { SEOJackAPI, type SEOJackAPIConfig } from './client';

// Error classes
export { APIError, ValidationError, NetworkError } from './errors';

// API method classes
export { LeadsAPI } from './leads';
export { AnalyticsAPI, type TrackEventResponse } from './analytics';

// Re-export commonly used types from local types for convenience
export type {
  Lead,
  CreateLeadInput,
  LeadSource,
  LeadStatus,
  UTMParams,
  BehaviorData,
  AnalyticsEvent,
  TrackEventInput,
  EventType,
  CreateLeadResponse,
  APIResponse,
  ErrorResponse,
} from '../types';

// Default export
export { SEOJackAPI as default } from './client';

