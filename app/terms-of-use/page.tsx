import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use and service agreements for Sushiv Technologies LLP.',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-bg-primary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-900/10 pb-8 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Terms & Agreements
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Terms of Use
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Effective Date: October 2026 • Sushiv Technologies LLP, Pune
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website located at <Link href="/" className="text-blue-600 hover:underline font-semibold">sushiv.in</Link>, you agree to be bound by these Terms of Use and all applicable laws and regulations in Pune, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property Rights</h2>
            <p>
              The content, graphics, and design on this website are protected by copyright and intellectual property laws. For commercial software engineering projects undertaken with Sushiv Technologies, code ownership and intellectual property terms are defined and transferred in accordance with specific Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Disclaimers & Limitation of Liability</h2>
            <p>
              The materials on this website are provided for informational and consultation purposes. While we strive to ensure all information is accurate and up to date, Sushiv Technologies makes no warranties, expressed or implied, regarding website uptime or error-free access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Governing Law</h2>
            <p>
              Any claims or legal disputes arising out of or relating to Sushiv Technologies shall be governed by the laws of India, under the exclusive jurisdiction of the competent courts in Pune, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
