import Link from 'next/link'
import { RequestDemoModal } from '@/components/request-demo-modal'

export function PublicFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-[#1a2642]">How It Works</Link></li>
              <li>
                <RequestDemoModal>
                  <button className="text-gray-600 hover:text-[#1a2642] text-sm">Request Demo</button>
                </RequestDemoModal>
              </li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#1a2642]">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-600 hover:text-[#1a2642]">Blog</Link></li>
              <li><Link href="/blog/senior-sleep-health-fall-prevention-wellness-monitoring" className="text-gray-600 hover:text-[#1a2642]">Senior Sleep &amp; Health</Link></li>
              <li><Link href="/blog/maintaining-social-connections" className="text-gray-600 hover:text-[#1a2642]">Social Connections</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-[#1a2642]">About Us</Link></li>
              <li><Link href="/phoenix" className="text-gray-600 hover:text-[#1a2642]">Phoenix Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sign-in" className="text-gray-600 hover:text-[#1a2642]">Sign In</Link></li>
              <li><Link href="/my-account" className="text-gray-600 hover:text-[#1a2642]">My Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm flex items-center justify-center gap-2 pt-6 border-t border-gray-200">
          <span>&copy; Positive Check 2025</span>
          <span>|</span>
          <Link href="/terms" className="hover:text-[#1a2642]">Terms</Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-[#1a2642]">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
