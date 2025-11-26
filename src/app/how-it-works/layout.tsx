import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works - SEOJack | 4 Simple Steps to Your New Website',
  description: 'Learn how SEOJack builds your custom website in 4 simple steps. From signup to launch, we handle everything. Get started today!',
  keywords: 'how it works, website process, custom website steps, SEOJack process',
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
