'use client'

import { useState } from 'react'
import { useBrandConfig } from '@/lib/brand-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function ContactPage() {
  const brandConfig = useBrandConfig()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
    location: brandConfig.locations[0]?.id.toString() || '1',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const faqItems = [
    {
      question: 'Acceptez-vous les réservations ?',
      answer: 'Oui, par téléphone ou via ce formulaire. Réservez dès maintenant pour garantir votre place.'
    },
    {
      question: 'Livrez-vous à domicile ?',
      answer: `Oui, livraison disponible. ${brandConfig.delivery.description}`
    },
    {
      question: 'Quels sont vos horaires ?',
      answer: `${brandConfig.contact.hours}. Services: ${brandConfig.locations[0]?.specialty || 'Sur Place · À Emporter · Livraison'}`
    },
    {
      question: 'Proposez-vous des plateaux pour événements ?',
      answer: 'Oui, nous proposons des plateaux parfaits pour les réceptions. Contactez-nous pour devis.'
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center pt-16"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 text-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-4">NOUS TROUVER</p>
          <h1 className="text-8xl font-serif font-bold text-cream mb-4">Contactez-Nous</h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">{brandConfig.contact.hours}</p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid ${brandConfig.locations.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-2xl mx-auto'} gap-8 mb-8`}>
            {brandConfig.locations.map((location) => (
              <div key={location.id} className="bg-charcoal/50 border border-gold/30 p-12 relative group hover:border-gold transition-all duration-300">
                <div 
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${location.mapImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-4xl font-serif font-bold text-gold mb-2">{location.name.split(' ').slice(-1)[0]}</h3>
                  <div className="h-px w-16 bg-gold mb-6" />
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-cream/60 text-xs uppercase tracking-widest mb-1">Adresse</p>
                      <p className="text-cream">{location.address}, {location.city}</p>
                    </div>
                    <div>
                      <p className="text-cream/60 text-xs uppercase tracking-widest mb-1">Téléphone</p>
                      <a href={`tel:${location.phone.link}`} className="text-cream hover:text-gold transition-colors text-lg font-serif">
                        {location.phone.display}
                      </a>
                    </div>
                    <div>
                      <p className="text-cream/60 text-xs uppercase tracking-widest mb-1">Horaires</p>
                      <p className="text-cream">{location.hours}</p>
                    </div>
                    <div>
                      <p className="text-cream/60 text-xs uppercase tracking-widest mb-1">Services</p>
                      <p className="text-cream">{location.specialty}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a 
                      href={`tel:${location.phone.link}`}
                      className="w-full py-3 bg-red-accent text-cream font-serif uppercase tracking-wider hover:shadow-[0_0_20px_rgba(192,57,43,0.4)] transition-all duration-300 text-center"
                    >
                      {brandConfig.cta.callNow}
                    </a>
                    <button className="w-full py-3 border-2 border-gold text-gold font-serif uppercase tracking-wider hover:bg-gold/10 transition-all duration-300">
                      {brandConfig.cta.directions} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 border-t border-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-5xl font-serif font-bold text-cream mb-4">{brandConfig.cta.reservation}</h2>
              <p className="text-cream/70 text-lg mb-8">Une expérience culinaire inoubliable vous attend</p>
              
              {brandConfig.locations.length > 1 && (
                <div className="space-y-4">
                  <p className="text-cream/60 text-sm uppercase tracking-widest">Sélectionnez un restaurant</p>
                  <div className="flex gap-6">
                    {brandConfig.locations.map((location) => (
                      <label key={location.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="location"
                          value={location.id.toString()}
                          checked={formData.location === location.id.toString()}
                          onChange={handleChange}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="text-cream">{location.name.split(' ').slice(-1)[0]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                  placeholder="Jean Dupont"
                />
              </div>

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
                  placeholder="+212 5 20 00 00 00"
                />
              </div>

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

              <div>
                <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                  Heure *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                >
                  <option value="">Sélectionnez une heure</option>
                  {Array.from({ length: 48 }).map((_, i) => {
                    const hours = Math.floor(i / 2) + 12
                    const minutes = (i % 2) * 30
                    const time = `${String(hours % 24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
                    return <option key={i} value={time}>{time}</option>
                  })}
                </select>
              </div>

              <div>
                <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                  Nombre de personnes *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                >
                  {Array.from({ length: 15 }).map((_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1} {i === 0 ? 'personne' : 'personnes'}</option>
                  ))}
                  <option value="15+">15+ personnes</option>
                </select>
              </div>

              <div>
                <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                  Occasion spéciale
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300"
                >
                  <option value="">Sélectionnez une occasion</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="romantique">Dîner romantique</option>
                  <option value="affaires">Réunion d'affaires</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-cream font-serif font-bold mb-2 text-sm uppercase tracking-widest">
                  Message optionnel
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-black/40 border-b border-gold/50 text-cream px-4 py-3 focus:outline-none focus:border-b-2 focus:border-gold focus:shadow-[0_4px_12px_rgba(212,168,67,0.2)] transition-all duration-300 resize-none"
                  placeholder="Allergies, préférences spéciales..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-accent to-red-900 text-cream font-serif text-lg tracking-wider uppercase hover:shadow-[0_0_20px_rgba(192,57,43,0.4)] transition-all duration-300 mt-4"
              >
                {submitted ? 'Réservation Confirmée!' : 'Confirmer la Réservation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-charcoal/30 py-20 px-4 sm:px-6 lg:px-8 border-t border-charcoal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-cream mb-2 text-center">Questions Fréquentes</h2>
          <div className="h-px w-24 bg-gold mx-auto mb-12" />

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gold/30 hover:border-gold transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gold/5 transition-colors duration-300"
      >
        <span className="text-cream font-serif font-bold flex items-center gap-3">
          <span className="text-gold text-xl">+</span>
          {question}
        </span>
        <span className={`text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 py-4 border-t border-gold/30 bg-black/50">
          <p className="text-cream/70">{answer}</p>
        </div>
      )}
    </div>
  )
}