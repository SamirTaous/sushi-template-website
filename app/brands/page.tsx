import Link from 'next/link'
import { getAvailableBrands, getBrandConfig } from '@/lib/brand-registry'

export default function BrandsPage() {
  const brands = getAvailableBrands()

  return (
    <div className="min-h-screen bg-black text-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-8 text-center">
          Available Restaurant Brands
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brandKey) => {
            const config = getBrandConfig(brandKey)
            return (
              <Link
                key={brandKey}
                href={`/${brandKey}`}
                className="block p-6 border border-gold/30 hover:border-gold transition-all duration-300 hover:bg-gold/5"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-serif font-bold text-gold mb-2">
                    {config.name}
                  </h2>
                  <p className="text-cream/60 text-sm mb-4">
                    {config.tagline}
                  </p>
                  <p className="text-cream/40 text-xs">
                    /{brandKey}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream/60 text-sm">
            Click on any brand to view its website
          </p>
        </div>
      </div>
    </div>
  )
}