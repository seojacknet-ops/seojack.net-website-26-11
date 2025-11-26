import { z } from 'zod';
import type { Lead, CreateLeadInput } from '../types';
import type { CreateLeadResponse } from '../types';
import type { SEOJackAPI } from './client';
import { ValidationError } from './errors';

// Validation schemas
const createLeadInputSchema = z.object({
  email: z.string().email('Invalid email format'),
  fullName: z.string().min(1, 'Full name is required'),
  businessName: z.string().optional(),
  phone: z.string().optional(),
  source: z.enum(['seojack.net', 'seojack.co.uk']),
  utmParams: z.object({
    campaign: z.string().optional(),
    source: z.string().optional(),
    medium: z.string().optional(),
    content: z.string().optional(),
  }).optional(),
  behaviorData: z.object({
    pagesVisited: z.array(z.string()),
    timeOnSite: z.number().min(0),
    pricingTierViewed: z.string().optional(),
  }).optional(),
});

/**
 * Leads API methods for creating and retrieving leads
 */
export class LeadsAPI {
  constructor(private readonly client: SEOJackAPI) {}

  /**
   * Create a new lead
   * 
   * @param data - Lead data to create
   * @returns Promise with lead creation response including ID, score, and redirect URL
   * @throws {ValidationError} If input data is invalid
   * @throws {APIError} If API returns an error
   * @throws {NetworkError} If network request fails
   * 
   * @example
   * ```typescript
   * const result = await client.leads.create({
   *   email: 'john@example.com',
   *   fullName: 'John Smith',
   *   businessName: 'Acme Corp',
   *   source: 'seojack.net',
   *   utmParams: {
   *     campaign: 'summer-sale',
   *     source: 'google'
   *   }
   * });
   * console.log(result.leadId); // 'lead_abc123'
   * ```
   */
  async create(data: CreateLeadInput): Promise<CreateLeadResponse> {
    // Validate input data
    try {
      createLeadInputSchema.parse(data);
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
    return this.client.request<CreateLeadResponse>('/api/leads/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Get a lead by ID
   * 
   * @param id - Lead identifier
   * @returns Promise with full lead data
   * @throws {APIError} If API returns an error (e.g., 404 not found)
   * @throws {NetworkError} If network request fails
   * 
   * @example
   * ```typescript
   * const lead = await client.leads.get('lead_abc123');
   * console.log(lead.email); // 'john@example.com'
   * ```
   */
  async get(id: string): Promise<Lead> {
    // Validate ID
    if (!id || typeof id !== 'string') {
      throw new ValidationError('Invalid lead ID', { id: 'ID must be a non-empty string' });
    }

    // Make API request
    const response = await this.client.request<{ success: boolean; lead: Lead }>(
      `/api/leads/${id}`,
      {
        method: 'GET',
      }
    );

    return response.lead;
  }
}

