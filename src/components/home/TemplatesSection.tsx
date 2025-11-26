'use client';

import Link from 'next/link';
import Image from 'next/image';
import { templates } from '@/data/templates';

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
                    {templates.map((project, index) => (
                        <div key={index} className={`group relative card-enhanced card-enhanced-hover animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                            <div className="aspect-video bg-gray-200 overflow-hidden rounded-xl mb-4 relative">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} website`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-brand-purple bg-brand-purple/10 px-2 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    {project.url !== '#' && (
                                        <span className="text-xs text-gray-500">Live Site</span>
                                    )}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {project.name}
                                </h3>

                                {project.url !== '#' && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-brand-purple hover:text-brand-purple-dark font-medium transition-colors duration-200"
                                    >
                                        View Project
                                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center animate-fade-in-up animate-delay-600">
                    <Link href="/templates" className="btn-enhanced btn-enhanced-primary">
                        View all templates
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
