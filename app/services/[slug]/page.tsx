import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code,
  Globe,
  Smartphone,
  Cpu,
  Shield,
  BarChart,
  Megaphone,
  Search,
  Share2,
  Palette,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import { servicesData } from '@/lib/data/services'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { CTASection } from '@/components/sections/CTASection'
import { buildWhatsAppLink } from '@/lib/whatsapp'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug)
  if (!service) {
    return {
      title: 'Service Not Found | Sushiv Technologies',
    }
  }

  return {
    title: `${service.title} Services in Pune | Sushiv Technologies`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Sushiv Technologies LLP`,
      description: service.shortDescription,
      url: `https://sushiv.in/services/${service.slug}`,
      type: 'website',
    },
  }
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-7 h-7 text-blue-600" />,
  Globe: <Globe className="w-7 h-7 text-cyan-600" />,
  Smartphone: <Smartphone className="w-7 h-7 text-indigo-600" />,
  Cpu: <Cpu className="w-7 h-7 text-violet-600" />,
  Shield: <Shield className="w-7 h-7 text-emerald-600" />,
  BarChart: <BarChart className="w-7 h-7 text-amber-600" />,
  Megaphone: <Megaphone className="w-7 h-7 text-rose-600" />,
  Search: <Search className="w-7 h-7 text-blue-600" />,
  Share2: <Share2 className="w-7 h-7 text-sky-600" />,
  Palette: <Palette className="w-7 h-7 text-purple-600" />,
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Breadcrumb & Hero */}
      <section className="relative pt-12 pb-20 border-b border-slate-200 bg-slate-50/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </nav>

          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    {serviceIconMap[service.iconName] || <Code className="w-7 h-7 text-blue-600" />}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{service.pillar} PILLAR</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {service.title}
                </h1>
                <p className="mt-3 text-lg font-medium text-blue-600 max-w-2xl">
                  {service.tagline}
                </p>
                <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
                  {service.overview}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppLink(`Hi Sushiv Technologies, I'm interested in discussing ${service.title} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-semibold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer / Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Deliverables & Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              What We Deliver
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Comprehensive technical execution engineered for stability, security, and measurable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatWeOffer.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.05}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between h-full space-y-3">
                  <div>
                    <div className="flex items-center gap-2.5 text-blue-600 mb-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600">
                    <span>Full Production Delivery</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Key Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Engineering Arsenal
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Technologies & Frameworks
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Modern, audited, and production-tested toolchains for resilient deployment.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Business Impact
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Why Clients Partner With Us
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Measurable operational advantages delivered directly to your bottom line.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {service.keyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Explore More
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Other In-House Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View all 10 services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    {rel.pillar}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
