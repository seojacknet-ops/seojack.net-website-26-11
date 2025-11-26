'use client';

import { useState } from 'react';
import { reviews } from '@/data/reviews';

export default function ReviewsSection() {
    const [visibleReviews, setVisibleReviews] = useState(3);

    const loadMoreReviews = () => {
        setVisibleReviews(prev => prev + 3);
    };

    return (
        <section className="pt-20 pb-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                        What Our <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 animate-fade-in-up animate-delay-200">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.slice(0, visibleReviews).map((review, index) => (
                        <div key={index} className={`card-enhanced card-enhanced-hover animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-purple-light rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white font-semibold text-lg">{review.avatar}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{review.name}</div>
                                        <div className="text-gray-500 text-sm">{review.date}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 text-lg mr-2">
                                    {'★'.repeat(review.rating)}
                                </div>
                                <span className="text-sm text-gray-600">({review.rating}.0)</span>
                            </div>

                            <blockquote className="text-gray-700 leading-relaxed italic">
                                "{review.content}"
                            </blockquote>
                        </div>
                    ))}
                </div>

                {/* Read More Reviews Button */}
                {visibleReviews < reviews.length && (
                    <div className="text-center mt-12 animate-fade-in-up">
                        <button
                            onClick={loadMoreReviews}
                            className="btn-enhanced btn-enhanced-secondary px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                        >
                            Read More Reviews
                            <svg className="ml-2 w-5 h-5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <p className="text-sm text-gray-500 mt-2">
                            Showing {visibleReviews} of {reviews.length} reviews
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
