/**
 * Client-Side Tracking Utilities
 * 
 * Utilities for tracking user behavior on marketing sites.
 * Collects data for lead scoring and attribution.
 */

/**
 * Retrieves the history of pages visited during the current session.
 * Reads from sessionStorage where pages are tracked.
 * 
 * @returns Array of page paths visited (max 50 items)
 */
export function getPageHistory(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const history = sessionStorage.getItem('seojack_page_history');
    if (!history) return [];
    
    const pages = JSON.parse(history) as string[];
    // Limit to 50 items as per API spec
    return pages.slice(0, 50);
  } catch (error) {
    console.error('Error reading page history:', error);
    return [];
  }
}

/**
 * Calculates the duration of the current session in seconds.
 * Uses session start time stored in sessionStorage.
 * 
 * @returns Time on site in seconds (0-86400, max 24 hours)
 */
export function getSessionDuration(): number {
  if (typeof window === 'undefined') return 0;
  
  try {
    const startTime = sessionStorage.getItem('seojack_session_start');
    if (!startTime) {
      // Initialize session start time if not present
      const now = Date.now();
      sessionStorage.setItem('seojack_session_start', now.toString());
      return 0;
    }
    
    const start = parseInt(startTime, 10);
    const now = Date.now();
    const durationMs = now - start;
    const durationSeconds = Math.floor(durationMs / 1000);
    
    // Cap at 86400 seconds (24 hours) as per API spec
    return Math.min(durationSeconds, 86400);
  } catch (error) {
    console.error('Error calculating session duration:', error);
    return 0;
  }
}

/**
 * Retrieves the pricing tier that the user viewed.
 * Reads from localStorage where pricing interactions are tracked.
 * 
 * @returns Pricing tier name or undefined
 */
export function getPricingTierViewed(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  
  try {
    const tier = localStorage.getItem('seojack_pricing_tier_viewed');
    return tier || undefined;
  } catch (error) {
    console.error('Error reading pricing tier:', error);
    return undefined;
  }
}

/**
 * Parses UTM parameters from the current URL query string.
 * Extracts campaign attribution data.
 * 
 * @returns UTM parameters object
 */
export function getUTMParams(): {
  campaign?: string;
  source?: string;
  medium?: string;
  content?: string;
} {
  if (typeof window === 'undefined') return {};
  
  try {
    const params = new URLSearchParams(window.location.search);
    
    return {
      campaign: params.get('utm_campaign') || undefined,
      source: params.get('utm_source') || undefined,
      medium: params.get('utm_medium') || undefined,
      content: params.get('utm_content') || undefined,
    };
  } catch (error) {
    console.error('Error parsing UTM params:', error);
    return {};
  }
}

/**
 * Tracks a page visit by adding it to the session history.
 * Should be called on each page load.
 * 
 * @param path - The page path to track
 */
export function trackPageVisit(path: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const history = getPageHistory();
    history.push(path);
    sessionStorage.setItem('seojack_page_history', JSON.stringify(history));
    
    // Initialize session start time if not present
    if (!sessionStorage.getItem('seojack_session_start')) {
      sessionStorage.setItem('seojack_session_start', Date.now().toString());
    }
  } catch (error) {
    console.error('Error tracking page visit:', error);
  }
}

/**
 * Tracks when a user views a pricing tier.
 * Should be called when user interacts with pricing page.
 * 
 * @param tier - The pricing tier name
 */
export function trackPricingTierView(tier: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('seojack_pricing_tier_viewed', tier);
  } catch (error) {
    console.error('Error tracking pricing tier view:', error);
  }
}

