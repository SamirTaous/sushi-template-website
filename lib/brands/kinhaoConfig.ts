// Sushi Kinhao Tanger Brand Configuration
export const kinhaoConfig = {
    // Brand Identity
    name: "Sushi Kinhao Tanger",
    tagline: "L'Art du Sushi, 24h/24",
    description: "Cuisine asiatique – Service Non Stop 7/7J – Livraison Gratuite à Tanger",
    
    // SEO & Metadata
    seo: {
        title: "Sushi Kinhao Tanger | Sushi Asiatique Tanger",
        description: "Commandez vos sushis frais avec livraison gratuite à Tanger. Service non-stop 7j/7.",
        themeColor: "#DC2626",
    },
    
    // Brand Colors 
    colors: {
        primary: "#1A1A1A",       // Dark Gray (Background)
        secondary: "#2D2D2D",     // Medium Gray (Borders)
        accent: "#DC2626",        // Red (Buttons)
        gold: "#D4AF37",          // Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#DC2626",        // Red (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Kinhao)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },
    
    // Logo & Assets
    assets: {
        logo: "/kinhao-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.kinhao.ma",
    },
    
    // Contact Information
    contact: {
        email: "tanger@kinhao.ma",
        phone: {
            display: "0660860104",
            link: "0660860104"
        },
        hours: "24h/24 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Kinhao Tanger",
            address: "Tanger, Maroc",
            city: "Tanger, Maroc",
            phone: {
                display: "0660860104",
                link: "0660860104"
            },
            email: "tanger@kinhao.ma",
            hours: "24h/24",
            specialty: "Sushi Asiatique · Livraison Gratuite",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Kinhao à Domicile",
        description: "Livraison gratuite à Tanger, service non-stop 7j/7.",
        estimatedTime: "20–30 min",
        backgroundImage: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1920&q=80",
        platforms: [
            {
                name: "WhatsApp", 
                url: "https://wa.link/7i9atx",
                primary: true,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Nos Formules", href: "/#plateaux" },
        { label: "Menu", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/sushikinhaotanger",
            handle: "@sushikinhaotanger",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/sushikinhaotanger",
            handle: "Sushi KinHao Tanger",
            icon: "📘",
            enabled: true,
        },
        tiktok: {
            url: "https://www.tiktok.com/@sushikinhaotanger",
            handle: "@sushikinhaotanger",
            icon: "🎵",
            enabled: true,
        },
        twitter: {
            url: "https://twitter.com/sushikinhaotanger",
            handle: "@sushikinhaotanger",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@sushikinhaotanger",
            handle: "Sushi Kinhao Tanger",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/sushi-kinhao-tanger",
            handle: "Sushi Kinhao Tanger",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "WhatsApp",
        orderDeliveroo: "WhatsApp",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "Livraison gratuite dans tout Tanger",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Chez Kinhao, nous redéfinissons l'expérience sushi avec un service non-stop 24h/24. Notre engagement : vous offrir la fraîcheur et l'authenticité japonaise à tout moment de la journée.",
        details: "Nos chefs travaillent en continu pour maintenir la qualité exceptionnelle de nos sushis, que ce soit à midi ou à minuit. Cette disponibilité constante reflète notre dévouement à votre satisfaction.",
        values: [
            {
                title: "Disponibilité",
                description: "Service continu 24h/24 pour satisfaire toutes vos envies"
            },
            {
                title: "Fraîcheur", 
                description: "Ingrédients renouvelés constamment pour une qualité optimale"
            },
            {
                title: "Rapidité",
                description: "Livraison express gratuite dans tout Tanger"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Nous pensons que l'excellence culinaire ne connaît pas d'horaires. Kinhao brise les codes traditionnels pour vous servir des sushis d'exception à toute heure.",
        details: "Notre philosophie repose sur l'accessibilité de la haute gastronomie japonaise. Nous démocratisons l'art du sushi en le rendant disponible 24h/24 sans compromis sur la qualité.",
        quote: "Le temps n'arrête jamais la perfection. Nos sushis gardent leur excellence, que ce soit à l'aube ou au crépuscule.",
        chef: "Chef Takeshi Kinhao",
        stats: [
            { number: "24/7", label: "Service Continu" },
            { number: "200+", label: "Commandes Quotidiennes" },
            { number: "0€", label: "Frais de Livraison" }
        ]
    },
} as const;