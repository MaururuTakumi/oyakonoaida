'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">間</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900">
                おやこの間
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              課題
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              特徴
            </button>
            <button
              onClick={() => scrollToSection('writers')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              ライター
            </button>
            <button
              onClick={() => scrollToSection('benefit')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              特典
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4">
          <button
            onClick={() => scrollToSection('problem')}
            className="py-3 text-left text-gray-700 hover:text-primary transition-colors"
          >
            課題
          </button>
          <button
            onClick={() => scrollToSection('solution')}
            className="py-3 text-left text-gray-700 hover:text-primary transition-colors"
          >
            特徴
          </button>
          <button
            onClick={() => scrollToSection('writers')}
            className="py-3 text-left text-gray-700 hover:text-primary transition-colors"
          >
            ライター
          </button>
          <button
            onClick={() => scrollToSection('benefit')}
            className="py-3 text-left text-gray-700 hover:text-primary transition-colors"
          >
            特典
          </button>
        </nav>
      </div>
    </header>
  )
}