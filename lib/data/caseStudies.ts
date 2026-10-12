export interface CaseStudy {
  id: string
  title: string
  clientType: string
  industry: string
  challenge: string
  solution: string
  outcomes: string[]
  technologies: string[]
  featuredMetric: {
    value: string
    label: string
  }
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'manufacturing-erp-telemetry',
    title: 'Custom ERP & Multi-Warehouse Batch Telemetry',
    clientType: 'Mid-Market Industrial Manufacturer (Pune, MH)',
    industry: 'Manufacturing & Industrial Automation',
    challenge:
      'Fragmented spreadsheet tracking across 3 factory floors led to delayed raw material reconciliation, frequent stockouts, and 12+ hours lost weekly on manual GST ledger updates.',
    solution:
      'Engineered a centralized web-based ERP with real-time barcode inventory tracking, automated minimum-order replenishment triggers, and single-click GSTR-1 compliance reporting.',
    outcomes: [
      '45% reduction in monthly inventory reconciliation turnaround',
      '99.8% invoice and GST billing accuracy across 15,000+ line items',
      'Real-time plant visibility accessible via secure mobile dashboard',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    featuredMetric: {
      value: '45%',
      label: 'Faster stock reconciliation',
    },
  },
  {
    id: 'telehealth-patient-portal',
    title: 'Multi-Branch Clinic Management & Telehealth Engine',
    clientType: 'Growing Multi-Specialty Clinic Network',
    industry: 'Healthcare & Telemedicine',
    challenge:
      'High patient appointment no-show rates (24%), disconnected medical record sheets across 4 clinic branches, and manual patient reminder calling overloading reception staff.',
    solution:
      'Architected a HIPAA-conscious, cloud-hosted patient management platform featuring automated WhatsApp appointment confirmation bots, unified EHR timeline, and WebRTC video teleconsultation.',
    outcomes: [
      '60% drop in patient appointment no-shows via automated WhatsApp reminders',
      'Instant access to consolidated patient diagnostic history across all branches',
      'Average patient wait time reduced by 22 minutes',
    ],
    technologies: ['Next.js', 'WebRTC', 'Tailwind CSS', 'Supabase', 'WhatsApp Cloud API'],
    featuredMetric: {
      value: '60%',
      label: 'Reduction in missed appointments',
    },
  },
  {
    id: 'real-estate-crm-pipeline',
    title: 'High-Velocity Real Estate CRM & Broker Pipeline Platform',
    clientType: 'Commercial & Luxury Residential Developer',
    industry: 'Real Estate & PropTech',
    challenge:
      'Inbound property enquiries from 5 portals were scattered. Average response time exceeded 4 hours, causing 30%+ lead leakage to competing developers.',
    solution:
      'Built a custom real-time lead routing CRM with round-robin broker distribution, automated property brochure dispatch via WhatsApp within 60 seconds, and comprehensive broker commission tracking.',
    outcomes: [
      'Lead response latency dropped from 4 hours to under 2 minutes',
      '35% improvement in site-visit conversion rates within first quarter',
      'Full visibility into individual agent pipelines and conversion velocity',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Twilio/WhatsApp'],
    featuredMetric: {
      value: '< 2 min',
      label: 'Average inbound lead response time',
    },
  },
  {
    id: 'ai-document-intelligence',
    title: 'Intelligent Accounts Payable & Invoice Parsing Pipeline',
    clientType: 'Logistics & Supply Chain Firm',
    industry: 'Supply Chain & FinTech',
    challenge:
      'Accounts team spent over 180 man-hours monthly manually transcribing vendor bills and delivery receipts from hundreds of diverse supplier formats.',
    solution:
      'Developed a secure OCR and LLM-assisted document parsing microservice with fuzzy vendor name matching, automated purchase order cross-verification, and ERP accounting sync.',
    outcomes: [
      '80% reduction in manual data entry hours for AP operations',
      'Vendor invoice clearance cycle compressed from 7 days down to 24 hours',
      'Zero erroneous duplicate invoice payments across audited quarters',
    ],
    technologies: ['Python', 'FastAPI', 'Next.js', 'Computer Vision/LLM', 'PostgreSQL'],
    featuredMetric: {
      value: '80%',
      label: 'Less manual transcription time',
    },
  },
]
