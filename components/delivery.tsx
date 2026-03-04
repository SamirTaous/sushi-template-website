'use client'

import { useBrandConfig } from '@/lib/brand-context'

export function Delivery() {
  const brandConfig = useBrandConfig()
  return (
    <section 
      id="delivery"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${brandConfig.delivery.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25)'
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-12 md:p-16 text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold italic text-cream mb-4 tracking-tight">
            {brandConfig.delivery.title}
          </h2>
          
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            {brandConfig.delivery.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {brandConfig.delivery.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                className={`px-8 py-4 font-serif text-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-105 ${
                  platform.primary
                    ? 'bg-red-accent text-cream hover:shadow-[0_0_20px_rgba(192,57,43,0.5)]'
                    : 'border-2 border-gold text-gold hover:bg-gold/10'
                }`}
              >
                {platform.primary ? brandConfig.cta.orderUber : brandConfig.cta.orderDeliveroo}
              </a>
            ))}
          </div>

          <p className="text-cream/50 text-sm italic font-serif">
            ⏱ Temps de livraison estimé: {brandConfig.delivery.estimatedTime}
          </p>
        </div>
      </div>
    </section>
  )
}
