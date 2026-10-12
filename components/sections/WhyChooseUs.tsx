import React from 'react'
import { ShieldCheck, Code, Eye, Users2, LifeBuoy } from 'lucide-react'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

const operationalPillars = [
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: 'Built Around You',
    description:
      'Solutions designed specifically for your business processes, not off-the-shelf templates or generic plugins. Every system fits your operational reality.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: 'Secure By Design',
    description:
      'Data protection, compliance, and enterprise resilience considered from day one. Role-based access, audit trails, and encryption built-in.',
  },
  {
    icon: <Eye className="w-6 h-6 text-indigo-500" />,
    title: 'Transparent Delivery',
    description:
      'Regular sprint updates, clear milestone timelines, and live demo builds with zero surprises or hidden delays throughout the development cycle.',
  },
  {
    icon: <Users2 className="w-6 h-6 text-amber-500" />,
    title: 'Flexible Engagement',
    description:
      'Choose the model that fits your operational goals: fixed-scope projects, dedicated engineering squads, or specialized staff augmentation.',
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-violet-500" />,
    title: 'Ongoing Support',
    description:
      'We stay with you long after launch to monitor production health, release updates, improve features, and scale infrastructure as your business expands.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 border-t border-border-light relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Why Choose Sushiv
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Engineering standards you can verify.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We focus on clean code, transparent project governance, and production reliability that protects your business investment.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {operationalPillars.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.07}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full space-y-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm w-fit">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
