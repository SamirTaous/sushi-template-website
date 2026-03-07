// Sushi Pro Tanger Brand Configuration
export const sushiproConfig = {
    // Brand Identity
    name: "SUSHI PRO",
    tagline: "Restaurant Asiatique Professionnel",
    description: "Sushi Pro – Commandez 0618607105 / 212 539 321 304 – Tanger – Nouvelle ouverture – Venez goûter la différence!",
    
    // SEO & Metadata
    seo: {
        title: "Sushi Pro Tanger | Restaurant Asiatique Nouvelle Ouverture",
        description: "Découvrez Sushi Pro, nouveau restaurant asiatique à Tanger. Commandez au 0618607105. Venez goûter la différence!",
        themeColor: "#DC2626",
    },
    
    // Brand Colors 
    colors: {
        primary: "#1A1A1A",       // Dark Gray (Background)
        secondary: "#2D2D2D",     // Medium Gray (Borders)
        accent: "#DC2626",        // Red (Buttons)
        gold: "#F59E0B",          // Amber Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#DC2626",        // Red (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Sushi Pro)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },
    
    // Logo & Assets
    assets: {
        logo: "/sushipro-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.sushipro.ma",
    },
    
    // Contact Information
    contact: {
        email: "contact@sushipro.ma",
        phone: {
            display: "0618607105",
            link: "0618607105"
        },
        hours: "Nouvelle ouverture",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Sushi Pro Tanger",
            address: "Tanger",
            city: "Tanger, Maroc",
            phone: {
                display: "0618607105 / 212 539 321 304",
                link: "0618607105"
            },
            email: "contact@sushipro.ma",
            hours: "Nouvelle ouverture",
            specialty: "Restaurant Asiatique · Sushi · Nouvelle Ouverture",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Sushi Pro à Domicile",
        description: "Commandez dès maintenant au 0618607105. Nouvelle ouverture à Tanger!",
        estimatedTime: "25–35 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Téléphone", 
                url: "tel:0618607105",
                primary: true,
            },
            {
                name: "Instagram", 
                url: "https://www.instagram.com/sushipro.tanger",
                primary: false,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Menu", href: "/#plateaux" },
        { label: "Galerie", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/sushipro.tanger",
            handle: "@sushipro.tanger",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/sushipro.tanger",
            handle: "Sushi Pro Tanger",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@sushipro.tanger",
            handle: "@sushipro.tanger",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/sushipro.tanger",
            handle: "@sushipro.tanger",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@sushipro.tanger",
            handle: "Sushi Pro Tanger",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/sushi-pro-tanger",
            handle: "Sushi Pro Tanger",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Téléphone",
        orderDeliveroo: "Instagram",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Nouvelle ouverture à Tanger",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Sushi Pro vous invite à découvrir une nouvelle dimension de la cuisine asiatique à Tanger. Notre nouvelle ouverture marque le début d'une aventure culinaire exceptionnelle où tradition et innovation se rencontrent.",
        details: "Avec notre approche professionnelle et notre passion pour l'excellence, nous créons des expériences gustatives mémorables. Chaque plat est préparé avec soin pour vous faire goûter la vraie différence.",
        values: [
            {
                title: "Professionnalisme",
                description: "Expertise culinaire et service de qualité supérieure"
            },
            {
                title: "Innovation", 
                description: "Nouvelle approche de la cuisine asiatique à Tanger"
            },
            {
                title: "Excellence",
                description: "Engagement constant vers la perfection culinaire"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Chez Sushi Pro, nous croyons que chaque repas doit être une expérience exceptionnelle. Notre philosophie repose sur l'excellence, l'innovation et le service professionnel.",
        details: "En tant que nouvelle ouverture à Tanger, nous apportons une vision fraîche de la cuisine asiatique. Notre mission est de créer des moments culinaires uniques qui marquent la différence.",
        quote: "Venez goûter la différence : où le professionnalisme rencontre la passion pour créer l'excellence culinaire.",
        chef: "Chef Sushi Pro",
        stats: [
            { number: "52", label: "Posts Instagram" },
            { number: "19.2K", label: "Followers" },
            { number: "NEW", label: "Ouverture" }
        ]
    },
} as const;