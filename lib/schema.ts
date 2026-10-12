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
  serviceType: z.string().min(1, 'Please select what you are looking to build'),
  description: z
    .string()
    .min(10, 'Please share a brief summary of your project (at least 10 characters)'),
  timeline: z.string().optional(),
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid work or personal email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  preferredContact: z.enum(['email', 'whatsapp', 'call']),
  sourcePage: z.string().optional(),
  website: z.string().max(0, 'Spam detected').optional(), // hidden honeypot
})

export type ContactFormData = z.infer<typeof contactSchema>
