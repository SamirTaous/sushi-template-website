// Mister Sushi Fès Brand Configuration
export const mistersushiConfig = {
    // Brand Identity
    name: "MISTER SUSHI",
    tagline: "Japonaise & Vietnamienne",
    description: "Mister sushi fès – Restaurant Japonaise & Vietnamienne – Livraison disponible – 06 99 62 92 02 – Horaire: 12h/00h00 – 54 Av Sani Louis cot sadia, Résidence Ibn Battouta fès",
    
    // SEO & Metadata
    seo: {
        title: "Mister Sushi Fès | Restaurant Japonais & Vietnamien",
        description: "Découvrez Mister Sushi à Fès. Restaurant japonais et vietnamien, livraison disponible. Ouvert de 12h à minuit.",
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
    
    // Typography - Stylish fonts matching their elegant branding
    fonts: {
        serif: "Playfair Display",    // Elegant, stylish serif for titles like their branding
        sans: "Inter",                // Clean, modern sans-serif for body text
    },
    
    // Logo & Assets
    assets: {
        logo: "/mister-sushi-logo.png",
        favicon: "/icon.svg",
        heroBackground: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1920&q=80",
        website: "www.mistersushi.ma",
    },
    
    // Contact Information
    contact: {
        email: "contact@mistersushi.ma",
        phone: {
            display: "06 99 62 92 02",
            link: "0699629202"
        },
        hours: "12h00 - 00h00 • 7j/7",
    },
    
    // Business Locations
    locations: [
        {
            id: 1,
            name: "Mister Sushi Fès",
            address: "54 Av Sani Louis cot sadia, Résidence Ibn Battouta fès",
            city: "Fès, Maroc",
            phone: {
                display: "06 99 62 92 02",
                link: "0699629202"
            },
            email: "contact@mistersushi.ma",
            hours: "12h00 - 00h00",
            specialty: "Restaurant Japonais · Vietnamien · Livraison",
            mapImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
        }
    ],
    
    // Delivery Information
    delivery: {
        title: "Mister Sushi à Domicile",
        description: "Livraison disponible de nos spécialités japonaises et vietnamiennes. Ouvert de 12h à minuit.",
        estimatedTime: "25–40 min",
        backgroundImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&q=80",
        platforms: [
            {
                name: "Téléphone", 
                url: "tel:0699629202",
                primary: true,
            },
            {
                name: "Instagram", 
                url: "https://www.instagram.com/mister_sushi_fes",
                primary: false,
            },
        ],
    },
    
    // Navigation
    navigation: [
        { label: "Accueil", href: "/" },
        { label: "Menu", href: "/#plateaux" },
        { label: "Nos Créations", href: "/menu" },
        { label: "L'Univers", href: "/#experience" },
        { label: "Contact", href: "/contact" },
        { label: "Commander", href: "/#reservation" },
    ],
    
    // Social Media
    social: {
        instagram: {
            url: "https://www.instagram.com/mister_sushi_fes",
            handle: "@mister_sushi_fes",
            icon: "📷",
            enabled: true,
        },
        facebook: {
            url: "https://www.facebook.com/mistersushi.fes",
            handle: "Mister Sushi Fès",
            icon: "📘",
            enabled: false,
        },
        tiktok: {
            url: "https://www.tiktok.com/@mistersushi.fes",
            handle: "@mistersushi.fes",
            icon: "🎵",
            enabled: false,
        },
        twitter: {
            url: "https://twitter.com/mistersushi.fes",
            handle: "@mistersushi.fes",
            icon: "🐦",
            enabled: false,
        },
        youtube: {
            url: "https://www.youtube.com/@mistersushi.fes",
            handle: "Mister Sushi Fès",
            icon: "📺",
            enabled: false,
        },
        linkedin: {
            url: "https://www.linkedin.com/company/mister-sushi-fes",
            handle: "Mister Sushi Fès",
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
            subtitle: "Résidence Ibn Battouta, Fès",
        },
    },

    // Experience & Philosophy
    experience: {
        title: "L'Expérience",
        description: "Mister Sushi vous invite dans un voyage culinaire unique à travers les saveurs du Japon et du Vietnam. De 12h à minuit, nous créons des expériences gustatives raffinées qui célèbrent deux cultures asiatiques exceptionnelles.",
        details: "Notre restaurant fusionne l'élégance japonaise et la richesse vietnamienne dans chaque création. Nos chefs maîtrisent les techniques traditionnelles des deux cuisines pour vous offrir une expérience authentique et sophistiquée.",
        values: [
            {
                title: "Élégance",
                description: "Raffinement dans chaque présentation et création culinaire"
            },
            {
                title: "Fusion", 
                description: "Mariage harmonieux des traditions japonaises et vietnamiennes"
            },
            {
                title: "Excellence",
                description: "Qualité premium dans chaque assiette servie"
            }
        ],
        backgroundImage: "https://images.unsplash.com/photo-1617196034682-dbab064af60e?w=600&q=80"
    },

    philosophy: {
        title: "Notre Philosophie",
        description: "Chez Mister Sushi, nous célébrons la richesse culinaire de l'Asie en unissant deux traditions exceptionnelles. Notre philosophie repose sur l'élégance, l'authenticité et l'innovation créative.",
        details: "Nous croyons que la cuisine est un art qui transcende les frontières. En combinant les techniques japonaises et vietnamiennes, nous créons une expérience unique qui honore l'héritage de ces deux cultures remarquables.",
        quote: "L'art culinaire n'a pas de frontières : quand l'élégance japonaise rencontre la richesse vietnamienne, naît une symphonie de saveurs.",
        chef: "Chef Mister Sushi",
        stats: [
            { number: "299", label: "Posts Instagram" },
            { number: "36.4K", label: "Followers" },
            { number: "12h-00h", label: "Service Quotidien" }
        ]
    },
} as const;