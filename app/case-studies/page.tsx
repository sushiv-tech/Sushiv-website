import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Cpu,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import { caseStudiesData } from '@/lib/data/caseStudies'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Case Studies & Architectural Solutions | Sushiv Technologies',
  description:
    'Explore engineering case studies from Sushiv Technologies. Proven business impact across custom ERPs, cloud healthcare portals, high-velocity CRMs, and AI automation.',
  openGraph: {
    title: 'Case Studies & Engineering Impact | Sushiv Technologies',
    description:
      'Proven engineering results across industrial automation, healthcare, real estate, and financial workflows.',
  },
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-bg-primary text-slate-900">
      {/* Background radial ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Case Studies</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Engineering Impact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Engineering Case Studies & Architectural Solutions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real enterprise problems solved with scalable architecture, measurable business metrics, and reliable cloud deployments.
          </p>
        </div>

        {/* NDA & Client Confidentiality Notice Banner */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-blue-50/80 border border-blue-200 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600 shrink-0 border border-blue-200">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Client Confidentiality & NDA Compliance
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Due to strict non-disclosure agreements (NDAs) with our enterprise and startup partners, proprietary brand identifiers and sensitive financial figures are anonymized. Detailed technical architecture walkthroughs and live demos are available upon request during technical consultation.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 text-xs font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all"
          >
            Request Private Walkthrough
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudiesData.map((study) => (
            <article
              key={study.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl shadow-sm transition-all duration-300 group"
            >
              <div>
                {/* Header row: Industry badge & Featured Metric */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                    {study.industry}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{study.featuredMetric.value}</span>
                    <span className="font-normal text-emerald-800">({study.featuredMetric.label})</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">
                  Client Profile: {study.clientType}
                </p>

                {/* Problem Section */}
                <div className="mb-4 p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Measurable Outcomes */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Measurable Outcomes & Business Value
                  </h4>
                  <ul className="space-y-2">
                    {study.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/contact?subject=${encodeURIComponent(`Case Study Inquiry: ${study.title}`)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>Discuss similar project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-orange-50/50 border border-slate-200 text-center relative overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex p-3 rounded-2xl bg-blue-100 text-blue-600 mb-2 border border-blue-200">
              <FileCheck2 className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Looking for a solution tailored to your exact industry requirements?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Schedule a 30-minute discovery consultation with our technical architecture team in Pune. We will review your workflow bottlenecks, architecture blueprint, and provide an actionable scope roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Technical Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsAppLink("Hi Sushiv Team, I would like to review technical case studies and discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-sm transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Our Engineers</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
