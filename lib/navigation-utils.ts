import { BrandConfig } from './brand-registry'

// Generate brand-aware navigation links
export function getBrandNavigation(brandKey: string, baseNavigation: BrandConfig['navigation']) {
  return baseNavigation.map(item => ({
    ...item,
    href: item.href.startsWith('/') && !item.href.startsWith(`/${brandKey}`) 
      ? `/${brandKey}${item.href === '/' ? '' : item.href}`
      : item.href
  }))
}

// Generate brand-aware URL
export function getBrandUrl(brandKey: string, path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `/${brandKey}${cleanPath}`
}