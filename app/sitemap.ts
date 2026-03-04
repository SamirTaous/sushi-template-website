import { MetadataRoute } from 'next'
import { getAvailableBrands, getBrandConfig } from '@/lib/brand-registry'

export default function sitemap(): MetadataRoute.Sitemap {
  const brands = getAvailableBrands()
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000'

  const routes: MetadataRoute.Sitemap = []

  // Generate sitemap for each brand
  brands.forEach(brandKey => {
    const brandConfig = getBrandConfig(brandKey)
    const brandBaseUrl = `${baseUrl}/${brandKey}`

    // Main pages for each brand
    routes.push(
      {
        url: brandBaseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: `${brandBaseUrl}/menu`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${brandBaseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }
    )

    // Add additional pages based on navigation
    brandConfig.navigation.forEach(navItem => {
      if (navItem.href.startsWith('/') && !navItem.href.includes('#')) {
        routes.push({
          url: `${brandBaseUrl}${navItem.href}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.5,
        })
      }
    })
  })

  // Add brands overview page
  routes.push({
    url: `${baseUrl}/brands`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.3,
  })

  return routes
}