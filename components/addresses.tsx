'use client'

import { useEffect, useRef } from 'react'

const LOCATIONS = [
  {
    id: 1,
    name: 'Tobiko Casablanca',
    address: 'Casablanca',
    city: 'Maroc',
    phone: '0520 900 902',
    email: 'contact@tobiko.ma',
    hours: '12h00 - 00h00 • Non-Stop 7/7',
    specialty: 'Sur Place · À Emporter · Livraison',
  },
  {
    id: 2,
    name: 'Tobiko Bouskoura',
    address: 'Bouskoura',
    city: 'Maroc',
    phone: '0522 01 29 01',
    email: 'contact@tobiko.ma',
    hours: '12h00 - 00h00 • Non-Stop 7/7',
    specialty: 'Sur Place · À Emporter · Livraison',
  },
]

export function Addresses() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = cardsRef.current?.querySelectorAll('.location-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="addresses"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-cream mb-4 tracking-tight">
            Nos Adresses
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg">
            Visitez l'une de nos trois locations à Paris
          </p>
        </div>

        {/* Locations Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((location, index) => (
            <div
              key={location.id}
              className="location-card opacity-0 relative border border-gold/30 hover:border-gold transition-all duration-300 p-8 overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background image */}
              <div 
                className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold mb-2">
                  {location.name}
                </h3>
                <p className="text-gold/60 text-xs uppercase tracking-widest">
                  {location.specialty}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-cream text-sm leading-relaxed">
                    {location.address}<br />
                    {location.city}
                  </p>
                </div>

                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-widest mb-1">Téléphone</p>
                  <a href={`tel:${location.phone}`} className="text-cream hover:text-gold transition-colors block">
                    {location.phone}
                  </a>
                  <a href={`tel:${location.phone}`} className="text-red-accent hover:text-cream text-sm font-serif font-bold mt-2 inline-flex items-center gap-1">
                    Appeler Maintenant →
                  </a>
                </div>

                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${location.email}`} className="text-cream hover:text-gold transition-colors text-sm">
                    {location.email}
                  </a>
                </div>

                <div>
                  <p className="text-cream/40 text-xs uppercase tracking-widest mb-1">Horaires</p>
                  <p className="text-cream text-sm">
                    {location.hours}
                  </p>
                </div>
              </div>

              {/* Map placeholder - would integrate real maps API */}
              <div className="w-full h-40 bg-black/50 border border-charcoal/50 mb-6 flex items-center justify-center">
                <p className="text-cream/40 text-xs text-center">
                  Map View
                </p>
              </div>

              <button className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 text-sm font-serif uppercase tracking-wider">
                Directions
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
