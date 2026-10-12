export interface IndustryDetail {
  slug: string
  title: string
  tagline: string
  shortDescription: string
  overview: string
  commonChallenges: string[]
  howWeHelp: string[]
  iconName: string
  needsReview?: boolean
}

export const industriesData: IndustryDetail[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare & Pharma',
    tagline: 'Digital tools that give clinicians more time with patients.',
    shortDescription: 'HIPAA-conscious patient portals, telemedicine platforms, EHR integrations, and hospital workflow automation.',
    overview:
      'Healthcare teams deal with sensitive data, strict rules, and heavy administrative load. We build secure software that simplifies clinical and operational work while protecting patient privacy.',
    commonChallenges: [
      'Paper-based and disconnected patient records',
      'Heavy manual scheduling and billing work',
      'Strict privacy and data-protection requirements',
      'Fragmented diagnostic lab report distribution',
    ],
    howWeHelp: [
      'Patient portals and appointment booking systems',
      'Telemedicine and video consultation platforms',
      'EHR/EMR integration and secure data exchange',
      'Billing, insurance claims, and reporting tools',
      'AI assistants for patient queries and admin automation',
    ],
    iconName: 'HeartPulse',
  },
  {
    slug: 'fintech',
    title: 'Financial Services & Fintech',
    tagline: 'Financial products that are fast, secure, and easy to trust.',
    shortDescription: 'High-throughput payment gateways, lending management, automated GST billing, and fraud detection engines.',
    overview:
      'Financial businesses need speed without compromising safety. We build platforms for payments, lending, and money management that are reliable under heavy transaction loads.',
    commonChallenges: [
      'High security and regulatory compliance expectations',
      'Fraud risk and manual daily reconciliation',
      'Complex integrations with banks, NPCI, and payment networks',
      'Audit readiness and data segregation mandates',
    ],
    howWeHelp: [
      'Payment, payout, UPI, and digital wallet platforms',
      'Loan origination, underwriting, and management systems',
      'Automated GST billing, e-invoicing, and accounting sync',
      'Fraud detection and transaction monitoring algorithms',
      'Real-time analytics dashboards for finance teams',
    ],
    iconName: 'Coins',
  },
  {
    slug: 'e-commerce',
    title: 'Retail, CPG & E-commerce',
    tagline: 'Online stores that convert visitors into loyal customers.',
    shortDescription: 'Scalable multi-vendor platforms, high-speed headless storefronts, and omnichannel inventory synchronizers.',
    overview:
      'Shoppers expect fast pages, easy checkout, and relevant recommendations. We build and improve online stores and marketplaces that handle growth and peak-season traffic.',
    commonChallenges: [
      'Cart abandonment and slow mobile page speed',
      'Inventory mismatches across channels and warehouses',
      'Difficulty personalizing the shopping experience',
      'Logistics tracking and return management complexity',
    ],
    howWeHelp: [
      'Custom online stores and multi-vendor marketplaces',
      'Native and hybrid mobile shopping applications',
      'Inventory, order, and multi-carrier shipping integrations',
      'AI-powered product recommendations and search',
      'Smooth, secure 1-click checkout and payment options',
    ],
    iconName: 'ShoppingBag',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Property Tech',
    tagline: 'Property technology that helps agents and buyers move faster.',
    shortDescription: 'Property listing search engines, broker CRM pipelines, virtual tours, and tenant management portals.',
    overview:
      'Real estate businesses run on leads, listings, and timely follow-up. We build platforms that keep every property, client, and deal organized in one place.',
    commonChallenges: [
      'Leads lost in scattered spreadsheets and chat apps',
      'Manual listing updates across multiple portals',
      'Limited visibility into broker and sales pipelines',
      'Tedious lease agreement tracking and payment reconciliation',
    ],
    howWeHelp: [
      'Property listing portals with advanced faceted search',
      'CRM and automated lead-distribution pipelines',
      'Agent, broker, and channel partner mobile dashboards',
      'Interactive floor plans, virtual tours, and visit scheduling',
      'Rental, tenant KYC, and automated maintenance fee collections',
    ],
    iconName: 'Building',
  },
  {
    slug: 'education',
    title: 'Education & EdTech',
    tagline: 'Learning platforms that keep students engaged and progressing.',
    shortDescription: 'Interactive Learning Management Systems (LMS), live classroom streaming, online exam portals, and school ERPs.',
    overview:
      'Education providers need flexible platforms that work for students, teachers, and administrators alike. We build modern learning systems that make teaching and tracking progress simple.',
    commonChallenges: [
      'Outdated, clunky, or disconnected learning tools',
      'Difficulty assessing genuine student comprehension remotely',
      'Scaling online video courses to thousands of concurrent learners',
      'Manual fee collections and parent-teacher communications',
    ],
    howWeHelp: [
      'Custom Learning Management Systems (LMS) and student portals',
      'Live class streaming and interactive video course platforms',
      'Automated online assessments, timed quizzes, and proctoring',
      'Student, parent, and faculty mobile applications',
      'Analytics dashboards on attendance, engagement, and scores',
    ],
    iconName: 'GraduationCap',
  },
  {
    slug: 'logistics',
    title: 'Logistics, Fleet & Supply Chain',
    tagline: 'Real-time visibility across every step of the supply chain.',
    shortDescription: 'GPS fleet tracking, automated route dispatching, warehouse management, and digital proof-of-delivery.',
    overview:
      'Logistics runs on timing and coordination. We build software that connects dispatchers, drivers, warehouses, and customers so that every shipment stays visible and on schedule.',
    commonChallenges: [
      'Limited real-time tracking of vehicles and consignments',
      'Manual dispatch coordination, paper receipts, and delayed billing',
      'Inefficient routing that wastes fuel and driver hours',
      'Lack of automated customer ETAs and status alerts',
    ],
    howWeHelp: [
      'Fleet and shipment tracking with interactive live maps',
      'Dynamic route optimization and dispatch automation tools',
      'Warehouse inventory, bin allocation, and barcode scanning',
      'Driver mobile apps with digital signature / photo proof of delivery',
      'Automated customer SMS/WhatsApp tracking alerts and analytics',
    ],
    iconName: 'Truck',
  },
  {
    slug: 'travel-and-tourism',
    title: 'Travel & Hospitality',
    tagline: 'Seamless booking experiences from search to check-in.',
    shortDescription: 'Flight/hotel booking engines, itinerary builders, concierge apps, and tour operator systems.',
    overview:
      'Travelers want to compare, book, and manage trips in a few taps. We build travel platforms that connect inventory, payments, and customer communication in one smooth experience.',
    commonChallenges: [
      'Fragmented supplier APIs (GDS, hotel aggregators) and slow response times',
      'Complex dynamic pricing, promo codes, and multi-currency billing',
      'High cancellation and rescheduling overhead on customer support',
      'Lack of personalized trip recommendations and itinerary sharing',
    ],
    howWeHelp: [
      'High-speed flight, hotel, and holiday package booking engines',
      'Dynamic packaging and multi-city itinerary planners',
      'Direct WhatsApp and SMS booking confirmations and boarding alerts',
      'Hotel property management and guest concierge mobile web apps',
      'B2B agent portals with credit limit and markup management',
    ],
    iconName: 'Plane',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial Automation',
    tagline: 'Streamline shop-floor execution and industrial resource planning.',
    shortDescription: 'Plant ERP, bill of materials tracking, machine maintenance logging, and supply chain visibility.',
    overview:
      'Modern manufacturers require synchronized operations from raw material procurement to final dispatch. We engineer tailored industrial software that eliminates downtime and optimizes shop-floor productivity.',
    commonChallenges: [
      'Disconnected machine telemetry and manual shift handovers',
      'Unscheduled machinery downtime and costly maintenance delays',
      'Inaccurate Bill of Materials (BOM) costing and inventory waste',
      'Paper-based quality control audits prone to human error',
    ],
    howWeHelp: [
      'Shop-floor execution systems and shift production monitoring',
      'Automated Bill of Materials (BOM) and batch cost tracking',
      'Preventive machine maintenance scheduling and breakdown logging',
      'Raw material inventory tracking with supplier performance metrics',
      'Quality control inspection workflows with digital checklist validation',
    ],
    iconName: 'Factory',
    needsReview: true,
  },
  {
    slug: 'it-services-and-consulting',
    title: 'IT Services & Consulting',
    tagline: 'Strategic engineering capacity to accelerate digital initiatives.',
    shortDescription: 'Dedicated software engineering teams, legacy system modernization, and enterprise architecture advisory.',
    overview:
      'Technology leaders trust Sushiv to supplement their in-house engineering capabilities. We provide dedicated development squads and senior consulting to build, scale, and modernize mission-critical systems.',
    commonChallenges: [
      'Severe shortage of skilled senior developers and cloud engineers',
      'High technical debt in legacy codebases delaying new feature delivery',
      'Difficulty maintaining release velocity without sacrificing software quality',
      'Unpredictable vendor costs and slow contractor onboarding',
    ],
    howWeHelp: [
      'Dedicated engineering teams and squad extensions (full-stack, mobile, AI)',
      'Legacy monolith refactoring into resilient microservices',
      'Architecture design reviews, security audits, and code health assessments',
      'Comprehensive QA automation and continuous delivery setup',
      'Rapid proof-of-concept (PoC) and prototype delivery for new ventures',
    ],
    iconName: 'Laptop',
    needsReview: true,
  },
]
