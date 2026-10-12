import React from 'react'
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
} from 'lucide-react'
import { industriesData } from '@/lib/data/industries'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

const industryIconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-5 h-5 text-rose-400" />,
  Coins: <Coins className="w-5 h-5 text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-amber-400" />,
  Building: <Building className="w-5 h-5 text-blue-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-cyan-400" />,
  Truck: <Truck className="w-5 h-5 text-indigo-400" />,
  Plane: <Plane className="w-5 h-5 text-violet-400" />,
  Factory: <Factory className="w-5 h-5 text-orange-400" />,
  Laptop: <Laptop className="w-5 h-5 text-teal-400" />,
}

export function IndustriesGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Domain Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Technology shaped around your industry.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl">
              Every vertical has unique compliance, data privacy, and operational workflows. We architect software to match your sector&apos;s reality.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group shrink-0"
            >
              <span>Explore all 9 industries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 3x3 Grid of 9 Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 0.05}>
              <Link
                href="/industries"
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                      {industryIconMap[ind.iconName] || <Building className="w-5 h-5 text-blue-600" />}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-blue-600/90 font-medium mt-1">
                    {ind.tagline}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {ind.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span>View Solutions</span>
                  <span className="text-blue-600">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
