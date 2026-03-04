'use client'

import { createContext, useContext, ReactNode } from 'react'
import { BrandConfig, getBrandConfig, DEFAULT_BRAND } from './brand-registry'

interface BrandContextType {
    brandConfig: BrandConfig
    brandKey: string
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

interface BrandProviderProps {
    children: ReactNode
    brandConfig: BrandConfig
    brandKey: string
}

export function BrandProvider({ children, brandConfig, brandKey }: BrandProviderProps) {
    return (
        <BrandContext.Provider value={{ brandConfig, brandKey }}>
            {children}
        </BrandContext.Provider>
    )
}

export function useBrand() {
    const context = useContext(BrandContext)
    if (context === undefined) {
        // Fallback to default brand when no provider is available
        return {
            brandConfig: getBrandConfig(DEFAULT_BRAND),
            brandKey: DEFAULT_BRAND
        }
    }
    return context
}

// Hook to get just the brand config (most common use case)
export function useBrandConfig() {
    const { brandConfig } = useBrand()
    return brandConfig
}