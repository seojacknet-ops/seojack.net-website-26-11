'use client';

import Link from 'next/link';

export default function ReviewsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'James Gilland',
      role: 'Founder & CEO',
      company: 'Tricked Out Accessories',
      content: 'SEOJack transformed our online presence. The new website is fast, beautiful, and our traffic has doubled. The subscription model is a no-brainer for any small business.',
      rating: 5,
      date: '2 months ago',
      verified: true,
    },
    {
      id: 2,
      name: 'David M.',
      role: 'Maestro of Service Excellence',
      company: 'TrueVantage',
      content: 'The process was unbelievably simple. I told them what I wanted, and they delivered beyond my expectations. Unlimited edits means I never have to worry about updating my site again.',
      rating: 5,
      date: '1 month ago',
      verified: true,
    },
    {
      id: 3,
      name: 'Chris H.',
      role: 'Director',
      company: 'Haganis LTD',
      content: `I was quoted thousands by other agencies for a basic site. SEOJack's £89/month plan gave me a professional, SEO-ready site and saved me a fortune. Highly recommended!`,
      rating: 5,
      date: '3 weeks ago',
      verified: true,
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      company: 'TechFlow Solutions',
      content: 'The client dashboard is fantastic. I can request changes anytime and they\'re implemented quickly. The SEO improvements have been incredible for our rankings.',
      rating: 5,
      date: '1 week ago',
      verified: true,
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Owner',
      company: 'GreenSpace Design',
      content: 'Outstanding service from start to finish. The team understood our vision and created something even better than we imagined. Our new website has generated so many leads.',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
    },
    {
      id: 6,
      name: 'Emma Wilson',
      role: 'Studio Manager',
      company: 'Urban Fitness',
      content: 'The booking system integration was seamless. Our members love the new online booking feature, and it\'s saved us hours of admin work each week.',
      rating: 5,
      date: '5 days ago',
      verified: true,
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Would Recommend' },
    { number: '14', label: 'Day Money-Back' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours say about working with SEOJack.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid - Dynamic Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Larger Reviews */}
            <div className="space-y-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-purple to-accent-pink rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {testimonial.date} on <span className="font-semibold text-blue-600">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Right Column - Smaller Reviews */}
            <div className="space-y-8">
              {testimonials.slice(2, 4).map((testimonial, index) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {testimonial.date} on <span className="font-semibold text-blue-600">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Reviews Row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(4).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-accent-pink rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {testimonial.date} on <span className="font-semibold text-blue-600">Google</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Read More Reviews
          </h2>
          <p className="text-gray-600 mb-8">
            See what our clients are saying on external review platforms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="#"
              className="card card-hover text-center"
            >
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Google Reviews</h3>
              <p className="text-gray-600 text-sm mb-4">4.9/5 from 200+ reviews</p>
              <span className="text-brand-purple text-sm font-medium">Read Reviews →</span>
            </a>
            
            <a
              href="#"
              className="card card-hover text-center"
            >
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Trustpilot</h3>
              <p className="text-gray-600 text-sm mb-4">4.8/5 from 150+ reviews</p>
              <span className="text-brand-purple text-sm font-medium">Read Reviews →</span>
            </a>
            
            <a
              href="#"
              className="card card-hover text-center"
            >
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Clutch</h3>
              <p className="text-gray-600 text-sm mb-4">5.0/5 from 50+ reviews</p>
              <span className="text-brand-purple text-sm font-medium">Read Reviews →</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-accent-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to get a website that drives results? Start your journey with our 14-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn bg-white text-brand-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-purple px-8 py-4 text-lg font-semibold"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
