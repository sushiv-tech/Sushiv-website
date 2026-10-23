import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

// Brand glyphs are inlined because lucide-react no longer ships brand icons.
const socialLinks = [
  {
    label: 'Facebook',
    href: siteConfig.social.facebook,
    path: 'M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
  },
  {
    label: 'X (Twitter)',
    href: siteConfig.social.x,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z',
  },
]

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
              <Image src="/logo.png" alt="Sushiv Technologies logo" width={36} height={36} className="w-9 h-9" />
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

            {/* Social Profiles */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Sushiv Technologies on ${s.label}`}
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
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
