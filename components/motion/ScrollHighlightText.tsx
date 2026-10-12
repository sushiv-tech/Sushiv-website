'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

export function ScrollHighlightText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  })
  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.35, 1])
  const color = useTransform(progress, range, ['#64748b', '#0f172a'])

  return (
    <span className="mr-[0.28em] my-[0.05em] inline-block">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  )
}
