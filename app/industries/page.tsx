import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartPulse,
  Coins,
  ShoppingBag,
  Building,
  GraduationCap,
  Truck,
  Plane,
  Factory,
  Laptop,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { industriesData } from '@/lib/data/industries'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Industries We Serve | Sushiv Technologies',
  description:
    'Custom software and digital transformation tailored for healthcare, fintech, e-commerce, real estate, education, logistics, travel, and manufacturing.',
}

const industryIconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-500" />,
  Coins: <Coins className="w-6 h-6 text-emerald-500" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-500" />,
  Building: <Building className="w-6 h-6 text-blue-500" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-500" />,
  Truck: <Truck className="w-6 h-6 text-indigo-500" />,
  Plane: <Plane className="w-6 h-6 text-violet-500" />,
  Factory: <Factory className="w-6 h-6 text-orange-500" />,
  Laptop: <Laptop className="w-6 h-6 text-teal-500" />,
}

export default function IndustriesOverviewPage() {
  return (
    <div className="min-h-screen bg-bg-surface">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-border-light overflow-hidden bg-bg-muted">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Domain Engineering</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Technology shaped around <br />
              your industry reality.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every vertical operates under distinct regulations, workflows, and user expectations. We understand your sector&apos;s challenges before writing a single line of code.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 9 Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, idx) => (
              <ScrollReveal key={ind.slug} delay={idx * 0.05}>
                <Link
                  href="/contact"
                  className="group p-8 rounded-2xl bg-bg-secondary hover:bg-slate-50 border border-border-light hover:border-blue-500/40 transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                        {industryIconMap[ind.iconName] || (
                          <Building className="w-6 h-6 text-blue-500" />
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {ind.title}
                    </h2>

                    <p className="text-xs text-blue-600 font-semibold">
                      {ind.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {ind.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Inquire about {ind.title}</span>
                    <span>→</span>
                  </div>
                </Link>
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
