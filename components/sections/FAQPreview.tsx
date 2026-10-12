'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'
import { faqData } from '@/lib/data/faq'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

export function FAQPreview() {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  // Display top 6 FAQs on the homepage
  const displayedFaqs = faqData.slice(0, 6)

  return (
    <section className="py-24 border-t border-border-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear answers regarding pricing models, code ownership, timelines, and agile communication.
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-3.5">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            return (
              <ScrollReveal key={faq.id} delay={idx * 0.04}>
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group"
            >
              <span>Have more questions? Read all 10 FAQs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
