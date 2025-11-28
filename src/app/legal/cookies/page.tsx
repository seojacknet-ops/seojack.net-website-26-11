'use client';

import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cookie Information
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to improve your experience on our website.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: November 28, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* What Are Cookies */}
            <div className="bg-gradient-to-r from-brand-purple/5 to-transparent p-8 rounded-2xl border-l-4 border-brand-purple">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🍪</span>
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They're widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how their site is being used.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                How We Use Cookies
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '⚙️', title: 'Remember preferences', desc: 'Store your settings and choices' },
                  { icon: '📊', title: 'Understand usage', desc: 'See how you interact with our site' },
                  { icon: '🚀', title: 'Improve services', desc: 'Enhance your overall experience' },
                  { icon: '📈', title: 'Analyze traffic', desc: 'Measure website performance' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-4">
                <div className="border border-green-200 bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">REQUIRED</span>
                    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600">
                    Necessary for the website to function properly. They enable core functionality like security, network management, and accessibility. You cannot opt out of these cookies.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">ANALYTICS</span>
                    <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
                  </div>
                  <p className="text-gray-600">
                    Collect information about how you use our website, like which pages you visit most often. This helps us improve site performance and user experience.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">PREFERENCES</span>
                    <h3 className="font-semibold text-gray-900">Functionality Cookies</h3>
                  </div>
                  <p className="text-gray-600">
                    Remember choices you make (like your username, language, or region) to provide enhanced, personalized features.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">MARKETING</span>
                    <h3 className="font-semibold text-gray-900">Targeting Cookies</h3>
                  </div>
                  <p className="text-gray-600">
                    Used to deliver advertisements relevant to you and measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6">
                We may use third-party services that place their own cookies. These include:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Google Analytics', purpose: 'Website analytics' },
                  { name: 'Stripe', purpose: 'Payment processing' },
                  { name: 'Vercel', purpose: 'Website hosting' },
                ].map((service, i) => (
                  <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg">
                    <span className="font-medium text-gray-900">{service.name}</span>
                    <span className="text-sm text-gray-500">{service.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Managing Your Cookies
              </h2>
              
              <p className="text-gray-600 mb-6">
                You can control cookies through your browser settings. Here's how:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { browser: 'Chrome', path: 'Settings → Privacy → Cookies' },
                  { browser: 'Firefox', path: 'Options → Privacy → Cookies' },
                  { browser: 'Safari', path: 'Preferences → Privacy → Cookies' },
                  { browser: 'Edge', path: 'Settings → Privacy → Cookies' },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">{item.browser}</h4>
                    <p className="text-sm text-gray-500">{item.path}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling cookies may affect website functionality and your ability to access certain features.
                </p>
              </div>
            </div>

            {/* More Information */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Learn More About Cookies</h2>
              <p className="text-gray-600 mb-4">For more information about cookies and how they work:</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.allaboutcookies.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:underline flex items-center gap-1"
                >
                  All About Cookies
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-gray-300">•</span>
                <a 
                  href="https://www.youronlinechoices.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-purple hover:underline flex items-center gap-1"
                >
                  Your Online Choices
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
              <p className="text-white/90 mb-6">
                If you have any questions about our use of cookies, please get in touch.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:privacy@seojack.net" 
                  className="inline-flex items-center gap-2 bg-white text-brand-purple px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  privacy@seojack.net
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
                >
                  Contact Form →
                </Link>
              </div>
            </div>

            {/* Related Policies */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Policies</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/legal/privacy" className="text-brand-purple hover:underline">Privacy Policy</Link>
                <span className="text-gray-300">•</span>
                <Link href="/legal/terms" className="text-brand-purple hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
