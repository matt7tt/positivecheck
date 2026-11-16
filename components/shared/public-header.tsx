'use client'

import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { RequestDemoModal } from '@/components/request-demo-modal'
import { Button } from '@/components/ui/button'
import { SolutionsMenu } from '@/components/solutions-menu'
import { solutionGroups } from '@/lib/solution-catalog'

interface PublicHeaderProps {
  currentPage: "home" | "blog" | "sign-in" | "contact" | "about" | "privacy" | "terms" | "how-it-works" | "platform" | "solutions" | "resources" | "roi-calculator"
}

export function PublicHeader({ currentPage }: PublicHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/positive-wordmark-navy.svg"
            alt="Positive Check"
            height={64}
            width={160}
            priority
            unoptimized
            className="h-16 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="xl:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-pc-navy" />
          ) : (
            <Menu className="h-6 w-6 text-pc-navy" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden xl:block" aria-label="Main navigation">
          <div className="flex items-center gap-5">
            <Link
              href="/platform"
              className={`text-base font-medium ${
                currentPage === 'platform'
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy'
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              Platform
            </Link>
            <SolutionsMenu active={currentPage === 'solutions'} />
            <Link
              href="/how-it-works"
              className={`text-base font-medium ${
                currentPage === 'how-it-works'
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy'
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              How It Works
            </Link>
            <Link
              href="/roi-calculator"
              className={`text-base font-medium ${
                currentPage === 'roi-calculator'
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy'
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              ROI Calculator
            </Link>
            <Link
              href="/resources"
              className={`text-base font-medium ${
                currentPage === 'resources'
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy'
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              Resources
            </Link>
            <Link
              href="/contact" 
              className={`text-base font-medium ${
                currentPage === 'contact' 
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy' 
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/sign-in" 
              className={`text-base font-medium ${
                currentPage === 'sign-in' 
                  ? 'text-pc-navy font-bold border-b-2 border-pc-navy' 
                  : 'text-gray-600 hover:text-pc-navy'
              }`}
            >
              Sign In
            </Link>
            <RequestDemoModal source="desktop_header">
              <Button className="bg-pc-accent hover:bg-pc-accent-hover text-pc-on-accent px-4 py-2 text-sm font-bold">
                REQUEST DEMO
              </Button>
            </RequestDemoModal>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto bg-white border-b shadow-lg">
            <nav id="mobile-navigation" aria-label="Mobile navigation" className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/platform"
                  className={`text-base font-medium ${currentPage === 'platform' ? 'text-pc-navy font-bold' : 'text-gray-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/solutions"
                  className={`text-base font-medium ${
                    currentPage === 'solutions'
                      ? 'text-pc-navy font-bold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                {solutionGroups.map(group => <section key={group.name} className="border-l-2 border-purple-100 pl-4">
                  <h2 className="mb-2 font-semibold text-gray-900">{group.name}</h2>
                  <ul className="space-y-1">{group.items.map(item => <li key={item.href}><Link href={item.href} className="block py-2 text-gray-600" onClick={() => setIsMenuOpen(false)}>{item.name}</Link></li>)}</ul>
                </section>)}
                <Link
                  href="/how-it-works"
                  className={`text-base font-medium ${
                    currentPage === 'how-it-works'
                      ? 'text-pc-navy font-bold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/roi-calculator"
                  className={`text-base font-medium ${
                    currentPage === 'roi-calculator'
                      ? 'text-pc-navy font-bold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ROI Calculator
                </Link>
                <Link
                  href="/resources"
                  className={`text-base font-medium ${
                    currentPage === 'resources'
                      ? 'text-pc-navy font-bold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/contact" 
                  className={`text-base font-medium ${
                    currentPage === 'contact' 
                      ? 'text-pc-navy font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/sign-in" 
                  className={`text-base font-medium ${
                    currentPage === 'sign-in' 
                      ? 'text-pc-navy font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <RequestDemoModal source="mobile_header">
                  <Button className="w-full bg-pc-accent hover:bg-pc-accent-hover text-pc-on-accent py-2 text-sm font-bold mt-2">
                    REQUEST DEMO
                  </Button>
                </RequestDemoModal>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
