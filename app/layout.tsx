import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { siteConfig } from '@/lib/data/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Sushiv Technologies | Custom Software, Mobile App & AI Development',
    template: '%s | Sushiv Technologies',
  },
  description:
    'Sushiv Technologies delivers custom software, mobile apps, AI & automation, and cloud solutions for startups and enterprises. Pune, India.',
  alternates: { canonical: './' },
  keywords: [
    'custom software development',
    'software company pune',
    'mobile app development',
    'AI development company',
    'cloud and devops',
    'fintech solutions',
    'Sushiv Technologies',
    'Hadapsar Pune IT company',
  ],
  authors: [{ name: 'Sushiv Technologies LLP' }],
  creator: 'Sushiv Technologies LLP',
  publisher: 'Sushiv Technologies LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: './',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured JSON-LD schema for LocalBusiness / Organization in Hadapsar, Pune
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sushiv Technologies LLP',
    image: `${siteConfig.url}/opengraph-image`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.social),
    telephone: '+919579928503',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5089,
      longitude: 73.926,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-on-light font-sans antialiased selection:bg-blue-600 selection:text-slate-900">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
