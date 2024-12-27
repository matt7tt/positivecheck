import Link from 'next/link'

export function PublicFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 text-sm">
          © Positive Check 2025 | <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
} 