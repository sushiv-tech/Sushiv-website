import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import {
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ArrowRight,
  UserCheck,
} from 'lucide-react'
import { siteConfig } from '@/lib/data/siteConfig'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About Us | Software Development Team in Pune | Sushiv Technologies',
  description:
    'Learn about Sushiv Technologies LLP: our engineering philosophy, mission, values, and leadership based in Hadapsar, Pune.',
}

const valuesList = [
  {
    title: 'Client First',
    description: 'Your commercial goals and user retention dictate every technical choice, framework, and sprint priority.',
  },
  {
    title: 'Code Craftsmanship',
    description: 'Clean, modular, and thoroughly tested architectures designed to minimize technical debt and maximize uptime.',
  },
  {
    title: 'Total Transparency',
    description: 'Honest timelines, explicit scope definitions, and live sprint demos — no surprises or opaque billing.',
  },
  {
    title: 'Deep Ownership',
    description: 'We treat your product as if it were our own, proactively identifying bottlenecks before they impact production.',
  },
  {
    title: 'Continuous Innovation',
    description: 'We continuously evaluate frontier AI and cloud advancements to pass speed and efficiency gains to our clients.',
  },
]

const leadershipTeam = [
  {
    name: 'Shivam Verma',
    role: 'Founder & CEO',
    bio: 'Leads strategic growth, technology partnerships, and company vision. Passionate about empowering startups and enterprises through bespoke software architectures, AI engineering, and dependable long-term collaboration.',
    image: '/images/team/shivam-verma.jpeg',
  },
  {
    name: 'Supriya Kumari',
    role: 'Co-Founder & COO',
    bio: 'Oversees operational governance, delivery execution, and client success across global engagements. Focused on operational rigor, continuous team development, and sustainable product impact.',
    image: '/images/team/supriya-kumari.jpeg',
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Mission</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Engineering technology that <br />
              powers lasting business value.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Based in Hadapsar, Pune, Sushiv Technologies LLP is an engineering firm that transforms complex business challenges into reliable, production-grade digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Software built around the way your company actually works.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Off-the-shelf software tools rarely match real operational nuances. We founded Sushiv Technologies to provide growing startups, mid-market businesses, and enterprises with custom digital systems that fit their exact business logic.
                </p>
                <p>
                  From the initial technical discovery session to cloud deployment and ongoing maintenance, our team stays closely aligned with your key commercial objectives. We believe that great software is measured by the tangible hours it saves your operations and the revenue it unlocks for your bottom line.
                </p>
                <p>
                  With an office in Pune, Sushiv Technologies is India’s leading bespoke software development company, with a fully in-house team of 300+ expert software developers and technology professionals specializing in both Microsoft and MEAN stacks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
                Our Pune Headquarters
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{siteConfig.address.display}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>{siteConfig.contact.workingHours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Direct WhatsApp: {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="sm" className="w-full">
                  <span>Schedule an In-Person or Virtual Meeting</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Our Core Values
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesList.map((val, idx) => (
              <ScrollReveal key={val.title} delay={idx * 0.05}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-2.5 h-full">
                  <h3 className="text-lg font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Meet the Team Driving Sushiv
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Experienced practitioners committed to technical rigor, client success, and operational integrity.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipTeam.map((leader, idx) => (
              <ScrollReveal key={leader.name} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all space-y-5 flex flex-col justify-between h-full group">
                  <div>
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-slate-100 shadow-sm group-hover:shadow-md transition-all bg-slate-50">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 mt-1">
                        {leader.role}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mt-4">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      <span>Executive Leadership</span>
                    </div>
                    <span className="text-slate-400">Pune, India</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
