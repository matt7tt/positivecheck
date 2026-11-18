import { MAX_TITLE_LENGTH, pageTitle } from '../page-title'

describe('pageTitle', () => {
  it('adds the brand when the result fits', () => {
    expect(pageTitle('Short Title')).toBe('Short Title | Positive Check')
  })

  it('drops the brand when it would push the title past the limit', () => {
    const title = 'Post-Discharge Follow-Up: A TCM Workflow With Clear Staff Handoffs'
    expect(pageTitle(title)).toBe(title)
    expect(pageTitle(title).length).toBeLessThanOrEqual(MAX_TITLE_LENGTH)
  })
})
