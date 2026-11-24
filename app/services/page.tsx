import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  Cpu,
  TrendingUp,
  Palette,
  Sparkles,
} from 'lucide-react'
import { servicesData, servicePillars } from '@/lib/data/services'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services & Solutions',
  description:
    'End-to-end IT services: custom software development, website designing, mobile apps, AI-ML solutions, cyber security, data analytics, SEO, and digital marketing.',
}

const pillarIconMap: Record<string, React.ReactNode> = {
  DEVELOPMENT: <Code2 className="w-5 h-5 text-blue-600" />,
  INTELLIGENCE: <Cpu className="w-5 h-5 text-indigo-600" />,
  MARKETING: <TrendingUp className="w-5 h-5 text-emerald-600" />,
  DESIGN: <Palette className="w-5 h-5 text-violet-600" />,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-surface">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 border-b border-border-light overflow-hidden bg-bg-muted">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              End-to-end digital services, <br />
              under one roof.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From the initial architecture blueprint to cloud scaling and post-launch maintenance, Sushiv Technologies covers the entire journey of building reliable digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicePillars.map((pillar) => {
            const pillarServices = servicesData.filter((s) => s.pillar === pillar.id)

            return (
              <div key={pillar.id} className="space-y-8">
                {/* Pillar Header */}
                <ScrollReveal>
                  <div className="flex items-center gap-3 border-b border-border-light pb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100">
                      {pillarIconMap[pillar.id]}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {pillar.name} Pillar
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pillarServices.map((service, idx) => (
                    <ScrollReveal key={service.slug} delay={idx * 0.06}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group p-8 rounded-2xl bg-bg-secondary hover:bg-slate-50 border border-border-light hover:border-blue-500/40 transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-md"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-blue-600 border border-slate-200">
                              {pillar.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>

                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-xs text-blue-600 font-medium">
                            {service.tagline}
                          </p>

                          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                            {service.shortDescription}
                          </p>

                          {/* Tech pills */}
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {service.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                          <span>Explore capabilities & deliverables</span>
                          <span>→</span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
