import { trackEvent } from '@/lib/analytics'
import { isMarketingAnalyticsPage, MARKETING_GA_MEASUREMENT_ID } from '@/lib/analytics-config'

jest.mock('@/lib/analytics-config', () => ({
  MARKETING_GA_MEASUREMENT_ID: 'G-TEST',
  isMarketingAnalyticsPage: jest.fn(() => true),
}))

describe('marketing event delivery', () => {
  beforeEach(() => {
    delete window.gtag
    delete window.dataLayer
    sessionStorage.clear()
    jest.mocked(isMarketingAnalyticsPage).mockReturnValue(true)
  })

  it('queues a Google tag command when the remote tag is not ready', () => {
    trackEvent('generate_lead', { form_name: 'demo_request' })
    expect(window.dataLayer).toHaveLength(2)
    expect(window.dataLayer![0]).toMatchObject({ event: 'generate_lead', form_name: 'demo_request' })
    const command = window.dataLayer![1] as IArguments
    expect(Object.prototype.toString.call(command)).toBe('[object Arguments]')
    expect(Array.from(command)).toEqual(['event', 'generate_lead', expect.objectContaining({
      form_name: 'demo_request', send_to: MARKETING_GA_MEASUREMENT_ID,
    })])
  })

  it('sends one direct event to the marketing property when gtag is available', () => {
    window.gtag = jest.fn()
    trackEvent('generate_lead', { form_name: 'demo_request' })
    expect(window.gtag).toHaveBeenCalledTimes(1)
    expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', expect.objectContaining({ send_to: 'G-TEST' }))
    expect(window.dataLayer).toHaveLength(1)
  })

  it('does not duplicate the initial GA page view already sent by config', () => {
    window.gtag = jest.fn()
    trackEvent('page_view', {}, { sendToDirectGa: false })
    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toHaveLength(1)
  })

  it('does not collect events on excluded hosts or paths', () => {
    jest.mocked(isMarketingAnalyticsPage).mockReturnValue(false)
    trackEvent('generate_lead')
    expect(window.gtag).toBeUndefined()
    expect(window.dataLayer).toBeUndefined()
  })
})
