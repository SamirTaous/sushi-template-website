'use client'

import { useEffect, useRef } from 'react'

const PLATEAUX = [
  {
    id: 1,
    name: 'Omakase',
    description: 'Chef\'s finest selection of premium nigiri',
    pieces: '10 pieces',
    price: '$85',
    highlights: ['Bluefin Toro', 'Uni', 'Salmon Roe'],
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80',
  },
  {
    id: 2,
    name: 'Sakura',
    description: 'Delicate assortment of signature rolls',
    pieces: '12 pieces',
    price: '$72',
    highlights: ['Dragon Roll', 'Phoenix Roll', 'Sakura Roll'],
    image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80',
  },
  {
    id: 3,
    name: 'Kintsugi',
    description: 'Premium sashimi and nigiri combination',
    pieces: '15 pieces',
    price: '$95',
    highlights: ['Yellowtail', 'Red Snapper', 'Scallop'],
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=500&q=80',
  },
  {
    id: 4,
    name: 'Zenith',
    description: 'The ultimate tasting experience',
    pieces: '24 pieces',
    price: '$145',
    highlights: ['Seasonal Selection', 'Chef\'s Signature', 'Premium Sides'],
    image: 'https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=500&q=80',
  },
]

export function Plateaux() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const cards = sectionRef.current?.querySelectorAll('.platter-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="plateaux"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-cream mb-4 tracking-tight">
            Nos Plateaux
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg max-w-2xl mx-auto">
            Curated selections of premium sushi crafted with the finest ingredients and traditional techniques
          </p>
        </div>

        {/* Plateaux Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATEAUX.map((platter, index) => (
            <div
              key={platter.id}
              className="platter-card opacity-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-charcoal/50 border border-charcoal hover:border-gold transition-all duration-300 overflow-hidden flex flex-col">
                {/* Image container */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img 
                    src={platter.image} 
                    alt={platter.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6 relative z-10 flex flex-col h-full">
                  {/* Price badge - bottom left */}
                  <div className="absolute bottom-6 left-6 bg-gold text-black px-4 py-2 text-sm font-serif font-bold">
                    {platter.price}
                  </div>

                  {/* Content */}
                  <div className="flex-grow pr-4">
                    <h3 className="text-2xl font-serif font-bold text-cream mb-2 tracking-wide">
                      {platter.name}
                    </h3>
                    
                    <p className="text-cream/70 text-sm mb-4 leading-relaxed">
                      {platter.description}
                    </p>

                    <p className="text-gold/60 text-xs uppercase tracking-widest mb-4">
                      {platter.pieces}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {platter.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          <span className="text-cream/60 text-xs">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 w-full py-2 border border-gold text-gold hover:bg-red-accent hover:text-cream hover:border-red-accent transition-all duration-300 text-sm font-serif uppercase tracking-wider">
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
