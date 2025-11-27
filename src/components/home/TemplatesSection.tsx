'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedTemplates } from '@/data/templates';

const featuredTemplates = getFeaturedTemplates(6);

export default function TemplatesSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        Website <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent">Templates</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                        Choose from our collection of professional website templates designed for different industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredTemplates.map((template, index) => (
                        <div 
                            key={template.id} 
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                                <Image
                                    src={template.image}
                                    alt={`${template.name} website template`}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

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

                                <Link
                                    href="/templates"
                                    className="inline-flex items-center text-sm text-brand-purple hover:text-brand-purple-dark font-medium transition-colors duration-200"
                                >
                                    View Details
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
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
