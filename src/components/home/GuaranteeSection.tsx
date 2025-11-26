import React from 'react';
import Image from 'next/image';

export default function GuaranteeSection() {
    return (
        <section className="py-8 bg-gradient-to-r from-black via-brand-purple to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        14-Day Money-Back <span className="text-yellow-400">Guarantee</span>
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        If you're not 100% impressed, get a refund up to 14 days after signing up with our 14-day money-back guarantee.
                    </p>
                    <div className="animate-bounce-slow">
                        <Image
                            src="https://stepsocial.com/wp-content/uploads/2022/07/14-day-v2-copy.png"
                            alt="14-Day Money-Back Guarantee seal"
                            width={128}
                            height={128}
                            className="max-w-32 mx-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
