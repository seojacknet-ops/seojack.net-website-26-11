'use client';

const logos = [
    { name: 'Stripe', url: 'https://api.iconify.design/simple-icons:stripe.svg?color=white' },
    { name: 'Next.js', url: 'https://api.iconify.design/simple-icons:nextdotjs.svg?color=white' },
    { name: 'React', url: 'https://api.iconify.design/simple-icons:react.svg?color=white' },
    { name: 'TypeScript', url: 'https://api.iconify.design/simple-icons:typescript.svg?color=white' },
    { name: 'Tailwind CSS', url: 'https://api.iconify.design/simple-icons:tailwindcss.svg?color=white' },
    { name: 'Supabase', url: 'https://api.iconify.design/simple-icons:supabase.svg?color=white' },
    { name: 'Vercel', url: 'https://api.iconify.design/simple-icons:vercel.svg?color=white' },
    { name: 'Cloudflare', url: 'https://api.iconify.design/simple-icons:cloudflare.svg?color=white' },
    { name: 'WordPress', url: 'https://api.iconify.design/simple-icons:wordpress.svg?color=white' },
    { name: 'Elementor', url: 'https://api.iconify.design/simple-icons:elementor.svg?color=white' },
    { name: 'Google Analytics', url: 'https://api.iconify.design/simple-icons:googleanalytics.svg?color=white' },
    { name: 'OpenAI', url: 'https://api.iconify.design/simple-icons:openai.svg?color=white' },
    { name: 'Canva', url: 'https://api.iconify.design/simple-icons:canva.svg?color=white' },
    { name: 'Adobe', url: 'https://api.iconify.design/simple-icons:adobe.svg?color=white' },
    { name: 'GitHub', url: 'https://api.iconify.design/simple-icons:github.svg?color=white' },
    { name: 'Docker', url: 'https://api.iconify.design/simple-icons:docker.svg?color=white' },
];

export default function LogoScroller() {
    return (
        <section className="py-8 bg-gradient-to-r from-black to-brand-purple">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="flex space-x-20 animate-scroll">
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div key={`logo-1-${index}`} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {logos.map((logo, index) => (
                            <div key={`logo-2-${index}`} className="flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 w-8 opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
