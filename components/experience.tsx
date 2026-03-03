'use client'

import { useEffect, useRef } from 'react'

export function Experience() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Experience with background image */}
          <div
            ref={leftRef}
            className="opacity-0 flex flex-col justify-center relative rounded-lg overflow-hidden"
            style={{ animationDelay: '0ms' }}
          >
            {/* Background image */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.35)'
              }}
            />
            
            <div className="relative z-10 p-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 tracking-tight">
                L'Expérience
              </h2>
              <div className="h-1 w-16 bg-gold mb-8" />
            
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              Chez Tobiko, nous croyons que manger du sushi est bien plus qu'une simple transaction. C'est une célébration des flaveurs, une harmonie entre tradition et innovation, et une connexion entre le chef et le client.
            </p>

            <p className="text-cream/70 text-base leading-relaxed mb-8">
              Chaque pièce de sushi est préparée avec une attention minutieuse au détail. Nos chefs maîtres travaillent exclusivement avec les meilleurs ingrédients importés du Japon, sélectionnés pour leur qualité et leur fraîcheur inégalée.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-gold font-serif font-bold mb-1">Authenticité</h4>
                  <p className="text-cream/60 text-sm">Techniques traditionnelles japonaises honoring centuries de heritage</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-gold font-serif font-bold mb-1">Précision</h4>
                  <p className="text-cream/60 text-sm">Chaque coupe, chaque rouleau, chaque détail perfectionné</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-gold font-serif font-bold mb-1">Passion</h4>
                  <p className="text-cream/60 text-sm">Dévouement inébranlable à l'excellence et à la satisfaction</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right - Philosophy with red vertical line */}
          <div
            ref={rightRef}
            className="opacity-0 flex flex-col justify-center relative pl-8"
            style={{ animationDelay: '200ms' }}
          >
            {/* Vertical red line */}
            <div className="absolute left-0 top-0 w-1 h-24 bg-red-accent" />
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6 tracking-tight">
              Notre Philosophie
            </h2>
            
            <p className="text-cream/80 text-lg leading-relaxed mb-6">
              Nous ne servons pas simplement du sushi. Nous partageons une histoire, un art, une passion qui a été transmise à travers les générations.
            </p>

            <p className="text-cream/70 text-base leading-relaxed mb-8">
              Notre restaurant est construit sur le principe fondamental que chaque client mérite l'excellence. Du moment où vous franchissez notre porte jusqu'au dernier repas, nous nous engageons à créer une expérience inoubliable.
            </p>

            <div className="border-l-2 border-gold pl-6 py-4">
              <p className="text-cream/90 italic font-serif text-lg leading-relaxed">
                "Le sushi ne se goûte pas seulement — il se ressent. C'est la quintessence de la nature, transformée par la main experte du maître."
              </p>
              <p className="text-gold font-serif font-bold mt-4">— Chef Masahiro Tobiko</p>
            </div>
          </div>
        </div>

        {/* Bottom stats - horizontal row with top borders */}
        <div className="grid grid-cols-3 gap-12 mt-20 pt-12">
          <div className="border-t border-gold pt-8">
            <div className="text-4xl font-serif font-bold text-gold mb-2">25+</div>
            <p className="text-cream/60 text-sm uppercase tracking-widest">Years Experience</p>
          </div>
          <div className="border-t border-gold pt-8">
            <div className="text-4xl font-serif font-bold text-gold mb-2">500+</div>
            <p className="text-cream/60 text-sm uppercase tracking-widest">Daily Customers</p>
          </div>
          <div className="border-t border-gold pt-8">
            <div className="text-4xl font-serif font-bold text-gold mb-2">100%</div>
            <p className="text-cream/60 text-sm uppercase tracking-widest">Premium Ingredients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
