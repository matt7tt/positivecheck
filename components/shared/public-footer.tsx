import Link from 'next/link'
import Image from 'next/image'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { LolaCallModal } from '@/components/lola-call-modal'
import { solutionGroups } from '@/lib/solution-catalog'
import { HeatmapChoicesButton } from '@/components/heatmap-privacy'

export function PublicFooter() {
  return (
    <footer className="bg-pc-surface-inverse text-white [&_*:focus-visible]:outline-pc-pink">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-block mb-8" aria-label="Positive Check home">
          <Image
            src="/brand/positive-wordmark-white.svg"
            alt="Positive Check"
            width={160}
            height={64}
            unoptimized
            className="h-16 w-auto -ml-3"
          />
        </Link>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/platform" className="text-white/80 hover:text-white hover:underline">Platform</Link></li>
              <li><Link href="/how-it-works" className="text-white/80 hover:text-white hover:underline">How It Works</Link></li>
              <li>
                <RequestDemoModal source="footer">
                  <button className="text-white/80 hover:text-white hover:underline text-sm">Request Demo</button>
                </RequestDemoModal>
              </li>
              <li>
                <LolaCallModal source="footer">
                  <button className="text-white/80 hover:text-white hover:underline text-sm">Get a Call from Lola</button>
                </LolaCallModal>
              </li>
              <li><Link href="/contact" className="text-white/80 hover:text-white hover:underline">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions" className="text-white/80 hover:text-white hover:underline">All Solutions</Link></li>
              {solutionGroups.map(group => <li key={group.name} className="pt-3"><h4 className="mb-2 font-semibold text-white">{group.name}</h4><ul className="space-y-2">{group.items.map(item => <li key={item.href}><Link href={item.href} className="text-white/80 hover:text-white hover:underline">{item.name}</Link></li>)}</ul></li>)}
              <li><Link href="/roi-calculator" className="text-white/80 hover:text-white hover:underline">ROI Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-white/80 hover:text-white hover:underline">Blog</Link></li>
              <li><Link href="/resources/implementation-guide" className="text-white/80 hover:text-white hover:underline">Integration & Implementation Guide</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white hover:underline">FAQ</Link></li>
              <li><Link href="/case-studies/scaling-patient-engagement" className="text-white/80 hover:text-white hover:underline">Case Studies</Link></li>
              <li><Link href="/resources/glossary" className="text-white/80 hover:text-white hover:underline">Glossary</Link></li>
              <li><Link href="/resources/billing-guide" className="text-white/80 hover:text-white hover:underline">Billing Guide</Link></li>
              <li><Link href="/resources/compare" className="text-white/80 hover:text-white hover:underline">Comparisons</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-white hover:underline">About Us</Link></li>
              <li><Link href="/about/clinical-standards" className="text-white/80 hover:text-white hover:underline">Security & Clinical Standards</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sign-in" className="text-white/80 hover:text-white hover:underline">Sign In</Link></li>
              <li><a href="https://provider.positivecheck.com/admin-new" className="text-white/80 hover:text-white hover:underline">Provider Dashboard</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white/80 text-sm flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-white/15">
          <span>&copy; {new Date().getFullYear()} Positive Check LLC</span>
          <span>|</span>
          <Link href="/terms" className="hover:text-white hover:underline">Terms</Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-white hover:underline">Privacy</Link>
          <span>|</span>
          <HeatmapChoicesButton />
        </div>
      </div>
    </footer>
  )
}
