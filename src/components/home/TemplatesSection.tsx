'use client';

import Link from 'next/link';
import Image from 'next/image';
import { templates } from '@/data/templates';

// Get showcase tier templates (Standard, Creative, Pro)
const showcaseTemplates = templates.filter(t => t.category === 'Showcase');

// Get industry templates (non-showcase)
const industryTemplates = templates.filter(t => t.category !== 'Showcase').slice(0, 3);

export default function TemplatesSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Website <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent">Templates</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                        Professional templates at every tier. Choose your level of impressiveness.
                    </p>
                </div>

                {/* Showcase Tier Templates */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent"></div>
                        <h3 className="text-lg font-semibold text-gray-700 px-4">Choose Your Tier</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {showcaseTemplates.map((template, index) => {
                            const tierStyles = {
                                0: { // Standard
                                    badge: 'bg-slate-500',
                                    border: 'border-slate-200',
                                    glow: '',
                                    label: 'Standard'
                                },
                                1: { // Creative
                                    badge: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
                                    border: 'border-violet-200',
                                    glow: 'hover:shadow-violet-200/50',
                                    label: 'Creative'
                                },
                                2: { // Pro
                                    badge: 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500',
                                    border: 'border-amber-200',
                                    glow: 'hover:shadow-amber-200/50',
                                    label: 'Pro'
                                }
                            }[index] || { badge: 'bg-gray-500', border: '', glow: '', label: '' };

                            return (
                                <div 
                                    key={template.id} 
                                    className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${tierStyles.border} ${tierStyles.glow}`}
                                >
                                    {/* Tier Badge */}
                                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 ${tierStyles.badge} text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg`}>
                                        {tierStyles.label}
                                    </div>

                                    <Link href={`/demo/${template.id}`} className="block">
                                        <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                                            <Image
                                                src={template.image}
                                                alt={`${template.name} website template`}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                <span className="px-5 py-2.5 bg-white rounded-lg text-gray-900 font-semibold text-sm flex items-center gap-2 shadow-xl">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                    View Live Demo
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-medium text-gray-500">
                                                {template.style}
                                            </span>
                                            <span className="text-xl font-bold text-gray-900">${template.price}</span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {template.name}
                                        </h3>
                                        
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {template.description}
                                        </p>

                                        {/* Features pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {template.features.slice(0, 3).map((feature) => (
                                                <span key={feature} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                                    {feature}
                                                </span>
                                            ))}
                                            {template.features.length > 3 && (
                                                <span className="text-xs text-gray-400">+{template.features.length - 3} more</span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Link
                                                href={`/demo/${template.id}`}
                                                className="flex-1 inline-flex items-center justify-center text-sm text-brand-purple border border-brand-purple/30 hover:bg-brand-purple/5 px-4 py-2.5 rounded-lg font-medium transition-colors duration-200"
                                            >
                                                Preview
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="flex-1 inline-flex items-center justify-center text-sm text-white bg-brand-purple hover:bg-brand-purple-dark px-4 py-2.5 rounded-lg font-medium transition-colors duration-200"
                                            >
                                                Get Template
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Industry-Specific Templates */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        <h3 className="text-lg font-semibold text-gray-700 px-4">Industry Templates</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industryTemplates.map((template) => (
                            <div 
                                key={template.id} 
                                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <Link href={`/demo/${template.id}`} className="block">
                                    <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                                        <Image
                                            src={template.image}
                                            alt={`${template.name} website template`}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="px-4 py-2 bg-white/90 rounded-lg text-gray-900 font-medium text-sm flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                Live Demo
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-medium text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                                            {template.category}
                                        </span>
                                        {template.price && (
                                            <span className="text-lg font-bold text-gray-900">${template.price}</span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {template.name}
                                    </h3>
                                    
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {template.description}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <Link
                                            href={`/demo/${template.id}`}
                                            className="flex-1 inline-flex items-center justify-center text-sm text-brand-purple border border-brand-purple/30 hover:bg-brand-purple/5 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            Preview
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="flex-1 inline-flex items-center justify-center text-sm text-white bg-brand-purple hover:bg-brand-purple-dark px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            Get Template
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link 
                        href="/templates" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple text-white rounded-xl font-semibold hover:bg-brand-purple-dark transition-colors shadow-lg shadow-brand-purple/30"
                    >
                        View All Templates
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
