export function Delivery() {
  return (
    <section 
      id="delivery"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25)'
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-12 md:p-16 text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold italic text-cream mb-4 tracking-tight">
            Commande à Domicile
          </h2>
          
          <p className="text-cream/70 text-lg mb-8 max-w-2xl mx-auto">
            Apportez l'expérience Tobiko directement chez vous. Livraison disponible dans Paris intra-muros et banlieue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="#"
              className="px-8 py-4 bg-red-accent text-cream font-serif text-lg tracking-wider uppercase hover:shadow-[0_0_20px_rgba(192,57,43,0.5)] transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              Commander via UberEats
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-gold text-gold font-serif text-lg tracking-wider uppercase hover:bg-gold/10 transition-all duration-300 transform hover:scale-105"
            >
              Commander via Deliveroo
            </a>
          </div>

          <p className="text-cream/50 text-sm italic font-serif">
            ⏱ Temps de livraison estimé: 30–45 min
          </p>
        </div>
      </div>
    </section>
  )
}
