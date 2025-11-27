export interface Template {
    id: string;
    name: string;
    image: string;
    category: string;
    style: string;
    description: string;
    features: string[];
    price?: number;
}

export const categories = [
    'All',
    'Home Services',
    'Food & Beverage',
    'Professional Services',
    'Health & Wellness',
    'Creative',
] as const;

export const templates: Template[] = [
    // Plumber Templates (7)
    {
        id: 'tpl_hlyykjgoldGl',
        name: 'ProFlow Plumbing',
        image: '/templates/plumber/tpl_hlyykjgoldGl.png',
        category: 'Home Services',
        style: 'Warm & Friendly',
        description: 'Professional plumbing website with 24/7 service emphasis and trust badges.',
        features: ['Emergency Service Banner', 'Trust Badges', 'Service Areas', 'Contact Form'],
        price: 99,
    },
    {
        id: 'tpl_8hneF6-W19Bd',
        name: 'Modern Plumber',
        image: '/templates/plumber/tpl_8hneF6-W19Bd.png',
        category: 'Home Services',
        style: 'Modern Minimal',
        description: 'Clean, minimal design perfect for established plumbing businesses.',
        features: ['Minimalist Design', 'Service Cards', 'Testimonials', 'Quick Quote'],
        price: 99,
    },
    {
        id: 'tpl_qa2jrnAD21q2',
        name: 'Corporate Plumbing',
        image: '/templates/plumber/tpl_qa2jrnAD21q2.png',
        category: 'Home Services',
        style: 'Corporate Professional',
        description: 'Professional corporate design for commercial plumbing services.',
        features: ['Corporate Styling', 'Team Section', 'Project Portfolio', 'Certifications'],
        price: 99,
    },
    {
        id: 'tpl_igrLLEUzriqY',
        name: 'Elite Plumbing',
        image: '/templates/plumber/tpl_igrLLEUzriqY.png',
        category: 'Home Services',
        style: 'Elegant Luxurious',
        description: 'Premium design for high-end plumbing and bathroom renovation services.',
        features: ['Premium Design', 'Gallery Section', 'Luxury Feel', 'Appointment Booking'],
        price: 149,
    },
    {
        id: 'tpl_Hvty6uFPxfxT',
        name: 'Luxury Plumbing Co',
        image: '/templates/plumber/tpl_Hvty6uFPxfxT.png',
        category: 'Home Services',
        style: 'Elegant Luxurious',
        description: 'Sophisticated design for premium plumbing and remodeling services.',
        features: ['Elegant Layout', 'Before/After Gallery', 'Financing Options', 'Video Section'],
        price: 149,
    },

    // Coffee Shop Templates (4)
    {
        id: 'tpl_rSghUAYzeYfa',
        name: 'Roasted Roots',
        image: '/templates/coffee-shop/tpl_rSghUAYzeYfa.png',
        category: 'Food & Beverage',
        style: 'Warm & Friendly',
        description: 'Inviting coffee shop design with warm earth tones and cozy atmosphere.',
        features: ['Menu Display', 'Hours Widget', 'Location Map', 'Instagram Feed'],
        price: 99,
    },
    {
        id: 'tpl_R6T0_x01a-oL',
        name: 'Organic Brew',
        image: '/templates/coffee-shop/tpl_R6T0_x01a-oL.png',
        category: 'Food & Beverage',
        style: 'Organic Natural',
        description: 'Natural, earthy design perfect for organic and specialty coffee shops.',
        features: ['Sustainability Section', 'Bean Origins', 'Catering Info', 'Online Ordering'],
        price: 99,
    },
    {
        id: 'tpl_FvguievcEuec',
        name: 'Artisan Coffee',
        image: '/templates/coffee-shop/tpl_FvguievcEuec.png',
        category: 'Food & Beverage',
        style: 'Organic Natural',
        description: 'Artisan-focused design highlighting craft coffee and local sourcing.',
        features: ['Story Section', 'Team Photos', 'Events Calendar', 'Gift Cards'],
        price: 99,
    },

    // Tattoo Studios (5)
    {
        id: 'tpl_QJ8h2rZpMh83',
        name: 'Ink & Iron Studios',
        image: '/templates/tattoo-studios/tpl_QJ8h2rZpMh83.png',
        category: 'Creative',
        style: 'Retro Vintage',
        description: 'Dark, moody design perfect for tattoo and piercing studios.',
        features: ['Artist Profiles', 'Gallery Grid', 'Booking System', 'Aftercare Info'],
        price: 99,
    },
    {
        id: 'tpl_oLUOZHkGr82P',
        name: 'Classic Ink',
        image: '/templates/tattoo-studios/tpl_oLUOZHkGr82P.png',
        category: 'Creative',
        style: 'Retro Vintage',
        description: 'Vintage-inspired design with bold typography and dark aesthetics.',
        features: ['Flash Gallery', 'Custom Request Form', 'Style Guide', 'Reviews'],
        price: 99,
    },
    {
        id: 'tpl_d1SZVTThoW8j',
        name: 'Creative Ink',
        image: '/templates/tattoo-studios/tpl_d1SZVTThoW8j.png',
        category: 'Creative',
        style: 'Playful Creative',
        description: 'Playful, artistic design for creative tattoo artists.',
        features: ['Portfolio Showcase', 'Video Background', 'Social Links', 'FAQ Section'],
        price: 99,
    },
    {
        id: 'tpl_l5UBXF7yph8D',
        name: 'Modern Tattoo',
        image: '/templates/tattoo-studios/tpl_l5UBXF7yph8D.png',
        category: 'Creative',
        style: 'Retro Vintage',
        description: 'Modern take on classic tattoo shop aesthetics.',
        features: ['Slider Gallery', 'Artist Bios', 'Price Guide', 'Contact Form'],
        price: 99,
    },

    // Law Firm (1)
    {
        id: 'tpl_F6bd0mFaFGhV',
        name: 'Blackstone & Associates',
        image: '/templates/law-firm/tpl_F6bd0mFaFGhV.png',
        category: 'Professional Services',
        style: 'Corporate Professional',
        description: 'Premium law firm design with trust-building elements and practice areas.',
        features: ['Practice Areas', 'Attorney Profiles', 'Case Results', 'Free Consultation CTA'],
        price: 149,
    },

    // Dentist (1)
    {
        id: 'tpl_mYqF_PFr5x9s',
        name: 'Bright Smile Dental',
        image: '/templates/dentist/tpl_mYqF_PFr5x9s.png',
        category: 'Health & Wellness',
        style: 'Corporate Professional',
        description: 'Clean, professional dental practice website with patient-focused design.',
        features: ['Services Grid', 'Team Section', 'Patient Reviews', 'Online Booking'],
        price: 99,
    },

    // Gym (1)
    {
        id: 'tpl_8ZxPILlEPM6N',
        name: 'PowerFit Gym',
        image: '/templates/gym/tpl_8ZxPILlEPM6N.png',
        category: 'Health & Wellness',
        style: 'Warm & Friendly',
        description: 'Energetic gym website with membership options and class schedules.',
        features: ['Class Schedule', 'Membership Plans', 'Trainer Profiles', 'Virtual Tour'],
        price: 99,
    },

    // Real Estate (1)
    {
        id: 'tpl_FDL1fuK8FDBC',
        name: 'Prestige Properties',
        image: '/templates/real-estate/tpl_FDL1fuK8FDBC.png',
        category: 'Professional Services',
        style: 'Elegant Luxurious',
        description: 'Luxury real estate website for high-end property listings.',
        features: ['Property Search', 'Agent Profiles', 'Virtual Tours', 'Market Reports'],
        price: 149,
    },

    // Restaurant (1)
    {
        id: 'tpl_75rqVEKH0BZI',
        name: 'Modern Bistro',
        image: '/templates/restaurant/tpl_75rqVEKH0BZI.png',
        category: 'Food & Beverage',
        style: 'Modern Minimal',
        description: 'Elegant restaurant website with menu display and reservation system.',
        features: ['Menu Display', 'Reservations', 'Gallery', 'Private Events'],
        price: 99,
    },
];

export const getTemplatesByCategory = (category: string) => {
    if (category === 'All') return templates;
    return templates.filter(t => t.category === category);
};

export const getFeaturedTemplates = (count: number = 6) => {
    return templates.slice(0, count);
};
