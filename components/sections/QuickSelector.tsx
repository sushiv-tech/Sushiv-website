'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

const projectTypes = [
  { label: 'Custom Enterprise ERP / CRM', service: 'Software Development' },
  { label: 'Corporate & e-Commerce Website', service: 'Website Designing' },
  { label: 'Mobile App (iOS & Android)', service: 'App Development' },
  { label: 'AI-ML & Automated Agents', service: 'AI-ML App Development' },
  { label: 'Cybersecurity & VAPT Audit', service: 'Cyber Security' },
  { label: 'Data Analytics & Dashboards', service: 'Data Analytics' },
  { label: 'PPC & Digital Marketing Funnel', service: 'Digital Marketing' },
  { label: 'SEO & Organic Growth', service: 'SEO' },
  { label: 'Social Media Management', service: 'Social Media Marketing' },
  { label: 'Logo Designing & Brand Identity', service: 'Logo Designing' },
]

export function QuickSelector() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Lead Matching</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What are you looking to build?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Select your project scope below to pre-fill your brief and receive an itemized architecture roadmap.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {projectTypes.map((item) => (
              <Link
                key={item.label}
                href={`/contact?service=${encodeURIComponent(item.service)}`}
                className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-blue-600 border border-slate-200 hover:border-blue-500 text-sm font-semibold text-slate-700 hover:text-white transition-all shadow-sm hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
