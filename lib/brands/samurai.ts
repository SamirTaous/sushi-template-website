// Samurai Sushi Brand Configuration
export const samuraiConfig = {
    // Brand Identity
    name: "SAMURAI SUSHI",
    tagline: "L'Art du Sabre, la Maîtrise du Sushi",
    description: "Une fusion parfaite entre tradition ancestrale et créativité moderne au cœur de Tanger.",
    
    // SEO & Metadata
    seo: {
      title: "Samurai Sushi | L'Excellence Japonaise à Tanger",
      description: "Découvrez l'art du sushi chez Samurai Sushi. Ingrédients frais, maîtrise artisanale et saveurs authentiques.",
      themeColor: "#050505",
    },
  
    // Brand Colors
    colors: {
      primary: "#050505",       // Deep Black
      secondary: "#121212",     // Gunmetal Gray
      accent: "#E30613",        // Samurai Red (Bold & Energetic)
      gold: "#C5A059",          // Antique Bronze/Gold
      cream: "#FAFAFA",         // Off-White for readability
    },
  
    // Typography
    fonts: {
      serif: "Playfair Display", // Sharp, elegant headings
      sans: "Montserrat",        // Modern, clean body text
    },
  
    // Logo & Assets
    assets: {
      logo: "/samurai-sushi-logo.png",
      favicon: "/icon.svg",
      // Dramatic sushi photo with dark background and red accents
      heroBackground: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=1920&q=80",
    },
  
    // Contact Information
    contact: {
      email: "contact@samuraisushi.ma",
      phone: {
        display: "0539 301 302",
        link: "0539301302"
      },
      hours: "11h30 - 23h30 • 7j/7",
    },
  
    // Business Locations
    locations: [
      {
        id: 1,
        name: "Samurai Sushi Tanger",
        address: "Centre Ville",
        city: "Tanger, Maroc",
        phone: {
          display: "0539 301 302",
          link: "0539301302"
        },
        email: "tanger@samuraisushi.ma",
        hours: "11h30 - 23h30",
        specialty: "Sur Place · À Emporter · Livraison",
        mapImage: "https://images.unsplash.com/photo-1526333313259-906969567946?w=400&q=80",
      }
    ],
  
    // Delivery Information
    delivery: {
      title: "Le Samouraï chez vous",
      description: "Commandez vos plateaux préférés et faites-vous livrer en moins de 40 minutes partout à Tanger.",
      estimatedTime: "30–40 min",
      backgroundImage: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1920&q=80",
      platforms: [
        {
          name: "Glovo", 
          url: "#",
          primary: true,
        },
        {
          name: "Direct", 
          url: "tel:0539301302",
          primary: false,
        },
      ],
    },
  
    // Navigation
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "Nos Rolls", href: "/#plateaux" },
      { label: "Le Menu", href: "/menu" },
      { label: "L'Esprit", href: "/#experience" },
      { label: "Contact", href: "/contact" },
      { label: "Commander", href: "/#reservation" },
    ],
  
    // Social Media
    social: {
      instagram: {
        url: "https://www.instagram.com/samuraisushi_tanger",
        handle: "@samuraisushi_tanger",
        icon: "📷",
        enabled: true,
      },
      facebook: {
        url: "https://www.facebook.com/samuraisushitanger",
        handle: "Samurai Sushi",
        icon: "📘",
        enabled: true,
      },
      tiktok: {
        url: "https://www.tiktok.com/@samuraisushi",
        handle: "@samuraisushi",
        icon: "🎵",
        enabled: true,
      }
    },
  
    // Call-to-Action Buttons
    cta: {
      reservation: "Réserver une Table",
      orderUber: "Commander via Glovo",
      orderDeliveroo: "Appeler pour Livraison",
      callNow: "Appeler Maintenant",
      directions: "Nous Trouver",
      followUs: "Rejoignez le Clan",
    },
  
    // Section Headers
    sections: {
      addresses: {
        title: "Où nous trouver",
        subtitle: "Venez déguster l'excellence à Tanger",
      },
    },
  } as const;