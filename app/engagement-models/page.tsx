import React from 'react'
import type { Metadata } from 'next'
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { engagementModels, universalGuarantees } from '@/lib/data/engagement'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Engagement Models & Hire Developers',
  description:
    'Choose from fixed-scope projects, dedicated development squads, staff augmentation, and time & material. Flexible terms for your budget.',
}

export default function EngagementModelsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contract Flexibility</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Work with us the way <br />
              that suits your business.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every company has different timelines, risk tolerances, and budget structures. Choose an engagement model that matches your current phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Models Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, idx) => (
              <ScrollReveal key={model.id} delay={idx * 0.05}>
                <div
                  className={`p-8 rounded-3xl border transition-all flex flex-col justify-between h-full relative ${
                    model.isPopular
                      ? 'bg-gradient-to-b from-blue-50/60 via-white to-white border-2 border-blue-600 shadow-xl shadow-blue-500/10'
                      : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {model.isPopular && (
                    <span className="absolute -top-3.5 right-8 text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3.5 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {model.title}
                      </h2>
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        {model.tagline}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        Best Suited For
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {model.bestFor}
                      </p>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        How It Operates
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {model.howItWorks}
                      </p>
                    </div>

                    <div className="pt-4 space-y-2 border-t border-slate-100">
                      {model.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Button
                      href={`/contact?service=${encodeURIComponent(model.title)}`}
                      variant={model.isPopular ? 'primary' : 'outline'}
                      size="sm"
                      className="w-full"
                    >
                      <span>Choose {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Guarantees */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Zero Compromise
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What You Receive With Every Model
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universalGuarantees.map((guar, i) => (
              <ScrollReveal key={guar.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2 h-full">
                  <h3 className="text-base font-bold text-slate-900">
                    {guar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {guar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
