import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews - SEOJack | Client Testimonials & Success Stories',
  description: 'Read what our clients say about SEOJack. Real testimonials from businesses who chose us for their custom websites. 5-star reviews and success stories.',
  keywords: 'SEOJack reviews, client testimonials, website reviews, customer feedback',
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
