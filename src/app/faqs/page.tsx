import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQs - SEOJack | Frequently Asked Questions',
  description: 'Get answers to common questions about SEOJack\'s website services, pricing, process, and support. Everything you need to know before getting started.',
  keywords: 'SEOJack FAQs, website questions, pricing questions, support help',
};

export default function FAQsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Everything you need to know about SEOJack's website services, pricing, and process.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQAccordion />
    </div>
  );
}
