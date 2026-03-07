// Golden Pizza & Sushi Brand Configuration
export const goldenConfig = {
    // Brand Identity
    name: "GOLDEN PIZZA & SUSHI",
    tagline: "Cuisine Fusion Italienne & Japonaise",
    description: "Golden Pizza & Sushi Fès – Cuisine Fusion Italienne & Japonaise – Ouvert 7j/7 de Midi à Minuit – Livraison Gratuite – +212 605 17 7553 / 212 532 06 75 04 – Ici Al Mamounia Av My Rchid Rés Mouslim magasin Num 15, Fez, Morocco 30000",
    
    // SEO & Metadata
    seo: {
        title: "Golden Pizza & Sushi Fès | Cuisine Fusion Italienne & Japonaise",
        description: "Découvrez Golden Pizza & Sushi à Fès. Fusion unique italienne et japonaise, livraison gratuite, ouvert 7j/7 de midi à minuit.",
        themeColor: "#D4AF37",
    },
    
    // Brand Colors - Golden theme
    colors: {
        primary: "#1A1A1A",       // Dark Gray (Background)
        secondary: "#2D2D2D",     // Medium Gray (Borders)
        accent: "#D4AF37",        // Gold (Buttons)
        gold: "#F4D03F",          // Bright Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#D4AF37",        // Gold (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Playfair Display",    // Elegant serif for sophisticated fusion branding
        sans: "Inter",                // Clean, modern sans-serif for body text
    },
    
    // Logo & Assets
    assets: {
        logo: "/golden-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.goldenpizzasushi.ma",
    },
    
    // Contact Information
    contact: {
        email: "contact@goldenpizzasushi.ma",
        phone: {
            display: "+212 605 17 7553",
            link: "212605177553"
        },
        hours: "12h00 - 00h00 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Golden Pizza & Sushi Fès",
            address: "Ici Al Mamounia Av My Rchid Rés Mouslim magasin Num 15, Fez, Morocco 30000",
            city: "Fès, Maroc",
            phone: {
                display: "+212 605 17 7553 / 212 532 06 75 04",
                link: "212605177553"
            },
            email: "contact@goldenpizzasushi.ma",
            hours: "12h00 - 00h00",
            specialty: "Cuisine Fusion · Pizza Italienne · Sushi Japonais · Livraison Gratuite",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Golden à Domicile",
        description: "Livraison gratuite de nos spécialités fusion italiennes et japonaises. Ouvert 7j/7 de midi à minuit.",
        estimatedTime: "25–40 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Livraison Gratuite", 
                url: "tel:212605177553",
                primary: true,
            },
            {
                name: "Instagram", 
                url: "https://www.instagram.com/golden_pizza_sushi",
                primary: false,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Plateaux", href: "/#plateaux" },
        { label: "Menu", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/golden_pizza_sushi",
            handle: "@golden_pizza_sushi",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/goldenpizzasushi.fes",
            handle: "Golden Pizza & Sushi Fès",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@goldenpizzasushi",
            handle: "@goldenpizzasushi",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/goldenpizzasushi",
            handle: "@goldenpizzasushi",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@goldenpizzasushi",
            handle: "Golden Pizza & Sushi",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/golden-pizza-sushi",
            handle: "Golden Pizza & Sushi",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Livraison Gratuite",
        orderDeliveroo: "Instagram",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Al Mamounia, Fès",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Golden Pizza & Sushi révolutionne la gastronomie à Fès en fusionnant l'art culinaire italien et japonais. De midi à minuit, 7j/7, nous créons une expérience unique où la tradition de la pizza rencontre l'élégance du sushi.",
        details: "Notre concept innovant unit deux cultures culinaires emblématiques dans un même lieu. Nos chefs maîtrisent à la fois l'art de la pizza italienne authentique et les techniques raffinées du sushi japonais, créant une harmonie gustative exceptionnelle.",
        values: [
            {
                title: "Fusion",
                description: "Mariage unique entre traditions italiennes et japonaises"
            },
            {
                title: "Innovation", 
                description: "Concept révolutionnaire dans la restauration marocaine"
            },
            {
                title: "Qualité",
                description: "Excellence dans chaque pizza et chaque sushi servi"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Chez Golden Pizza & Sushi, nous croyons que la gastronomie n'a pas de frontières. Notre philosophie unit l'âme chaleureuse de l'Italie et l'élégance raffinée du Japon dans une expérience culinaire dorée.",
        details: "Nous célébrons la diversité culinaire en créant un pont entre deux mondes gastronomiques. Cette fusion audacieuse reflète notre vision moderne de la restauration, où tradition et innovation se rencontrent pour créer quelque chose d'unique.",
        quote: "Quand la passion italienne rencontre la précision japonaise, naît une expérience culinaire dorée qui transcende les frontières.",
        chef: "Chef Golden",
        stats: [
            { number: "30", label: "Posts Instagram" },
            { number: "19.5K", label: "Followers" },
            { number: "2", label: "Cuisines Maîtrisées" }
        ]
    },
} as const;