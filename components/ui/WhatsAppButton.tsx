'use client'

import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappUrl = buildWhatsAppLink()

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <div
        className={`hidden md:flex items-center bg-[#0F172A] text-white text-xs font-medium px-3.5 py-2 rounded-xl border border-white/10 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        Chat with our tech team
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 95799 28503)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
      >
        {/* Radar ping ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  )
}
