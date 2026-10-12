'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'


interface PillarShowcase {
  id: string
  eyebrow: string
  title: string
  headline: string
  description: string
  subServices: string[]
  stat: { value: string; label: string }
  features: string[]
  accentColor: string
}

const pillarsShowcaseData: PillarShowcase[] = [
  {
    id: 'DEVELOPMENT',
    eyebrow: '01 / Engineering & Apps',
    title: 'DEVELOPMENT',
    headline: 'Custom software, responsive websites, and high-performance mobile apps.',
    description:
      'We engineer bespoke business software, responsive web portals, and native & cross-platform mobile apps that replace clunky off-the-shelf tools and scale effortlessly.',
    subServices: [
      'Software Development',
      'Website Designing',
      'App Development',
    ],
    stat: { value: '99.9%', label: 'Production Uptime Architecture' },
    features: ['Custom Enterprise Architecture', 'Sub-second Load Times', '100% Code Ownership'],
    accentColor: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'INTELLIGENCE',
    eyebrow: '02 / AI, Analytics & Security',
    title: 'INTELLIGENCE & SECURITY',
    headline: 'Cognitive AI models, executive data analytics, and fortified cybersecurity.',
    description:
      'From custom AI-ML apps and intelligent automated workflows to data analytics pipelines and deep cybersecurity hardening, we optimize processes and safeguard critical assets.',
    subServices: [
      'AI-ML App Development',
      'Cyber Security',
      'Data Analytics',
    ],
    stat: { value: '3.4x', label: 'Faster Processing with AI Agents' },
    features: ['Custom AI & ML Models', 'Real-Time BI Dashboards', 'VAPT & Zero-Trust Audits'],
    accentColor: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'MARKETING',
    eyebrow: '03 / Digital Reach & Search',
    title: 'MARKETING & GROWTH',
    headline: 'Compounding organic search dominance, PPC ads, and social media campaigns.',
    description:
      'Accelerate your commercial pipeline with data-driven digital marketing, technical search engine optimization (SEO), and engaging social media community strategies.',
    subServices: [
      'Digital Marketing',
      'SEO',
      'Social Media Marketing',
    ],
    stat: { value: '85%+', label: 'Organic Search Authority Growth' },
    features: ['Intent-Based Keyword Dominance', 'High-Converting Ad Campaigns', 'Active Brand Engagement'],
    accentColor: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'DESIGN',
    eyebrow: '04 / Identity & Branding',
    title: 'DESIGN & BRANDING',
    headline: 'Iconic logo design, typography systems, and distinctive corporate branding.',
    description:
      'Build immediate market credibility and customer trust with iconic vector logos, comprehensive brand style guidelines, and unified digital design collateral.',
    subServices: ['Logo Designing'],
    stat: { value: '100%', label: 'Original Trademark-Ready Assets' },
    features: ['Scalable Vector Brandmarks', 'Complete Brand Style Guides', 'Social Media Design Kits'],
    accentColor: 'from-violet-600 to-pink-600',
  },
]

export function ServicesScrollCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      pillarsShowcaseData.length - 1,
      Math.max(0, Math.floor(v * pillarsShowcaseData.length))
    )
    setActive((prev) => (prev === idx ? prev : idx))
  })

  const current = pillarsShowcaseData[active]

  return (
    <>
      {/* ── DESKTOP: GeekyAnts-Style Sticky Scroll Showcase ── */}
      <section
        ref={containerRef}
        style={{ height: `${pillarsShowcaseData.length * 100}vh` }}
        className="relative hidden lg:block border-t border-border-light"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
            <div className="flex items-center gap-12">
              {/* Vertical Progress Bar & Step Indicators */}
              <div className="flex flex-col items-center gap-4 py-8">
                {pillarsShowcaseData.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (containerRef.current) {
                        const targetY =
                          containerRef.current.offsetTop +
                          (i / pillarsShowcaseData.length) * containerRef.current.offsetHeight
                        window.scrollTo({ top: targetY, behavior: 'smooth' })
                      }
                    }}
                    className="group flex items-center gap-3 focus:outline-none"
                    aria-label={`Go to pillar ${p.title}`}
                  >
                    <span
                      className={`block transition-all duration-300 rounded-full ${
                        i === active
                          ? 'w-1.5 h-12 bg-blue-600 shadow-sm shadow-blue-500/50'
                          : 'w-1 h-6 bg-slate-200 group-hover:bg-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Dynamic Animated Panel */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="grid grid-cols-12 items-center gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    {/* Left Column: Text & Sub-services */}
                    <div className="col-span-7 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{current.eyebrow}</span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                        {current.headline}
                      </h2>

                      <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                        {current.description}
                      </p>

                      {/* Sub-services Pills */}
                      <div className="space-y-3 pt-2">
                        <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                          Included Services
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {current.subServices.map((sub) => {
                            const slug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                            return (
                              <Link
                                key={sub}
                                href={`/services/${slug}`}
                                className="px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs text-slate-700 hover:text-blue-700 transition-all font-medium"
                              >
                                {sub} →
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* CTA link */}
                      <div className="pt-4">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                        >
                          <span>Explore all {current.title} capabilities</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Visual Mockup & Floating Stat Card */}
                    <div className="col-span-5 relative">
                      {/* Main Showcase Card */}
                      <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl overflow-hidden min-h-[380px] flex flex-col justify-between">
                        <div className="space-y-4 relative z-10">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                              Pillar Matrix
                            </span>
                            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                          </div>

                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                            {current.title} Engine
                          </h3>

                          <ul className="space-y-2.5 pt-3">
                            {current.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Background subtle glowing radial */}
                        <div
                          className={`absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br ${current.accentColor} opacity-20 blur-3xl rounded-full`}
                        />

                        {/* Floating Metric Card */}
                        <div className="relative z-10 mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                          <div>
                            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                              {current.stat.value}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 font-medium">
                              {current.stat.label}
                            </div>
                          </div>
                          <Link
                            href="/contact"
                            className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 transition-colors"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE & TABLET: Clean Stacked Cards ── */}
      <section className="block lg:hidden px-4 sm:px-6 py-20 border-t border-border-light">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of Digital Engineering
            </h2>
            <p className="text-sm text-slate-600">
              Full-lifecycle software development designed to scale your operations.
            </p>
          </div>

          <div className="space-y-6">
            {pillarsShowcaseData.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {p.eyebrow}
                  </span>
                  <span className="text-sm font-bold text-slate-900 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                    {p.stat.value}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{p.headline}</h3>

                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.subServices.map((sub) => {
                    const slug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    return (
                      <Link
                        key={sub}
                        href={`/services/${slug}`}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 font-medium transition-colors"
                      >
                        {sub}
                      </Link>
                    )
                  })}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-blue-600 inline-flex items-center gap-1"
                  >
                    Explore {p.title} Pillar <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
