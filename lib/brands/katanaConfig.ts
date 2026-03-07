// Katana Sushi Brand Configuration
export const katanaConfig = {
    // Brand Identity
    name: "KATANA SUSHI",
    tagline: "L'Art du Sabre Culinaire",
    description: "KatanaSushi – By N&C – 05 35 96 42 60 – De 9h00 à 23h00 – N°1 Rue A, Hay Chmaâ, Ain Anayss, Route d'Imouzzer, Fès, Marrakech 30 000",
    
    // SEO & Metadata
    seo: {
        title: "Katana Sushi Fès | Restaurant Asiatique Premium",
        description: "Découvrez Katana Sushi à Fès. Ouvert de 9h à 23h, livraison gratuite. L'art du sabre culinaire japonais.",
        themeColor: "#2563EB",
    },
    
    // Brand Colors - Light theme with blue highlights
    colors: {
        primary: "#F8FAFC",       // Light Gray (Background)
        secondary: "#E2E8F0",     // Light Blue Gray (Borders)
        accent: "#2563EB",        // Blue (Buttons)
        gold: "#1E40AF",          // Dark Blue (Secondary text)
        cream: "#1E293B",         // Dark Slate (Text)
        button: "#2563EB",        // Blue (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Playfair Display",    // Elegant serif for Japanese-inspired headings
        sans: "Inter",                // Clean, geometric, and fast-reading for body text
    },
    
    // Logo & Assets
    assets: {
        logo: "/katana-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.katanasushi.me",
    },
    
    // Contact Information
    contact: {
        email: "contact@katanasushi.me",
        phone: {
            display: "05 35 96 42 60",
            link: "0535964260"
        },
        hours: "09h00 - 23h00 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Katana Sushi Fès",
            address: "N°1 Rue A, Hay Chmaâ, Ain Anayss, Route d'Imouzzer, Fès, Marrakech 30 000",
            city: "Fès, Maroc",
            phone: {
                display: "05 35 96 42 60",
                link: "0535964260"
            },
            email: "contact@katanasushi.me",
            hours: "09h00 - 23h00",
            specialty: "Restaurant Asiatique · Livraison Gratuite · Premium",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Katana à Domicile",
        description: "Livraison gratuite disponible. L'art du sabre culinaire livré chez vous de 9h à 23h.",
        estimatedTime: "25–40 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Livraison Gratuite", 
                url: "tel:0535964260",
                primary: true,
            },
            {
                name: "Instagram", 
                url: "https://www.instagram.com/katanasushi_restaurant.fes",
                primary: false,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Nos Plats", href: "/#plateaux" },
        { label: "Menu", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/katanasushi_restaurant.fes",
            handle: "@katanasushi_restaurant.fes",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/katanasushi.fes",
            handle: "Katana Sushi Fès",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@katanasushi.fes",
            handle: "@katanasushi.fes",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/katanasushi.fes",
            handle: "@katanasushi.fes",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@katanasushi.fes",
            handle: "Katana Sushi Fès",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/katana-sushi-fes",
            handle: "Katana Sushi Fès",
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
            subtitle: "Route d'Imouzzer, Fès",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Katana Sushi incarne l'art du sabre culinaire japonais à Fès. De 9h à 23h, nous vous proposons une expérience gastronomique unique où la précision du katana rencontre la finesse de la cuisine asiatique.",
        details: "Notre restaurant combine tradition japonaise et innovation moderne. Chaque création culinaire est façonnée avec la précision d'un maître sabreur, garantissant une expérience gustative exceptionnelle à chaque visite.",
        values: [
            {
                title: "Précision",
                description: "L'art du katana appliqué à la cuisine pour une perfection absolue"
            },
            {
                title: "Tradition", 
                description: "Respect des techniques ancestrales japonaises"
            },
            {
                title: "Excellence",
                description: "Qualité premium dans chaque création culinaire"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Comme le katana forge l'acier avec patience et maîtrise, nous façonnons chaque plat avec dévouement et expertise. Notre philosophie unit l'esprit du samouraï à l'art culinaire japonais.",
        details: "Katana Sushi représente l'harmonie parfaite entre tradition et modernité. Nous honorons l'héritage culinaire japonais tout en apportant notre propre vision créative pour une expérience unique à Fès.",
        quote: "Tel le katana qui tranche avec précision, notre cuisine révèle l'essence pure des saveurs japonaises authentiques.",
        chef: "Chef Katana",
        stats: [
            { number: "43", label: "Posts Instagram" },
            { number: "4.2K", label: "Followers" },
            { number: "9h-23h", label: "Service Quotidien" }
        ]
    },
} as const;