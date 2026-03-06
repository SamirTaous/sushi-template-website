// SOJU SUSHI Brand Configuration
export const sojuConfig = {
    // Brand Identity
    name: "SOJU SUSHI",
    tagline: "The best sushi in town!",
    description: "Sushi, Thaï & Wok – A flavor-packed journey in Tangier",

    // SEO & Metadata
    seo: {
        title: "Soju Sushi | Sushi Thaï & Wok Tanger",
        description: "Le meilleur sushi de Tanger. Boxes, menus et livraison. Commandez sur sojusushi.ma",
        themeColor: "#991B1B",
    },

    // Brand Colors 
    colors: {
        primary: "#1F1F1F",       // Dark Gray (Background)
        secondary: "#3F3F3F",     // Medium Gray (Borders)
        accent: "#991B1B",        // Deep Red (Buttons)
        gold: "#EAB308",          // Warm Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#991B1B",        // Deep Red (For buttons and hover effects)
    },

    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Soju)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },

    // Logo & Assets
    assets: {
        logo: "/soju-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1920&q=80",
        website: "www.sojusushi.ma",
    },

    // Contact Information
    contact: {
        email: "tanger@sojusushi.ma",
        phone: {
            display: "05 31 19 87 87",
            link: "0531198787"
        },
        hours: "Ouvert tous les jours",
    },

    // Business Locations
    locations: [
        {
            id: 1,
            name: "Soju Sushi Tanger",
            address: "36 Rue Allal Ben Abedellah, À côté Hôtel Chillah, Tanger 90000",
            city: "Tanger, Maroc",
            phone: {
                display: "05 31 19 87 87 / 06 39 99 62 22",
                link: "0531198787"
            },
            email: "tanger@sojusushi.ma",
            hours: "Ouvert tous les jours",
            specialty: "Sushi Bar · Thaï & Wok · Delivery",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],

    // Delivery Information
    delivery: {
        title: "Soju à Domicile",
        description: "Commandez vos boxes et menus en ligne sur sojusushi.ma",
        estimatedTime: "25–35 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Website",
                url: "https://www.sojusushi.ma",
                primary: true,
            },
            {
                name: "Apple App",
                url: "https://apps.apple.com/fr/app/soju/id6553981041",
                primary: false,
            },
        ],
    },

    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Nos Box", href: "/#plateaux" },
        { label: "Menu Soju", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],

    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/soju.sushi",
            handle: "@soju.sushi",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/soju.sushi",
            handle: "SOJU SUSHI",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@soju.sushi",
            handle: "@soju.sushi",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/soju.sushi",
            handle: "@soju.sushi",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@soju.sushi",
            handle: "SOJU SUSHI",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/soju-sushi",
            handle: "SOJU SUSHI",
            icon: "💼",
            enabled: false,
        },
    },

    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Website",
        orderDeliveroo: "Apple App",
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
        description: "Soju Sushi vous emmène dans un voyage gustatif à travers l'Asie. Sushi, Thaï et Wok se rencontrent pour créer une expérience culinaire riche et diversifiée au cœur de Tanger.",
        details: "Notre équipe multiculturelle maîtrise les techniques culinaires de trois traditions asiatiques majeures. Cette expertise nous permet de vous offrir une palette de saveurs authentiques et variées.",
        values: [
            {
                title: "Diversité",
                description: "Trois traditions culinaires asiatiques sous un même toit"
            },
            {
                title: "Authenticité",
                description: "Respect des techniques traditionnelles de chaque cuisine"
            },
            {
                title: "Excellence",
                description: "Le meilleur de chaque culture pour une expérience unique"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Nous croyons que la diversité culinaire enrichit l'expérience gastronomique. Soju Sushi rassemble le meilleur de l'Asie pour créer des moments de partage authentiques.",
        details: "Notre philosophie repose sur l'ouverture culturelle et l'excellence culinaire. Nous célébrons la richesse des traditions asiatiques en les rendant accessibles à tous les palais.",
        quote: "Trois cultures, une passion : offrir le meilleur de l'Asie dans chaque bouchée, chaque saveur, chaque moment partagé.",
        chef: "Chef Kenji Soju",
        stats: [
            { number: "3", label: "Cuisines Maîtrisées" },
            { number: "400+", label: "Clients Satisfaits" },
            { number: "1", label: "Passion Commune" }
        ]
    },
} as const;