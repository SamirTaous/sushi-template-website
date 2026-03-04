// Sakura Brand Configuration - Example second brand
export const sakuraConfig = {
  // Brand Identity
  name: "SAKURA",
  tagline: "Authentic Japanese Experience",
  description: "Traditional Japanese cuisine with modern flair and exceptional service",
  
  // SEO & Metadata
  seo: {
    title: "Sakura Japanese Restaurant | Authentic Cuisine",
    description: "Experience traditional Japanese cuisine with modern flair at Sakura Restaurant",
    themeColor: "#1a1a2e",
  },

  // Brand Colors (CSS custom properties)
  colors: {
    primary: "#1a1a2e",      // dark blue
    secondary: "#16213e",    // darker blue
    accent: "#e94560",       // pink/red
    gold: "#f39c12",         // orange gold
    cream: "#eee2dc",        // light cream
  },

  // Typography
  fonts: {
    serif: "Cormorant Garamond",
    sans: "Inter",
  },

  // Logo & Assets
  assets: {
    logo: "/sakura-logo.png",
    favicon: "/sakura-icon.svg",
    heroBackground: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=1920&q=80",
  },

  // Contact Information
  contact: {
    email: "contact@sakura-restaurant.com",
    phone: {
      display: "(555) 123-4567",
      link: "5551234567"
    },
    hours: "11:30 AM - 10:00 PM • Closed Mondays",
  },

  // Business Locations
  locations: [
    {
      id: 1,
      name: "Sakura Downtown",
      address: "123 Main Street",
      city: "New York, NY 10001",
      phone: {
        display: "(555) 123-4567",
        link: "5551234567"
      },
      email: "downtown@sakura-restaurant.com",
      hours: "11:30 AM - 10:00 PM • Closed Mondays",
      specialty: "Dine-in · Takeout · Delivery",
      mapImage: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
    },
    {
      id: 2,
      name: "Sakura Uptown",
      address: "456 Park Avenue",
      city: "New York, NY 10016",
      phone: {
        display: "(555) 987-6543",
        link: "5559876543"
      },
      email: "uptown@sakura-restaurant.com",
      hours: "11:30 AM - 10:00 PM • Closed Mondays",
      specialty: "Dine-in · Takeout · Private Events",
      mapImage: "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=400&q=80",
    },
  ],

  // Delivery Information
  delivery: {
    title: "Order for Delivery",
    description: "Enjoy authentic Sakura flavors delivered fresh to your door. Available throughout Manhattan.",
    estimatedTime: "25–40 min",
    backgroundImage: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1920&q=80",
    platforms: [
      {
        name: "DoorDash",
        url: "#",
        primary: true,
      },
      {
        name: "Grubhub", 
        url: "#",
        primary: false,
      },
    ],
  },

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Reservations", href: "/#reservations" },
    { label: "Contact", href: "/contact" },
    { label: "Order Online", href: "/order" },
  ],

  // Social Media
  social: {
    instagram: {
      url: "https://www.instagram.com/sakura_restaurant",
      handle: "@sakura_restaurant",
      icon: "📷",
      enabled: true,
    },
    facebook: {
      url: "https://www.facebook.com/sakurarestaurant",
      handle: "Sakura Restaurant",
      icon: "📘",
      enabled: true,
    },
    tiktok: {
      url: "https://www.tiktok.com/@sakura_restaurant",
      handle: "@sakura_restaurant",
      icon: "🎵",
      enabled: false,
    },
    twitter: {
      url: "https://twitter.com/sakura_restaurant",
      handle: "@sakura_restaurant",
      icon: "🐦",
      enabled: true,
    },
    youtube: {
      url: "https://www.youtube.com/@sakurarestaurant",
      handle: "Sakura Restaurant",
      icon: "📺",
      enabled: false,
    },
    linkedin: {
      url: "https://www.linkedin.com/company/sakura-restaurant",
      handle: "Sakura Restaurant",
      icon: "💼",
      enabled: false,
    },
  },

  // Call-to-Action Buttons
  cta: {
    reservation: "Make Reservation",
    orderUber: "Order on DoorDash",
    orderDeliveroo: "Order on Grubhub",
    callNow: "Call Now",
    directions: "Get Directions",
    followUs: "Follow Us",
  },

  // Section Headers
  sections: {
    addresses: {
      title: "Our Locations",
      subtitle: "Visit us at one of our two Manhattan locations",
    },
  },
} as const;