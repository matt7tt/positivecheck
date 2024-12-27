import Link from "next/link"
import Image from 'next/image'

type PublicHeaderProps = {
  currentPage: 'home' | 'sign-in' | 'contact' | 'about' | 'blog'
}

export function PublicHeader({ currentPage }: PublicHeaderProps) {
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
            className="h-full w-auto"
          />
        </Link>
        <nav>
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
      </div>
    </header>
  )
} 