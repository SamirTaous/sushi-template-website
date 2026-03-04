'use client'

import { useEffect, useState } from 'react'
import { useBrandConfig, useBrand } from '@/lib/brand-context'
import { getBrandNavigation } from '@/lib/navigation-utils'

export function Navbar() {
  const brandConfig = useBrandConfig()
  const { brandKey } = useBrand()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = getBrandNavigation(brandKey, brandConfig.navigation)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-charcoal' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center"
          >
            <img 
              src={brandConfig.assets.logo}
              alt={brandConfig.name}
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cream hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-charcoal">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-cream text-sm tracking-widest uppercase hover:text-gold transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
