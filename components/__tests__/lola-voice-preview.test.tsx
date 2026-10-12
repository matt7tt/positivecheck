import { fireEvent, render, screen } from '@testing-library/react'
import { LolaVoicePreview } from '@/components/lola-voice-preview'
import { trackEvent } from '@/lib/analytics'
jest.mock('@/lib/analytics', () => ({ trackEvent: jest.fn() }))

describe('Lola voice preview', () => {
  beforeEach(() => jest.clearAllMocks())
  it('offers an ungated, honestly labelled greeting and distinct lead paths', () => {
    render(<LolaVoicePreview source="home_hero"><button>Hear Lola</button></LolaVoicePreview>)
    fireEvent.click(screen.getByText('Hear Lola'))
    expect(screen.getByText(/not a complete patient call/)).toBeInTheDocument()
    expect(screen.getByLabelText('Lola greeting recording')).toHaveAttribute('controls')
    expect(screen.getByRole('button', { name: 'Request a call from Lola' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Discuss your workflow' })).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
  it('separates audio activity from leads and deduplicates playback events', () => {
    render(<LolaVoicePreview source="home_hero"><button>Hear Lola</button></LolaVoicePreview>)
    fireEvent.click(screen.getByText('Hear Lola'))
    const audio = screen.getByLabelText('Lola greeting recording')
    fireEvent.play(audio)
    fireEvent.play(audio)
    fireEvent.ended(audio)
    fireEvent.ended(audio)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'sample_audio_play')).toHaveLength(1)
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'sample_audio_complete')).toHaveLength(1)
    expect(jest.mocked(trackEvent).mock.calls.some(([event]) => event === 'generate_lead')).toBe(false)
    fireEvent.error(audio)
    fireEvent.error(audio.querySelector('source')!)
    expect(screen.getByRole('alert')).toHaveTextContent('recording could not load')
    expect(jest.mocked(trackEvent).mock.calls.filter(([event]) => event === 'sample_audio_error')).toHaveLength(1)
  })
})
