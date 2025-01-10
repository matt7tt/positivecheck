'use client'

import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type PublicHeaderProps = {
  currentPage: 'home' | 'sign-in' | 'contact' | 'about' | 'blog'
}

export function PublicHeader({ currentPage }: PublicHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="h-16">
          <Image
            src="/images/positive-logo.png"
            alt="Positive Check"
            height={32}
            width={120}
            priority
            className="h-full w-auto lg:h-[64px]"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#1a2642]" />
          ) : (
            <Menu className="h-6 w-6 text-[#1a2642]" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:block">
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-base font-medium ${
                currentPage === 'home' 
                  ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' 
                  : 'text-gray-600 hover:text-[#1a2642]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-base font-medium ${
                currentPage === 'about' 
                  ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' 
                  : 'text-gray-600 hover:text-[#1a2642]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`text-base font-medium ${
                currentPage === 'blog' 
                  ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' 
                  : 'text-gray-600 hover:text-[#1a2642]'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`text-base font-medium ${
                currentPage === 'contact' 
                  ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' 
                  : 'text-gray-600 hover:text-[#1a2642]'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/sign-in" 
              className={`text-base font-medium ${
                currentPage === 'sign-in' 
                  ? 'text-[#1a2642] font-bold border-b-2 border-[#1a2642]' 
                  : 'text-gray-600 hover:text-[#1a2642]'
              }`}
            >
              Sign In
            </Link>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className={`text-base font-medium ${
                    currentPage === 'home' 
                      ? 'text-[#1a2642] font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={`text-base font-medium ${
                    currentPage === 'about' 
                      ? 'text-[#1a2642] font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/blog" 
                  className={`text-base font-medium ${
                    currentPage === 'blog' 
                      ? 'text-[#1a2642] font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact" 
                  className={`text-base font-medium ${
                    currentPage === 'contact' 
                      ? 'text-[#1a2642] font-bold' 
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
                      ? 'text-[#1a2642] font-bold' 
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 