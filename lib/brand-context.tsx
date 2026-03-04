'use client'

import { createContext, useContext, ReactNode } from 'react'
import { BrandConfig } from './brand-registry'

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
        throw new Error('useBrand must be used within a BrandProvider')
    }
    return context
}

// Hook to get just the brand config (most common use case)
export function useBrandConfig() {
    const { brandConfig } = useBrand()
    return brandConfig
}