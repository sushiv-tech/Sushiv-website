import React from 'react'
import type { Metadata } from 'next'
import {
  HelpCircle,
  Sparkles,
} from 'lucide-react'
import { faqData } from '@/lib/data/faq'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Sushiv Technologies',
  description:
    'Answers to common questions about working with Sushiv Technologies: pricing, code ownership, NDA, sprint communication, and post-launch maintenance.',
}

export default function FAQPage() {
  // FAQPage JSON-LD Schema for Google Rich Results
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clarity & Transparency</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Frequently asked questions.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about partnering with Sushiv Technologies: timelines, IP ownership, pricing, and communication.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqData.map((faq, idx) => (
            <ScrollReveal key={faq.id} delay={idx * 0.04}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all space-y-3 shadow-sm group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {faq.category}
                  </span>
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
