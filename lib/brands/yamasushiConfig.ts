// Yama Sushi Brand Configuration
export const yamasushiConfig = {
    // Brand Identity
    name: "YAMA SUSHI",
    tagline: "Restaurant Asiatique Premium",
    description: "Yama sushi – Votre restaurant est ouvert de 16h à 23h30 – Livraison disponible (GLOVO UTB) – Localisation Fès",

    // SEO & Metadata
    seo: {
        title: "Yama Sushi Fès | Restaurant Asiatique Premium",
        description: "Découvrez Yama Sushi à Fès. Ouvert de 16h à 23h30, livraison disponible via Glovo. Restaurant asiatique premium.",
        themeColor: "#DC2626",
    },

    // Brand Colors 
    colors: {
        primary: "#0F0F0F",       // Dark Gray (Background)
        secondary: "#1F1F1F",     // Medium Gray (Borders)
        accent: "#DC2626",        // Red (Buttons)
        gold: "#D4AF37",          // Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#DC2626",        // Red (For buttons and hover effects)
    },

    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Yama)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },

    // Logo & Assets
    assets: {
        logo: "/yamasushi-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.yamasushi.ma",
    },

    // Contact Information
    contact: {
        email: "contact@yamasushi.ma",
        phone: {
            display: "05 35 65 01 65",
            link: "0535650165"
        },
        hours: "16h00 - 23h30 • 7j/7",
    },

    // Business Locations
    locations: [
        {
            id: 1,
            name: "Yama Sushi Fès",
            address: "Fès",
            city: "Fès, Maroc",
            phone: {
                display: "05 35 65 01 65",
                link: "0535650165"
            },
            email: "contact@yamasushi.ma",
            hours: "16h00 - 23h30",
            specialty: "Restaurant Asiatique · Livraison Glovo · Premium",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],

    // Delivery Information
    delivery: {
        title: "Yama à Domicile",
        description: "Livraison disponible via Glovo UTB. Commandez vos plats préférés de 16h à 23h30.",
        estimatedTime: "25–40 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Glovo",
                url: "#",
                primary: true,
            },
            {
                name: "Téléphone",
                url: "tel:0535650165",
                primary: false,
            },
        ],
    },

    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Menu", href: "/#plateaux" },
        { label: "Localisation", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],

    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/yamasushifes",
            handle: "@yamasushifes",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/yamasushifes",
            handle: "Yama Sushi Fès",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@yamasushifes",
            handle: "@yamasushifes",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/yamasushifes",
            handle: "@yamasushifes",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@yamasushifes",
            handle: "Yama Sushi Fès",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/yama-sushi-fes",
            handle: "Yama Sushi Fès",
            icon: "💼",
            enabled: false,
        },
    },

    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Glovo",
        orderDeliveroo: "Téléphone",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },

    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Au cœur de Fès",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Yama Sushi vous offre une expérience culinaire asiatique premium au cœur de Fès. De 16h à 23h30, nous créons des moments gastronomiques exceptionnels dans une ambiance raffinée et moderne.",
        details: "Notre restaurant combine l'art culinaire asiatique traditionnel avec une approche contemporaine. Chaque plat est préparé avec des ingrédients de première qualité pour vous garantir une expérience gustative mémorable.",
        values: [
            {
                title: "Premium",
                description: "Qualité supérieure dans chaque création culinaire"
            },
            {
                title: "Modernité",
                description: "Approche contemporaine de la cuisine asiatique"
            },
            {
                title: "Service",
                description: "Excellence dans l'accueil et la satisfaction client"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Chez Yama Sushi, nous croyons que la cuisine asiatique est un art qui mérite d'être célébré. Notre philosophie repose sur l'excellence, l'innovation et le respect des traditions culinaires.",
        details: "Nous nous engageons à offrir une expérience premium accessible, où chaque détail compte. De la sélection des ingrédients à la présentation finale, nous visons la perfection dans chaque assiette.",
        quote: "L'art culinaire asiatique rencontre l'excellence moderne : chaque repas devient une célébration des saveurs authentiques.",
        chef: "Chef Yama",
        stats: [
            { number: "136", label: "Posts Instagram" },
            { number: "5.3K", label: "Followers" },
            { number: "16h-23h30", label: "Service Quotidien" }
        ]
    },
} as const;