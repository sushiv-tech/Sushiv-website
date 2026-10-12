'use client'

import React from 'react'
import { ScrollHighlightText } from '@/components/motion/ScrollHighlightText'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

export function ScrollStatement() {
  const statementText =
    "We are a software development company that turns business problems into reliable digital products. From the first idea to launch and long-term support, our team stays close to your goals and builds technology that adapts as you scale."

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span>Our Engineering Philosophy</span>
          </div>
        </ScrollReveal>

        <div className="mt-4">
          <ScrollHighlightText
            text={statementText}
            className="text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.3] text-slate-800 justify-center tracking-tight"
          />
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-8 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Outcome Driven
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Zero Lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Agile Cadence
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
