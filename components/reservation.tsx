'use client'

import { useState } from 'react'
import { useBrandConfig } from '@/lib/brand-context'

export function Reservation() {
  const brandConfig = useBrandConfig()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      })
    }, 3000)
  }

  return (
    <section 
      id="reservation"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-charcoal overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.2)'
        }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-cream mb-4 tracking-tight">
            Réserver une Table
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6" />
          <p className="text-cream/60 text-lg">
            Réservez votre place pour une expérience culinaire inoubliable
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="border border-gold/30 p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Nom *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                placeholder="votre@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                placeholder="+33 1 23 45 67 89"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Heure *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                Nombre de Personnes *
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num} className="bg-black">
                    {num} {num === 1 ? 'Personne' : 'Personnes'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
              Message spécial
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300 resize-none"
              placeholder="Allergies, anniversaire, occasions spéciales..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={submitted}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-red-accent to-red-900 text-cream font-serif text-lg tracking-wider uppercase hover:shadow-[0_0_20px_rgba(192,57,43,0.4)] disabled:bg-gold disabled:text-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">
                {submitted ? 'Réservation Confirmée!' : 'Réserver Maintenant'}
              </span>
            </button>
          </div>

          {/* Info text */}
          <p className="text-cream/40 text-xs mt-6 text-center">
            Nous vous confirmerons votre réservation par email dans les 2 heures
          </p>
        </form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-charcoal">
          <div className="text-center">
            <h4 className="text-gold font-serif font-bold mb-2 uppercase tracking-widest">Téléphone</h4>
            <a href={`tel:${brandConfig.contact.phone.link}`} className="text-cream/70 hover:text-cream transition-colors">
              {brandConfig.contact.phone.display}
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-gold font-serif font-bold mb-2 uppercase tracking-widest">Email</h4>
            <a href={`mailto:${brandConfig.contact.email}`} className="text-cream/70 hover:text-cream transition-colors">
              {brandConfig.contact.email}
            </a>
          </div>
          <div className="text-center">
            <h4 className="text-gold font-serif font-bold mb-2 uppercase tracking-widest">Horaires</h4>
            <p className="text-cream/70 text-sm">
              {brandConfig.contact.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
