'use client';

import LottieAnimation from '@/components/LottieAnimation';
import { features } from '@/data/features';

export default function FeaturesSection() {
    return (
        <section className="pt-4 pb-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className={`card-enhanced card-enhanced-hover text-center animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                            <div className="relative mb-6">
                                {feature.isCustomLottie ? (
                                    <div className="w-48 h-48 mx-auto flex items-center justify-center">
                                        <LottieAnimation
                                            animationUrl={feature.lottieUrl}
                                            fallbackIcon={feature.fallbackIcon}
                                            width={180}
                                            height={180}
                                            className="w-full h-full"
                                        />
                                    </div>
                                ) : (
                                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                        <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center">
                                            <span className="text-4xl animate-bounce">{feature.icon}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
