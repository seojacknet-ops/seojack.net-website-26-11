'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: isAnnual ? '£72' : '£89',
      originalPrice: isAnnual ? '£89' : undefined,
      description: 'Perfect for small businesses getting started online',
      features: [
        '5-page custom website',
        'Mobile-responsive design',
        'Basic SEO optimisation',
        'SSL certificate included',
        'Email support',
        '14-day money-back guarantee'
      ],
      cta: 'Get Started',
      ctaLink: '/contact'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: isAnnual ? '£152' : '£189',
      originalPrice: isAnnual ? '£189' : undefined,
      description: 'Ideal for growing businesses with more complex needs',
      features: [
        '10-page custom website',
        'Advanced SEO optimisation',
        'E-commerce functionality',
        'Google Analytics setup',
        'Priority support',
        'Unlimited revisions',
        '14-day money-back guarantee'
      ],
      popular: true,
      cta: 'Get Started',
      ctaLink: '/contact'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: isAnnual ? '£232' : '£289',
      originalPrice: isAnnual ? '£289' : undefined,
      description: 'For established businesses requiring premium features',
      features: [
        'Unlimited pages',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated account manager',
        'Priority development',
        'Custom domain setup',
        '14-day money-back guarantee'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Choose the plan that's right for your business. All plans include our 14-day money-back guarantee.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-8">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`mx-3 relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 ${
              isAnnual ? 'bg-brand-purple' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
          </span>
          {isAnnual && (
            <span className="ml-2 text-sm text-green-600 font-medium">
              Save up to 18%
            </span>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular 
                ? 'border-brand-purple ring-2 ring-brand-purple ring-opacity-50' 
                : 'border-gray-200 hover:border-brand-purple'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                  {plan.originalPrice && (
                    <div className="mt-1">
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-sm text-green-600 font-medium ml-2">Save 18%</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-brand-purple text-white hover:bg-brand-purple-dark hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          All plans include our 14-day money-back guarantee. No setup fees, no hidden costs.
        </p>
        <p className="text-sm text-gray-500">
          Need a custom solution? <Link href="/contact" className="text-brand-purple hover:text-brand-purple-dark font-medium">Contact us</Link> for a personalised quote.
        </p>
      </div>
    </div>
  );
}
