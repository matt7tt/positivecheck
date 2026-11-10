import { fireEvent, render, screen } from '@testing-library/react'
import { ReminderWorkflowDemo } from '@/components/reminder-workflow-demo'
import { trackEvent } from '@/lib/analytics'

jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))

describe('fictional reminder walkthrough', () => {
  beforeEach(() => jest.clearAllMocks())

  it('keeps the complete transcript and handoffs available before interaction', () => {
    render(<ReminderWorkflowDemo />)
    expect(screen.getByRole('heading', { name: 'Full scripted call' })).toBeVisible()
    expect(screen.getByText(/No call or text is sent/)).toBeVisible()
    for (const title of ['Patient reply', 'Summary and staff task', 'Staff resolution']) {
      expect(screen.getByRole('heading', { name: new RegExp(title) })).toBeVisible()
    }
    expect(screen.getByText(/A reschedule request is not a confirmed booking/)).toBeVisible()
    expect(trackEvent).not.toHaveBeenCalled()
  })

  it('requires each handoff before counting completion and never counts interaction as a lead', () => {
    render(<ReminderWorkflowDemo />)
    fireEvent.click(screen.getByRole('button', { name: 'Follow the request' }))
    expect(screen.getByRole('status')).toHaveTextContent('Step 1 of 3')
    expect(trackEvent).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByRole('button', { name: 'Show the staff handoff' }))
    expect(screen.getByRole('status')).toHaveTextContent('Awaiting front desk review')
    expect(trackEvent).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByRole('button', { name: 'Show the resolved outcome' }))
    expect(screen.getByRole('status')).toHaveTextContent('Resolved by staff')
    fireEvent.click(screen.getByRole('button', { name: 'Restart walkthrough' }))
    fireEvent.click(screen.getByRole('button', { name: 'Follow the request' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show the staff handoff' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show the resolved outcome' }))
    expect(jest.mocked(trackEvent).mock.calls).toEqual([
      ['workflow_demo_start', { demo_id: 'appointment_reminder_v1', channel: 'call', cta_location: 'appointment_reminders' }],
      ['workflow_demo_complete', { demo_id: 'appointment_reminder_v1', channel: 'call', cta_location: 'appointment_reminders' }],
    ])
  })

  it('resets the walkthrough when changing channels and tracks only fixed identifiers', () => {
    render(<ReminderWorkflowDemo />)
    fireEvent.click(screen.getByRole('button', { name: 'Follow the request' }))
    fireEvent.click(screen.getByRole('button', { name: 'SMS example' }))
    expect(screen.getByRole('button', { name: 'SMS example' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Full scripted SMS conversation' })).toBeVisible()
    expect(screen.getByRole('status')).toHaveTextContent('All steps are readable')
    fireEvent.click(screen.getByRole('button', { name: 'Follow the request' }))
    expect(trackEvent).toHaveBeenLastCalledWith('workflow_demo_start', { demo_id: 'appointment_reminder_v1', channel: 'sms', cta_location: 'appointment_reminders' })
  })
})
