import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import {
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'
import { siteConfig } from '@/lib/data/siteConfig'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contact Us | Book a Free Consultation in Pune',
  description:
    'Contact Sushiv Technologies in Hadapsar, Pune. Schedule a 30-minute discovery call to discuss your web, mobile, custom software, or AI automation project.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Engineering Discovery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tell us about your requirements. A senior architect from our Pune office will reply within 24 hours with architectural suggestions and milestone estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center text-slate-500 shadow-sm">
                  Loading consultation form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Right: Office Coordinates & Reassurances (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-white border border-emerald-200/90 space-y-4 shadow-xl shadow-emerald-500/5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-600 border border-emerald-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Prefer direct chat?
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">
                    Immediate technical assistance on WhatsApp
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with our engineering coordinators on WhatsApp. We can discuss immediate timelines, preliminary budgets, or review your project requirements.
              </p>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Now ({siteConfig.contact.whatsappDisplay})</span>
              </a>
            </div>

            {/* Pune Office Coordinates */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl shadow-slate-200/50">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
                Pune Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Physical Address</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {siteConfig.address.display}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Working Hours</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.contact.workingHours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Direct Email</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict Mutual Non-Disclosure Agreement (NDA)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero-obligation architectural consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
