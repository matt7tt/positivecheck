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
            <h3 className="font-semibold text-[#1a2642] mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="text-gray-600 hover:text-[#1a2642]">All Solutions</Link></li>
              <li><Link href="/solutions/remote-patient-monitoring" className="text-gray-600 hover:text-[#1a2642]">Remote Patient Monitoring</Link></li>
              <li><Link href="/solutions/chronic-care-management" className="text-gray-600 hover:text-[#1a2642]">Chronic Care Management</Link></li>
              <li><Link href="/solutions/post-discharge-follow-up" className="text-gray-600 hover:text-[#1a2642]">Post-Discharge Follow-Up</Link></li>
              <li><Link href="/roi-calculator" className="text-gray-600 hover:text-[#1a2642]">ROI Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-600 hover:text-[#1a2642]">Blog</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-[#1a2642]">How It Works</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-[#1a2642]">FAQ</Link></li>
              <li><Link href="/case-studies/scaling-patient-engagement" className="text-gray-600 hover:text-[#1a2642]">Case Studies</Link></li>
              <li><Link href="/resources/glossary" className="text-gray-600 hover:text-[#1a2642]">Glossary</Link></li>
              <li><Link href="/resources/billing-guide" className="text-gray-600 hover:text-[#1a2642]">Billing Guide</Link></li>
              <li><Link href="/resources/compare" className="text-gray-600 hover:text-[#1a2642]">Comparisons</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1a2642] mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-[#1a2642]">About Us</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-[#1a2642]">How It Works</Link></li>
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
          <span>&copy; Positive Check {new Date().getFullYear()}</span>
          <span>|</span>
          <Link href="/terms" className="hover:text-[#1a2642]">Terms</Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-[#1a2642]">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
