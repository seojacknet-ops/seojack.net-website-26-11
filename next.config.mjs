import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensure proper hydration 
    reactStrictMode: true,

    // Configure image domains for external images
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'seojack.co.uk',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'seojack.space',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'stepsocial.com',
            },
            {
                protocol: 'https',
                hostname: 'api.iconify.design',
            }
        ],
    },
};

export default nextConfig;
