import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/data/siteConfig'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sushiv Technologies',
  description: 'Privacy Policy for Sushiv Technologies LLP. Learn how we handle client data and visitor privacy.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-900/10 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • Sushiv Technologies LLP, Pune
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              Sushiv Technologies LLP (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), headquartered in Pune, India, values your privacy. This Privacy Policy details how we collect, store, utilize, and protect personal and project data gathered through our website (<Link href="/" className="text-blue-600 hover:underline font-semibold">sushiv.in</Link>) and client communications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p>We may collect information you voluntarily provide through our contact and consultation forms, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Name and contact details (email address, telephone number, WhatsApp handle).</li>
              <li>Company or startup name and location.</li>
              <li>Project briefs, technical requirements, and estimated timelines.</li>
              <li>Candidate resumes and portfolios submitted for internships and career applications.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Data</h2>
            <p>We use the data collected strictly for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-500">
              <li>To evaluate project scopes, respond to technical enquiries, and prepare proposals.</li>
              <li>To execute Non-Disclosure Agreements (NDAs) and engineering contracts.</li>
              <li>To process employment and internship applications.</li>
              <li>We never sell, trade, or rent client contact information to third-party data brokers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards designed to protect personal and business information against unauthorized access, destruction, or disclosure. All web traffic is encrypted via TLS 1.3 / HTTPS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy or your personal data, you may reach us at:
            </p>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1.5 shadow-sm">
              <div className="font-bold text-slate-900 text-sm">Sushiv Technologies LLP</div>
              <div>{siteConfig.address.display}</div>
              <div>WhatsApp: {siteConfig.contact.whatsappDisplay}</div>
              <div>Email: {siteConfig.contact.email}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
