// Environment-based configuration overrides
export const envConfig = {
  defaultBrand: process.env.DEFAULT_BRAND || 'tobiko',
  domainMapping: process.env.DOMAIN_MAPPING ? JSON.parse(process.env.DOMAIN_MAPPING) : {},
  
  // Feature flags
  features: {
    reservations: process.env.ENABLE_RESERVATIONS === 'true',
    onlineOrdering: process.env.ENABLE_ONLINE_ORDERING === 'true',
    analytics: process.env.ENABLE_ANALYTICS === 'true',
  },

  // Analytics
  analytics: {
    vercel: process.env.VERCEL_ANALYTICS_ID,
    google: process.env.GOOGLE_ANALYTICS_ID,
  },

  // Email configuration
  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.FROM_EMAIL,
  },

  // External APIs
  apis: {
    googleMaps: process.env.GOOGLE_MAPS_API_KEY,
    uberEats: process.env.UBEREATS_API_KEY,
    deliveroo: process.env.DELIVEROO_API_KEY,
  },

  // Brand-specific overrides
  brandOverrides: {
    tobiko: {
      phone: process.env.TOBIKO_PHONE_OVERRIDE,
    },
    sakura: {
      phone: process.env.SAKURA_PHONE_OVERRIDE,
    },
  },
} as const

// Get environment-specific brand configuration
export function getEnvBrandConfig(brandKey: string) {
  const overrides = envConfig.brandOverrides[brandKey as keyof typeof envConfig.brandOverrides]
  return overrides || {}
}