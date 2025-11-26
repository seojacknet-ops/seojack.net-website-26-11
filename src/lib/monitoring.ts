/**
 * Error Monitoring and Logging Utilities
 * 
 * Provides error logging for operational team visibility.
 * MVP: Console logging with structured data.
 * Future: Integration with Sentry or similar monitoring service.
 */

interface ErrorContext {
  userEmail?: string;
  sourceDomain: string;
  timestamp: string;
  errorMessage: string;
  errorStack?: string;
  requestData?: unknown;
  [key: string]: unknown;
}

/**
 * Logs errors to monitoring system for ops team follow-up.
 * 
 * MVP Implementation: Structured console logging
 * Future: Send to Sentry, Datadog, or similar service
 * 
 * @param error - The error object to log
 * @param context - Additional context about the error
 */
export function logErrorToMonitoring(
  error: Error | unknown,
  context: Partial<ErrorContext> = {}
): void {
  const errorContext: ErrorContext = {
    timestamp: new Date().toISOString(),
    sourceDomain: typeof window !== 'undefined' ? window.location.hostname : 'unknown',
    errorMessage: error instanceof Error ? error.message : String(error),
    errorStack: error instanceof Error ? error.stack : undefined,
    ...context,
  };

  // MVP: Log to console with structured data
  console.error('[SEOJack Error Monitor]', {
    level: 'error',
    service: 'marketing-site',
    context: errorContext,
  });

  // Future: Send to monitoring service
  // Example for Sentry:
  // if (typeof window !== 'undefined' && window.Sentry) {
  //   window.Sentry.captureException(error, {
  //     contexts: { seojack: errorContext },
  //   });
  // }

  // Future: Send to custom logging endpoint
  // try {
  //   fetch('/api/log-error', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(errorContext),
  //   }).catch(() => {
  //     // Silent fail - don't block user experience
  //   });
  // } catch {
  //   // Silent fail
  // }
}

/**
 * Logs form submission errors specifically.
 * Includes form data context for debugging.
 * 
 * @param error - The error object
 * @param formData - The form data that was being submitted
 */
export function logFormSubmissionError(
  error: Error | unknown,
  formData: Record<string, unknown>
): void {
  logErrorToMonitoring(error, {
    category: 'form_submission',
    userEmail: formData.email as string | undefined,
    requestData: {
      fullName: formData.fullName,
      businessName: formData.businessName,
      // Don't log message or sensitive data
    },
  });
}

/**
 * Logs API call errors with request details.
 * 
 * @param error - The error object
 * @param endpoint - The API endpoint that was called
 * @param requestData - The request data (sanitized)
 */
export function logAPIError(
  error: Error | unknown,
  endpoint: string,
  requestData?: Record<string, unknown>
): void {
  logErrorToMonitoring(error, {
    category: 'api_call',
    endpoint,
    requestData,
  });
}

