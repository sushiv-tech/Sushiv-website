import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { processSteps } from '@/lib/data/process'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

export function HowWeWorkPreview() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Delivery Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              A clear process from idea to production launch.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We follow an agile engineering cadence so you always know what is being built, which sprint it belongs to, and what comes next.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 0.06}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between h-full relative group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-100 transition-colors font-mono">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-200">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
            >
              <span>Explore our full communication protocol & agile ceremonies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
