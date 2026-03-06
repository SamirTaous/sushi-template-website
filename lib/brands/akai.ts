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
    
    // Brand Colors 
    colors: {
        primary: "#2C2C2C",       // Dark Gray (Background)
        secondary: "#4A4A4A",     // Medium Gray (Borders)
        accent: "#6F7F6B",        // Sage Green (Buttons)
        gold: "#B8860B",          // Dark Goldenrod (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
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
        website: "www.akai.ma",
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

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Chez Akai, nous fusionnons l'art ancestral du sushi avec l'énergie explosive du wok. Chaque plat raconte une histoire de passion, d'innovation et de respect des traditions culinaires asiatiques.",
        details: "Nos chefs maîtres maîtrisent à la fois les techniques délicates du sushi et la puissance du wok flamboyant. Cette dualité crée une expérience culinaire unique où la finesse rencontre l'intensité.",
        values: [
            {
                title: "Fusion",
                description: "L'harmonie parfaite entre sushi traditionnel et wok moderne"
            },
            {
                title: "Intensité", 
                description: "Des saveurs puissantes qui éveillent tous vos sens"
            },
            {
                title: "Innovation",
                description: "Créativité constante dans le respect des traditions"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Nous croyons que la cuisine asiatique est un art vivant qui évolue tout en préservant son essence. Akai incarne cette philosophie à travers chaque flamme du wok et chaque grain de riz.",
        details: "Notre mission est de vous faire découvrir l'âme vibrante de l'Asie culinaire. De la délicatesse du sushi à l'énergie du wok, nous créons des moments d'exception qui marquent les esprits.",
        quote: "Le feu du wok et la précision du sushi : deux arts qui se complètent pour créer l'harmonie parfaite des saveurs asiatiques.",
        chef: "Chef Hiroshi Akai",
        stats: [
            { number: "15+", label: "Années d'Excellence" },
            { number: "300+", label: "Clients Quotidiens" },
            { number: "100%", label: "Ingrédients Frais" }
        ]
    },
} as const;