import { z } from 'zod'

export const SERVICE_OPTIONS = [
  'Software Development',
  'Website Designing',
  'App Development',
  'AI-ML App Development',
  'Cyber Security',
  'Data Analytics',
  'Digital Marketing',
  'SEO',
  'Social Media Marketing',
  'Logo Designing',
  'Not sure yet',
] as const

export const TIMELINE_OPTIONS = [
  'Immediate (< 1 month)',
  '1-3 months',
  '3-6 months',
  'Exploratory / Flexible',
] as const

export const contactSchema = z.object({
  serviceType: z.string().max(100).min(1, 'Please select what you are looking to build'),
  description: z
    .string()
    .min(10, 'Please share a brief summary of your project (at least 10 characters)')
    .max(5000, 'Please keep your summary under 5000 characters'),
  timeline: z.string().max(100).optional(),
  name: z.string().min(2, 'Please enter your name').max(120),
  email: z.string().email('Please enter a valid work or personal email').max(254),
  phone: z.string().max(40).optional(),
  company: z.string().max(160).optional(),
  preferredContact: z.enum(['email', 'whatsapp', 'call']),
  sourcePage: z.string().max(300).optional(),
  website: z.string().max(500).optional(), // hidden honeypot; handled in the route (silent success)
})

export type ContactFormData = z.infer<typeof contactSchema>
