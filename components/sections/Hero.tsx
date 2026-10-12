'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, Zap, Sparkles, Terminal } from 'lucide-react'
import { RotatingWord } from '@/components/motion/RotatingWord'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const rotatingWords = [
    'Web Applications',
    'Mobile Apps',
    'AI Solutions',
    'Custom Software',
    'Fintech Systems',
  ]

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-20">
      {/* Background radial gradient glow (Light aesthetic, airy) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-orange-50 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(15, 23, 42, 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow Pill */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 backdrop-blur-md mb-8 hover:border-blue-300 transition-colors shadow-sm shadow-slate-200/50">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">
              Bespoke Software Engineering & AI Solutions • Pune, India
            </span>
          </div>
        </ScrollReveal>

        {/* Dynamic Main H1 */}
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.12]">
            Engineering{' '}
            <RotatingWord words={rotatingWords} />
            <br />
            that grows your business.
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Sushiv Technologies builds custom web, mobile, AI, and cloud solutions for startups, SMEs, and enterprises, with secure, scalable engineering and on-time delivery.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-4 shadow-xl shadow-blue-600/30 group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              href="/case-studies"
              variant="glass"
              size="lg"
              className="w-full sm:w-auto text-base px-7 py-4"
            >
              <span>View Our Work</span>
            </Button>
          </div>
        </ScrollReveal>

        {/* PDF Trust Strip: [X]+ Projects Delivered | [X]+ Happy Clients | [X]+ Engineers | Since 2022 */}
        <ScrollReveal delay={0.35}>
          <div className="mt-14 max-w-3xl mx-auto py-4 px-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono">100+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">50+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-mono">300+</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Expert Engineers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">2022</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">Serving Worldwide</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Badges Bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">100% Code Ownership</div>
                <div className="text-[11px] text-slate-500 font-medium">Full IP transfer upon delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Direct Engineer Access</div>
                <div className="text-[11px] text-slate-500 font-medium">Speak directly with builders</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-50 text-orange-600 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Rapid Agile Sprints</div>
                <div className="text-[11px] text-slate-500 font-medium">Bi-weekly live demonstrations</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Production Ready</div>
                <div className="text-[11px] text-slate-500 font-medium">Zero template architecture</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
