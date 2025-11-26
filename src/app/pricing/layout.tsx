import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Expert Custom Websites',
  description: 'Transparent pricing for expert custom websites. No hidden fees, no long contracts. Choose from Starter ($97), Standard ($197), or Pro ($297) plans.',
  keywords: 'website pricing, custom website cost, affordable websites, web design pricing UK, website plans, monthly website subscription',
  openGraph: {
    title: 'Pricing - Expert Custom Websites | SEOJack',
    description: 'Transparent pricing for expert custom websites. No hidden fees, no long contracts. Choose from Starter ($97), Standard ($197), or Pro ($297) plans.',
    url: 'https://seojack.net/pricing',
    images: [
      {
        url: '/og-pricing.jpg',
        width: 1200,
        height: 630,
        alt: 'SEOJack Pricing - Expert Custom Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Expert Custom Websites | SEOJack',
    description: 'Transparent pricing for expert custom websites. No hidden fees, no long contracts. Choose from Starter ($97), Standard ($197), or Pro ($297) plans.',
    images: ['/og-pricing.jpg'],
  },
  alternates: {
    canonical: 'https://seojack.net/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
