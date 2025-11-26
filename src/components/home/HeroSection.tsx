'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    const [showSpline, setShowSpline] = useState(false);

    useEffect(() => {
        // Try to load Spline after component mounts
        const timer = setTimeout(() => {
            setShowSpline(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-black pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
            {/* Fallback gradient background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-black to-purple-900"></div>

            {/* Spline 3D Background with fallback */}
            {showSpline && (
                <div className="absolute inset-0 z-0">
                    <iframe
                        src="https://my.spline.design/squarechipsfallinginplace-sqCjheO7ZSIrbR2rKRbWcjy6/"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        className="absolute inset-0 w-full h-full"
                        style={{
                            pointerEvents: 'none',
                            border: 'none',
                            outline: 'none',
                            backgroundColor: 'transparent'
                        }}
                        title="3D Background Animation"
                        onError={() => setShowSpline(false)}
                    />
                </div>
            )}

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-left animate-fade-in-up pl-6 lg:pl-10">
                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight animate-slide-in-left">
                            Done-For-You Websites
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed animate-slide-in-left animate-delay-200">
                            The easiest way to get online—we handle <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent font-bold">everything</span>
                        </p>

                        {/* CTA Button */}
                        <div className="mb-3 animate-slide-in-left animate-delay-300">
                            <Link
                                href="https://seojack.app/signup"
                                className="inline-flex items-center justify-center px-8 py-4 bg-brand-purple text-white text-lg font-bold rounded-full shadow-2xl hover:bg-brand-purple-dark transition-all duration-300 hover:scale-105"
                            >
                                Try For Free
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-start gap-4 mt-4 animate-slide-in-left animate-delay-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-white font-medium">No setup fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-white font-medium">Cancel Anytime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-white font-medium">14-day money-back guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Video/Visual Content */}
                    <div className="relative z-10 animate-slide-in-right pr-6 lg:pr-10">
                        {/* Video Subtitle */}
                        <div className="text-center mb-4 mt-4 animate-fade-in-up animate-delay-300">
                            <div className="inline-block bg-transparent px-4 py-2 rounded-full border border-white/20 relative">
                                <p className="text-xs text-white font-medium tracking-wide uppercase drop-shadow-lg">
                                    Next Generation of Website Creation
                                </p>
                                {/* Subtle glow effect */}
                                <div className="absolute inset-0 rounded-full bg-white/5 blur-sm -z-10"></div>
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-brand-purple/20 transition-all duration-500 hover:scale-105 max-w-lg mx-auto group">
                            <video
                                id="hero-video"
                                className="aspect-video w-full h-full object-cover"
                                poster="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                controls
                                preload="metadata"
                                onPlay={() => {
                                    const playButton = document.getElementById('hero-play-button');
                                    if (playButton) playButton.style.display = 'none';
                                }}
                                onPause={() => {
                                    const playButton = document.getElementById('hero-play-button');
                                    if (playButton) playButton.style.display = 'flex';
                                }}
                                onEnded={() => {
                                    const playButton = document.getElementById('hero-play-button');
                                    if (playButton) playButton.style.display = 'flex';
                                }}
                            >
                                <source src="https://seojack.co.uk/wp-content/uploads/2025/09/V4-Seojack-Home-Page-Video.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play Button Overlay - Only Visual, No Pointer Events */}
                            <div id="hero-play-button" className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                <div className="w-20 h-20 bg-accent-pink/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent-pink/30 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-accent-pink/30 pointer-events-none">
                                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                                </div>
                            </div>

                            {/* Video Overlay Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>

                        {/* Bottom Text with Icon */}
                        <div className="flex items-center justify-center mt-4 space-x-2 animate-fade-in-up animate-delay-600">
                            {/* Purple pointer finger icon */}
                            <Image
                                src="/seofinger.webp"
                                alt="Purple pointer finger"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                            />
                            <p className="text-base text-white">
                                You <span className="bg-gradient-to-r from-brand-purple to-accent-pink bg-clip-text text-transparent font-semibold">approve</span>—we publish
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
