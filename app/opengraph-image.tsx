import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sushiv Technologies: custom software, mobile apps and AI, Pune'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 55%, #fff7ed 100%)',
          color: '#0f172a',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: '#2563eb', letterSpacing: 6 }}>
          SUSHIV TECHNOLOGIES
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 28, lineHeight: 1.1 }}>
          Custom software, mobile apps and AI, built in Pune.
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: '#475569' }}>www.sushiv.in</div>
      </div>
    ),
    size
  )
}
