'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { templates, categories, getTemplatesByCategory, type Template } from '@/data/templates';

export default function TemplatesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    const filteredTemplates = getTemplatesByCategory(selectedCategory);

    return (
        <main className="min-h-screen bg-gray-950 pt-24 pb-20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Website{' '}
                        <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent">
                            Templates
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Professional, industry-specific website templates. Pick one, customize it with your details, 
                        and launch your online presence in days, not months.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Mobile Responsive</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>SEO Optimized</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Fast Loading</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Easy to Customize</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/30'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Templates Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <div
                            key={template.id}
                            className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/10"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={template.image}
                                    alt={template.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                                
                                {/* Quick Actions Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <button
                                        onClick={() => setSelectedTemplate(template)}
                                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        Quick View
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="px-4 py-2 bg-brand-purple text-white rounded-lg font-medium text-sm hover:bg-brand-purple-dark transition-colors"
                                    >
                                        Get This Template
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <span className="text-xs font-medium text-brand-purple bg-brand-purple/10 px-2 py-1 rounded-full">
                                            {template.category}
                                        </span>
                                    </div>
                                    {template.price && (
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-white">${template.price}</span>
                                            <span className="text-gray-500 text-sm block">one-time</span>
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {template.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {template.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {template.features.slice(0, 3).map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {template.features.length > 3 && (
                                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                            +{template.features.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTemplates.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No templates found in this category.</p>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-brand-purple to-accent-pink rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Can&apos;t find what you need?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        We build custom websites tailored to your business. Tell us about your project 
                        and we&apos;ll create something unique for you.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-purple rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Request Custom Design
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Quick View Modal */}
            {selectedTemplate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedTemplate(null)}
                >
                    <div
                        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={selectedTemplate.image}
                                alt={selectedTemplate.name}
                                fill
                                className="object-cover object-top rounded-t-2xl"
                            />
                            <button
                                onClick={() => setSelectedTemplate(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <span className="text-sm font-medium text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                                        {selectedTemplate.category}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-3">{selectedTemplate.style}</span>
                                </div>
                                {selectedTemplate.price && (
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-white">${selectedTemplate.price}</span>
                                        <span className="text-gray-500 text-sm block">one-time payment</span>
                                    </div>
                                )}
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4">{selectedTemplate.name}</h2>
                            <p className="text-gray-400 text-lg mb-6">{selectedTemplate.description}</p>

                            <h3 className="text-lg font-semibold text-white mb-3">Included Features:</h3>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {selectedTemplate.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-2 text-gray-300">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="flex-1 py-4 bg-brand-purple text-white rounded-xl font-semibold text-center hover:bg-brand-purple-dark transition-colors"
                                >
                                    Get This Template
                                </Link>
                                <button
                                    onClick={() => setSelectedTemplate(null)}
                                    className="px-6 py-4 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
