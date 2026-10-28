export class LeadSubmissionError extends Error {
  constructor(public status: number, message = 'Lead submission was not accepted') {
    super(message)
  }
}

// Only categorical diagnostics belong in analytics; never send visitor input,
// provider messages, email addresses, or lead IDs.
export function leadFailureDetails(error: unknown) {
  if (error instanceof LeadSubmissionError) {
    return {
      error_type: error.status === 400 ? 'invalid_input'
        : error.status === 409 ? 'duplicate_request'
        : error.status === 429 ? 'rate_limited'
        : error.status === 502 ? 'delivery_unavailable' : 'server_error',
      response_status: error.status,
    }
  }
  return { error_type: 'network_or_unknown', response_status: 0 }
}

export function leadFailureMessage(error: unknown): string {
  if (error instanceof LeadSubmissionError && error.status === 400) {
    return 'Please check your name and email address, then submit again.'
  }
  return 'We could not confirm your submission. Your details are still here. You can try again or email hello@positivecheck.com and mention that you tried the form.'
}
