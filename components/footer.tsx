export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-charcoal py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Watermark TOBIKO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-9xl font-serif font-bold text-gold/5" style={{ fontSize: '200px' }}>
          TOBIKO
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4 tracking-wider">
              TOBIKO
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Cuisine japonaise fine avec les meilleurs ingrédients. Services: Sur Place • À Emporter • Livraison
            </p>
            <a href="https://www.tobiko.ma" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream transition-colors text-sm mt-2 inline-block">
              www.tobiko.ma
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-serif font-bold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Menu', href: '/menu' },
                { label: 'Contact', href: '/contact' },
                { label: 'Réserver', href: '/contact' },
              ].map((link) => (
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
              <li>
                <a href="tel:0520900902" className="text-cream/60 hover:text-gold transition-colors text-sm block">
                  Casablanca: 0520 900 902
                </a>
              </li>
              <li>
                <a href="tel:0522012901" className="text-cream/60 hover:text-gold transition-colors text-sm block">
                  Bouskoura: 0522 01 29 01
                </a>
              </li>
              <li className="text-cream/60 text-sm pt-2">
                12h00 – 00h00 • Non-Stop 7/7
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream font-serif font-bold uppercase tracking-widest mb-4">Follow Us</h4>
            <a 
              href="https://www.instagram.com/tobiko_maroc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors text-sm block"
            >
              @tobiko_maroc
            </a>
            <div className="flex gap-4 mt-4">
              {[
                { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/tobiko_maroc' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all duration-300 flex items-center justify-center text-cream/60 hover:text-gold font-bold"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
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
              © {currentYear} Tobiko Fine Sushi • Casablanca & Bouskoura • www.tobiko.ma
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
