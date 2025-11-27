'use client';

import Link from 'next/link';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Choose Plan',
      description: 'Sign up in seconds and select a plan. You\'ll get immediate access to your client dashboard.',
      details: [
        'Create your account in under 2 minutes',
        'Choose from Starter, Standard, or Pro plans',
        'Get instant access to your client dashboard',
        'Schedule your discovery call',
      ],
    },
    {
      number: '02',
      title: 'Submit Your Brief',
      description: 'Inside your dashboard, fill out our simple onboarding form to tell us about your business and website goals.',
      details: [
        'Complete our detailed brief questionnaire',
        'Share your brand guidelines and preferences',
        'Upload any existing content or assets',
        'Set your launch timeline and priorities',
      ],
    },
    {
      number: '03',
      title: 'We Get to Work',
      description: 'Our expert team will design, write, and build a stunning, high-performance website for you.',
      details: [
        'Our designers create custom mockups',
        'Copywriters craft compelling content',
        'Developers build your site with best practices',
        'SEO experts optimize for search engines',
      ],
    },
    {
      number: '04',
      title: 'Approve & Go Live',
      description: 'We\'ll show you the final design. Once you approve, we handle the launch and your new website is live!',
      details: [
        'Review your site in our staging environment',
        'Request any final changes or tweaks',
        'We handle the technical launch process',
        'Your site goes live with 99.9% uptime guarantee',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get Started in 4 Simple Steps
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Launching your dream website has never been easier. Here's how it works.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  id="how-it-works-video-player"
                  src="https://seojack.co.uk/wp-content/uploads/2025/09/V4-Seojack-Home-Page-Video.webm"
                  poster="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  playsInline
                  preload="metadata"
                  className="w-full h-auto"
                />
                <button 
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 video-play-btn"
                  onClick={() => {
                    const video = document.getElementById('how-it-works-video-player') as HTMLVideoElement;
                    if (video) {
                      if (video.paused) {
                        video.play();
                      } else {
                        video.pause();
                      }
                    }
                  }}
                  aria-label="Play video about SEOJack process"
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200">
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                See SEOJack in Action
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Watch how we transform businesses with our done-for-you website service. From initial consultation to final launch, see the SEOJack difference.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Real client transformations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Behind-the-scenes process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Client testimonials and results</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-purple to-accent-pink text-white font-semibold rounded-2xl hover:from-brand-purple-dark hover:to-accent-pink-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-accent-pink rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Here's what you can expect from start to finish
            </p>
          </div>

          <div className="space-y-8">
            {[
              { phase: 'Discovery & Planning', duration: '1-2 days', description: 'We learn about your business and create a detailed project plan' },
              { phase: 'Design & Content', duration: '5-7 days', description: 'Our team creates custom designs and writes compelling copy' },
              { phase: 'Development', duration: '7-10 days', description: 'We build your site with best practices and SEO optimization' },
              { phase: 'Review & Launch', duration: '2-3 days', description: 'You review the site, we make final tweaks, and go live' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-sm font-semibold text-brand-purple">{item.duration}</div>
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.phase}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does the entire process take?',
                answer: 'Most websites are completed within 14 days. Simple sites can be ready in 7-10 days, while more complex projects may take 3-6 weeks.',
              },
              {
                question: 'What if I don\'t like the design?',
                answer: 'We offer unlimited revisions until you\'re completely satisfied. Our goal is to create a website you love.',
              },
              {
                question: 'Do I need to provide content?',
                answer: 'Not necessarily! Our copywriters can create all content for you, or you can provide your own. We\'re flexible with your preferences.',
              },
              {
                question: 'What happens after my site goes live?',
                answer: 'We provide ongoing support, maintenance, and updates. You can request changes anytime through your client dashboard.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-accent-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who chose SEOJack. Start your journey today with our 14-day money-back guarantee.
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
