import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ScrollStatement } from '@/components/sections/ScrollStatement'
import { ServicesScrollCarousel } from '@/components/sections/ServicesScrollCarousel'
import { QuickSelector } from '@/components/sections/QuickSelector'
import { IndustriesGrid } from '@/components/sections/IndustriesGrid'
import { HowWeWorkPreview } from '@/components/sections/HowWeWorkPreview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FAQPreview } from '@/components/sections/FAQPreview'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero with RotatingWord and primary CTAs */}
      <Hero />

      {/* 2. Marquee banner of technologies immediately below hero */}
      <LogoMarquee />

      {/* 3. Signature GeekyAnts-style scroll highlight text */}
      <ScrollStatement />

      {/* 4. Signature sticky scroll carousel (4 pillars, 12 services) */}
      <ServicesScrollCarousel />

      {/* 5. Interactive chips ("What are you looking to build?") */}
      <QuickSelector />

      {/* 6. Industries grid (9 verticals) */}
      <IndustriesGrid />

      {/* 7. How We Work 6-step engineering methodology */}
      <HowWeWorkPreview />

      {/* 8. Why Sushiv (verifiable operational guarantees) */}
      <WhyChooseUs />

      {/* 9. Top FAQs accordion */}
      <FAQPreview />

      {/* 10. Final Conversion CTA & Reassurance */}
      <CTASection />
    </div>
  )
}
