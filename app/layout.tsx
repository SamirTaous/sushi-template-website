import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { brandConfig } from '@/lib/brand-config'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ fontFamily: `${inter.variable}, ${cormorant.variable}` }}>
      <body className={`font-sans antialiased bg-black text-cream`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
