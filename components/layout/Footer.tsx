import React from 'react'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react'
import { siteConfig } from '@/lib/data/siteConfig'
import { servicesData } from '@/lib/data/services'
import { productsData } from '@/lib/data/products'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="border-t border-border-light text-slate-600 text-sm relative z-10">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Ready to build software that grows with your business?
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Discuss your web, mobile, custom software, or AI automation project with our engineering leads in Pune.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                Schedule Free Consultation
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-sm px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Address Column (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/30">
                <span>S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SUSHIV</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Sushiv Technologies LLP designs and builds custom web platforms, mobile applications, AI systems, and cloud infrastructure with security and transparency.
            </p>

            {/* Office Coordinates */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-500">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.display}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors text-slate-600"
                >
                  {siteConfig.contact.whatsappDisplay} (Direct WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  View all 10 services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Software Systems
            </h4>
            <ul className="space-y-2 text-xs">
              {productsData.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.targetServiceUrl}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                >
                  Custom Enterprise ERPs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-blue-600 transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/engagement-models" className="hover:text-blue-600 transition-colors">
                  Engagement Models
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-blue-600 transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-blue-600 transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-600 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5">
                  Careers & Internships
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Sushiv Technologies LLP. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-slate-900 transition-colors">
              Terms of Use
            </Link>
            <span className="inline-flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
