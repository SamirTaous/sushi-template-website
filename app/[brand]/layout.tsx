import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { getBrandConfig, brandExists, DEFAULT_BRAND } from '@/lib/brand-registry'
import { BrandProvider } from '@/lib/brand-context'
import { notFound } from 'next/navigation'
import '../globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

interface BrandLayoutProps {
  children: React.ReactNode
  params: Promise<{ brand: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params
  const brandConfig = getBrandConfig(brand)
  
  return {
    title: brandConfig.seo.title,
    description: brandConfig.seo.description,
    generator: 'v0.app',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      userScalable: false,
      viewportFit: 'cover',
    },
    themeColor: brandConfig.seo.themeColor,
    icons: {
      icon: [
        {
          url: brandConfig.assets.favicon,
          type: 'image/svg+xml',
        },
      ],
    },
  }
}

export default async function BrandLayout({ children, params }: BrandLayoutProps) {
  const { brand } = await params
  
  // Check if brand exists, if not show 404
  if (!brandExists(brand)) {
    notFound()
  }

  const brandConfig = getBrandConfig(brand)

  return (
    <html lang="en" style={{ fontFamily: `${inter.variable}, ${cormorant.variable}` }}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary: ${brandConfig.colors.primary};
              --color-secondary: ${brandConfig.colors.secondary};
              --color-accent: ${brandConfig.colors.accent};
              --color-gold: ${brandConfig.colors.gold};
              --color-cream: ${brandConfig.colors.cream};
            }
          `
        }} />
      </head>
      <body className={`font-sans antialiased bg-black text-cream`}>
        <BrandProvider brandConfig={brandConfig} brandKey={brand}>
          {children}
        </BrandProvider>
        <Analytics />
      </body>
    </html>
  )
}