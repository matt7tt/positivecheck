/**
 * @jest-environment jsdom
 * @jest-environment-options {"url":"https://www.positivecheck.com/"}
 */
import { startHeatmapRecorder } from '../heatmap-recorder'
import { HEATMAP_CHOICE_KEY } from '../heatmap-privacy'

const paths = ['/', '/contact']
let stop: (() => void) | undefined
beforeEach(() => {
  localStorage.clear()
  delete window.clarity
  Object.defineProperty(navigator, 'globalPrivacyControl', { configurable: true, value: false })
  history.replaceState(null, '', '/')
})
afterEach(() => { stop?.(); stop = undefined })
const accept = () => localStorage.setItem(HEATMAP_CHOICE_KEY, JSON.stringify({ choice: 'accepted', at: Date.now() }))

it('does not request the tag before opt-in or after declining', () => {
  stop = startHeatmapRecorder(paths)
  expect(document.getElementById('pc-clarity')).toBeNull()
  localStorage.setItem(HEATMAP_CHOICE_KEY, JSON.stringify({ choice: 'declined', at: Date.now() }))
  stop = startHeatmapRecorder(paths)
  expect(window.clarity).toBeUndefined()
})
it('does not load on account routes, query URLs, or a browser privacy signal', () => {
  accept()
  for (const url of ['/sign-in', '/?email=test@example.com']) {
    history.replaceState(null, '', url)
    stop = startHeatmapRecorder(paths)
    expect(document.getElementById('pc-clarity')).toBeNull()
  }
  history.replaceState(null, '', '/')
  Object.defineProperty(navigator, 'globalPrivacyControl', { configurable: true, value: true })
  stop = startHeatmapRecorder(paths)
  expect(window.clarity).toBeUndefined()
})
it('loads once with analytics consent and advertising denied', () => {
  accept()
  stop = startHeatmapRecorder(paths)
  startHeatmapRecorder(paths)
  expect(document.querySelectorAll('#pc-clarity')).toHaveLength(1)
  expect(window.clarity?.q).toEqual([['consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' }]])
})
it('forwards only allowlisted conversion names without parameters', () => {
  accept()
  stop = startHeatmapRecorder(paths)
  window.clarity = jest.fn()
  window.dispatchEvent(new CustomEvent('pc:conversion', { detail: 'generate_lead' }))
  window.dispatchEvent(new CustomEvent('pc:conversion', { detail: 'private@example.com' }))
  window.dispatchEvent(new CustomEvent('pc:conversion', { detail: { event: 'generate_lead', email: 'private@example.com' } }))
  expect(window.clarity).toHaveBeenCalledTimes(1)
  expect(window.clarity).toHaveBeenCalledWith('event', 'generate_lead')
})
it('stops before an excluded route is installed in SPA history', () => {
  accept()
  stop = startHeatmapRecorder(paths)
  window.clarity = jest.fn()
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {}) // jsdom cannot navigate
  history.pushState({}, '', '/my-account?token=test')
  expect(window.clarity).toHaveBeenCalledWith('stop')
  expect(location.pathname).toBe('/')
  expect(location.search).toBe('')
  errors.mockRestore()
})
it('stops, denies consent, removes the tag and listeners on withdrawal', () => {
  accept()
  stop = startHeatmapRecorder(paths)
  const script = document.getElementById('pc-clarity')!
  window.clarity = jest.fn()
  stop()
  expect(window.clarity).toHaveBeenCalledWith('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' })
  expect(window.clarity).toHaveBeenCalledWith('stop')
  expect(document.getElementById('pc-clarity')).toBeNull()
  const calls = (window.clarity as jest.Mock).mock.calls.length
  window.dispatchEvent(new CustomEvent('pc:conversion', { detail: 'generate_lead' }))
  expect(window.clarity).toHaveBeenCalledTimes(calls)
  script.dispatchEvent(new Event('load'))
  expect(window.clarity).toHaveBeenLastCalledWith('stop')
})
