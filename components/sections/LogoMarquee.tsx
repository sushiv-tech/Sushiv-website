import React from 'react'

export function LogoMarquee() {
  const techLogos = [
    { name: 'Next.js', category: 'Framework' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'AI & Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'AWS Cloud', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Supabase', category: 'Postgres DB' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Kubernetes', category: 'Cloud' },
    { name: 'OpenAI API', category: 'AI Models' },
    { name: 'GraphQL', category: 'APIs' },
  ]

  // Duplicate list to achieve continuous seamless loop
  const duplicatedLogos = [...techLogos, ...techLogos]

  return (
    <section className="marquee relative overflow-hidden border-y border-slate-200 bg-slate-50 py-8">
      {/* Edge gradient mask */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500">
          Technologies we engineer with
        </p>
      </div>

      <div className="marquee-track flex items-center gap-10">
        {duplicatedLogos.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all shrink-0 group cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
              {tech.name}
            </span>
            <span className="text-[10px] text-slate-500 font-mono bg-slate-50 px-1.5 rounded">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
