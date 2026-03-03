import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Tobiko Fine Sushi | Premium Japanese Cuisine',
  description: 'Experience authentic Japanese sushi crafted with precision and passion at Tobiko Fine Sushi',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  themeColor: '#0a0a0a',
  icons: {
    icon: [
      {
        url: '/icon.svg',
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
