import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  MapPin,
  Clock,
} from 'lucide-react'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Careers & Tech Internships in Pune',
  description:
    'Join Sushiv Technologies in Hadapsar, Pune. Explore full-time software engineering roles and hands-on industry internships in Web, Mobile, AI, and Cybersecurity.',
}

const internshipTracks = [
  { title: 'Software Development Internship', tech: 'Node.js, Python, PostgreSQL, REST APIs', duration: '3 to 6 Months' },
  { title: 'Frontend & Web Development Internship', tech: 'React, Next.js, Tailwind CSS, TypeScript', duration: '3 to 6 Months' },
  { title: 'Mobile App Development Internship', tech: 'Flutter, React Native, Firebase', duration: '3 to 6 Months' },
  { title: 'Artificial Intelligence & ML Internship', tech: 'Python, LLMs, RAG, LangChain, PyTorch', duration: '3 to 6 Months' },
  { title: 'Cybersecurity & Threat Audit Internship', tech: 'Network hardening, OWASP, Penetration testing', duration: '3 to 6 Months' },
  { title: 'Data Analytics & BI Internship', tech: 'SQL, Python, Power BI, Data pipelines', duration: '3 to 6 Months' },
  { title: 'Digital Marketing & SEO Internship', tech: 'Technical SEO, Content clustering, Meta Ads', duration: '3 to 6 Months' },
]

const fullTimeRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    type: 'Full-time',
    experience: '3+ Years',
    location: 'Pune (Hadapsar)',
    description: 'Lead architecture of scalable Next.js and Node.js microservices for international enterprise clients.',
  },
  {
    title: 'AI / LLM Application Engineer',
    department: 'Intelligence',
    type: 'Full-time',
    experience: '2+ Years',
    location: 'Pune (Hadapsar)',
    description: 'Design and deploy production RAG pipelines, autonomous agents, and document classification models.',
  },
  {
    title: 'Mobile App Developer (React Native / Flutter)',
    department: 'Mobile',
    type: 'Full-time',
    experience: '2+ Years',
    location: 'Pune (Hadapsar)',
    description: 'Build polished, cross-platform Android and iOS applications with seamless offline sync and payment integrations.',
  },
  {
    title: 'Product UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    experience: '2+ Years',
    location: 'Pune (Hadapsar)',
    description: 'Create interactive Figma prototypes, design tokens, and user journeys for web platforms and enterprise tools.',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Banner */}
      <section className="relative py-20 lg:py-24 border-b border-slate-200 overflow-hidden bg-slate-50/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>We Are Hiring • Pune, India</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Build your engineering career <br />
              at Sushiv Technologies.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Work on real-world enterprise applications, master modern cloud and AI stacks, and collaborate directly with senior mentors in our Pune office.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <ScrollReveal>
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Industry Training & Mentorship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Tech Internship Programs
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Hands-on internships for ambitious students and fresh graduates. Work directly on production codebases under senior developer guidance.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipTracks.map((intern, idx) => (
              <ScrollReveal key={intern.title} delay={idx * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between h-full shadow-sm group">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200">
                      {intern.duration}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                      {intern.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 font-mono leading-relaxed">
                      {intern.tech}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={`/contact?service=Internship+Application&role=${encodeURIComponent(intern.title)}`}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group/link"
                    >
                      <span>Apply for this track</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Time Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Open Positions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Full-Time Engineering Roles
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Join our engineering squad in Hadapsar, Pune.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {fullTimeRoles.map((role, idx) => (
              <ScrollReveal key={role.title} delay={idx * 0.06}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        {role.department}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        {role.experience}
                      </span>
                    </div>
                  </div>

                  <Button
                    href={`/contact?service=Careers+Application&role=${encodeURIComponent(role.title)}`}
                    variant="primary"
                    size="sm"
                    className="shrink-0"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Transparent Hiring
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Our 4-Step Selection Process
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {[
              { step: '01', title: 'Application Review', desc: 'We review your GitHub, portfolio, and prior projects within 48 hours.' },
              { step: '02', title: 'Introductory Screen', desc: 'A quick 20-minute conversation regarding your goals and our tech stack.' },
              { step: '03', title: 'Technical Deep-Dive', desc: 'Practical problem solving or architecture discussion with an engineering lead.' },
              { step: '04', title: 'Formal Offer', desc: 'Transparent compensation offer, onboarding timeline, and team introduction.' },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.05}>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
                  <span className="text-2xl font-black text-blue-600 font-mono">
                    {p.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
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
