'use client'

import { useState } from 'react'

const MENU_CATEGORIES = {
  nigiri: {
    label: 'Nigiri',
    items: [
      { name: 'Toro', price: '$8', description: 'Bluefin belly' },
      { name: 'Uni', price: '$9', description: 'Sea urchin' },
      { name: 'Ikura', price: '$7', description: 'Salmon roe' },
      { name: 'Maguro', price: '$6', description: 'Bluefin tuna' },
    ],
  },
  rolls: {
    label: 'Rolls',
    items: [
      { name: 'Dragon Roll', price: '$14', description: 'Avocado, cucumber, eel' },
      { name: 'Phoenix Roll', price: '$15', description: 'Spicy salmon, cream cheese' },
      { name: 'Sakura Roll', price: '$12', description: 'Cherry blossom selection' },
      { name: 'Rainbow Roll', price: '$16', description: 'Multiple fish varieties' },
    ],
  },
  sashimi: {
    label: 'Sashimi',
    items: [
      { name: 'Yellowtail', price: '$7', description: 'Fresh hamachi' },
      { name: 'Red Snapper', price: '$8', description: 'Seasonal favorite' },
      { name: 'Scallop', price: '$9', description: 'Tender hotate' },
      { name: 'Squid', price: '$6', description: 'Fresh ika' },
    ],
  },
  sides: {
    label: 'Sides',
    items: [
      { name: 'Edamame', price: '$5', description: 'Steamed soybeans' },
      { name: 'Gyoza', price: '$6', description: 'Fried dumplings' },
      { name: 'Miso Soup', price: '$4', description: 'Traditional broth' },
      { name: 'Seaweed Salad', price: '$5', description: 'Fresh and tangy' },
    ],
  },
}

export function Menu() {
  const [activeTab, setActiveTab] = useState('nigiri')

  return (
    <section 
      id="menu"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-cream mb-4 tracking-tight">
            Menu
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg">
            Every dish crafted with precision and the finest ingredients
          </p>
        </div>

        {/* Tabs - minimal underline style */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 border-b border-gold/20">
          {Object.entries(MENU_CATEGORIES).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-3 font-serif text-lg tracking-wider transition-all duration-300 relative ${
                activeTab === key
                  ? 'text-cream'
                  : 'text-gold hover:text-cream'
              }`}
              style={{
                borderBottom: activeTab === key ? '2px solid #D4A843' : '1px solid #D4A843/50'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {MENU_CATEGORIES[activeTab as keyof typeof MENU_CATEGORIES].items.map((item, index) => (
            <div
              key={index}
              className="group pb-6 border-b border-charcoal/50 hover:border-b-2 hover:border-gold transition-all duration-300 flex items-center justify-between relative"
            >
              {/* Left content */}
              <div className="flex-1 group-hover:pl-4 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-serif font-bold text-cream mb-1">
                  {item.name}
                </h3>
                <p className="text-cream/60 text-sm italic">
                  {item.description}
                </p>
              </div>
              
              {/* Price - right aligned */}
              <span className="text-gold font-serif font-bold ml-6 whitespace-nowrap text-lg">
                {item.price}
              </span>
              
              {/* Food image - right side */}
              <div className="w-16 h-16 ml-6 rounded-full overflow-hidden flex-shrink-0 border border-gold/30 group-hover:border-gold transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80"
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-cream/60 text-lg mb-6">
            Disponible pour dîner sur place ou à emporter
          </p>
          <button className="px-8 py-4 bg-red-accent text-cream font-serif text-lg tracking-wider uppercase hover:bg-red-accent/80 transition-all duration-300 transform hover:scale-105">
            Voir le Menu Complet
          </button>
        </div>
      </div>
    </section>
  )
}
