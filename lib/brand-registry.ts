import { tobikoConfig } from './brands/tobiko'
import { sakuraConfig } from './brands/sakura'
import { samuraiConfig } from './brands/samurai'
import { akaiConfig } from './brands/akai'
import { kinhaoConfig } from './brands/kinhaoConfig'
import { yakitoriaConfig } from './brands/yakitoriaConfig'
import { sojuConfig } from './brands/sojuConfig'
import { yazaiConfig } from './brands/yazaiConfig'
import { sushiproConfig } from './brands/sushiproConfig'
import { yamasushiConfig } from './brands/yamasushiConfig'
import { katanaConfig } from './brands/katanaConfig'
import { mistersushiConfig } from './brands/mistersushiConfig'
import { goldenConfig } from './brands/goldenConfig'

// Brand registry - add new brands here
export const brandRegistry = {
  tobiko: tobikoConfig,
  sakura: sakuraConfig,
  samurai: samuraiConfig,
  akai: akaiConfig,
  kinhao: kinhaoConfig,
  yakitoria: yakitoriaConfig,
  soju: sojuConfig,
  yazai: yazaiConfig,
  sushipro: sushiproConfig,
  yamasushi: yamasushiConfig,
  katana: katanaConfig,
  mistersushi: mistersushiConfig,
  golden: goldenConfig,
  // Add more brands here as needed
  // example: exampleConfig,
} as const

// Type definitions
export type BrandKey = keyof typeof brandRegistry
export type BrandConfig = typeof brandRegistry[BrandKey]
export type Location = BrandConfig['locations'][0]
export type DeliveryPlatform = BrandConfig['delivery']['platforms'][0]
export type SocialPlatform = BrandConfig['social'][keyof BrandConfig['social']]

// Default brand (fallback)
export const DEFAULT_BRAND: BrandKey = 'tobiko'

// Get brand configuration by key
export function getBrandConfig(brandKey: string | undefined): BrandConfig {
  if (!brandKey) {
    console.warn(`Brand key is undefined, falling back to default brand "${DEFAULT_BRAND}"`)
    return brandRegistry[DEFAULT_BRAND]
  }
  
  const normalizedKey = brandKey.toLowerCase() as BrandKey
  
  if (normalizedKey in brandRegistry) {
    return brandRegistry[normalizedKey]
  }
  
  // Fallback to default brand if not found
  console.warn(`Brand "${brandKey}" not found, falling back to default brand "${DEFAULT_BRAND}"`)
  return brandRegistry[DEFAULT_BRAND]
}

// Get all available brand keys
export function getAvailableBrands(): BrandKey[] {
  return Object.keys(brandRegistry) as BrandKey[]
}

// Check if a brand exists
export function brandExists(brandKey: string | undefined): boolean {
  if (!brandKey) {
    return false
  }
  
  const normalizedKey = brandKey.toLowerCase() as BrandKey
  return normalizedKey in brandRegistry
}