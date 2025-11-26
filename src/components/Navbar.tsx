'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Templates', href: '/templates' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  // Use different logos and styles based on the current page
  // Default to non-homepage during SSR to prevent hydration mismatch
  const isHomePage = mounted ? pathname === '/' : false;
  // Use local logo from public folder
  const logoSrc = "/seojack-digital-marketing-logo-1025-506d8cee.webp";

  // Different navbar styles for home vs other pages
  const navClasses = isHomePage 
    ? "fixed top-0 left-0 right-0 z-50"
    : "relative bg-white shadow-sm border-b border-gray-200";
  
  const navStyle = isHomePage 
    ? {}
    : {};

  // Show a simple navbar during SSR/before hydration
  if (!mounted) {
    return (
      <nav className="relative bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/seojack-digital-marketing-logo-1025-506d8cee.webp"
                  alt="SEOJack Logo" 
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navClasses} style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={logoSrc}
                alt="SEOJack Logo" 
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                    isHomePage 
                      ? "text-white hover:text-brand-purple" 
                      : "text-gray-700 hover:text-brand-purple"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://seojack-ochre.vercel.app/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isHomePage 
                  ? "text-white hover:text-brand-purple" 
                  : "text-gray-700 hover:text-brand-purple"
              }`}
            >
              Login
            </a>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isHomePage 
                  ? "text-white hover:text-brand-purple" 
                  : "text-gray-700 hover:text-brand-purple"
              }`}
            >
              Contact
            </Link>
            <a
              href="https://seojack-ochre.vercel.app/"
              className={`inline-flex items-center justify-center px-6 py-3 ${
                isHomePage
                  ? "bg-gradient-to-r from-[#DF47D8] via-[#E648B7] to-[#E847AA] text-white text-sm font-bold rounded-full shadow-2xl hover:from-[#C736C8] hover:via-[#D637A7] hover:to-[#D7369A] transition-all duration-300 hover:scale-105"
                  : "bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple transition-colors duration-200 ${
                isHomePage 
                  ? "text-white hover:text-brand-purple hover:bg-white/10" 
                  : "text-gray-700 hover:text-brand-purple hover:bg-gray-100"
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isHomePage 
              ? "bg-transparent backdrop-blur-none" 
              : "bg-white"
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isHomePage 
                    ? "text-white hover:text-brand-purple" 
                    : "text-gray-700 hover:text-brand-purple"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3">
              <a
                href="https://seojack-ochre.vercel.app/"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isHomePage 
                    ? "text-white hover:text-brand-purple" 
                    : "text-gray-700 hover:text-brand-purple"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isHomePage 
                    ? "text-white hover:text-brand-purple" 
                    : "text-gray-700 hover:text-brand-purple"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://seojack-ochre.vercel.app/"
                className={`inline-flex items-center justify-center px-6 py-3 ${
                  isHomePage
                    ? "bg-gradient-to-r from-[#DF47D8] via-[#E648B7] to-[#E847AA] text-white text-sm font-bold rounded-full shadow-2xl hover:from-[#C736C8] hover:via-[#D637A7] hover:to-[#D7369A] transition-all duration-300 hover:scale-105 mx-3 mt-4 w-auto"
                    : "bg-gradient-to-r from-brand-purple to-brand-purple-dark text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mx-3 mt-4 w-auto"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}