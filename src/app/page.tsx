'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import LogoScroller from '@/components/home/LogoScroller';
import TemplatesSection from '@/components/home/TemplatesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TaglineSection from '@/components/home/TaglineSection';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import AllInOneSection from '@/components/home/AllInOneSection';

export default function Home() {
  return (
    <div>
      <HeroSection />

      <TaglineSection />

      <FeaturesSection />

      <LogoScroller />

      <TemplatesSection />

      <GuaranteeSection />

      <ReviewsSection />

      <AllInOneSection />
    </div>
  );
}

