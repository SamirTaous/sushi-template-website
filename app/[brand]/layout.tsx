import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display, Montserrat } from 'next/font/google'
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
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary: ${brandConfig.colors.primary};
              --color-secondary: ${brandConfig.colors.secondary};
              --color-accent: ${brandConfig.colors.accent};
              --brand-gold: ${brandConfig.colors.gold};
              --brand-cream: ${brandConfig.colors.cream};
              --brand-font-sans: ${getFontFamily(brandConfig.fonts.sans)};
              --brand-font-serif: ${getFontFamily(brandConfig.fonts.serif)};
            }
            
            /* Base styles */
            body {
              font-family: ${getFontFamily(brandConfig.fonts.sans)} !important;
              background-color: ${brandConfig.colors.primary} !important;
              color: ${brandConfig.colors.cream} !important;
            }
            
            h1, h2, h3, h4, h5, h6, .font-serif {
              font-family: ${getFontFamily(brandConfig.fonts.serif)} !important;
            }
            
            /* Background color overrides */
            .bg-black { background-color: ${brandConfig.colors.primary} !important; }
            .bg-charcoal { background-color: ${brandConfig.colors.secondary} !important; }
            .bg-red-accent { background-color: ${brandConfig.colors.accent} !important; }
            .bg-gold { background-color: ${brandConfig.colors.gold} !important; }
            
            /* Text color overrides */
            .text-cream { color: ${brandConfig.colors.cream} !important; }
            .text-gold { color: ${brandConfig.colors.gold} !important; }
            .text-black { color: ${brandConfig.colors.primary} !important; }
            
            /* Border color overrides */
            .border-gold { border-color: ${brandConfig.colors.gold} !important; }
            .border-charcoal { border-color: ${brandConfig.colors.secondary} !important; }
            .border-red-accent { border-color: ${brandConfig.colors.accent} !important; }
            .border-t { border-top-color: ${brandConfig.colors.secondary} !important; }
            
            /* Opacity variants */
            .bg-black\\/40 { background-color: ${brandConfig.colors.primary}66 !important; }
            .bg-black\\/50 { background-color: ${brandConfig.colors.primary}80 !important; }
            .bg-black\\/70 { background-color: ${brandConfig.colors.primary}B3 !important; }
            .bg-black\\/80 { background-color: ${brandConfig.colors.primary}CC !important; }
            .bg-charcoal\\/50 { background-color: ${brandConfig.colors.secondary}80 !important; }
            .text-cream\\/60 { color: ${brandConfig.colors.cream}99 !important; }
            .text-cream\\/70 { color: ${brandConfig.colors.cream}B3 !important; }
            .border-gold\\/30 { border-color: ${brandConfig.colors.gold}4D !important; }
            .border-gold\\/50 { border-color: ${brandConfig.colors.gold}80 !important; }
            
            /* Button and interactive element overrides */
            button, .btn, [role="button"] {
              transition: all 0.3s ease !important;
            }
            
            /* Specific button styles */
            .bg-gradient-to-r.from-red-accent.to-red-900 {
              background: linear-gradient(to right, ${brandConfig.colors.accent}, ${brandConfig.colors.accent}CC) !important;
            }
            
            /* Form input overrides */
            input, select, textarea {
              background-color: ${brandConfig.colors.primary}66 !important;
              border-color: ${brandConfig.colors.gold}80 !important;
              color: ${brandConfig.colors.cream} !important;
            }
            
            input:focus, select:focus, textarea:focus {
              border-color: ${brandConfig.colors.gold} !important;
              box-shadow: 0 4px 12px ${brandConfig.colors.gold}33 !important;
            }
            
            /* Focus and hover states */
            .focus\\:border-gold:focus { border-color: ${brandConfig.colors.gold} !important; }
            .hover\\:border-gold:hover { border-color: ${brandConfig.colors.gold} !important; }
            .hover\\:text-gold:hover { color: ${brandConfig.colors.gold} !important; }
            .hover\\:text-cream:hover { color: ${brandConfig.colors.cream} !important; }
            .hover\\:bg-gold\\/10:hover { background-color: ${brandConfig.colors.gold}1A !important; }
            .hover\\:bg-cream\\/10:hover { background-color: ${brandConfig.colors.cream}1A !important; }
            .hover\\:bg-charcoal:hover { background-color: ${brandConfig.colors.secondary} !important; }
            .hover\\:bg-red-accent:hover { background-color: ${brandConfig.colors.accent} !important; }
            .hover\\:bg-red-accent\\/80:hover { background-color: ${brandConfig.colors.accent}CC !important; }
            .hover\\:border-red-accent:hover { border-color: ${brandConfig.colors.accent} !important; }
            
            /* Navbar specific hover effects */
            nav a:hover, .navbar-link:hover {
              color: ${brandConfig.colors.gold} !important;
            }
            
            /* Mobile menu button hover */
            button:hover {
              color: ${brandConfig.colors.gold} !important;
            }
            
            /* Disabled states */
            .disabled\\:bg-gold:disabled { background-color: ${brandConfig.colors.gold} !important; }
            .disabled\\:text-black:disabled { color: ${brandConfig.colors.primary} !important; }
            
            /* Shadow overrides with brand colors */
            .hover\\:shadow-\\[0_0_20px_rgba\\(192\\,57\\,43\\,0\\.4\\)\\]:hover {
              box-shadow: 0 0 20px ${brandConfig.colors.accent}66 !important;
            }
            
            .focus\\:shadow-\\[0_4px_12px_rgba\\(212\\,168\\,67\\,0\\.2\\)\\]:focus {
              box-shadow: 0 4px 12px ${brandConfig.colors.gold}33 !important;
            }
            
            /* Gradient text */
            .gradient-text {
              background: linear-gradient(135deg, ${brandConfig.colors.gold} 0%, ${brandConfig.colors.cream} 100%) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              background-clip: text !important;
            }
            
            /* Price badges and small elements */
            .w-1.h-1.bg-gold { background-color: ${brandConfig.colors.gold} !important; }
            
            /* Radial gradient backgrounds */
            [style*="radial-gradient"] {
              background: radial-gradient(circle, ${brandConfig.colors.accent}26 0%, transparent 70%) !important;
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

function getFontFamily(fontName: string): string {
  switch (fontName) {
    case 'Inter':
      return 'var(--font-inter), sans-serif'
    case 'Cormorant Garamond':
      return 'var(--font-cormorant), serif'
    case 'Playfair Display':
      return 'var(--font-playfair), serif'
    case 'Montserrat':
      return 'var(--font-montserrat), sans-serif'
    default:
      return `"${fontName}", sans-serif`
  }
}