'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Simple Process, Amazing Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Website in <span className="text-brand-purple">3-5 Days</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose your path: Pick a ready-made template or let us build something custom. Either way, you get a professional website without the headaches.
          </p>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">Two ways to get the perfect website for your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Pick-A-Template */}
            <div className="relative bg-gradient-to-br from-brand-purple/5 to-white border-2 border-brand-purple rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-6">
                <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-bold">
                  FASTEST
                </span>
              </div>
              
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Pick-A-Template</h3>
              <p className="text-gray-600 mb-6">
                Choose from our collection of professional templates. We customize it with your info and launch in days.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ready in 3-5 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">One-time payment: $99-$199</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Hosting & SSL included</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">You own the website</span>
                </div>
              </div>

              <Link
                href="/templates"
                className="block w-full py-4 bg-brand-purple text-white text-center font-semibold rounded-xl hover:bg-brand-purple-dark transition-colors"
              >
                Browse Templates →
              </Link>
            </div>

            {/* Path 2: Done-For-You */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow hover:border-brand-purple">
              <div className="absolute -top-4 left-6">
                <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                  FULL SERVICE
                </span>
              </div>
              
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Done-For-You</h3>
              <p className="text-gray-600 mb-6">
                We build a fully custom website and manage everything for you. Perfect for businesses that want hands-off support.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fully custom design</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">From $97/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unlimited revisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ongoing support & updates</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full py-4 bg-gray-800 text-white text-center font-semibold rounded-xl hover:bg-gray-900 transition-colors"
              >
                Book Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pick-A-Template Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-purple font-semibold">PICK-A-TEMPLATE</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">From browsing to launch in 5 simple steps</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: '1', icon: '👀', title: 'Browse', desc: 'Explore our template gallery and find one you love' },
              { num: '2', icon: '🎯', title: 'Select', desc: 'Click "Get Template" and tell us about your business' },
              { num: '3', icon: '💳', title: 'Pay', desc: 'One-time payment via secure checkout' },
              { num: '4', icon: '📝', title: 'Submit Info', desc: 'Send us your logo, content, and business details' },
              { num: '5', icon: '🚀', title: 'Launch!', desc: 'We customize and launch your site in 3-5 days' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {step.num}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-purple-dark transition-colors"
            >
              Browse Templates
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Every website comes with everything you need</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📱', title: 'Mobile Responsive', desc: 'Looks perfect on all devices' },
              { icon: '🔒', title: 'SSL Certificate', desc: 'Secure HTTPS connection' },
              { icon: '⚡', title: 'Fast Loading', desc: 'Optimized for speed' },
              { icon: '🔍', title: 'Basic SEO', desc: 'Set up for Google' },
              { icon: '🌐', title: 'Hosting Included', desc: '99.9% uptime guarantee' },
              { icon: '🎨', title: 'Your Branding', desc: 'Logo, colors, your style' },
              { icon: '📧', title: 'Contact Form', desc: 'Leads straight to your inbox' },
              { icon: '📊', title: 'Analytics Ready', desc: 'Track your visitors' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEOJack Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SEOJack?</h2>
            <p className="text-xl text-gray-600">We're not like other options</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* vs DIY */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">vs. DIY Builders</h3>
              <p className="text-gray-600 mb-4">Wix, Squarespace, etc.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Still takes YOUR time</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Templates look generic</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Ongoing fees add up</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-brand-purple font-semibold">✓ We do it FOR you</p>
              </div>
            </div>

            {/* vs Freelancers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">vs. Freelancers</h3>
              <p className="text-gray-600 mb-4">Hiring a web designer</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Expensive ($2K-$10K+)</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Takes weeks/months</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">No ongoing support</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-brand-purple font-semibold">✓ Affordable & fast</p>
              </div>
            </div>

            {/* vs Agencies */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">vs. Agencies</h3>
              <p className="text-gray-600 mb-4">Big web design firms</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Very expensive ($10K+)</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Overkill for small biz</span>
                </li>
                <li className="flex items-start gap-2 text-red-600">
                  <span>❌</span>
                  <span className="text-gray-600">Complex contracts</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-brand-purple font-semibold">✓ Right-sized solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take?',
                a: 'Templates are ready in 3-5 business days. Custom projects typically take 1-2 weeks.',
              },
              {
                q: 'Do I own the website?',
                a: 'Yes! With templates, you own the site completely. With subscriptions, you own the content and design - we just handle hosting.',
              },
              {
                q: 'What if I need changes later?',
                a: 'Template purchases include minor tweaks. For ongoing changes, upgrade to a subscription or pay per update.',
              },
              {
                q: 'Do I need my own domain?',
                a: 'You can buy your own domain (we\'ll help connect it) or we can set one up for you.',
              },
              {
                q: 'What about the 14-day guarantee?',
                a: 'If you\'re not happy within 14 days, we\'ll refund you in full. No questions asked.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-purple-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Your Website?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join businesses who trust SEOJack. Pick a template today or book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="px-8 py-4 bg-white text-brand-purple font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Browse Templates
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-brand-purple transition-colors text-lg"
            >
              Free Consultation
            </Link>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            14-day money-back guarantee • No contracts • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
