import { NextRequest, NextResponse } from 'next/server'
import { getBrandFromDomain, hasCustomDomain } from './lib/domain-mapping'
import { brandExists, DEFAULT_BRAND } from './lib/brand-registry'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // Handle custom domain mapping
  if (hasCustomDomain(hostname)) {
    const brandFromDomain = getBrandFromDomain(hostname)
    
    if (brandFromDomain && brandExists(brandFromDomain)) {
      // If URL already has brand path, don't redirect
      if (pathname.startsWith(`/${brandFromDomain}`)) {
        return NextResponse.next()
      }
      
      // Redirect to brand-specific path
      const newUrl = new URL(`/${brandFromDomain}${pathname}${search}`, request.url)
      return NextResponse.rewrite(newUrl)
    }
  }

  // Handle root path - redirect to default brand
  if (pathname === '/') {
    const newUrl = new URL(`/${DEFAULT_BRAND}${search}`, request.url)
    return NextResponse.redirect(newUrl, 302)
  }

  // Handle brand paths
  const pathSegments = pathname.split('/').filter(Boolean)
  const potentialBrand = pathSegments[0]

  // If first segment is not a valid brand, redirect to default brand
  if (potentialBrand && !brandExists(potentialBrand)) {
    const newUrl = new URL(`/${DEFAULT_BRAND}${pathname}${search}`, request.url)
    return NextResponse.redirect(newUrl, 302)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}