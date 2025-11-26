import React from 'react';

export default function AllInOneSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-brand-purple to-gray-900 text-white relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2H6zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">
                        The All-In-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Website Solution</span>
                    </h2>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
                        Everything you need to succeed online, included in one simple monthly price.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: 'Hosting Included',
                            desc: 'Premium cloud hosting with 99.9% uptime guarantee.',
                            icon: '☁️'
                        },
                        {
                            title: 'SSL Security',
                            desc: 'Enterprise-grade security to keep your data safe.',
                            icon: '🔒'
                        },
                        {
                            title: 'Daily Backups',
                            desc: 'Automatic backups so you never lose your content.',
                            icon: '💾'
                        },
                        {
                            title: 'SEO Tools',
                            desc: 'Built-in tools to help you rank higher on Google.',
                            icon: '📈'
                        }
                    ].map((item, index) => (
                        <div key={index} className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="opacity-80">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
