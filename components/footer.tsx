'use client'

import { useBrandConfig, useBrand } from '@/lib/brand-context'
import { getBrandNavigation } from '@/lib/navigation-utils'

export function Footer() {
  const brandConfig = useBrandConfig()
  const { brandKey } = useBrand()
  const currentYear = new Date().getFullYear()

  const navigation = getBrandNavigation(brandKey, brandConfig.navigation)

  return (
    <footer className="relative bg-black border-t border-charcoal py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Watermark TOBIKO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-9xl font-serif font-bold text-gold/5" style={{ fontSize: '200px' }}>
          {brandConfig.name}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4 tracking-wider">
              {brandConfig.name}
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {brandConfig.description}
            </p>
            <a href="https://www.tobiko.ma" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors text-sm mt-2 inline-block">
              www.tobiko.ma
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-serif font-bold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/60 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-serif font-bold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2">
              {brandConfig.locations.map((location) => (
                <li key={location.id}>
                  <a href={`tel:${location.phone.link}`} className="text-cream/60 hover:text-gold transition-colors text-sm block">
                    {location.name.split(' ')[1]}: {location.phone.display}
                  </a>
                </li>
              ))}
              <li className="text-cream/60 text-sm pt-2">
                {brandConfig.contact.hours}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream font-serif font-bold uppercase tracking-widest mb-4">{brandConfig.cta.followUs}</h4>
            {/* Primary social handle */}
            {brandConfig.social.instagram.enabled && (
              <a 
                href={brandConfig.social.instagram.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-gold transition-colors text-sm block mb-4"
              >
                {brandConfig.social.instagram.handle}
              </a>
            )}
            
            {/* Social media icons */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(brandConfig.social)
                .filter(([_, platform]) => platform.enabled)
                .map(([key, platform]) => (
                  <a
                    key={key}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 flex items-center justify-center text-cream/60 hover:text-gold font-bold"
                    aria-label={`${brandConfig.name} on ${key}`}
                    title={`Follow us on ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  >
                    {platform.icon}
                  </a>
                ))}
            </div>
          </div>
        </div>

        {/* Divider - gradient line */}
        <div className="py-8 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-xs text-center md:text-left">
              © {currentYear} {brandConfig.name} Fine Sushi • {brandConfig.locations.map(l => l.name.split(' ')[1]).join(' & ')} • www.tobiko.ma
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-cream text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/40 hover:text-cream text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-cream/40 hover:text-cream text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-gold hover:text-cream transition-colors text-sm font-serif uppercase tracking-widest"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
