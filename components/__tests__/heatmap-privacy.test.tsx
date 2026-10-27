/**
 * @jest-environment jsdom
 * @jest-environment-options {"url":"https://www.positivecheck.com/"}
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { HeatmapChoicesButton, HeatmapPrivacy } from '../heatmap-privacy'
import { HEATMAP_CHOICE_KEY } from '@/lib/heatmap-privacy'
import { startHeatmapRecorder } from '@/lib/heatmap-recorder'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))
jest.mock('@/lib/heatmap-recorder', () => ({ startHeatmapRecorder: jest.fn(() => jest.fn()) }))
const paths = ['/', '/privacy']
beforeEach(() => { localStorage.clear(); jest.clearAllMocks() })

it('offers equal opt-in and decline choices without starting recording', () => {
  render(<HeatmapPrivacy publicPaths={paths} />)
  expect(screen.getByRole('button', { name: 'Allow heatmaps' })).toBeVisible()
  expect(screen.getByRole('button', { name: 'No thanks' })).toBeVisible()
  expect(startHeatmapRecorder).not.toHaveBeenCalled()
})
it.each([['Allow heatmaps', 'accepted'], ['No thanks', 'declined']])('saves %s before reloading', (button, choice) => {
  const errors = jest.spyOn(console, 'error').mockImplementation(() => {}) // jsdom has no navigation
  render(<HeatmapPrivacy publicPaths={paths} />)
  fireEvent.click(screen.getByRole('button', { name: button }))
  expect(JSON.parse(localStorage.getItem(HEATMAP_CHOICE_KEY)!)).toMatchObject({ choice })
  expect(screen.queryByRole('region', { name: 'Heatmap privacy choices' })).not.toBeInTheDocument()
  errors.mockRestore()
})
it('starts only for remembered opt-in and lets the visitor reopen their choices', () => {
  localStorage.setItem(HEATMAP_CHOICE_KEY, JSON.stringify({ choice: 'accepted', at: Date.now() }))
  render(<><HeatmapPrivacy publicPaths={paths} /><HeatmapChoicesButton /></>)
  expect(startHeatmapRecorder).toHaveBeenCalledTimes(1)
  fireEvent.click(screen.getByRole('button', { name: 'Heatmap privacy choices' }))
  expect(screen.getByText('Your saved choice: allowed.')).toBeVisible()
})
it('respects a saved decline and keeps settings accessible', () => {
  localStorage.setItem(HEATMAP_CHOICE_KEY, JSON.stringify({ choice: 'declined', at: Date.now() }))
  render(<><HeatmapPrivacy publicPaths={paths} /><HeatmapChoicesButton /></>)
  expect(startHeatmapRecorder).not.toHaveBeenCalled()
  fireEvent.click(screen.getByRole('button', { name: 'Heatmap privacy choices' }))
  expect(screen.getByText('Your saved choice: off.')).toBeVisible()
})
