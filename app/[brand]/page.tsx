import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Plateaux } from '@/components/plateaux'
import { Menu } from '@/components/menu'
import { Experience } from '@/components/experience'
import { Reservation } from '@/components/reservation'
import { Addresses } from '@/components/addresses'
import { Delivery } from '@/components/delivery'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function BrandHome() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <Hero />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Plateaux />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Menu />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Experience />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Reservation />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Addresses />
      
      {/* Section separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-15" />
      
      <Delivery />
      <Footer />
    </main>
  )
}