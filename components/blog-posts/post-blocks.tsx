'use client'

// Shared building blocks for blog posts: visible byline/dates, an
// answer-first key-takeaways box, and a visible FAQ section. Keeping these
// in one place keeps machine-readable dates (<time datetime>) and the
// FAQPage JSON-LD (rendered by each post's page.tsx) in sync with what
// readers see.

export interface PostFAQItem {
  question: string;
  answer: string;
}

export function PostMeta({
  datePublished,
  displayDate,
  dateModified,
  displayModified,
  readTime,
}: {
  datePublished: string;
  displayDate: string;
  dateModified?: string;
  displayModified?: string;
  readTime?: string;
}) {
  const showUpdated = dateModified && dateModified !== datePublished;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-6">
      <span>By the Positive Check Team</span>
      <span aria-hidden="true">·</span>
      <span>
        Published{' '}
        <time dateTime={datePublished}>{displayDate}</time>
      </span>
      {showUpdated && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Updated{' '}
            <time dateTime={dateModified}>{displayModified ?? dateModified}</time>
          </span>
        </>
      )}
      {readTime && (
        <>
          <span aria-hidden="true">·</span>
          <span>{readTime}</span>
        </>
      )}
    </div>
  )
}

export function KeyTakeaways({
  summary,
  points,
}: {
  summary: string;
  points: string[];
}) {
  return (
    <section
      aria-label="Key takeaways"
      className="bg-purple-50 border border-purple-100 rounded-lg p-6 mb-8"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-2">Key takeaways</h2>
      <p className="text-gray-700 mb-3">{summary}</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  )
}

export function PostFAQ({ items }: { items: PostFAQItem[] }) {
  if (!items.length) return null
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently asked questions
      </h2>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.question}
            </h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
