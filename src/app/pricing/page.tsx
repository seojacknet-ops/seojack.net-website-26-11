'use client';

import PricingTable from '@/components/PricingTable';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple Pricing for <span className="text-brand-purple">Every Business</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our 14-day money-back guarantee and no setup fees.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Features Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included in Every Plan
            </h2>
            <p className="text-xl text-gray-600">
              All our plans come with these essential features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Design',
                description: 'Unique, professional website design tailored to your brand',
                icon: '🎨'
              },
              {
                title: 'Mobile Responsive',
                description: 'Perfect display on all devices - desktop, tablet, and mobile',
                icon: '📱'
              },
              {
                title: 'SEO Optimised',
                description: 'Built-in SEO features to help you rank higher on Google',
                icon: '🔍'
              },
              {
                title: 'SSL Certificate',
                description: 'Secure HTTPS connection included at no extra cost',
                icon: '🔒'
              },
              {
                title: 'Fast Loading',
                description: 'Optimised for speed with Core Web Vitals compliance',
                icon: '⚡'
              },
              {
                title: 'Email Support',
                description: 'Dedicated support team ready to help when you need it',
                icon: '💬'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Is there a setup fee?',
                answer: 'No, there are no setup fees or hidden costs. You only pay the monthly subscription fee.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
              },
              {
                question: 'What happens to my website if I cancel?',
                answer: 'You own your website content and can export it. We provide a 30-day grace period to arrange hosting elsewhere.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.'
              },
              {
                question: 'How long does it take to build my website?',
                answer: 'Most websites are completed within 5-10 business days after we receive your content and requirements.'
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Yes, you can change your plan at any time. Changes take effect on your next billing cycle.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses who trust SEOJack for their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seojack-ochre.vercel.app/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-purple font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-purple transition-colors duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}