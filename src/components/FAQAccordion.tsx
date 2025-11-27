'use client';

import { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: `What do I get for £89/month?`,
      answer: 'Our Starter plan includes a custom 5-page website, mobile responsive design, basic SEO optimisation, SSL certificate, weekly uptime monitoring, 2 monthly revisions, email support, and a 14-day money-back guarantee. Everything you need to get online professionally.',
      category: 'Pricing',
    },
    {
      id: 2,
      question: 'How fast will my website go live?',
      answer: 'Most websites go live within 14 days. Simple sites can be ready in 7-10 days, while more complex projects with custom features may take 3-6 weeks. We\'ll provide you with a detailed timeline during your onboarding call.',
      category: 'Timeline',
    },
    {
      id: 3,
      question: 'Are there any setup fees?',
      answer: 'No setup fees! Your first month includes everything: discovery calls, design mockups, development, and initial SEO setup. You only pay your monthly subscription fee.',
      category: 'Pricing',
    },
    {
      id: 4,
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel anytime with 30 days written notice. You\'ll retain all your content and assets. We\'ll help you export everything and provide guidance for transferring to another provider if needed.',
      category: 'Cancellation',
    },
    {
      id: 5,
      question: 'Do I own my website?',
      answer: 'Yes, you own your domain, content, and images. SEOJack manages the hosting and maintenance, but everything belongs to you. If you cancel, we\'ll help you transfer everything to your new provider.',
      category: 'Ownership',
    },
    {
      id: 6,
      question: 'Is my website SEO-ready?',
      answer: 'Absolutely! All our websites are built with SEO best practices including Core Web Vitals optimisation, semantic HTML, schema markup, fast loading times, and mobile-first design. We also provide ongoing SEO monitoring and improvements.',
      category: 'SEO',
    },
    {
      id: 7,
      question: 'What if I need changes to my website?',
      answer: 'Unlimited revisions are included! You can request changes through your client dashboard anytime. Simple changes are typically completed within 24-48 hours, while more complex updates may take a few days.',
      category: 'Revisions',
    },
    {
      id: 8,
      question: 'Do you provide hosting?',
      answer: 'Yes, hosting is included in all plans. We use premium hosting with 99.9% uptime guarantee, automatic backups, SSL certificates, and CDN for fast global loading speeds.',
      category: 'Hosting',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.includes(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openItems.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItems.includes(faq.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-primary"
              >
                Contact Support
              </a>
              <a
                href="/how-it-works"
                className="btn btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
