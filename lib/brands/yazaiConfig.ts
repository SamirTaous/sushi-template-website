// Yazai Sushi Brand Configuration
export const yazaiConfig = {
    // Brand Identity
    name: "YAZAI SUSHI",
    tagline: "High Quality Sushi Meets Authenticity & Style",
    description: "Asian Restaurant – High Quality Sushi Meets Authenticity & Style – Av Sebaa – À côté de la gare",
    
    // SEO & Metadata
    seo: {
        title: "Yazai Sushi | High Quality Sushi Authenticity & Style",
        description: "Découvrez Yazai Sushi, restaurant asiatique de haute qualité. Authenticité et style près de la gare.",
        themeColor: "#DC2626",
    },
    
    // Brand Colors 
    colors: {
        primary: "#0F0F0F",       // Dark Gray (Background)
        secondary: "#1F1F1F",     // Medium Gray (Borders)
        accent: "#DC2626",        // Red (Buttons)
        gold: "#F59E0B",          // Amber Gold (Secondary text)
        cream: "#FAFAFA",         // Off-white (Text)
        button: "#DC2626",        // Red (For buttons and hover effects)
    },
    
    // Typography
    fonts: {
        serif: "Inter",           // Keep it modern (Sans-serif headings for Yazai)
        sans: "Inter",            // Clean, geometric, and fast-reading
    },
    
    // Logo & Assets
    assets: {
        logo: "/yazai-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.yazaisushi.ma",
    },
    
    // Contact Information
    contact: {
        email: "contact@yazaisushi.ma",
        phone: {
            display: "06 64 71 11 16",
            link: "0664711116"
        },
        hours: "07h15-00h • 01h00h",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Yazai Sushi",
            address: "Av Sebaa – À côté de la gare",
            city: "Maroc",
            phone: {
                display: "06 64 71 11 16",
                link: "0664711116"
            },
            email: "contact@yazaisushi.ma",
            hours: "07h15-00h • 01h00h",
            specialty: "High Quality Sushi · Authenticity & Style · Asian Restaurant",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Yazai à Domicile",
        description: "Commandez nos sushis de haute qualité avec authenticité et style.",
        estimatedTime: "25–35 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Instagram", 
                url: "https://www.instagram.com/yazaisushi.ma",
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
            url: "https://www.instagram.com/yazaisushi.ma",
            handle: "@yazaisushi.ma",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/yazaisushi.ma",
            handle: "Yazai Sushi",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@yazaisushi.ma",
            handle: "@yazaisushi.ma",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/yazaisushi.ma",
            handle: "@yazaisushi.ma",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@yazaisushi.ma",
            handle: "Yazai Sushi",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/yazai-sushi",
            handle: "Yazai Sushi",
            icon: "💼",
            enabled: false,
        },
    },
    
    // Call-to-Action Buttons
    cta: {
        reservation: "Commander Maintenant",
        orderUber: "Instagram",
        orderDeliveroo: "Instagram",
        callNow: "Appeler",
        directions: "Localiser",
        followUs: "Suivez-nous",
    },
    
    // Section Headers
    sections: {
        addresses: {
            title: "Passer nous voir",
            subtitle: "À côté de la gare",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Chez Yazai Sushi, nous combinons haute qualité, authenticité et style dans chaque création. Notre approche unique mélange tradition japonaise et innovation moderne pour une expérience culinaire exceptionnelle.",
        details: "Situés stratégiquement à côté de la gare, nous offrons une expérience sushi premium accessible. Nos chefs maîtrisent l'art ancestral du sushi tout en apportant une touche contemporaine qui définit notre style unique.",
        values: [
            {
                title: "Qualité",
                description: "Ingrédients premium sélectionnés pour leur fraîcheur exceptionnelle"
            },
            {
                title: "Authenticité", 
                description: "Respect des techniques traditionnelles japonaises"
            },
            {
                title: "Style",
                description: "Présentation moderne et élégante de chaque création"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Nous croyons que le sushi est un art qui unit tradition et modernité. Yazai Sushi incarne cette philosophie en créant des expériences gustatives qui respectent l'héritage japonais tout en embrassant l'innovation.",
        details: "Notre mission est de démocratiser l'excellence culinaire japonaise. Nous rendons accessible la haute gastronomie sushi dans un cadre moderne et accueillant, près de la gare pour votre commodité.",
        quote: "L'authenticité rencontre le style moderne : chaque sushi raconte une histoire de tradition et d'innovation.",
        chef: "Chef Yazai",
        stats: [
            { number: "89", label: "Posts Instagram" },
            { number: "20K", label: "Followers" },
            { number: "100%", label: "Authenticité" }
        ]
    },
} as const;