'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Clock, ShieldCheck } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span>Direct Lead Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Have an idea? <br className="hidden sm:inline" />
            Let&apos;s build it.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Tell us what you&apos;re working on and get a detailed response and architecture estimate within 24 hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 group"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-base px-7 py-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Reassurance pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-500" />
              Response within 24 business hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Signed NDA before technical discussions
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
