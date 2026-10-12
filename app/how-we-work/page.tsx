import React from 'react'
import type { Metadata } from 'next'
import {
  Compass,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  UserCheck,
  Tv,
  MessageSquare,
  Clock,
  Sparkles,
} from 'lucide-react'
import { processSteps, communicationPillars } from '@/lib/data/process'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'How We Work | Software Delivery Process | Sushiv Technologies',
  description:
    'Our transparent 5-step agile engineering lifecycle: Discover, Design, Develop, Deploy, and Support.',
}

const stepIcons: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-blue-600" />,
  Layout: <Layout className="w-6 h-6 text-indigo-600" />,
  Code2: <Code2 className="w-6 h-6 text-cyan-600" />,
  Rocket: <Rocket className="w-6 h-6 text-violet-600" />,
  LifeBuoy: <LifeBuoy className="w-6 h-6 text-amber-600" />,
}

const commIcons: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-blue-600" />,
  Tv: <Tv className="w-5 h-5 text-indigo-600" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-600" />,
  Clock: <Clock className="w-5 h-5 text-violet-600" />,
}

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agile Cadence</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              A clear process from idea <br />
              to production launch.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We follow a disciplined agile framework so you always know what is being engineered, which sprint it belongs to, and when milestones go live.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5 Steps Detailed Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 0.06}>
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between h-full shadow-sm group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                        {stepIcons[step.iconName] || <Compass className="w-6 h-6 text-blue-600" />}
                      </div>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100 transition-colors font-mono">
                        {step.step}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h2>

                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-blue-600 font-bold block">
                      Tangible Deliverables
                    </span>
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Protocol */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Project Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                How We Stay Synchronized
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                You never need to wonder about project status. Transparent communication is ingrained in every sprint.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-3 h-full">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 w-fit">
                    {commIcons[pillar.iconName] || <UserCheck className="w-5 h-5 text-blue-600" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
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
