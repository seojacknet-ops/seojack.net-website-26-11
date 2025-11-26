'use client';

export default function StructuredData() {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SEOJack",
    "url": "https://seojack.co.uk",
    "logo": "https://seojack.co.uk/wp-content/uploads/2025/09/cropped-SEOJack_UK_Logo-scaled-1.webp",
    "description": "Expert custom websites from $97/month. Professional web design and development services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "New York"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@seojack.co.uk"
    },
    "sameAs": [
      "https://twitter.com/seojack",
      "https://linkedin.com/company/seojack",
      "https://facebook.com/seojack"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Website",
        "description": "Custom 5-page website with basic SEO",
        "price": "97",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Professional Website",
        "description": "Up to 10 pages with advanced SEO and e-commerce",
        "price": "197",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Enterprise Website",
        "description": "Unlimited pages with custom integrations and dedicated support",
        "price": "297",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
