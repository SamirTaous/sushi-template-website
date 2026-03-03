'use client'

import { useState } from 'react'

const SUSHI_ITEMS = [
  { 
    name: 'Salmon Nigiri', 
    price: '$8', 
    description: 'Fresh Atlantic salmon over seasoned rice',
    image: '/sushi-items (1).jpg'
  },
  { 
    name: 'Tuna Sashimi', 
    price: '$12', 
    description: 'Premium bluefin tuna, expertly sliced',
    image: '/sushi-items (2).jpg'
  },
  { 
    name: 'Dragon Roll', 
    price: '$16', 
    description: 'Eel, avocado, and cucumber with special sauce',
    image: '/sushi-items (3).jpg'
  },
  { 
    name: 'Chirashi Bowl', 
    price: '$22', 
    description: 'Assorted sashimi over sushi rice',
    image: '/sushi-items (4).jpg'
  },
  { 
    name: 'Omakase Selection', 
    price: '$35', 
    description: "Chef's choice of premium sushi and sashimi",
    image: '/sushi-items (5).jpg'
  },
]

export function Menu() {
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

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {SUSHI_ITEMS.map((item, index) => (
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
                  src={item.image}
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
