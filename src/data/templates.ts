export interface Template {
    id: string;
    name: string;
    image: string;
    category: string;
    niche: string;
    style: string;
    description: string;
    features: string[];
    price?: number;
    featured?: boolean;
}

export const categories = [
    'All',
    'Showcase',
    'Home Services',
    'Food & Beverage',
    'Professional Services',
    'Health & Wellness',
    'Creative',
    'E-commerce',
] as const;

// Curated templates - ONE per niche, best picks only
export const templates: Template[] = [
    // ============ SHOWCASE TIERS (Homepage Hero) ============

    // STANDARD TIER - Professional SMB websites
    {
        id: 'standard',
        name: 'Standard Business',
        image: '/templates/showcase/standard.svg',
        category: 'Showcase',
        niche: 'showcase',
        style: 'Modern Professional',
        description: 'Clean, professional website perfect for service businesses. Fast-loading with essential features.',
        features: ['Hero Section', 'Service Cards', 'Trust Badges', 'Contact Form', 'Testimonials'],
        price: 99,
        featured: true,
    },

    // CREATIVE TIER - Rich animations for creatives
    {
        id: 'creative',
        name: 'Creative Portfolio',
        image: '/templates/showcase/creative.svg',
        category: 'Showcase',
        niche: 'showcase',
        style: 'Creative & Animated',
        description: 'Stunning scroll animations and interactive components for photographers, artists, and studios.',
        features: ['Scroll Animations', 'Interactive Gallery', 'Parallax Effects', 'Mobile Optimized', 'Premium Visual Effects'],
        price: 149,
        featured: true,
    },

    // PRO TIER - Cutting-edge SaaS/AI websites
    {
        id: 'pro',
        name: 'Pro SaaS',
        image: '/templates/showcase/pro.svg',
        category: 'Showcase',
        niche: 'showcase',
        style: 'Cutting-Edge Tech',
        description: 'Next-level website with glassmorphism, aurora effects, and 3D interactions for SaaS & AI companies.',
        features: ['3D Animations', 'Aurora Effects', 'Glassmorphism', 'Particle Systems', 'Dark Mode', 'Bento Grid'],
        price: 249,
        featured: true,
    },

    // ============ FEATURED (Homepage) ============
    
    // 1. ProFlow Plumbing - Classic contractor, mainstream appeal
    {
        id: 'tpl_hlyykjgoldGl',
        name: 'ProFlow Plumbing',
        image: '/templates/plumber/tpl_hlyykjgoldGl.png',
        category: 'Home Services',
        niche: 'plumber',
        style: 'Warm & Friendly',
        description: 'Professional plumbing website with 24/7 service emphasis and trust badges.',
        features: ['Emergency Service Banner', 'Trust Badges', 'Service Areas', 'Contact Form'],
        price: 99,
        featured: false,
    },
    
    // 2. Blackstone & Associates - Premium professional services
    {
        id: 'tpl_F6bd0mFaFGhV',
        name: 'Blackstone & Associates',
        image: '/templates/law-firm/tpl_F6bd0mFaFGhV.png',
        category: 'Professional Services',
        niche: 'law-firm',
        style: 'Corporate Professional',
        description: 'Premium law firm design with trust-building elements and practice areas.',
        features: ['Practice Areas', 'Attorney Profiles', 'Case Results', 'Free Consultation CTA'],
        price: 149,
        featured: false,
    },
    
    // 3. Saveur Restaurant - Elegant food & beverage
    {
        id: 'tpl_75rqVEKH0BZI',
        name: 'Saveur Restaurant',
        image: '/templates/restaurant/tpl_75rqVEKH0BZI.png',
        category: 'Food & Beverage',
        niche: 'restaurant',
        style: 'Elegant Luxurious',
        description: 'Elegant restaurant website with menu display and reservation system.',
        features: ['Menu Display', 'Reservations', 'Gallery', 'Private Events'],
        price: 99,
        featured: false,
    },

    // ============ HOME SERVICES ============
    
    {
        id: 'tpl_AlEp8qoctdxY',
        name: 'Spark Electric',
        image: '/templates/electrician/tpl_AlEp8qoctdxY.png',
        category: 'Home Services',
        niche: 'electrician',
        style: 'Modern Minimal',
        description: 'Clean electrician website with safety-focused messaging and service areas.',
        features: ['Service Cards', 'Safety Badges', 'Emergency Contact', 'Quote Form'],
        price: 99,
    },
    {
        id: 'tpl_ufAmZoPjenXR',
        name: 'CoolAir HVAC',
        image: '/templates/hvac/tpl_ufAmZoPjenXR.png',
        category: 'Home Services',
        niche: 'hvac',
        style: 'Corporate Professional',
        description: 'HVAC company website with seasonal promotions and maintenance plans.',
        features: ['Service Plans', 'Seasonal Offers', 'Financing Options', 'Online Booking'],
        price: 99,
    },
    {
        id: 'tpl_7sdpxW7mxjWJ',
        name: 'GreenScape Landscaping',
        image: '/templates/landscaper/tpl_7sdpxW7mxjWJ.png',
        category: 'Home Services',
        niche: 'landscaper',
        style: 'Organic Natural',
        description: 'Beautiful landscaping website with project gallery and seasonal services.',
        features: ['Project Gallery', 'Service Packages', 'Before/After Slider', 'Free Estimate'],
        price: 99,
    },
    {
        id: 'tpl_FR5t8AE2EJj5',
        name: 'Summit Roofing',
        image: '/templates/roofer/tpl_FR5t8AE2EJj5.png',
        category: 'Home Services',
        niche: 'roofer',
        style: 'Corporate Professional',
        description: 'Professional roofing website with warranty info and storm damage services.',
        features: ['Warranty Info', 'Storm Damage', 'Financing', 'Free Inspection CTA'],
        price: 99,
    },
    {
        id: 'tpl_l7jQrmWAZVNh',
        name: 'Crystal Clean',
        image: '/templates/cleaning-services/tpl_l7jQrmWAZVNh.png',
        category: 'Home Services',
        niche: 'cleaning-services',
        style: 'Modern Minimal',
        description: 'Fresh cleaning services website with booking and pricing packages.',
        features: ['Pricing Packages', 'Online Booking', 'Service Checklist', 'Testimonials'],
        price: 99,
    },
    {
        id: 'tpl_WYOHV8KQ5snp',
        name: 'Swift Movers',
        image: '/templates/moving-company/tpl_WYOHV8KQ5snp.png',
        category: 'Home Services',
        niche: 'moving-company',
        style: 'Warm & Friendly',
        description: 'Trustworthy moving company website with quote calculator and service areas.',
        features: ['Quote Calculator', 'Service Areas', 'Packing Tips', 'Customer Reviews'],
        price: 99,
    },

    // ============ FOOD & BEVERAGE ============
    
    {
        id: 'tpl_rSghUAYzeYfa',
        name: 'Roasted Roots',
        image: '/templates/coffee-shop/tpl_rSghUAYzeYfa.png',
        category: 'Food & Beverage',
        niche: 'coffee-shop',
        style: 'Warm & Friendly',
        description: 'Inviting coffee shop design with warm earth tones and cozy atmosphere.',
        features: ['Menu Display', 'Hours Widget', 'Location Map', 'Instagram Feed'],
        price: 99,
    },
    {
        id: 'tpl_mA4O3Su5C0in',
        name: 'Azure Resort',
        image: '/templates/hotel-resort/tpl_mA4O3Su5C0in.png',
        category: 'Food & Beverage',
        niche: 'hotel-resort',
        style: 'Elegant Luxurious',
        description: 'Luxury hotel website with room booking and amenities showcase.',
        features: ['Room Booking', 'Virtual Tour', 'Amenities', 'Special Offers'],
        price: 149,
    },

    // ============ PROFESSIONAL SERVICES ============
    
    {
        id: 'tpl_FDL1fuK8FDBC',
        name: 'Prestige Properties',
        image: '/templates/real-estate/tpl_FDL1fuK8FDBC.png',
        category: 'Professional Services',
        niche: 'real-estate',
        style: 'Elegant Luxurious',
        description: 'Luxury real estate website for high-end property listings.',
        features: ['Property Search', 'Agent Profiles', 'Virtual Tours', 'Market Reports'],
        price: 149,
    },
    {
        id: 'tpl_k3bagGn588n-',
        name: 'Apex Consulting',
        image: '/templates/consulting/tpl_k3bagGn588n-.png',
        category: 'Professional Services',
        niche: 'consulting',
        style: 'Corporate Professional',
        description: 'Professional consulting firm website with case studies and team profiles.',
        features: ['Case Studies', 'Team Profiles', 'Service Areas', 'Contact Form'],
        price: 149,
    },
    {
        id: 'tpl_ftlYs1HdcEaK',
        name: 'BuildRight Construction',
        image: '/templates/general-contractor/tpl_ftlYs1HdcEaK.png',
        category: 'Professional Services',
        niche: 'general-contractor',
        style: 'Corporate Professional',
        description: 'Construction company website with project portfolio and service areas.',
        features: ['Project Portfolio', 'Service Areas', 'Certifications', 'Quote Request'],
        price: 99,
    },
    {
        id: 'tpl_qK7ScLrwkpoW',
        name: 'AutoPro Mechanics',
        image: '/templates/auto-mechanic/tpl_qK7ScLrwkpoW.png',
        category: 'Professional Services',
        niche: 'auto-mechanic',
        style: 'Modern Minimal',
        description: 'Auto repair shop website with service menu and online appointments.',
        features: ['Service Menu', 'Online Booking', 'Reviews', 'Warranty Info'],
        price: 99,
    },
    {
        id: 'tpl_N458Vz2OWFh4',
        name: 'Guardian Security',
        image: '/templates/security-services/tpl_N458Vz2OWFh4.png',
        category: 'Professional Services',
        niche: 'security-services',
        style: 'Corporate Professional',
        description: 'Security company website with services overview and monitoring plans.',
        features: ['Service Plans', 'Monitoring Options', 'Coverage Areas', 'Free Assessment'],
        price: 99,
    },

    // ============ HEALTH & WELLNESS ============
    
    {
        id: 'tpl_mYqF_PFr5x9s',
        name: 'Bright Smile Dental',
        image: '/templates/dentist/tpl_mYqF_PFr5x9s.png',
        category: 'Health & Wellness',
        niche: 'dentist',
        style: 'Corporate Professional',
        description: 'Clean, professional dental practice website with patient-focused design.',
        features: ['Services Grid', 'Team Section', 'Patient Reviews', 'Online Booking'],
        price: 99,
    },
    {
        id: 'tpl_8ZxPILlEPM6N',
        name: 'PowerFit Gym',
        image: '/templates/gym/tpl_8ZxPILlEPM6N.png',
        category: 'Health & Wellness',
        niche: 'gym',
        style: 'Warm & Friendly',
        description: 'Energetic gym website with membership options and class schedules.',
        features: ['Class Schedule', 'Membership Plans', 'Trainer Profiles', 'Virtual Tour'],
        price: 99,
    },
    {
        id: 'tpl_J2XszBaiyjn8',
        name: 'Serenity Spa',
        image: '/templates/spa-salon/tpl_J2XszBaiyjn8.png',
        category: 'Health & Wellness',
        niche: 'spa-salon',
        style: 'Elegant Luxurious',
        description: 'Relaxing spa website with service menu and online booking.',
        features: ['Service Menu', 'Online Booking', 'Gift Cards', 'Membership'],
        price: 99,
    },

    // ============ CREATIVE ============
    
    {
        id: 'tpl_QJ8h2rZpMh83',
        name: 'Ink & Iron Studios',
        image: '/templates/tattoo-studios/tpl_QJ8h2rZpMh83.png',
        category: 'Creative',
        niche: 'tattoo-studios',
        style: 'Retro Vintage',
        description: 'Dark, moody design perfect for tattoo and piercing studios.',
        features: ['Artist Profiles', 'Gallery Grid', 'Booking System', 'Aftercare Info'],
        price: 99,
    },
    {
        id: 'tpl_-ZEotkkuw_JK',
        name: 'Captured Moments',
        image: '/templates/photography/tpl_-ZEotkkuw_JK.png',
        category: 'Creative',
        niche: 'photography',
        style: 'Modern Minimal',
        description: 'Stunning photography portfolio with gallery and booking.',
        features: ['Portfolio Gallery', 'Packages', 'Client Proofing', 'Contact Form'],
        price: 99,
    },
    {
        id: 'tpl_oyjnZHBMf-Yz',
        name: 'CineVision',
        image: '/templates/videography/tpl_oyjnZHBMf-Yz.png',
        category: 'Creative',
        niche: 'videography',
        style: 'Modern Minimal',
        description: 'Dynamic videography website with showreel and service packages.',
        features: ['Video Showreel', 'Service Packages', 'Equipment List', 'Booking'],
        price: 99,
    },
    {
        id: 'tpl_0MwdDlsVoEq2',
        name: 'Forever After',
        image: '/templates/wedding/tpl_0MwdDlsVoEq2.png',
        category: 'Creative',
        niche: 'wedding',
        style: 'Elegant Luxurious',
        description: 'Romantic wedding services website with packages and gallery.',
        features: ['Package Tiers', 'Gallery', 'Vendor List', 'Contact Form'],
        price: 99,
    },
    {
        id: 'tpl_SMaQKbautvw7',
        name: 'Digital Portfolio',
        image: '/templates/personal-portfolio/tpl_SMaQKbautvw7.png',
        category: 'Creative',
        niche: 'personal-portfolio',
        style: 'Modern Minimal',
        description: 'Clean personal portfolio for freelancers and creatives.',
        features: ['Project Showcase', 'Skills Section', 'Resume/CV', 'Contact Form'],
        price: 79,
    },
    {
        id: 'tpl_x2d7gcZ5wKLy',
        name: 'Studio Interiors',
        image: '/templates/interior-decor/tpl_x2d7gcZ5wKLy.png',
        category: 'Creative',
        niche: 'interior-decor',
        style: 'Elegant Luxurious',
        description: 'Interior design studio website with project gallery and services.',
        features: ['Project Gallery', 'Design Process', 'Testimonials', 'Consultation CTA'],
        price: 99,
    },

    // ============ E-COMMERCE ============
    
    {
        id: 'tpl_dSNyhiCeQtyj',
        name: 'Luxe Fashion',
        image: '/templates/fashion-ecommerce/tpl_dSNyhiCeQtyj.png',
        category: 'E-commerce',
        niche: 'fashion-ecommerce',
        style: 'Elegant Luxurious',
        description: 'Fashion e-commerce website with product showcase and lookbook.',
        features: ['Product Grid', 'Lookbook', 'Size Guide', 'Newsletter'],
        price: 149,
    },
    {
        id: 'tpl_NkGeCCCdGvMK',
        name: 'Product Launch',
        image: '/templates/single-product/tpl_NkGeCCCdGvMK.png',
        category: 'E-commerce',
        niche: 'single-product',
        style: 'Modern Minimal',
        description: 'Single product landing page with features and testimonials.',
        features: ['Product Features', 'Testimonials', 'FAQ', 'Buy Now CTA'],
        price: 79,
    },
    {
        id: 'tpl_VGkct5R1DI3-',
        name: 'Luxury Property',
        image: '/templates/single-property/tpl_VGkct5R1DI3-.png',
        category: 'E-commerce',
        niche: 'single-property',
        style: 'Elegant Luxurious',
        description: 'Single property listing page with virtual tour and details.',
        features: ['Virtual Tour', 'Property Details', 'Floor Plans', 'Contact Agent'],
        price: 99,
    },
];

// Get templates by category
export const getTemplatesByCategory = (category: string) => {
    if (category === 'All') return templates;
    return templates.filter(t => t.category === category);
};

// Get only featured templates for homepage
export const getFeaturedTemplates = () => {
    return templates.filter(t => t.featured);
};

// Get unique templates (one per niche) - for templates page
export const getUniqueTemplates = () => {
    return templates;
};
