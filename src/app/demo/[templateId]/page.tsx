'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { templates } from '@/data/templates';

export default function DemoPage() {
    const params = useParams();
    const router = useRouter();
    const templateId = params.templateId as string;
    const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
    const [isFullscreen, setIsFullscreen] = useState(false);

    const template = templates.find(t => t.id === templateId);

    // Get niche from template category for demo path
    const getNicheSlug = (category: string): string => {
        const mapping: Record<string, string> = {
            'Home Services': 'plumber',
            'Food & Beverage': 'coffee-shop',
            'Professional Services': 'law-firm',
            'Health & Wellness': 'dentist',
            'Creative': 'tattoo-studios',
        };
        return mapping[category] || 'plumber';
    };

    // Build demo URL - we'll serve HTML from public/demos folder
    const getDemoUrl = () => {
        if (!template) return '';
        // Check for specific template paths
        const templateNiche = template.image.split('/')[2]; // Get niche from image path
        return `/demos/${templateNiche}/${templateId}/template.html`;
    };

    const widthClasses = {
        desktop: 'w-full',
        tablet: 'w-[768px]',
        mobile: 'w-[375px]',
    };

    if (!template) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Template Not Found</h1>
                    <Link href="/templates" className="text-brand-purple hover:underline">
                        ← Back to Templates
                    </Link>
                </div>
            </div>
        );
    }

    if (isFullscreen) {
        return (
            <div className="fixed inset-0 z-[9999] bg-white" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
                <button
                    onClick={() => setIsFullscreen(false)}
                    className="fixed top-4 right-4 z-[10000] p-3 bg-gray-900/90 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg"
                    title="Exit Fullscreen"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe
                    src={getDemoUrl()}
                    className="w-full h-full border-0"
                    title={`${template.name} Demo`}
                    style={{ width: '100vw', height: '100vh' }}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 pt-20">
            {/* Demo Header */}
            <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        {/* Left: Back & Template Info */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/templates"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="hidden sm:inline">Templates</span>
                            </Link>
                            <div className="h-6 w-px bg-gray-700" />
                            <div>
                                <h1 className="text-white font-semibold">{template.name}</h1>
                                <p className="text-xs text-gray-500">{template.category} • {template.style}</p>
                            </div>
                        </div>

                        {/* Center: Viewport Controls */}
                        <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('desktop')}
                                className={`p-2 rounded-md transition-colors ${viewMode === 'desktop' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Desktop View"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('tablet')}
                                className={`p-2 rounded-md transition-colors ${viewMode === 'tablet' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Tablet View"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('mobile')}
                                className={`p-2 rounded-md transition-colors ${viewMode === 'mobile' ? 'bg-brand-purple text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Mobile View"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsFullscreen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                                <span className="hidden sm:inline">Fullscreen</span>
                            </button>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-5 py-2 bg-brand-purple text-white rounded-lg font-medium hover:bg-brand-purple-dark transition-colors"
                            >
                                Get This Template
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Demo Preview */}
            <div className="flex justify-center bg-gray-900/50 min-h-[calc(100vh-140px)] p-4 sm:p-8">
                <div 
                    className={`${widthClasses[viewMode]} transition-all duration-300 ease-in-out bg-white rounded-lg shadow-2xl overflow-hidden`}
                    style={{ maxWidth: viewMode === 'desktop' ? '100%' : undefined }}
                >
                    <iframe
                        src={getDemoUrl()}
                        className="w-full h-[calc(100vh-200px)] min-h-[600px] border-0"
                        title={`${template.name} Demo`}
                    />
                </div>
            </div>

            {/* Bottom Bar - Template Info & Price */}
            <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-4 z-40">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div>
                            <p className="text-gray-400 text-sm">Template Price</p>
                            <p className="text-2xl font-bold text-white">${template.price}</p>
                        </div>
                        <div className="hidden md:flex flex-wrap gap-2">
                            {template.features.map((feature) => (
                                <span key={feature} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-gradient-to-r from-brand-purple to-accent-pink text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

