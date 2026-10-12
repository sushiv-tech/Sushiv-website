import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/data/siteConfig'
import { servicesData } from '@/lib/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date()

  // Static core routes
  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/industries',
    '/how-we-work',
    '/engagement-models',
    '/technologies',
    '/careers',
    '/case-studies',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms-of-use',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Service detail routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
