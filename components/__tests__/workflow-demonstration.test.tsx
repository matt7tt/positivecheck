import { fireEvent, render, screen } from '@testing-library/react'
import { WorkflowDemonstration } from '@/components/workflow-demonstration'
import { trackEvent } from '@/lib/analytics'

jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))

describe('synthetic workflow demonstration', () => {
  beforeEach(() => jest.clearAllMocks())

  it('shows every handoff without requiring a form, playback or disclosure expansion', () => {
    render(<WorkflowDemonstration />)
    expect(screen.getByText(/Synthetic workflow example/)).toBeVisible()
    for (const title of ['Patient call', 'Call summary', 'Alert for review', 'Staff follow-up']) {
      expect(screen.getByRole('heading', { name: new RegExp(title) })).toBeVisible()
    }
    expect(screen.getByText(/not a customer result/)).toBeVisible()
    expect(screen.getByText(/do not establish billable clinical work/)).toBeVisible()
    expect(screen.getByRole('link', { name: /Compare software-supported/ })).toHaveAttribute('href', '/solutions/chronic-care-management/vs-in-house-care-coordinators')
    expect(trackEvent).not.toHaveBeenCalled()
  })

  it('loads audio only on demand and counts one preview play, never a lead', () => {
    render(<WorkflowDemonstration />)
    const audio = screen.getByLabelText('Lola greeting voice preview')
    expect(audio).toHaveAttribute('preload', 'none')
    expect(audio).not.toHaveAttribute('autoplay')
    fireEvent.play(audio)
    fireEvent.pause(audio)
    fireEvent.play(audio)
    expect(jest.mocked(trackEvent).mock.calls).toEqual([
      ['workflow_preview_play', { cta_location: 'billing_guide_workflow_example', preview_id: 'lola_greeting' }],
    ])
  })
})
