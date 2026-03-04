// Tobiko Brand Configuration
export const tobikoConfig = {
  // Brand Identity
  name: "TOBIKO",
  tagline: "Cuisine Japonaise Fine",
  description: "Experience authentic Japanese sushi crafted with precision and passion",
  
  // SEO & Metadata
  seo: {
    title: "Tobiko Fine Sushi | Premium Japanese Cuisine",
    description: "Experience authentic Japanese sushi crafted with precision and passion at Tobiko Fine Sushi",
    themeColor: "#0a0a0a",
  },

  // Brand Colors (CSS custom properties)
  colors: {
    primary: "#0a0a0a",      // black
    secondary: "#1a1a1a",    // charcoal
    accent: "#C0392B",       // red-accent
    gold: "#D4A843",         // gold
    cream: "#F5F0E8",        // cream
  },

  // Typography
  fonts: {
    serif: "Cormorant Garamond",
    sans: "Inter",
  },

  // Logo & Assets
  assets: {
    logo: "/tobiko-sushi-logo.png",
    favicon: "/icon.svg",
    heroBackground: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&q=80",
  },

  // Contact Information
  contact: {
    email: "contact@tobiko.ma",
    phone: {
      display: "0520 900 902",
      link: "0520900902"
    },
    hours: "12h00 - 00h00 • Non-Stop 7/7",
  },

  // Business Locations
  locations: [
    {
      id: 1,
      name: "Tobiko Casablanca",
      address: "Casablanca",
      city: "Maroc",
      phone: {
        display: "0520 900 902",
        link: "0520900902"
      },
      email: "contact@tobiko.ma",
      hours: "12h00 - 00h00 • Non-Stop 7/7",
      specialty: "Sur Place · À Emporter · Livraison",
      mapImage: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
    },
    {
      id: 2,
      name: "Tobiko Bouskoura",
      address: "Bouskoura", 
      city: "Maroc",
      phone: {
        display: "0522 01 29 01",
        link: "0522012901"
      },
      email: "contact@tobiko.ma",
      hours: "12h00 - 00h00 • Non-Stop 7/7",
      specialty: "Sur Place · À Emporter · Livraison",
      mapImage: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
    },
  ],

  // Delivery Information
  delivery: {
    title: "Commande à Domicile",
    description: "Apportez l'expérience Tobiko directement chez vous. Livraison disponible dans Paris intra-muros et banlieue.",
    estimatedTime: "30–45 min",
    backgroundImage: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=1920&q=80",
    platforms: [
      {
        name: "UberEats",
        url: "#",
        primary: true,
      },
      {
        name: "Deliveroo", 
        url: "#",
        primary: false,
      },
    ],
  },

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Plateaux", href: "/#plateaux" },
    { label: "Menu", href: "/menu" },
    { label: "Expérience", href: "/#experience" },
    { label: "Contact", href: "/contact" },
    { label: "Réserver", href: "/#reservation" },
  ],

  // Social Media
  social: {
    instagram: {
      url: "https://www.instagram.com/tobiko_maroc",
      handle: "@tobiko_maroc",
      icon: "📷",
      enabled: true,
    },
    facebook: {
      url: "https://www.facebook.com/tobikomaroc",
      handle: "Tobiko Maroc",
      icon: "📘",
      enabled: true,
    },
    tiktok: {
      url: "https://www.tiktok.com/@tobiko_maroc",
      handle: "@tobiko_maroc",
      icon: "🎵",
      enabled: true,
    },
    twitter: {
      url: "https://twitter.com/tobiko_maroc",
      handle: "@tobiko_maroc",
      icon: "🐦",
      enabled: false,
    },
    youtube: {
      url: "https://www.youtube.com/@tobikomaroc",
      handle: "Tobiko Maroc",
      icon: "📺",
      enabled: false,
    },
    linkedin: {
      url: "https://www.linkedin.com/company/tobiko-maroc",
      handle: "Tobiko Maroc",
      icon: "💼",
      enabled: false,
    },
  },

  // Call-to-Action Buttons
  cta: {
    reservation: "Réserver une Table",
    orderUber: "Commander via UberEats",
    orderDeliveroo: "Commander via Deliveroo",
    callNow: "Appeler Maintenant",
    directions: "Directions",
    followUs: "Suivez-nous",
  },

  // Section Headers
  sections: {
    addresses: {
      title: "Nos Adresses",
      subtitle: "Visitez l'une de nos trois locations à Paris",
    },
  },
} as const;