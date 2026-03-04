'use client'

import { useEffect, useRef, useState } from 'react'
import { brandConfig } from '@/lib/brand-config'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (!titleRef.current) return

    // Letter-by-letter animation
    const letters = titleRef.current.textContent?.split('') || []
    titleRef.current.textContent = ''
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span')
      span.textContent = letter
      span.style.opacity = '0'
      span.style.animation = `fadeUp ${0.05 * (index + 1)}s ease-out forwards`
      titleRef.current?.appendChild(span)
    })
  }, [])

  return (
    <section 
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-16"
    >
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${brandConfig.assets.heroBackground})`,
          filter: 'brightness(0.4)'
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle red radial glow behind title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(192, 57, 43, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-7xl md:text-9xl font-serif font-bold text-cream mb-6 tracking-tight text-balance"
          style={{
            textShadow: '0 0 80px rgba(212, 168, 67, 0.3)'
          }}
        >
          {brandConfig.name}
        </h1>

        {/* Subtitle with decorative lines */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold" />
          <p className="text-xl md:text-2xl text-gold font-light tracking-widest uppercase animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {brandConfig.tagline}
          </p>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Marquee */}
        <div className="relative h-16 overflow-hidden mb-12 flex items-center justify-center border-t border-b border-gold/20">
          <div className="absolute whitespace-nowrap text-lg md:text-xl text-cream/40 animate-marquee-slow font-light tracking-widest">
            Authenticity • Precision • Passion • Excellence • Authenticity • Precision • Passion • Excellence
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-red-accent text-cream font-serif text-lg tracking-wider uppercase hover:bg-red-accent/80 transition-all duration-300 transform hover:scale-105"
        >
          {brandConfig.cta.reservation}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
