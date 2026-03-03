'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('rolls')
  const [stickyNav, setStickyNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setStickyNav(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { id: 'rolls', label: 'Rolls & Makis' },
    { id: 'sashimis', label: 'Sashimis' },
    { id: 'salades', label: 'Salades' },
    { id: 'bento', label: 'Bento Box' },
    { id: 'yakitoris', label: 'Yakitoris' },
    { id: 'nems', label: 'Nems' },
    { id: 'plateaux', label: 'Plateaux' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'boissons', label: 'Boissons' },
  ]

  const menuItems = {
    rolls: [
      { name: 'Salmon Nigiri Roll', description: 'Fresh Atlantic salmon over seasoned rice', price: '65 MAD', image: '/sushi-items (1).jpg' },
      { name: 'Tuna Sashimi Selection', description: 'Premium bluefin tuna, expertly sliced', price: '85 MAD', image: '/sushi-items (2).jpg' },
      { name: 'Dragon Roll Special', description: 'Eel, avocado, cucumber with special sauce', price: '75 MAD', image: '/sushi-items (3).jpg' },
      { name: 'Chirashi Bowl Deluxe', description: 'Assorted sashimi over sushi rice', price: '95 MAD', image: '/sushi-items (4).jpg' },
      { name: 'Omakase Selection', description: "Chef's choice of premium sushi and sashimi", price: '125 MAD', image: '/sushi-items (5).jpg' },
    ],
    sashimis: [
      { name: 'Salmon Sashimi', description: 'Fresh Atlantic salmon, expertly cut', price: '70 MAD', image: '/sushi-items (1).jpg' },
      { name: 'Tuna Sashimi Premium', description: 'Premium bluefin tuna selection', price: '85 MAD', image: '/sushi-items (2).jpg' },
    ],
    salades: [
      { name: 'Chirashi Salad', description: 'Mixed sashimi with fresh greens and sesame', price: '85 MAD', image: '/sushi-items (4).jpg' },
      { name: 'Salmon Poke Bowl', description: 'Fresh salmon with avocado and edamame', price: '75 MAD', image: '/sushi-items (1).jpg' },
    ],
    bento: [
      { name: 'Omakase Bento', description: 'Complete Japanese meal with chef selection', price: '120 MAD', image: '/sushi-items (5).jpg' },
    ],
    yakitoris: [
      { name: 'Salmon Teriyaki', description: 'Grilled salmon with teriyaki glaze', price: '65 MAD', image: '/sushi-items (1).jpg' },
      { name: 'Tuna Tataki', description: 'Seared tuna with ponzu sauce', price: '75 MAD', image: '/sushi-items (2).jpg' },
    ],
    nems: [
      { name: 'Salmon Hand Roll', description: 'Fresh salmon in crispy nori wrap', price: '50 MAD', image: '/sushi-items (1).jpg' },
      { name: 'Dragon Hand Roll', description: 'Eel and avocado hand roll', price: '55 MAD', image: '/sushi-items (3).jpg' },
    ],
    plateaux: [
      { name: 'Salmon Platter for 2', description: 'Salmon selection for 2 people', price: 'À partir de 189 MAD', image: '/sushi-items (1).jpg' },
      { name: 'Mixed Sashimi Platter', description: 'Assorted sashimi selection', price: 'À partir de 349 MAD', image: '/sushi-items (2).jpg' },
      { name: 'Omakase Royal Boat', description: 'Ultimate sushi experience for 8-10 people', price: 'À partir de 649 MAD', image: '/sushi-items (5).jpg' },
    ],
    desserts: [
      { name: 'Matcha Mochi', description: 'Traditional Japanese sweet with matcha', price: '35 MAD', image: '/sushi-items (5).jpg' },
      { name: 'Dorayaki Special', description: 'Pancake sandwich with sweet filling', price: '30 MAD', image: '/sushi-items (4).jpg' },
    ],
    boissons: [
      { name: 'Premium Sake', description: 'Selected Japanese sake', price: '80 MAD', image: '/sushi-items (5).jpg' },
      { name: 'Matcha Tea', description: 'Traditional Japanese green tea', price: '25 MAD', image: '/sushi-items (4).jpg' },
      { name: 'Fresh Juice Selection', description: 'House-made fresh juices', price: '20 MAD', image: '/sushi-items (1).jpg' },
    ],
  }

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`section-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <Navbar />

      {/* Hero Banner */}
      <section 
        className="relative pt-20 h-96"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <h1 className="text-8xl font-serif font-bold text-cream mb-4">Notre Menu</h1>
          <div className="h-px w-24 bg-gold mb-4" />
          <p className="text-gold text-sm uppercase tracking-widest">Cuisine japonaise fine • Casablanca & Bouskoura</p>
        </div>
      </section>

      {/* Sticky Category Navigation */}
      <div 
        className={`${stickyNav ? 'fixed top-16 left-0 right-0 bg-black border-b border-gold/30 z-40' : 'relative'} transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 py-4 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  scrollToCategory(cat.id)
                }}
                className={`text-sm uppercase tracking-widest transition-all duration-300 pb-2 ${
                  activeCategory === cat.id
                    ? 'text-cream border-b-2 border-gold'
                    : 'text-cream/50 border-b border-transparent hover:text-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section key={category.id} id={`section-${category.id}`} className={`mb-20 ${category.id === 'bento' ? 'bg-charcoal/50 p-12 rounded-lg' : ''}`}>
            <h2 className="text-5xl font-serif font-bold text-gold mb-2 tracking-tight">{category.label}</h2>
            <div className="h-px w-16 bg-red-accent mb-8" />

            <div className="space-y-6">
              {(menuItems[category.id as keyof typeof menuItems] || []).map((item, index) => (
                <div key={index} className="group pb-6 border-b border-charcoal/50 hover:border-gold/30 transition-all duration-300 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-serif font-bold text-cream">{item.name}</h3>
                      <div className="flex-1 border-b border-gold/30 border-dotted" />
                      <span className="text-gold font-serif font-bold whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-cream/60 text-sm italic">{item.description}</p>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border border-gold/30 group-hover:border-gold transition-colors duration-300 hidden sm:block">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-accent py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold text-cream mb-8">Commandez Maintenant</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:0520900902"
              className="px-8 py-4 bg-black text-cream font-serif text-lg tracking-wider uppercase hover:bg-charcoal transition-all duration-300"
            >
              Appeler Casablanca 0520 900 902
            </a>
            <a 
              href="tel:0522012901"
              className="px-8 py-4 border-2 border-cream text-cream font-serif text-lg tracking-wider uppercase hover:bg-cream/10 transition-all duration-300"
            >
              Appeler Bouskoura 0522 01 29 01
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
