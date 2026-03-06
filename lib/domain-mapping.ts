// Domain to brand mapping for custom domains
export const domainMapping = {
  'tobiko.com': 'tobiko',
  'www.tobiko.com': 'tobiko',
  'sakura-restaurant.com': 'sakura',
  'www.sakura-restaurant.com': 'sakura',
  'samuraisushi.ma': 'samurai',
  'www.samuraisushi.ma': 'samurai',
  'akai.ma': 'akai',
  'www.akai.ma': 'akai',
  'kinhao.ma': 'kinhao',
  'www.kinhao.ma': 'kinhao',
  'yakitoria.ma': 'yakitoria',
  'www.yakitoria.ma': 'yakitoria',
  'sojusushi.ma': 'soju',
  'www.sojusushi.ma': 'soju',
  // Add more domain mappings here as needed
} as const

export type DomainKey = keyof typeof domainMapping

// Get brand from domain
export function getBrandFromDomain(domain: string): string | null {
  const normalizedDomain = domain.toLowerCase() as DomainKey
  return domainMapping[normalizedDomain] || null
}

// Check if domain has custom mapping
export function hasCustomDomain(domain: string): boolean {
  return domain.toLowerCase() in domainMapping
}

// Get all mapped domains for a brand
export function getDomainsForBrand(brandKey: string): string[] {
  return Object.entries(domainMapping)
    .filter(([_, brand]) => brand === brandKey)
    .map(([domain]) => domain)
}