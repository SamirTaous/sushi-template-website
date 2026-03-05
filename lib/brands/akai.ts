// Akai Sushi & Wok Brand Configuration
export const akaiConfig = {
    // Brand Identity
    name: "AKAI SUSHI & WOK",
    tagline: "L'Essence du Japon, l'Énergie du Wok",
    description: "Une expérience culinaire vibrante alliant la fraîcheur des sushis et la puissance du wok au cœur de Tanger.",
    
    // SEO & Metadata
    seo: {
        title: "Akai Sushi & Wok | Sushi & Fusion Food Tanger",
        description: "Goûtez au meilleur du Japon et de l'Asie chez Akai Sushi & Wok. Livraison rapide et produits frais à Tanger.",
        themeColor: "#E30613",
    },
    
    // Brand Colors - Neutral palette with sage green accents
    colors: {
        primary: "#2C2C2C",       // Dark Gray (Main text and headers)
        secondary: "#4A4A4A",     // Medium Gray (Secondary text)
        accent: "#6F7F6B",        // Sage Green (Primary accent color)
        gold: "#B8860B",          // Dark Goldenrod (Subtle gold accents)
        cream: "#FAFAFA",         // Off-white (Background color)
        button: "#6F7F6B",        // Sage Green (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Akai)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },
    
    // Logo & Assets
    assets: {
        logo: "/akai-logo.png",
        favicon: "/icon.svg",
        // Action-packed photo: Flame from a wok or a bright red sushi roll
        heroBackground: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=1920&q=80",
    },
    
    // Contact Information
    contact: {
        email: "contact@akai.ma",
        phone: {
            display: "0539 302 303",
            link: "0539302303"
        },
        hours: "12h00 - 00h00 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Akai Tanger",
            address: "Angle Rue Ibn Katir et Rue Al Farabi",
            city: "Tanger, Maroc",
            phone: {
                display: "0539 302 303",
                link: "0539302303"
            },
            email: "tanger@akai.ma",
            hours: "12h00 - 00h00",
            specialty: "Sushi Bar · Wok Thai · Delivery",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Akai à Domicile",
        description: "La puissance du Wok et la finesse du Sushi livrés chez vous en un éclair.",
        estimatedTime: "25–35 min",
        backgroundImage: "https://images.unsplash.com/photo-1534422298391-e4f8c170db06?w=1920&q=80",
        platforms: [
            {
                name: "Glovo", 
                url: "https://glovoapp.com/ma/fr/tanger/akai-sushi-tng/",
                primary: true,
            },
            {
                name: "WhatsApp", 
                url: "https://wa.me/212539302303",
                primary: false,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Nos Box", href: "/#plateaux" },
        { label: "Wok Menu", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/akaisushiwok",
            handle: "@akaisushiwok",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/akaisushiwok",
            handle: "Akai Sushi & Wok",
            icon: "📘",
            enabled: true,
        },
        tiktok: {
            url: "https://www.tiktok.com/@akaisushiwok",
            handle: "@akaisushiwok",
            icon: "🎵",
            enabled: true,
        },
        twitter: {
            url: "https://twitter.com/akaisushiwok",
            handle: "@akaisushiwok",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@akaisushiwok",
            handle: "Akai Sushi & Wok",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/akai-sushi-wok",
            handle: "Akai Sushi & Wok",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Glovo",
        orderDeliveroo: "WhatsApp",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez l'Action",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Au cœur de l'agitation de Tanger",
        },
    },
} as const;