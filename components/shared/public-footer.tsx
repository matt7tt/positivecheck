import Link from 'next/link'

export function PublicFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 text-sm flex items-center justify-center gap-2">
          <span>© Positive Check 2025</span>
          <span>|</span>
          <Link href="/terms" className="hover:text-[#1a2642]">Terms</Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-[#1a2642]">Privacy</Link>
        </div>
      </div>
    </footer>
  )
} 