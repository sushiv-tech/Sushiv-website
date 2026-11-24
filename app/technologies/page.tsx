import React from 'react'
import type { Metadata } from 'next'
import {
  Sparkles,
} from 'lucide-react'
import { technologiesData } from '@/lib/data/technologies'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Technologies & Tools We Work With',
  description:
    'Our engineering tech stack across Frontend, Backend, Mobile, Cloud, DevOps, Databases, AI/ML, and UI/UX design systems.',
}

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Engineering Stack</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Battle-tested tools, chosen <br />
              for your business needs.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We select frameworks based on architectural longevity, security, and performance — never on short-lived hype.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {technologiesData.map((cat) => (
            <div key={cat.category} className="space-y-6">
              <ScrollReveal>
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {cat.category}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {cat.description}
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((tech, i) => (
                  <ScrollReveal key={tech.name} delay={i * 0.04}>
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all shadow-sm group">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                      {tech.description && (
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {tech.description}
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
