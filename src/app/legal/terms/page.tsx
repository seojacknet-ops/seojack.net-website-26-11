'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our website-as-a-service platform.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: November 28, 2025</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {['Services', 'Pricing', 'Your Responsibilities', 'Cancellation'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-gray-100 hover:bg-brand-purple hover:text-white rounded-full text-sm font-medium text-gray-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Agreement */}
            <div className="bg-gradient-to-r from-brand-purple/5 to-transparent p-8 rounded-2xl border-l-4 border-brand-purple">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using SEOJack's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and customers of our website-as-a-service platform.
              </p>
            </div>

            {/* Services */}
            <div id="services">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </span>
                Our Services
              </h2>
              
              <p className="text-gray-600 mb-6">SEOJack provides website-as-a-service (WaaS) solutions, including:</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🎨', text: 'Custom website design' },
                  { icon: '💻', text: 'Website development' },
                  { icon: '🌐', text: 'Hosting & maintenance' },
                  { icon: '🔄', text: 'Ongoing updates' },
                  { icon: '🔍', text: 'SEO optimization' },
                  { icon: '📱', text: 'Pre-made templates' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div id="pricing">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Pricing & Payment
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Billing
                  </h3>
                  <p className="text-gray-600">
                    Subscription plans are billed monthly or annually as selected. Prices are subject to change with 30 days' notice to existing customers.
                  </p>
                </div>
                
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-brand-purple text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Payment
                  </h3>
                  <p className="text-gray-600">
                    Payment is due in advance for each billing period. We accept major credit cards and process payments through secure third-party providers.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    14-Day Money-Back Guarantee
                  </h3>
                  <p className="text-gray-600">
                    New subscriptions are covered by our 14-day money-back guarantee. Request a refund within 14 days of your initial subscription for a full refund.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div id="your-responsibilities">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Your Responsibilities
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-600 mb-4">As a client, you agree to:</p>
                <ul className="space-y-3">
                  {[
                    'Provide accurate and complete information for your website',
                    'Respond to requests for feedback and approvals in a timely manner',
                    'Ensure all content you provide is legal and doesn\'t infringe on third-party rights',
                    'Maintain the security of your account credentials',
                    'Notify us immediately of any unauthorized use of your account',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-brand-purple mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Revisions */}
            <div className="bg-brand-purple/5 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Unlimited Revisions</h2>
              <p className="text-gray-600">
                Our subscription plans include unlimited revisions within the scope of your plan. Major redesigns or additional features may incur additional charges, which will be discussed and agreed upon before work begins.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Intellectual Property
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Your Content</h3>
                  <p className="text-gray-600">
                    You retain all rights to content you provide. By submitting content, you grant us a license to use, modify, and display it as necessary to provide our services.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Website Ownership</h3>
                  <p className="text-gray-600">
                    Upon full payment, you own the custom website we create. However, you may not resell our templates or proprietary code.
                  </p>
                </div>
              </div>
            </div>

            {/* Cancellation */}
            <div id="cancellation">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-purple/10 rounded-lg flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Cancellation & Termination
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Cancellation by You</h3>
                  <p className="text-gray-600">
                    You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. You'll continue to have access until then.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Termination by Us</h3>
                  <p className="text-gray-600">
                    We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or fail to pay fees. Upon termination, websites may be taken offline after a 30-day grace period.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, SEOJack shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. We strive for 99.9% uptime but cannot guarantee uninterrupted service.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-white/90 mb-6">
                Our team is happy to clarify any part of these terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:legal@seojack.net" 
                  className="inline-flex items-center gap-2 bg-white text-brand-purple px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  legal@seojack.net
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
                <Link href="/legal/cookies" className="text-brand-purple hover:underline">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
