'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    services: [
      { name: 'Website Templates', href: '/templates' },
      { name: 'SEO Optimization', href: '/how-it-works' },
      { name: 'E-commerce Sites', href: '/pricing' },
      { name: 'Custom Development', href: '/contact' },
    ],
    company: [
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Templates', href: '/templates' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/faqs' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Support', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/seojack-logo-dark.png" 
                alt="SEOJack Logo" 
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-md">
              Expert custom websites from $97/month. We handle everything—design, build, hosting, and updates. 
              No contracts, unlimited revisions, and a 14-day money-back guarantee.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-purple transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-purple transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-purple transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-brand-purple transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center mb-4">
            {/** Currency toggle temporarily disabled to fix SSR issues **/}
            {/* <CurrencyToggle /> */}
          </div>
          <div className="flex justify-center">
            <p className="text-sm text-gray-600">
              © {currentYear} SEOJack. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
