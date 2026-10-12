'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function RotatingWord({
  words,
  interval = 2600,
}: {
  words: string[]
  interval?: number
}) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className="relative inline-block overflow-hidden align-bottom min-w-[200px] text-left sm:min-w-[260px] md:min-w-[340px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent pb-1"
          initial={{ y: '70%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-70%', opacity: 0 }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
