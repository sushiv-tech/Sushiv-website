import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Activity,
  Building2,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Network,
  Receipt,
  ShoppingBag,
  Shirt,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { productsData } from '@/lib/data/products'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Software Systems: ERP, CRM, GST Billing & More',
  description:
    'ERP, CRM, GST billing, e-commerce, school, hospital, franchise, exam and garment management systems from Sushiv Technologies, Pune. See what each one does and who it is for.',
}

const productIcons: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-blue-600" />,
  Users: <Users className="w-6 h-6 text-indigo-600" />,
  Receipt: <Receipt className="w-6 h-6 text-emerald-600" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-600" />,
  Network: <Network className="w-6 h-6 text-purple-600" />,
  FileCheck: <FileCheck className="w-6 h-6 text-teal-600" />,
  Activity: <Activity className="w-6 h-6 text-rose-600" />,
  Shirt: <Shirt className="w-6 h-6 text-pink-600" />,
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Software Systems</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Business software, <br />
              built around your workflow.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              ERP, CRM, billing and more. Start from a proven system and we shape it to the way your
              business runs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productsData.map((product, idx) => (
              <ScrollReveal key={product.id} delay={(idx % 2) * 0.06}>
                <article
                  id={product.id}
                  className="h-full p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all flex flex-col scroll-mt-28"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                      {productIcons[product.iconName] || <Zap className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {product.category}
                      </span>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${
                          product.status === 'Ready Solution'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <h2 className="mt-5 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{product.overview}</p>

                  <ul className="mt-5 mb-6 space-y-2">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-slate-100 mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-slate-500 leading-snug">
                      <span className="font-semibold text-slate-700">Best for: </span>
                      {product.idealFor}
                    </p>
                    <Link
                      href={product.targetServiceUrl}
                      className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5 group shrink-0"
                    >
                      <span>Discuss this system</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-slate-500 max-w-2xl mx-auto">
            &ldquo;Ready Solution&rdquo; systems can be configured and deployed quickly.
            &ldquo;Custom Deployable&rdquo; systems are tailored to your workflows before they go
            live.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
