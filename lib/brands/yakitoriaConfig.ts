// Yakitoria Sushi Brand Configuration
export const yakitoriaConfig = {
    // Brand Identity
    name: "Yakitoria Sushi",
    tagline: "Sushi & Soul",
    description: "Sushi Restaurant – Spécialités japonaises & coréennes – Tanger",
    
    // SEO & Metadata
    seo: {
        title: "Yakitoria Sushi | Sushi Japonais & Coréen Tanger",
        description: "Découvrez Yakitoria, restaurant sushi japonais et coréen à Tanger. Ouvert de 16h à 2h.",
        themeColor: "#B91C1C",
    },
    
    // Brand Colors 
    colors: {
        primary: "#0F0F0F",       // Dark Gray (Background)
        secondary: "#374151",     // Medium Gray (Borders)
        accent: "#B91C1C",        // Dark Red (Buttons)
        gold: "#F59E0B",          // Amber (Secondary text)
        cream: "#F9FAFB",         // Off-white (Text)
        button: "#B91C1C",        // Dark Red (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Yakitoria)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },
    
    // Logo & Assets
    assets: {
        logo: "/yakitoria-logo.jpg",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&q=80",
        website: "www.yakitoria.ma",
    },
    
    // Contact Information
    contact: {
        email: "contact@yakitoria.ma",
        phone: {
            display: "0000000000",
            link: "0000000000"
        },
        hours: "16h00 – 02h00 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Yakitoria Tanger",
            address: "Tanger, Maroc (livraison gratuite à partir de 130 DH – 6km)",
            city: "Tanger, Maroc",
            phone: {
                display: "0000000000",
                link: "0000000000"
            },
            email: "contact@yakitoria.ma",
            hours: "16h00 – 02h00",
            specialty: "Sushi Japonais · Coréen · Livraison",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Yakitoria à Domicile",
        description: "Livraison gratuite dès 130 DH dans un rayon de 6km à Tanger.",
        estimatedTime: "25–40 min",
        backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
        platforms: [
            {
                name: "Campsite", 
                url: "https://campsite.bio/yakitoria.sushi",
                primary: true,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Les Assortiments", href: "/#plateaux" },
        { label: "Menu", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/yakitoria.sushi",
            handle: "@yakitoria.sushi",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/yakitoria.sushi",
            handle: "Yakitoria Sushi",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@yakitoria.sushi",
            handle: "@yakitoria.sushi",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/yakitoria.sushi",
            handle: "@yakitoria.sushi",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@yakitoria.sushi",
            handle: "Yakitoria Sushi",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/yakitoria-sushi",
            handle: "Yakitoria Sushi",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Campsite",
        orderDeliveroo: "Campsite",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Au cœur de Tanger",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Yakitoria fusionne l'âme du Japon et l'esprit de la Corée dans une expérience culinaire nocturne unique. De 16h à 2h du matin, nous créons une atmosphère où tradition et modernité se rencontrent.",
        details: "Nos chefs maîtrisent les subtilités des deux cultures culinaires, créant des harmonies gustatives inédites. L'ambiance tamisée et l'ouverture tardive font de Yakitoria le lieu parfait pour vos soirées gastronomiques.",
        values: [
            {
                title: "Fusion",
                description: "Mariage parfait entre traditions japonaises et coréennes"
            },
            {
                title: "Ambiance", 
                description: "Atmosphère nocturne unique pour des moments d'exception"
            },
            {
                title: "Créativité",
                description: "Innovation constante dans le respect des deux cultures"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Nous célébrons la richesse culinaire de l'Asie de l'Est en unissant le raffinement japonais et la vivacité coréenne. Yakitoria est né de cette passion pour l'authenticité multiculturelle.",
        details: "Notre vision transcende les frontières culinaires traditionnelles. Nous créons un pont gustatif entre deux cultures sœurs, offrant une expérience qui honore l'héritage de chacune.",
        quote: "Quand l'élégance japonaise rencontre la passion coréenne, naît une symphonie de saveurs qui touche l'âme.",
        chef: "Chef Min-Jun Yakitoria",
        stats: [
            { number: "10h", label: "Service Quotidien" },
            { number: "150+", label: "Clients Nocturnes" },
            { number: "2", label: "Cultures Unies" }
        ]
    },
} as const;