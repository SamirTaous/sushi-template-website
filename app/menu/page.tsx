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
      { name: 'California Bœuf Asperge', description: 'Bœuf tendre, asperge, avocat, tobiko rouge', price: '75 MAD', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80' },
      { name: 'California Roll Classique', description: 'Crabe, avocat, concombre, sésame', price: '55 MAD', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=100&q=80' },
      { name: 'Spicy Salmon Roll', description: 'Saumon frais, sauce spicy, avocat', price: '65 MAD', image: 'https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=100&q=80' },
      { name: 'Dragon Roll', description: 'Crevette tempura, avocat, sauce anguille', price: '70 MAD', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=100&q=80' },
      { name: 'Rainbow Roll', description: 'Saumon, thon, avocat, tobiko', price: '80 MAD', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=100&q=80' },
      { name: 'Tobiko Special Roll', description: 'Création signature du chef', price: '90 MAD', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80' },
    ],
    sashimis: [
      { name: 'Sashimis Saumon', description: 'Tranches fines de saumon frais', price: '70 MAD', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80' },
      { name: 'Sashimis Thon', description: 'Thon premium saveur intense', price: '75 MAD', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=100&q=80' },
    ],
    salades: [
      { name: 'Salade Tobiko', description: 'Saumon frais, crevettes, mangue, avocat, fleur comestible', price: '85 MAD', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&q=80' },
      { name: 'Salade Wakame', description: 'Algues marinées, sésame, sauce ponzu', price: '45 MAD', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&q=80' },
    ],
    bento: [
      { name: 'Bento Tobiko', description: 'Repas complet japonais: sushis, yakitoris, salade, accompagnements', price: '120 MAD', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=100&q=80' },
    ],
    yakitoris: [
      { name: 'Yakitoris Tsukune', description: 'Boulettes de poulet grillées, sauce teriyaki, sésame', price: '55 MAD', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e58?w=100&q=80' },
      { name: 'Yakitoris Poulet', description: 'Brochettes de poulet marinées, sauce yakitori', price: '50 MAD', image: 'https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=100&q=80' },
      { name: 'Yakitoris Bœuf', description: 'Brochettes de bœuf, sauce soja, gingembre', price: '60 MAD', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=100&q=80' },
    ],
    nems: [
      { name: 'Nems Crevettes', description: 'Nems croustillants aux crevettes, sauce aigre-douce', price: '50 MAD', image: 'https://images.unsplash.com/photo-1585238341710-4a4a1ebc7e65?w=100&q=80' },
      { name: 'Nems Légumes', description: 'Nems végétariens, sauce soja', price: '40 MAD', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&q=80' },
    ],
    plateaux: [
      { name: 'Plateau Tobiko Pour 2', description: 'Sélection de rolls et makis pour 2 personnes', price: 'À partir de 189 MAD', image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=100&q=80' },
      { name: 'Plateau Tobiko Pour 4', description: 'Grand assortiment pour 4 personnes', price: 'À partir de 349 MAD', image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=100&q=80' },
      { name: 'Bateau Tobiko Royal', description: 'Le spectaculaire bateau de sushis pour 8-10 personnes', price: 'À partir de 649 MAD', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=100&q=80' },
    ],
    desserts: [
      { name: 'Crème Brûlée Matcha', description: 'Crème riche infusée au thé matcha', price: '35 MAD', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=100&q=80' },
      { name: 'Mochi Glace', description: 'Mochi frais aux saveurs variées', price: '30 MAD', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=100&q=80' },
    ],
    boissons: [
      { name: 'Thé Matcha', description: 'Thé vert japonais premium', price: '25 MAD', image: 'https://images.unsplash.com/photo-1597318284340-23c939d3b3b1?w=100&q=80' },
      { name: 'Jus Frais', description: 'Sélection de jus frais maison', price: '20 MAD', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=100&q=80' },
      { name: 'Saké Premium', description: 'Saké japonais sélectionné', price: '80 MAD', image: 'https://images.unsplash.com/photo-1608270861620-7dbe475a6b0e?w=100&q=80' },
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
